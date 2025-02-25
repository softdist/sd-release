# .ContainerApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerArchive**](ContainerApi.md#containerArchive) | **GET** /containers/{id}/archive | Get an archive of a filesystem resource in a container
[**containerArchiveInfo**](ContainerApi.md#containerArchiveInfo) | **HEAD** /containers/{id}/archive | Get information about files in a container
[**containerAttach**](ContainerApi.md#containerAttach) | **POST** /containers/{id}/attach | Attach to a container
[**containerAttachWebsocket**](ContainerApi.md#containerAttachWebsocket) | **GET** /containers/{id}/attach/ws | Attach to a container via a websocket
[**containerChanges**](ContainerApi.md#containerChanges) | **GET** /containers/{id}/changes | Get changes on a container’s filesystem
[**containerCreate**](ContainerApi.md#containerCreate) | **POST** /containers/create | Create a container
[**containerDelete**](ContainerApi.md#containerDelete) | **DELETE** /containers/{id} | Remove a container
[**containerExport**](ContainerApi.md#containerExport) | **GET** /containers/{id}/export | Export a container
[**containerInspect**](ContainerApi.md#containerInspect) | **GET** /containers/{id}/json | Inspect a container
[**containerKill**](ContainerApi.md#containerKill) | **POST** /containers/{id}/kill | Kill a container
[**containerList**](ContainerApi.md#containerList) | **GET** /containers/json | List containers
[**containerLogs**](ContainerApi.md#containerLogs) | **GET** /containers/{id}/logs | Get container logs
[**containerPause**](ContainerApi.md#containerPause) | **POST** /containers/{id}/pause | Pause a container
[**containerPrune**](ContainerApi.md#containerPrune) | **POST** /containers/prune | Delete stopped containers
[**containerRename**](ContainerApi.md#containerRename) | **POST** /containers/{id}/rename | Rename a container
[**containerResize**](ContainerApi.md#containerResize) | **POST** /containers/{id}/resize | Resize a container TTY
[**containerRestart**](ContainerApi.md#containerRestart) | **POST** /containers/{id}/restart | Restart a container
[**containerStart**](ContainerApi.md#containerStart) | **POST** /containers/{id}/start | Start a container
[**containerStats**](ContainerApi.md#containerStats) | **GET** /containers/{id}/stats | Get container stats based on resource usage
[**containerStop**](ContainerApi.md#containerStop) | **POST** /containers/{id}/stop | Stop a container
[**containerTop**](ContainerApi.md#containerTop) | **GET** /containers/{id}/top | List processes running inside a container
[**containerUnpause**](ContainerApi.md#containerUnpause) | **POST** /containers/{id}/unpause | Unpause a container
[**containerUpdate**](ContainerApi.md#containerUpdate) | **POST** /containers/{id}/update | Update a container
[**containerWait**](ContainerApi.md#containerWait) | **POST** /containers/{id}/wait | Wait for a container
[**putContainerArchive**](ContainerApi.md#putContainerArchive) | **PUT** /containers/{id}/archive | Extract an archive of files or folders to a directory in a container


# **containerArchive**
> void containerArchive()

Get a tar archive of a resource in the filesystem of container id.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerArchiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerArchiveRequest = {
    // ID or name of the container
  id: "id_example",
    // Resource in the container’s filesystem to archive.
  path: "path_example",
};

const data = await apiInstance.containerArchive(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **path** | [**string**] | Resource in the container’s filesystem to archive. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-tar, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | Bad parameter |  -  |
**404** | Container or path does not exist |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerArchiveInfo**
> void containerArchiveInfo()

A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerArchiveInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerArchiveInfoRequest = {
    // ID or name of the container
  id: "id_example",
    // Resource in the container’s filesystem to archive.
  path: "path_example",
};

const data = await apiInstance.containerArchiveInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **path** | [**string**] | Resource in the container’s filesystem to archive. | defaults to undefined


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
**200** | no error |  * X-Docker-Container-Path-Stat - A base64 - encoded JSON object with some filesystem header information about the path  <br>  |
**400** | Bad parameter |  -  |
**404** | Container or path does not exist |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerAttach**
> void containerAttach()

Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream and the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerAttachRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerAttachRequest = {
    // ID or name of the container
  id: "id_example",
    // Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.  (optional)
  detachKeys: "detachKeys_example",
    // Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.  (optional)
  logs: false,
    // Stream attached streams from the time the request was made onwards.  (optional)
  stream: false,
    // Attach to `stdin` (optional)
  stdin: false,
    // Attach to `stdout` (optional)
  stdout: false,
    // Attach to `stderr` (optional)
  stderr: false,
};

const data = await apiInstance.containerAttach(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **detachKeys** | [**string**] | Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;.  | (optional) defaults to undefined
 **logs** | [**boolean**] | Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If &#x60;stream&#x60; is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.  | (optional) defaults to false
 **stream** | [**boolean**] | Stream attached streams from the time the request was made onwards.  | (optional) defaults to false
 **stdin** | [**boolean**] | Attach to &#x60;stdin&#x60; | (optional) defaults to false
 **stdout** | [**boolean**] | Attach to &#x60;stdout&#x60; | (optional) defaults to false
 **stderr** | [**boolean**] | Attach to &#x60;stderr&#x60; | (optional) defaults to false


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.docker.raw-stream, application/vnd.docker.multiplexed-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**101** | no error, hints proxy about hijacking |  -  |
**200** | no error, no upgrade header found |  -  |
**400** | bad parameter |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerAttachWebsocket**
> void containerAttachWebsocket()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerAttachWebsocketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerAttachWebsocketRequest = {
    // ID or name of the container
  id: "id_example",
    // Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`.  (optional)
  detachKeys: "detachKeys_example",
    // Return logs (optional)
  logs: false,
    // Return stream (optional)
  stream: false,
    // Attach to `stdin` (optional)
  stdin: false,
    // Attach to `stdout` (optional)
  stdout: false,
    // Attach to `stderr` (optional)
  stderr: false,
};

const data = await apiInstance.containerAttachWebsocket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **detachKeys** | [**string**] | Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60;, or &#x60;_&#x60;.  | (optional) defaults to undefined
 **logs** | [**boolean**] | Return logs | (optional) defaults to false
 **stream** | [**boolean**] | Return stream | (optional) defaults to false
 **stdin** | [**boolean**] | Attach to &#x60;stdin&#x60; | (optional) defaults to false
 **stdout** | [**boolean**] | Attach to &#x60;stdout&#x60; | (optional) defaults to false
 **stderr** | [**boolean**] | Attach to &#x60;stderr&#x60; | (optional) defaults to false


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
**101** | no error, hints proxy about hijacking |  -  |
**200** | no error, no upgrade header found |  -  |
**400** | bad parameter |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerChanges**
> Array<FilesystemChange> containerChanges()

Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerChangesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerChangesRequest = {
    // ID or name of the container
  id: "id_example",
};

const data = await apiInstance.containerChanges(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined


### Return type

**Array<FilesystemChange>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of changes |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerCreate**
> ContainerCreateResponse containerCreate(body)


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerCreateRequest = {
    // Container to create
  body: null,
    // Assign the specified name to the container. Must match `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.  (optional)
  name: "/CbUUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM",
    // Platform in the format `os[/arch[/variant]]` used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a `404` status.  If the option is not set, the host\'s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the `Warnings` field in the response, for example;      WARNING: The requested image\'s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested  (optional)
  platform: "platform_example",
};

const data = await apiInstance.containerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ContainerCreateRequest**| Container to create |
 **name** | [**string**] | Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;.  | (optional) defaults to undefined
 **platform** | [**string**] | Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested  | (optional) defaults to undefined


### Return type

**ContainerCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Container created successfully |  -  |
**400** | bad parameter |  -  |
**404** | no such image |  -  |
**409** | conflict |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerDelete**
> void containerDelete()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerDeleteRequest = {
    // ID or name of the container
  id: "id_example",
    // Remove anonymous volumes associated with the container. (optional)
  v: false,
    // If the container is running, kill it before removing it. (optional)
  force: false,
    // Remove the specified link associated with the container. (optional)
  link: false,
};

const data = await apiInstance.containerDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **v** | [**boolean**] | Remove anonymous volumes associated with the container. | (optional) defaults to false
 **force** | [**boolean**] | If the container is running, kill it before removing it. | (optional) defaults to false
 **link** | [**boolean**] | Remove the specified link associated with the container. | (optional) defaults to false


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
**204** | no error |  -  |
**400** | bad parameter |  -  |
**404** | no such container |  -  |
**409** | conflict |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerExport**
> void containerExport()

Export the contents of a container as a tarball.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerExportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerExportRequest = {
    // ID or name of the container
  id: "id_example",
};

const data = await apiInstance.containerExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerInspect**
> ContainerInspectResponse containerInspect()

Return low-level information about a container.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerInspectRequest = {
    // ID or name of the container
  id: "id_example",
    // Return the size of container as fields `SizeRw` and `SizeRootFs` (optional)
  size: false,
};

const data = await apiInstance.containerInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **size** | [**boolean**] | Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60; | (optional) defaults to false


### Return type

**ContainerInspectResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerKill**
> void containerKill()

Send a POSIX signal to a container, defaulting to killing to the container. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerKillRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerKillRequest = {
    // ID or name of the container
  id: "id_example",
    // Signal to send to the container as an integer or string (e.g. `SIGINT`).  (optional)
  signal: "SIGKILL",
};

const data = await apiInstance.containerKill(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **signal** | [**string**] | Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;).  | (optional) defaults to 'SIGKILL'


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
**204** | no error |  -  |
**404** | no such container |  -  |
**409** | container is not running |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerList**
> Array<ContainerSummary> containerList()

Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerListRequest = {
    // Return all containers. By default, only running containers are shown.  (optional)
  all: false,
    // Return this number of most recently created containers, including non-running ones.  (optional)
  limit: 1,
    // Return the size of container as fields `SizeRw` and `SizeRootFs`.  (optional)
  size: false,
    // Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers.  Available filters:  - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`|`healthy`|`unhealthy`|`none`) - `id=<ID>` a container\'s ID - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only) - `is-task=`(`true`|`false`) - `label=key` or `label=\"key=value\"` of a container label - `name=<name>` a container\'s name - `network`=(`<network id>` or `<network name>`) - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`) - `volume`=(`<volume name>` or `<mount point destination>`)  (optional)
  filters: "filters_example",
};

const data = await apiInstance.containerList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Return all containers. By default, only running containers are shown.  | (optional) defaults to false
 **limit** | [**number**] | Return this number of most recently created containers, including non-running ones.  | (optional) defaults to undefined
 **size** | [**boolean**] | Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;.  | (optional) defaults to false
 **filters** | [**string**] | Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;)  | (optional) defaults to undefined


### Return type

**Array<ContainerSummary>**

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

# **containerLogs**
> HttpFile containerLogs()

Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerLogsRequest = {
    // ID or name of the container
  id: "id_example",
    // Keep connection after returning logs. (optional)
  follow: false,
    // Return logs from `stdout` (optional)
  stdout: false,
    // Return logs from `stderr` (optional)
  stderr: false,
    // Only return logs since this time, as a UNIX timestamp (optional)
  since: 0,
    // Only return logs before this time, as a UNIX timestamp (optional)
  until: 0,
    // Add timestamps to every log line (optional)
  timestamps: false,
    // Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (optional)
  tail: "all",
};

const data = await apiInstance.containerLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **follow** | [**boolean**] | Keep connection after returning logs. | (optional) defaults to false
 **stdout** | [**boolean**] | Return logs from &#x60;stdout&#x60; | (optional) defaults to false
 **stderr** | [**boolean**] | Return logs from &#x60;stderr&#x60; | (optional) defaults to false
 **since** | [**number**] | Only return logs since this time, as a UNIX timestamp | (optional) defaults to 0
 **until** | [**number**] | Only return logs before this time, as a UNIX timestamp | (optional) defaults to 0
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
**200** | logs returned as a stream in response body. For the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach). Note that unlike the attach endpoint, the logs endpoint does not upgrade the connection and does not set Content-Type.  |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerPause**
> void containerPause()

Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerPauseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerPauseRequest = {
    // ID or name of the container
  id: "id_example",
};

const data = await apiInstance.containerPause(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined


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
**204** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerPrune**
> ContainerPruneResponse containerPrune()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerPruneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerPruneRequest = {
    // Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.containerPrune(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**ContainerPruneResponse**

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

# **containerRename**
> void containerRename()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerRenameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerRenameRequest = {
    // ID or name of the container
  id: "id_example",
    // New name for the container
  name: "name_example",
};

const data = await apiInstance.containerRename(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **name** | [**string**] | New name for the container | defaults to undefined


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
**204** | no error |  -  |
**404** | no such container |  -  |
**409** | name already in use |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerResize**
> void containerResize()

Resize the TTY for a container.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerResizeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerResizeRequest = {
    // ID or name of the container
  id: "id_example",
    // Height of the TTY session in characters
  h: 1,
    // Width of the TTY session in characters
  w: 1,
};

const data = await apiInstance.containerResize(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **h** | [**number**] | Height of the TTY session in characters | defaults to undefined
 **w** | [**number**] | Width of the TTY session in characters | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such container |  -  |
**500** | cannot resize container |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerRestart**
> void containerRestart()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerRestartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerRestartRequest = {
    // ID or name of the container
  id: "id_example",
    // Signal to send to the container as an integer or string (e.g. `SIGINT`).  (optional)
  signal: "signal_example",
    // Number of seconds to wait before killing the container (optional)
  t: 1,
};

const data = await apiInstance.containerRestart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **signal** | [**string**] | Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;).  | (optional) defaults to undefined
 **t** | [**number**] | Number of seconds to wait before killing the container | (optional) defaults to undefined


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
**204** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStart**
> void containerStart()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerStartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerStartRequest = {
    // ID or name of the container
  id: "id_example",
    // Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.  (optional)
  detachKeys: "detachKeys_example",
};

const data = await apiInstance.containerStart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **detachKeys** | [**string**] | Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;.  | (optional) defaults to undefined


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
**204** | no error |  -  |
**304** | container already started |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStats**
> any containerStats()

This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerStatsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerStatsRequest = {
    // ID or name of the container
  id: "id_example",
    // Stream the output. If false, the stats will be output once and then it will disconnect.  (optional)
  stream: true,
    // Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`.  (optional)
  oneShot: false,
};

const data = await apiInstance.containerStats(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **stream** | [**boolean**] | Stream the output. If false, the stats will be output once and then it will disconnect.  | (optional) defaults to true
 **oneShot** | [**boolean**] | Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;.  | (optional) defaults to false


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStop**
> void containerStop()


### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerStopRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerStopRequest = {
    // ID or name of the container
  id: "id_example",
    // Signal to send to the container as an integer or string (e.g. `SIGINT`).  (optional)
  signal: "signal_example",
    // Number of seconds to wait before killing the container (optional)
  t: 1,
};

const data = await apiInstance.containerStop(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **signal** | [**string**] | Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;).  | (optional) defaults to undefined
 **t** | [**number**] | Number of seconds to wait before killing the container | (optional) defaults to undefined


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
**204** | no error |  -  |
**304** | container already stopped |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerTop**
> ContainerTopResponse containerTop()

On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerTopRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerTopRequest = {
    // ID or name of the container
  id: "id_example",
    // The arguments to pass to `ps`. For example, `aux` (optional)
  psArgs: "-ef",
};

const data = await apiInstance.containerTop(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **psArgs** | [**string**] | The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60; | (optional) defaults to '-ef'


### Return type

**ContainerTopResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerUnpause**
> void containerUnpause()

Resume a container which has been paused.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerUnpauseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerUnpauseRequest = {
    // ID or name of the container
  id: "id_example",
};

const data = await apiInstance.containerUnpause(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined


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
**204** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerUpdate**
> ContainerUpdateResponse containerUpdate(update)

Change various configuration options of a container without having to recreate it. 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerUpdateRequest = {
    // ID or name of the container
  id: "id_example",
  
  update: null,
};

const data = await apiInstance.containerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | **ContainerUpdateRequest**|  |
 **id** | [**string**] | ID or name of the container | defaults to undefined


### Return type

**ContainerUpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The container has been updated. |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerWait**
> ContainerWaitResponse containerWait()

Block until a container stops, then returns the exit code.

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiContainerWaitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiContainerWaitRequest = {
    // ID or name of the container
  id: "id_example",
    // Wait until a container state reaches the given condition.  Defaults to `not-running` if omitted or empty.  (optional)
  condition: "not-running",
};

const data = await apiInstance.containerWait(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **condition** | [**&#39;not-running&#39; | &#39;next-exit&#39; | &#39;removed&#39;**]**Array<&#39;not-running&#39; &#124; &#39;next-exit&#39; &#124; &#39;removed&#39;>** | Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty.  | (optional) defaults to 'not-running'


### Return type

**ContainerWaitResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The container has exit. |  -  |
**400** | bad parameter |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putContainerArchive**
> void putContainerArchive(inputStream)

Upload a tar archive to be extracted to a path in the filesystem of container id. `path` parameter is asserted to be a directory. If it exists as a file, 400 error will be returned with message \"not a directory\". 

### Example


```typescript
import { createConfiguration, ContainerApi } from '';
import type { ContainerApiPutContainerArchiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContainerApi(configuration);

const request: ContainerApiPutContainerArchiveRequest = {
    // ID or name of the container
  id: "id_example",
    // Path to a directory in the container to extract the archive’s contents into. 
  path: "path_example",
    // The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`. 
  inputStream: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa.  (optional)
  noOverwriteDirNonDir: "noOverwriteDirNonDir_example",
    // If `1`, `true`, then it will copy UID/GID maps to the dest file or dir  (optional)
  copyUIDGID: "copyUIDGID_example",
};

const data = await apiInstance.putContainerArchive(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputStream** | **HttpFile**| The input stream must be a tar archive compressed with one of the following algorithms: &#x60;identity&#x60; (no compression), &#x60;gzip&#x60;, &#x60;bzip2&#x60;, or &#x60;xz&#x60;.  |
 **id** | [**string**] | ID or name of the container | defaults to undefined
 **path** | [**string**] | Path to a directory in the container to extract the archive’s contents into.  | defaults to undefined
 **noOverwriteDirNonDir** | [**string**] | If &#x60;1&#x60;, &#x60;true&#x60;, or &#x60;True&#x60; then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa.  | (optional) defaults to undefined
 **copyUIDGID** | [**string**] | If &#x60;1&#x60;, &#x60;true&#x60;, then it will copy UID/GID maps to the dest file or dir  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar, application/octet-stream
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content was extracted successfully |  -  |
**400** | Bad parameter |  -  |
**403** | Permission denied, the volume or container rootfs is marked as read-only. |  -  |
**404** | No such container or path does not exist inside the container |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


