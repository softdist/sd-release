# .SystemApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemAuth**](SystemApi.md#systemAuth) | **POST** /auth | Check auth configuration
[**systemDataUsage**](SystemApi.md#systemDataUsage) | **GET** /system/df | Get data usage information
[**systemEvents**](SystemApi.md#systemEvents) | **GET** /events | Monitor events
[**systemInfo**](SystemApi.md#systemInfo) | **GET** /info | Get system information
[**systemPing**](SystemApi.md#systemPing) | **GET** /_ping | Ping
[**systemPingHead**](SystemApi.md#systemPingHead) | **HEAD** /_ping | Ping
[**systemVersion**](SystemApi.md#systemVersion) | **GET** /version | Get version


# **systemAuth**
> SystemAuthResponse | void systemAuth()

Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 

### Example


```typescript
import { createConfiguration, SystemApi } from '';
import type { SystemApiSystemAuthRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiSystemAuthRequest = {
    // Authentication to check (optional)
  authConfig: {
    username: "username_example",
    password: "password_example",
    email: "email_example",
    serveraddress: "serveraddress_example",
  },
};

const data = await apiInstance.systemAuth(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authConfig** | **AuthConfig**| Authentication to check |


### Return type

**SystemAuthResponse | void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An identity token was generated successfully. |  -  |
**204** | No error |  -  |
**401** | Auth error |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemDataUsage**
> SystemDataUsageResponse systemDataUsage()


### Example


```typescript
import { createConfiguration, SystemApi } from '';
import type { SystemApiSystemDataUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiSystemDataUsageRequest = {
    // Object types, for which to compute and return data.  (optional)
  type: [
    "container",
  ],
};

const data = await apiInstance.systemDataUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Array<&#39;container&#39; &#124; &#39;image&#39; &#124; &#39;volume&#39; &#124; &#39;build-cache&#39;>** | Object types, for which to compute and return data.  | (optional) defaults to undefined


### Return type

**SystemDataUsageResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemEvents**
> EventMessage systemEvents()

Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 

### Example


```typescript
import { createConfiguration, SystemApi } from '';
import type { SystemApiSystemEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiSystemEventsRequest = {
    // Show events created since this timestamp then stream new events. (optional)
  since: "since_example",
    // Show events created until this timestamp then stop streaming. (optional)
  until: "until_example",
    // A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:  - `config=<string>` config name or ID - `container=<string>` container name or ID - `daemon=<string>` daemon name or ID - `event=<string>` event type - `image=<string>` image name or ID - `label=<string>` image or container label - `network=<string>` network name or ID - `node=<string>` node ID - `plugin`=<string> plugin name or ID - `scope`=<string> local or swarm - `secret=<string>` secret name or ID - `service=<string>` service name or ID - `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config` - `volume=<string>` volume name  (optional)
  filters: "filters_example",
};

const data = await apiInstance.systemEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**string**] | Show events created since this timestamp then stream new events. | (optional) defaults to undefined
 **until** | [**string**] | Show events created until this timestamp then stop streaming. | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name  | (optional) defaults to undefined


### Return type

**EventMessage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | bad parameter |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemInfo**
> SystemInfo systemInfo()


### Example


```typescript
import { createConfiguration, SystemApi } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.systemInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemPing**
> string systemPing()

This is a dummy endpoint you can use to test if the server is accessible.

### Example


```typescript
import { createConfiguration, SystemApi } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.systemPing(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  * Swarm - Contains information about Swarm status of the daemon, and if the daemon is acting as a manager or worker node.  <br>  * Api-Version - Max API Version the server supports <br>  * Docker-Experimental - If the server is running with experimental mode enabled <br>  * Cache-Control -  <br>  * Pragma -  <br>  * Builder-Version - Default version of docker image builder  The default on Linux is version \&quot;2\&quot; (BuildKit), but the daemon can be configured to recommend version \&quot;1\&quot; (classic Builder). Windows does not yet support BuildKit for native Windows images, and uses \&quot;1\&quot; (classic builder) as a default.  This value is a recommendation as advertised by the daemon, and it is up to the client to choose which builder to use.  <br>  |
**500** | server error |  * Cache-Control -  <br>  * Pragma -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemPingHead**
> string systemPingHead()

This is a dummy endpoint you can use to test if the server is accessible.

### Example


```typescript
import { createConfiguration, SystemApi } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.systemPingHead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  * Swarm - Contains information about Swarm status of the daemon, and if the daemon is acting as a manager or worker node.  <br>  * Api-Version - Max API Version the server supports <br>  * Docker-Experimental - If the server is running with experimental mode enabled <br>  * Cache-Control -  <br>  * Pragma -  <br>  * Builder-Version - Default version of docker image builder <br>  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemVersion**
> SystemVersion systemVersion()

Returns the version of Docker that is running and various information about the system that Docker is running on.

### Example


```typescript
import { createConfiguration, SystemApi } from '';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.systemVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemVersion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


