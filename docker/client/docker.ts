import { encodeBase64 } from 'jsr:@std/encoding@^0.224.3';
import { ConnectionClient, DockerRequest, DockerRequestOptions, DockerResponse, Query } from './connection.ts';

export interface RegistryAuthentication {
  username: string;
  password: string;
  email: string;
  serveraddress: string;
}

export class DockerClient {
  private options: Deno.ConnectOptions | Deno.UnixConnectOptions;
  private authenticationConfig: RegistryAuthentication | null;
  private client: () => Promise<ConnectionClient>;

  constructor(options: string | Deno.ConnectOptions, authenticationConfig: RegistryAuthentication | null = null) {
    if (typeof options === 'string') {
      this.options = {
        transport: 'unix',
        path: options,
      };
    } else {
      this.options = options;
    }
    this.authenticationConfig = authenticationConfig;
    this.client = this.createHttpClient;
  }

  private async createHttpClient(): Promise<ConnectionClient> {
    let conn: Deno.Conn;
    if ('path' in this.options) {
      conn = await Deno.connect(this.options as Deno.UnixConnectOptions);
    } else {
      conn = await Deno.connect(this.options as Deno.ConnectOptions);
    }
    return new ConnectionClient(conn);
  }

  private async makeRequest(options: DockerRequestOptions): Promise<DockerResponse> {
    try {
      const client = await this.client();
      const headers = new Map(
        Object.entries({
          Host: 'docker',
          Accept: 'application/json',
          ...options.headers,
        }),
      );

      if (this.authenticationConfig) {
        headers.set('X-Registry-Auth', encodeBase64(JSON.stringify(this.authenticationConfig)));
      }

      const query: Query[] = options.query
        ? Object.entries(options.query)
            .filter(([_, value]) => Boolean(value))
            .map(([name, value]) => ({
              name,
              value: value as string,
            }))
        : [];

      const request: DockerRequest = {
        method: options.method,
        path: options.url,
        query,
        headers,
        body: JSON.stringify(options.body),
      };

      const response = await client.sendRequest(request);

      if (options.errors && response.status && options.errors[response.status]) {
        throw new Error(options.errors[response.status]);
      }

      //FIXME: remove cast
      response.body = (await client.parseResponseBody(response)) as unknown as string;

      return response;
    } catch (error) {
      console.error(`Request failed: ${error.message}`);
      throw error;
    }
  }

  request<T>(options: DockerRequestOptions): Promise<DockerResponse<T>> {
    return this.makeRequest(options) as Promise<DockerResponse<T>>;
  }
}
