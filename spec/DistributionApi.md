# .DistributionApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionInspect**](DistributionApi.md#distributionInspect) | **GET** /distribution/{name}/json | Get image information from the registry


# **distributionInspect**
> DistributionInspect distributionInspect()

Return image digest and platform information by contacting the registry. 

### Example


```typescript
import { createConfiguration, DistributionApi } from '';
import type { DistributionApiDistributionInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DistributionApi(configuration);

const request: DistributionApiDistributionInspectRequest = {
    // Image name or id
  name: "name_example",
};

const data = await apiInstance.distributionInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or id | defaults to undefined


### Return type

**DistributionInspect**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | descriptor and platform information |  -  |
**401** | Failed authentication or no image found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


