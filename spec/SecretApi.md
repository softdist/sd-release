# .SecretApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretCreate**](SecretApi.md#secretCreate) | **POST** /secrets/create | Create a secret
[**secretDelete**](SecretApi.md#secretDelete) | **DELETE** /secrets/{id} | Delete a secret
[**secretInspect**](SecretApi.md#secretInspect) | **GET** /secrets/{id} | Inspect a secret
[**secretList**](SecretApi.md#secretList) | **GET** /secrets | List secrets
[**secretUpdate**](SecretApi.md#secretUpdate) | **POST** /secrets/{id}/update | Update a Secret


# **secretCreate**
> IdResponse secretCreate()


### Example


```typescript
import { createConfiguration, SecretApi } from '';
import type { SecretApiSecretCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretApi(configuration);

const request: SecretApiSecretCreateRequest = {
  
  body: null,
};

const data = await apiInstance.secretCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SecretCreateRequest**|  |


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

# **secretDelete**
> void secretDelete()


### Example


```typescript
import { createConfiguration, SecretApi } from '';
import type { SecretApiSecretDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretApi(configuration);

const request: SecretApiSecretDeleteRequest = {
    // ID of the secret
  id: "id_example",
};

const data = await apiInstance.secretDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the secret | defaults to undefined


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
**404** | secret not found |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretInspect**
> Secret secretInspect()


### Example


```typescript
import { createConfiguration, SecretApi } from '';
import type { SecretApiSecretInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretApi(configuration);

const request: SecretApiSecretInspectRequest = {
    // ID of the secret
  id: "id_example",
};

const data = await apiInstance.secretInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the secret | defaults to undefined


### Return type

**Secret**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | secret not found |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretList**
> Array<Secret> secretList()


### Example


```typescript
import { createConfiguration, SecretApi } from '';
import type { SecretApiSecretListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretApi(configuration);

const request: SecretApiSecretListRequest = {
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>`  (optional)
  filters: "filters_example",
};

const data = await apiInstance.secretList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60;  | (optional) defaults to undefined


### Return type

**Array<Secret>**

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

# **secretUpdate**
> void secretUpdate()


### Example


```typescript
import { createConfiguration, SecretApi } from '';
import type { SecretApiSecretUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretApi(configuration);

const request: SecretApiSecretUpdateRequest = {
    // The ID or name of the secret
  id: "id_example",
    // The version number of the secret object being updated. This is required to avoid conflicting writes. 
  version: 1,
    // The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.  (optional)
  body: {
    name: "name_example",
    labels: {
      "key": "key_example",
    },
    data: "",
    driver: {
      name: "some-driver",
      options: {
        "key": "key_example",
      },
    },
    templating: {
      name: "some-driver",
      options: {
        "key": "key_example",
      },
    },
  },
};

const data = await apiInstance.secretUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SecretSpec**| The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.  |
 **id** | [**string**] | The ID or name of the secret | defaults to undefined
 **version** | [**number**] | The version number of the secret object being updated. This is required to avoid conflicting writes.  | defaults to undefined


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
**404** | no such secret |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


