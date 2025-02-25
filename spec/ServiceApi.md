# .ServiceApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceCreate**](ServiceApi.md#serviceCreate) | **POST** /services/create | Create a service
[**serviceDelete**](ServiceApi.md#serviceDelete) | **DELETE** /services/{id} | Delete a service
[**serviceInspect**](ServiceApi.md#serviceInspect) | **GET** /services/{id} | Inspect a service
[**serviceList**](ServiceApi.md#serviceList) | **GET** /services | List services
[**serviceLogs**](ServiceApi.md#serviceLogs) | **GET** /services/{id}/logs | Get service logs
[**serviceUpdate**](ServiceApi.md#serviceUpdate) | **POST** /services/{id}/update | Update a service


# **serviceCreate**
> ServiceCreateResponse serviceCreate(body)


### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceCreateRequest = {
  
  body: null,
    // A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
  xRegistryAuth: "X-Registry-Auth_example",
};

const data = await apiInstance.serviceCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ServiceCreateRequest**|  |
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | (optional) defaults to undefined


### Return type

**ServiceCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | no error |  -  |
**400** | bad parameter |  -  |
**403** | network is not eligible for services |  -  |
**409** | name conflicts with an existing service |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serviceDelete**
> void serviceDelete()


### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceDeleteRequest = {
    // ID or name of service.
  id: "id_example",
};

const data = await apiInstance.serviceDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of service. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such service |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serviceInspect**
> Service serviceInspect()


### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceInspectRequest = {
    // ID or name of service.
  id: "id_example",
    // Fill empty fields with default values. (optional)
  insertDefaults: false,
};

const data = await apiInstance.serviceInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of service. | defaults to undefined
 **insertDefaults** | [**boolean**] | Fill empty fields with default values. | (optional) defaults to false


### Return type

**Service**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such service |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serviceList**
> Array<Service> serviceList()


### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceListRequest = {
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the services list.  Available filters:  - `id=<service id>` - `label=<service label>` - `mode=[\"replicated\"|\"global\"]` - `name=<service name>`  (optional)
  filters: "filters_example",
    // Include service status, with count of running and desired tasks.  (optional)
  status: true,
};

const data = await apiInstance.serviceList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60;  | (optional) defaults to undefined
 **status** | [**boolean**] | Include service status, with count of running and desired tasks.  | (optional) defaults to undefined


### Return type

**Array<Service>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serviceLogs**
> HttpFile serviceLogs()

Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 

### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceLogsRequest = {
    // ID or name of the service
  id: "id_example",
    // Show service context and extra details provided to logs. (optional)
  details: false,
    // Keep connection after returning logs. (optional)
  follow: false,
    // Return logs from `stdout` (optional)
  stdout: false,
    // Return logs from `stderr` (optional)
  stderr: false,
    // Only return logs since this time, as a UNIX timestamp (optional)
  since: 0,
    // Add timestamps to every log line (optional)
  timestamps: false,
    // Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (optional)
  tail: "all",
};

const data = await apiInstance.serviceLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the service | defaults to undefined
 **details** | [**boolean**] | Show service context and extra details provided to logs. | (optional) defaults to false
 **follow** | [**boolean**] | Keep connection after returning logs. | (optional) defaults to false
 **stdout** | [**boolean**] | Return logs from &#x60;stdout&#x60; | (optional) defaults to false
 **stderr** | [**boolean**] | Return logs from &#x60;stderr&#x60; | (optional) defaults to false
 **since** | [**number**] | Only return logs since this time, as a UNIX timestamp | (optional) defaults to 0
 **timestamps** | [**boolean**] | Add timestamps to every log line | (optional) defaults to false
 **tail** | [**string**] | Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines.  | (optional) defaults to 'all'


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.docker.raw-stream, application/vnd.docker.multiplexed-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | logs returned as a stream in response body |  -  |
**404** | no such service |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serviceUpdate**
> ServiceUpdateResponse serviceUpdate(body)


### Example


```typescript
import { createConfiguration, ServiceApi } from '';
import type { ServiceApiServiceUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ServiceApi(configuration);

const request: ServiceApiServiceUpdateRequest = {
    // ID or name of service.
  id: "id_example",
    // The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}` 
  version: 1,
  
  body: null,
    // If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials.  (optional)
  registryAuthFrom: "spec",
    // Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.  (optional)
  rollback: "rollback_example",
    // A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
  xRegistryAuth: "X-Registry-Auth_example",
};

const data = await apiInstance.serviceUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ServiceUpdateRequest**|  |
 **id** | [**string**] | ID or name of service. | defaults to undefined
 **version** | [**number**] | The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60;  | defaults to undefined
 **registryAuthFrom** | [**&#39;spec&#39; | &#39;previous-spec&#39;**]**Array<&#39;spec&#39; &#124; &#39;previous-spec&#39;>** | If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials.  | (optional) defaults to 'spec'
 **rollback** | [**string**] | Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.  | (optional) defaults to undefined
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | (optional) defaults to undefined


### Return type

**ServiceUpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | bad parameter |  -  |
**404** | no such service |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


