# .ExecApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerExec**](ExecApi.md#containerExec) | **POST** /containers/{id}/exec | Create an exec instance
[**execInspect**](ExecApi.md#execInspect) | **GET** /exec/{id}/json | Inspect an exec instance
[**execResize**](ExecApi.md#execResize) | **POST** /exec/{id}/resize | Resize an exec instance
[**execStart**](ExecApi.md#execStart) | **POST** /exec/{id}/start | Start an exec instance


# **containerExec**
> IdResponse containerExec(execConfig)

Run a command inside a running container.

### Example


```typescript
import { createConfiguration, ExecApi } from '';
import type { ExecApiContainerExecRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExecApi(configuration);

const request: ExecApiContainerExecRequest = {
    // ID or name of container
  id: "id_example",
    // Exec configuration
  execConfig: {
    attachStdin: true,
    attachStdout: true,
    attachStderr: true,
    consoleSize: [
      0,
    ],
    detachKeys: "detachKeys_example",
    tty: true,
    env: [
      "env_example",
    ],
    cmd: [
      "cmd_example",
    ],
    privileged: false,
    user: "user_example",
    workingDir: "workingDir_example",
  },
};

const data = await apiInstance.containerExec(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execConfig** | **ExecConfig**| Exec configuration |
 **id** | [**string**] | ID or name of container | defaults to undefined


### Return type

**IdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | no error |  -  |
**404** | no such container |  -  |
**409** | container is paused |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execInspect**
> ExecInspectResponse execInspect()

Return low-level information about an exec instance.

### Example


```typescript
import { createConfiguration, ExecApi } from '';
import type { ExecApiExecInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExecApi(configuration);

const request: ExecApiExecInspectRequest = {
    // Exec instance ID
  id: "id_example",
};

const data = await apiInstance.execInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined


### Return type

**ExecInspectResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**404** | No such exec instance |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execResize**
> void execResize()

Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 

### Example


```typescript
import { createConfiguration, ExecApi } from '';
import type { ExecApiExecResizeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExecApi(configuration);

const request: ExecApiExecResizeRequest = {
    // Exec instance ID
  id: "id_example",
    // Height of the TTY session in characters
  h: 1,
    // Width of the TTY session in characters
  w: 1,
};

const data = await apiInstance.execResize(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined
 **h** | [**number**] | Height of the TTY session in characters | defaults to undefined
 **w** | [**number**] | Width of the TTY session in characters | defaults to undefined


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
**200** | No error |  -  |
**400** | bad parameter |  -  |
**404** | No such exec instance |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execStart**
> void execStart()

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 

### Example


```typescript
import { createConfiguration, ExecApi } from '';
import type { ExecApiExecStartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExecApi(configuration);

const request: ExecApiExecStartRequest = {
    // Exec instance ID
  id: "id_example",
  
  execStartConfig: {
    detach: true,
    tty: true,
    consoleSize: [
      0,
    ],
  },
};

const data = await apiInstance.execStart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execStartConfig** | **ExecStartConfig**|  |
 **id** | [**string**] | Exec instance ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.docker.raw-stream, application/vnd.docker.multiplexed-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**404** | No such exec instance |  -  |
**409** | Container is stopped or paused |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


