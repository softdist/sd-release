# .NodeApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeDelete**](NodeApi.md#nodeDelete) | **DELETE** /nodes/{id} | Delete a node
[**nodeInspect**](NodeApi.md#nodeInspect) | **GET** /nodes/{id} | Inspect a node
[**nodeList**](NodeApi.md#nodeList) | **GET** /nodes | List nodes
[**nodeUpdate**](NodeApi.md#nodeUpdate) | **POST** /nodes/{id}/update | Update a node


# **nodeDelete**
> void nodeDelete()


### Example


```typescript
import { createConfiguration, NodeApi } from '';
import type { NodeApiNodeDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NodeApi(configuration);

const request: NodeApiNodeDeleteRequest = {
    // The ID or name of the node
  id: "id_example",
    // Force remove a node from the swarm (optional)
  force: false,
};

const data = await apiInstance.nodeDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID or name of the node | defaults to undefined
 **force** | [**boolean**] | Force remove a node from the swarm | (optional) defaults to false


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
**404** | no such node |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nodeInspect**
> Node nodeInspect()


### Example


```typescript
import { createConfiguration, NodeApi } from '';
import type { NodeApiNodeInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NodeApi(configuration);

const request: NodeApiNodeInspectRequest = {
    // The ID or name of the node
  id: "id_example",
};

const data = await apiInstance.nodeInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID or name of the node | defaults to undefined


### Return type

**Node**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such node |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nodeList**
> Array<Node> nodeList()


### Example


```typescript
import { createConfiguration, NodeApi } from '';
import type { NodeApiNodeListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NodeApi(configuration);

const request: NodeApiNodeListRequest = {
    // Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).  Available filters: - `id=<node id>` - `label=<engine label>` - `membership=`(`accepted`|`pending`)` - `name=<node name>` - `node.label=<node label>` - `role=`(`manager`|`worker`)`  (optional)
  filters: "filters_example",
};

const data = await apiInstance.nodeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60;  | (optional) defaults to undefined


### Return type

**Array<Node>**

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

# **nodeUpdate**
> void nodeUpdate()


### Example


```typescript
import { createConfiguration, NodeApi } from '';
import type { NodeApiNodeUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NodeApi(configuration);

const request: NodeApiNodeUpdateRequest = {
    // The ID of the node
  id: "id_example",
    // The version number of the node object being updated. This is required to avoid conflicting writes. 
  version: 1,
  
  body: {
    name: "my-node",
    labels: {
      "key": "key_example",
    },
    role: "manager",
    availability: "active",
  },
};

const data = await apiInstance.nodeUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NodeSpec**|  |
 **id** | [**string**] | The ID of the node | defaults to undefined
 **version** | [**number**] | The version number of the node object being updated. This is required to avoid conflicting writes.  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | bad parameter |  -  |
**404** | no such node |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


