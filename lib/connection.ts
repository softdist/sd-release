export type DockerRequestOptions = {
    readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
    readonly url: string;
    readonly path?: Record<string, unknown>;
    readonly cookies?: Record<string, unknown>;
    readonly headers?: Record<string, unknown>;
    readonly query?: Record<string, unknown>;
    readonly formData?: Record<string, unknown>;
    readonly body?: unknown;
    readonly mediaType?: string;
    readonly responseHeader?: string;
    readonly errors?: Record<number | string, string>;
  };

  export interface Query {
    name: string;
    value: string;
  }

  export interface DockerRequest {
    method: string;
    path: string;
    query: Query[];
    headers: Map<string, string>;
    body: string;
  }

  export interface DockerResponse<T = string> {
    status?: number;
    headers?: Map<string, string>;
    body?: T;
  }

  export class ConnectionClient {
    private buffer: Uint8Array;
    private stringResponse: string;
    private connection: Deno.Conn;

    constructor(conn: Deno.Conn) {
      this.connection = conn;
      this.buffer = new Uint8Array(1);
      this.stringResponse = '';
    }

    public async readLine(): Promise<string> {
      const decoder = new TextDecoder();
      this.stringResponse = '';
      this.buffer = new Uint8Array(1);

      while (true) {
        if (this.stringResponse.includes('\n')) {
          return this.stringResponse.trim();
        }
        const bytesRead = await this.connection.read(this.buffer);
        if (bytesRead === null) {
          throw new Error('Connection closed unexpectedly while reading line');
        }
        this.stringResponse += decoder.decode(this.buffer);
      }
    }

    public async readStatusLine(response: DockerResponse): Promise<void> {
      const line = await this.readLine();
      const parts = line.split(' ');
      if (parts.length < 3) {
        throw new Error(`Invalid status line: ${line}`);
      }
      response.status = parseInt(parts[1], 10);
    }

    public async readHeaders(response: DockerResponse): Promise<void> {
      const headers = new Map<string, string>();

      while (true) {
        const line = await this.readLine();
        if (line === '') break;

        const [name, value] = line.split(':');
        if (!name || !value) {
          throw new Error(`Invalid header line: ${line}`);
        }
        headers.set(name.trim(), value.trim());
      }

      response.headers = headers;
    }

    public async readBody(response: DockerResponse): Promise<void> {
      let body = '';
      const headers = response.headers;

      const isChunked = headers?.get('Transfer-Encoding') === 'chunked';

      if (isChunked) {
        body = await this.readChunkedBody();
      } else {
        const contentLengthHeader = headers?.get('Content-Length') ?? '';
        const contentLength = Number.parseInt(contentLengthHeader, 10);

        body = await this.readFixedLengthBody(contentLength);
      }

      response.body = body;
    }

    public async parseResponseBody(response: DockerResponse): Promise<unknown> {
      if (response.status !== 204) {
        try {
          const contentType = response.headers?.get('Content-Type');

          if (contentType) {
            const _binaryTypes = [
              'application/octet-stream',
              'application/pdf',
              'application/zip',
              'audio/',
              'image/',
              'video/',
            ];
            if (contentType.includes('application/json') || contentType.includes('+json')) {
              const body = response.body ?? '';

              return await JSON.parse(body);
            // } else if (binaryTypes.some(type => contentType.includes(type))) {
            // return await response.blob();
            // } else if (contentType.includes('multipart/form-data')) {
            // return await response.formData();
            // } else if (contentType.includes('text/html')) {
            // return await response.text();
            } else {
              console.warn(`Unsupported content type: ${contentType}`);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
      return undefined;
    }

    private async readChunkedBody(): Promise<string> {
      const decoder = new TextDecoder();
      let body = '';

      while (true) {
        const chunkSizeHex = await this.readLine();
        const chunkSize = parseInt(chunkSizeHex, 16);
        if (isNaN(chunkSize)) {
          throw new Error(`Invalid chunk size: ${chunkSizeHex}`);
        }
        if (chunkSize === 0) break;

        const chunk = new Uint8Array(chunkSize);
        const bytesRead = await this.connection.read(chunk);
        if (bytesRead === null) {
          throw new Error('Connection closed unexpectedly while reading chunk');
        }
        body += decoder.decode(chunk);
        await this.readLine(); // Consume the trailing \r\n
      }

      return body;
    }

    private async readFixedLengthBody(contentLength: number): Promise<string> {
      const decoder = new TextDecoder();
      const buffer = new Uint8Array(contentLength);
      const bytesRead = await this.connection.read(buffer);
      if (bytesRead === null || bytesRead < contentLength) {
        throw new Error('Connection closed unexpectedly while reading body');
      }
      return decoder.decode(buffer);
    }

    private buildHeaders(headers: Map<string, string>): string {
      const headerList: string[] = [];

      for (const [key, value] of headers.entries()) {
        headerList.push(`${key}: ${value}`);
      }

      return headerList.join('\r\n');
    }

    async sendRequest(request: DockerRequest): Promise<DockerResponse> {
      const startLine: string[] = [];

      // this is a hack to get the url object to work
      const _LOCALHOST = 'http://127.0.0.1';

      const pathURL = new URL(request.path, _LOCALHOST);
      const searchParams = new URLSearchParams();
      for (const elements of request.query) {
        searchParams.append(elements.name, elements.value);
      }

      pathURL.search = searchParams.toString();

      startLine.push(request.method);
      startLine.push(`${pathURL.pathname}${pathURL.search}`);
      startLine.push(`HTTP/1.1`);

      if (request.body?.length > 0) {
        request.headers.set('Content-Length', request.body.length.toString());
        request.headers.set('Content-Type', 'application/json');
      }

      const requestHeaders = this.buildHeaders(request.headers);

      const requestBuild: string[] = [];
      requestBuild.push(startLine.join(' '));
      requestBuild.push('\r\n');
      requestBuild.push(requestHeaders);
      requestBuild.push('\r\n');
      requestBuild.push('\r\n');

      if (request.body) {
        requestBuild.push(request.body);
      }

      await this.send(requestBuild.join(''));
      const response: DockerResponse = {};
      await this.readStatusLine(response);
      await this.readHeaders(response);
      await this.readBody(response);
      this.connection.close();

      return response;
    }

    private send(data: string): Promise<number> {
      const encoder = new TextEncoder();

      //console.log(data.trim());

      return this.connection.write(encoder.encode(data));
    }
  }
