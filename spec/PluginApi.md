# .PluginApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPluginPrivileges**](PluginApi.md#getPluginPrivileges) | **GET** /plugins/privileges | Get plugin privileges
[**pluginCreate**](PluginApi.md#pluginCreate) | **POST** /plugins/create | Create a plugin
[**pluginDelete**](PluginApi.md#pluginDelete) | **DELETE** /plugins/{name} | Remove a plugin
[**pluginDisable**](PluginApi.md#pluginDisable) | **POST** /plugins/{name}/disable | Disable a plugin
[**pluginEnable**](PluginApi.md#pluginEnable) | **POST** /plugins/{name}/enable | Enable a plugin
[**pluginInspect**](PluginApi.md#pluginInspect) | **GET** /plugins/{name}/json | Inspect a plugin
[**pluginList**](PluginApi.md#pluginList) | **GET** /plugins | List plugins
[**pluginPull**](PluginApi.md#pluginPull) | **POST** /plugins/pull | Install a plugin
[**pluginPush**](PluginApi.md#pluginPush) | **POST** /plugins/{name}/push | Push a plugin
[**pluginSet**](PluginApi.md#pluginSet) | **POST** /plugins/{name}/set | Configure a plugin
[**pluginUpgrade**](PluginApi.md#pluginUpgrade) | **POST** /plugins/{name}/upgrade | Upgrade a plugin


# **getPluginPrivileges**
> Array<PluginPrivilege> getPluginPrivileges()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiGetPluginPrivilegesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiGetPluginPrivilegesRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  remote: "remote_example",
};

const data = await apiInstance.getPluginPrivileges(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remote** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined


### Return type

**Array<PluginPrivilege>**

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

# **pluginCreate**
> void pluginCreate()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginCreateRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
    // Path to tar containing plugin rootfs and manifest (optional)
  tarContext: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.pluginCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tarContext** | **HttpFile**| Path to tar containing plugin rootfs and manifest |
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginDelete**
> Plugin pluginDelete()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginDeleteRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
    // Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  (optional)
  force: false,
};

const data = await apiInstance.pluginDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined
 **force** | [**boolean**] | Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  | (optional) defaults to false


### Return type

**Plugin**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | plugin is not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginDisable**
> void pluginDisable()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginDisableRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginDisableRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
    // Force disable a plugin even if still in use.  (optional)
  force: true,
};

const data = await apiInstance.pluginDisable(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined
 **force** | [**boolean**] | Force disable a plugin even if still in use.  | (optional) defaults to undefined


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
**404** | plugin is not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginEnable**
> void pluginEnable()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginEnableRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginEnableRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
    // Set the HTTP client timeout (in seconds) (optional)
  timeout: 0,
};

const data = await apiInstance.pluginEnable(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined
 **timeout** | [**number**] | Set the HTTP client timeout (in seconds) | (optional) defaults to 0


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
**404** | plugin is not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginInspect**
> Plugin pluginInspect()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginInspectRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
};

const data = await apiInstance.pluginInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined


### Return type

**Plugin**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | plugin is not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginList**
> Array<Plugin> pluginList()

Returns information about installed plugins.

### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginListRequest = {
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>`  (optional)
  filters: "filters_example",
};

const data = await apiInstance.pluginList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60;  | (optional) defaults to undefined


### Return type

**Array<Plugin>**

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

# **pluginPull**
> void pluginPull()

Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 

### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginPullRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginPullRequest = {
    // Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted. 
  remote: "remote_example",
    // Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted.  (optional)
  name: "name_example",
    // A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
  xRegistryAuth: "X-Registry-Auth_example",
  
  body: [
    {
      name: "network",
      description: "description_example",
      value: [host],
    },
  ],
};

const data = await apiInstance.pluginPull(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array<PluginPrivilege>**|  |
 **remote** | [**string**] | Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | defaults to undefined
 **name** | [**string**] | Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | (optional) defaults to undefined
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginPush**
> void pluginPush()

Push a plugin to the registry. 

### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginPushRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginPushRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
};

const data = await apiInstance.pluginPush(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined


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
**404** | plugin not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginSet**
> void pluginSet()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginSetRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
  
  body: [DEBUG=1],
};

const data = await apiInstance.pluginSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array<string>**|  |
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No error |  -  |
**404** | Plugin not installed |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pluginUpgrade**
> void pluginUpgrade()


### Example


```typescript
import { createConfiguration, PluginApi } from '';
import type { PluginApiPluginUpgradeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginApi(configuration);

const request: PluginApiPluginUpgradeRequest = {
    // The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
  name: "name_example",
    // Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted. 
  remote: "remote_example",
    // A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
  xRegistryAuth: "X-Registry-Auth_example",
  
  body: [
    {
      name: "network",
      description: "description_example",
      value: [host],
    },
  ],
};

const data = await apiInstance.pluginUpgrade(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array<PluginPrivilege>**|  |
 **name** | [**string**] | The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | defaults to undefined
 **remote** | [**string**] | Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | defaults to undefined
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | (optional) defaults to undefined


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
**204** | no error |  -  |
**404** | plugin not installed |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


