# .ConfigApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configCreate**](ConfigApi.md#configCreate) | **POST** /configs/create | Create a config
[**configDelete**](ConfigApi.md#configDelete) | **DELETE** /configs/{id} | Delete a config
[**configInspect**](ConfigApi.md#configInspect) | **GET** /configs/{id} | Inspect a config
[**configList**](ConfigApi.md#configList) | **GET** /configs | List configs
[**configUpdate**](ConfigApi.md#configUpdate) | **POST** /configs/{id}/update | Update a Config


# **configCreate**
> IdResponse configCreate()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiConfigCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiConfigCreateRequest = {
  
  body: null,
};

const data = await apiInstance.configCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ConfigCreateRequest**|  |


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
**409** | name conflicts with an existing object |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configDelete**
> void configDelete()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiConfigDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiConfigDeleteRequest = {
    // ID of the config
  id: "id_example",
};

const data = await apiInstance.configDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the config | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | config not found |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configInspect**
> Config configInspect()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiConfigInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiConfigInspectRequest = {
    // ID of the config
  id: "id_example",
};

const data = await apiInstance.configInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the config | defaults to undefined


### Return type

**Config**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | config not found |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configList**
> Array<Config> configList()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiConfigListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiConfigListRequest = {
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list.  Available filters:  - `id=<config id>` - `label=<key> or label=<key>=value` - `name=<config name>` - `names=<config name>`  (optional)
  filters: "filters_example",
};

const data = await apiInstance.configList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60;  | (optional) defaults to undefined


### Return type

**Array<Config>**

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
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configUpdate**
> void configUpdate()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiConfigUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiConfigUpdateRequest = {
    // The ID or name of the config
  id: "id_example",
    // The version number of the config object being updated. This is required to avoid conflicting writes. 
  version: 1,
    // The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values.  (optional)
  body: {
    name: "name_example",
    labels: {
      "key": "key_example",
    },
    data: "data_example",
    templating: {
      name: "some-driver",
      options: {
        "key": "key_example",
      },
    },
  },
};

const data = await apiInstance.configUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ConfigSpec**| The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values.  |
 **id** | [**string**] | The ID or name of the config | defaults to undefined
 **version** | [**number**] | The version number of the config object being updated. This is required to avoid conflicting writes.  | defaults to undefined


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
**404** | no such config |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


