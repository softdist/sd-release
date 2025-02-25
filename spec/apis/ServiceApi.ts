// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrorResponse } from '../models/ErrorResponse';
import { Service } from '../models/Service';
import { ServiceCreateRequest } from '../models/ServiceCreateRequest';
import { ServiceCreateResponse } from '../models/ServiceCreateResponse';
import { ServiceUpdateRequest } from '../models/ServiceUpdateRequest';
import { ServiceUpdateResponse } from '../models/ServiceUpdateResponse';

/**
 * no description
 */
export class ServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a service
     * @param body 
     * @param xRegistryAuth A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public async serviceCreate(body: ServiceCreateRequest, xRegistryAuth?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ServiceApi", "serviceCreate", "body");
        }



        // Path Params
        const localVarPath = '/services/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Registry-Auth", ObjectSerializer.serialize(xRegistryAuth, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ServiceCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a service
     * @param id ID or name of service.
     */
    public async serviceDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ServiceApi", "serviceDelete", "id");
        }


        // Path Params
        const localVarPath = '/services/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Inspect a service
     * @param id ID or name of service.
     * @param insertDefaults Fill empty fields with default values.
     */
    public async serviceInspect(id: string, insertDefaults?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ServiceApi", "serviceInspect", "id");
        }



        // Path Params
        const localVarPath = '/services/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (insertDefaults !== undefined) {
            requestContext.setQueryParam("insertDefaults", ObjectSerializer.serialize(insertDefaults, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List services
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * @param status Include service status, with count of running and desired tasks. 
     */
    public async serviceList(filters?: string, status?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/services';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam("filters", ObjectSerializer.serialize(filters, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get service logs
     * @param id ID or name of the service
     * @param details Show service context and extra details provided to logs.
     * @param follow Keep connection after returning logs.
     * @param stdout Return logs from &#x60;stdout&#x60;
     * @param stderr Return logs from &#x60;stderr&#x60;
     * @param since Only return logs since this time, as a UNIX timestamp
     * @param timestamps Add timestamps to every log line
     * @param tail Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public async serviceLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ServiceApi", "serviceLogs", "id");
        }









        // Path Params
        const localVarPath = '/services/{id}/logs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (details !== undefined) {
            requestContext.setQueryParam("details", ObjectSerializer.serialize(details, "boolean", ""));
        }

        // Query Params
        if (follow !== undefined) {
            requestContext.setQueryParam("follow", ObjectSerializer.serialize(follow, "boolean", ""));
        }

        // Query Params
        if (stdout !== undefined) {
            requestContext.setQueryParam("stdout", ObjectSerializer.serialize(stdout, "boolean", ""));
        }

        // Query Params
        if (stderr !== undefined) {
            requestContext.setQueryParam("stderr", ObjectSerializer.serialize(stderr, "boolean", ""));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "number", ""));
        }

        // Query Params
        if (timestamps !== undefined) {
            requestContext.setQueryParam("timestamps", ObjectSerializer.serialize(timestamps, "boolean", ""));
        }

        // Query Params
        if (tail !== undefined) {
            requestContext.setQueryParam("tail", ObjectSerializer.serialize(tail, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a service
     * @param id ID or name of service.
     * @param version The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60; 
     * @param body 
     * @param registryAuthFrom If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials. 
     * @param rollback Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
     * @param xRegistryAuth A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public async serviceUpdate(id: string, version: number, body: ServiceUpdateRequest, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ServiceApi", "serviceUpdate", "id");
        }


        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("ServiceApi", "serviceUpdate", "version");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ServiceApi", "serviceUpdate", "body");
        }





        // Path Params
        const localVarPath = '/services/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", ""));
        }

        // Query Params
        if (registryAuthFrom !== undefined) {
            requestContext.setQueryParam("registryAuthFrom", ObjectSerializer.serialize(registryAuthFrom, "'spec' | 'previous-spec'", ""));
        }

        // Query Params
        if (rollback !== undefined) {
            requestContext.setQueryParam("rollback", ObjectSerializer.serialize(rollback, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Registry-Auth", ObjectSerializer.serialize(xRegistryAuth, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ServiceUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServiceCreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ServiceCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceCreateResponse", ""
            ) as ServiceCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "bad parameter", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "network is not eligible for services", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "name conflicts with an existing service", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceCreateResponse", ""
            ) as ServiceCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "no such service", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceInspect
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceInspectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Service >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Service = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Service", ""
            ) as Service;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "no such service", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Service = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Service", ""
            ) as Service;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Service> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Service> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Service>", ""
            ) as Array<Service>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Service> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Service>", ""
            ) as Array<Service>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "no such service", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to serviceUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async serviceUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServiceUpdateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceUpdateResponse", ""
            ) as ServiceUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "bad parameter", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "no such service", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "server error", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "node is not part of a swarm", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceUpdateResponse", ""
            ) as ServiceUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
