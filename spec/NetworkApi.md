# .NetworkApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkConnect**](NetworkApi.md#networkConnect) | **POST** /networks/{id}/connect | Connect a container to a network
[**networkCreate**](NetworkApi.md#networkCreate) | **POST** /networks/create | Create a network
[**networkDelete**](NetworkApi.md#networkDelete) | **DELETE** /networks/{id} | Remove a network
[**networkDisconnect**](NetworkApi.md#networkDisconnect) | **POST** /networks/{id}/disconnect | Disconnect a container from a network
[**networkInspect**](NetworkApi.md#networkInspect) | **GET** /networks/{id} | Inspect a network
[**networkList**](NetworkApi.md#networkList) | **GET** /networks | List networks
[**networkPrune**](NetworkApi.md#networkPrune) | **POST** /networks/prune | Delete unused networks


# **networkConnect**
> void networkConnect(container)

The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container

### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkConnectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkConnectRequest = {
    // Network ID or name
  id: "id_example",
  
  container: {
    container: "container_example",
    endpointConfig: {
      iPAMConfig: {
        iPv4Address: "172.20.30.33",
        iPv6Address: "2001:db8:abcd::3033",
        linkLocalIPs: [169.254.34.68, fe80::3468],
      },
      links: [container_1, container_2],
      macAddress: "02:42:ac:11:00:04",
      aliases: [server_x, server_y],
      driverOpts: {
        "key": "key_example",
      },
      networkID: "08754567f1f40222263eab4102e1c733ae697e8e354aa9cd6e18d7402835292a",
      endpointID: "b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b",
      gateway: "172.17.0.1",
      iPAddress: "172.17.0.4",
      iPPrefixLen: 16,
      iPv6Gateway: "2001:db8:2::100",
      globalIPv6Address: "2001:db8::5689",
      globalIPv6PrefixLen: 64,
      dNSNames: [foobar, server_x, server_y, my.ctr],
    },
  },
};

const data = await apiInstance.networkConnect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **container** | **NetworkConnectRequest**|  |
 **id** | [**string**] | Network ID or name | defaults to undefined


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
**200** | No error |  -  |
**400** | bad parameter |  -  |
**403** | Operation forbidden |  -  |
**404** | Network or container not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkCreate**
> NetworkCreateResponse networkCreate(networkConfig)


### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkCreateRequest = {
    // Network configuration
  networkConfig: {
    name: "my_network",
    driver: "bridge",
    scope: "scope_example",
    internal: true,
    attachable: true,
    ingress: false,
    configOnly: false,
    configFrom: {
      network: "config_only_network_01",
    },
    IPAM: {
      driver: "default",
      config: [
        {
          subnet: "172.20.0.0/16",
          iPRange: "172.20.10.0/24",
          gateway: "172.20.10.11",
          auxiliaryAddresses: {
            "key": "key_example",
          },
        },
      ],
      options: {
        "key": "key_example",
      },
    },
    enableIPv4: true,
    enableIPv6: true,
    options: {
      "key": "key_example",
    },
    labels: {
      "key": "key_example",
    },
  },
};

const data = await apiInstance.networkCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkConfig** | **NetworkCreateRequest**| Network configuration |


### Return type

**NetworkCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Network created successfully |  -  |
**400** | bad parameter |  -  |
**403** | Forbidden operation. This happens when trying to create a network named after a pre-defined network, or when trying to create an overlay network on a daemon which is not part of a Swarm cluster.  |  -  |
**404** | plugin not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDelete**
> void networkDelete()


### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkDeleteRequest = {
    // Network ID or name
  id: "id_example",
};

const data = await apiInstance.networkDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Network ID or name | defaults to undefined


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
**204** | No error |  -  |
**403** | operation not supported for pre-defined networks |  -  |
**404** | no such network |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDisconnect**
> void networkDisconnect(container)


### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkDisconnectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkDisconnectRequest = {
    // Network ID or name
  id: "id_example",
  
  container: {
    container: "container_example",
    force: true,
  },
};

const data = await apiInstance.networkDisconnect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **container** | **NetworkDisconnectRequest**|  |
 **id** | [**string**] | Network ID or name | defaults to undefined


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
**200** | No error |  -  |
**403** | Operation not supported for swarm scoped networks |  -  |
**404** | Network or container not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkInspect**
> Network networkInspect()


### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkInspectRequest = {
    // Network ID or name
  id: "id_example",
    // Detailed inspect output for troubleshooting (optional)
  verbose: false,
    // Filter the network by scope (swarm, global, or local) (optional)
  scope: "scope_example",
};

const data = await apiInstance.networkInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Network ID or name | defaults to undefined
 **verbose** | [**boolean**] | Detailed inspect output for troubleshooting | (optional) defaults to false
 **scope** | [**string**] | Filter the network by scope (swarm, global, or local) | (optional) defaults to undefined


### Return type

**Network**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**404** | Network not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkList**
> Array<Network> networkList()

Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 

### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkListRequest = {
    // JSON encoded value of the filters (a `map[string][]string`) to process on the networks list.  Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    networks that are not in use by a container. When set to `false`    (or `0`), only networks that are in use by one or more    containers are returned. - `driver=<driver-name>` Matches a network\'s driver. - `id=<network-id>` Matches all or part of a network ID. - `label=<key>` or `label=<key>=<value>` of a network label. - `name=<network-name>` Matches all or part of a network name. - `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`). - `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.networkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks.  | (optional) defaults to undefined


### Return type

**Array<Network>**

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

# **networkPrune**
> NetworkPruneResponse networkPrune()


### Example


```typescript
import { createConfiguration, NetworkApi } from '';
import type { NetworkApiNetworkPruneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkApi(configuration);

const request: NetworkApiNetworkPruneRequest = {
    // Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.networkPrune(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**NetworkPruneResponse**

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


