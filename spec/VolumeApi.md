# .VolumeApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volumeCreate**](VolumeApi.md#volumeCreate) | **POST** /volumes/create | Create a volume
[**volumeDelete**](VolumeApi.md#volumeDelete) | **DELETE** /volumes/{name} | Remove a volume
[**volumeInspect**](VolumeApi.md#volumeInspect) | **GET** /volumes/{name} | Inspect a volume
[**volumeList**](VolumeApi.md#volumeList) | **GET** /volumes | List volumes
[**volumePrune**](VolumeApi.md#volumePrune) | **POST** /volumes/prune | Delete unused volumes
[**volumeUpdate**](VolumeApi.md#volumeUpdate) | **PUT** /volumes/{name} | \&quot;Update a volume. Valid only for Swarm cluster volumes\&quot; 


# **volumeCreate**
> Volume volumeCreate(volumeConfig)


### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumeCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumeCreateRequest = {
    // Volume configuration
  volumeConfig: {
    name: "tardis",
    driver: "custom",
    driverOpts: {
      "key": "key_example",
    },
    labels: {
      "key": "key_example",
    },
    clusterVolumeSpec: {
      group: "group_example",
      accessMode: {
        scope: "single",
        sharing: "none",
        mountVolume: {},
        secrets: [
          {
            key: "key_example",
            secret: "secret_example",
          },
        ],
        accessibilityRequirements: {
          requisite: [
            {
              "key": "key_example",
            },
          ],
          preferred: [
            {
              "key": "key_example",
            },
          ],
        },
        capacityRange: {
          requiredBytes: 1,
          limitBytes: 1,
        },
        availability: "active",
      },
    },
  },
};

const data = await apiInstance.volumeCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeConfig** | **VolumeCreateOptions**| Volume configuration |


### Return type

**Volume**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The volume was created successfully |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **volumeDelete**
> void volumeDelete()

Instruct the driver to remove the volume.

### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumeDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumeDeleteRequest = {
    // Volume name or ID
  name: "name_example",
    // Force the removal of the volume (optional)
  force: false,
};

const data = await apiInstance.volumeDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Volume name or ID | defaults to undefined
 **force** | [**boolean**] | Force the removal of the volume | (optional) defaults to false


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
**204** | The volume was removed |  -  |
**404** | No such volume or volume driver |  -  |
**409** | Volume is in use and cannot be removed |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **volumeInspect**
> Volume volumeInspect()


### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumeInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumeInspectRequest = {
    // Volume name or ID
  name: "name_example",
};

const data = await apiInstance.volumeInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Volume name or ID | defaults to undefined


### Return type

**Volume**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**404** | No such volume |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **volumeList**
> VolumeListResponse volumeList()


### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumeListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumeListRequest = {
    // JSON encoded value of the filters (a `map[string][]string`) to process on the volumes list. Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    volumes that are not in use by a container. When set to `false`    (or `0`), only volumes that are in use by one or more    containers are returned. - `driver=<volume-driver-name>` Matches volumes based on their driver. - `label=<key>` or `label=<key>:<value>` Matches volumes based on    the presence of a `label` alone or a `label` and a value. - `name=<volume-name>` Matches all or part of a volume name.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.volumeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name.  | (optional) defaults to undefined


### Return type

**VolumeListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary volume data that matches the query |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **volumePrune**
> VolumePruneResponse volumePrune()


### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumePruneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumePruneRequest = {
    // Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels. - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.volumePrune(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes.  | (optional) defaults to undefined


### Return type

**VolumePruneResponse**

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

# **volumeUpdate**
> void volumeUpdate()


### Example


```typescript
import { createConfiguration, VolumeApi } from '';
import type { VolumeApiVolumeUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VolumeApi(configuration);

const request: VolumeApiVolumeUpdateRequest = {
    // The name or ID of the volume
  name: "name_example",
    // The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\'s `ClusterVolume` field. 
  version: 1,
    // The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged.  (optional)
  body: {
    spec: {
      group: "group_example",
      accessMode: {
        scope: "single",
        sharing: "none",
        mountVolume: {},
        secrets: [
          {
            key: "key_example",
            secret: "secret_example",
          },
        ],
        accessibilityRequirements: {
          requisite: [
            {
              "key": "key_example",
            },
          ],
          preferred: [
            {
              "key": "key_example",
            },
          ],
        },
        capacityRange: {
          requiredBytes: 1,
          limitBytes: 1,
        },
        availability: "active",
      },
    },
  },
};

const data = await apiInstance.volumeUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **VolumeUpdateRequest**| The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged.  |
 **name** | [**string**] | The name or ID of the volume | defaults to undefined
 **version** | [**number**] | The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field.  | defaults to undefined


### Return type

**void**

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
**404** | no such volume |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


