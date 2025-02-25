# .SwarmApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**swarmInit**](SwarmApi.md#swarmInit) | **POST** /swarm/init | Initialize a new swarm
[**swarmInspect**](SwarmApi.md#swarmInspect) | **GET** /swarm | Inspect swarm
[**swarmJoin**](SwarmApi.md#swarmJoin) | **POST** /swarm/join | Join an existing swarm
[**swarmLeave**](SwarmApi.md#swarmLeave) | **POST** /swarm/leave | Leave a swarm
[**swarmUnlock**](SwarmApi.md#swarmUnlock) | **POST** /swarm/unlock | Unlock a locked manager
[**swarmUnlockkey**](SwarmApi.md#swarmUnlockkey) | **GET** /swarm/unlockkey | Get the unlock key
[**swarmUpdate**](SwarmApi.md#swarmUpdate) | **POST** /swarm/update | Update a swarm


# **swarmInit**
> string swarmInit(body)


### Example


```typescript
import { createConfiguration, SwarmApi } from '';
import type { SwarmApiSwarmInitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request: SwarmApiSwarmInitRequest = {
  
  body: {
    listenAddr: "listenAddr_example",
    advertiseAddr: "advertiseAddr_example",
    dataPathAddr: "dataPathAddr_example",
    dataPathPort: 1,
    defaultAddrPool: [
      "",
    ],
    forceNewCluster: true,
    subnetSize: 1,
    spec: {
      name: "default",
      labels: {
        "key": "key_example",
      },
      orchestration: {
        taskHistoryRetentionLimit: 10,
      },
      raft: {
        snapshotInterval: 10000,
        keepOldSnapshots: 1,
        logEntriesForSlowFollowers: 500,
        electionTick: 3,
        heartbeatTick: 1,
      },
      dispatcher: {
        heartbeatPeriod: 5000000000,
      },
      cAConfig: {
        nodeCertExpiry: 7776000000000000,
        externalCAs: [
          {
            protocol: "cfssl",
            URL: "URL_example",
            options: {
              "key": "key_example",
            },
            cACert: "cACert_example",
          },
        ],
        signingCACert: "signingCACert_example",
        signingCAKey: "signingCAKey_example",
        forceRotate: 1,
      },
      encryptionConfig: {
        autoLockManagers: false,
      },
      taskDefaults: {
        logDriver: {
          name: "json-file",
          options: {
            "key": "key_example",
          },
        },
      },
    },
  },
};

const data = await apiInstance.swarmInit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SwarmInitRequest**|  |


### Return type

**string**

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
**500** | server error |  -  |
**503** | node is already part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **swarmInspect**
> Swarm swarmInspect()


### Example


```typescript
import { createConfiguration, SwarmApi } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request = {};

const data = await apiInstance.swarmInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Swarm**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | no such swarm |  -  |
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **swarmJoin**
> void swarmJoin(body)


### Example


```typescript
import { createConfiguration, SwarmApi } from '';
import type { SwarmApiSwarmJoinRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request: SwarmApiSwarmJoinRequest = {
  
  body: {
    listenAddr: "listenAddr_example",
    advertiseAddr: "advertiseAddr_example",
    dataPathAddr: "dataPathAddr_example",
    remoteAddrs: [
      "remoteAddrs_example",
    ],
    joinToken: "joinToken_example",
  },
};

const data = await apiInstance.swarmJoin(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SwarmJoinRequest**|  |


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
**500** | server error |  -  |
**503** | node is already part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **swarmLeave**
> void swarmLeave()


### Example


```typescript
import { createConfiguration, SwarmApi } from '';
import type { SwarmApiSwarmLeaveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request: SwarmApiSwarmLeaveRequest = {
    // Force leave swarm, even if this is the last manager or that it will break the cluster.  (optional)
  force: false,
};

const data = await apiInstance.swarmLeave(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **force** | [**boolean**] | Force leave swarm, even if this is the last manager or that it will break the cluster.  | (optional) defaults to false


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
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **swarmUnlock**
> void swarmUnlock(body)


### Example


```typescript
import { createConfiguration, SwarmApi } from '';
import type { SwarmApiSwarmUnlockRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request: SwarmApiSwarmUnlockRequest = {
  
  body: {
    unlockKey: "unlockKey_example",
  },
};

const data = await apiInstance.swarmUnlock(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SwarmUnlockRequest**|  |


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
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **swarmUnlockkey**
> UnlockKeyResponse swarmUnlockkey()


### Example


```typescript
import { createConfiguration, SwarmApi } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request = {};

const data = await apiInstance.swarmUnlockkey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UnlockKeyResponse**

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

# **swarmUpdate**
> void swarmUpdate(body)


### Example


```typescript
import { createConfiguration, SwarmApi } from '';
import type { SwarmApiSwarmUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SwarmApi(configuration);

const request: SwarmApiSwarmUpdateRequest = {
    // The version number of the swarm object being updated. This is required to avoid conflicting writes. 
  version: 1,
  
  body: {
    name: "default",
    labels: {
      "key": "key_example",
    },
    orchestration: {
      taskHistoryRetentionLimit: 10,
    },
    raft: {
      snapshotInterval: 10000,
      keepOldSnapshots: 1,
      logEntriesForSlowFollowers: 500,
      electionTick: 3,
      heartbeatTick: 1,
    },
    dispatcher: {
      heartbeatPeriod: 5000000000,
    },
    cAConfig: {
      nodeCertExpiry: 7776000000000000,
      externalCAs: [
        {
          protocol: "cfssl",
          URL: "URL_example",
          options: {
            "key": "key_example",
          },
          cACert: "cACert_example",
        },
      ],
      signingCACert: "signingCACert_example",
      signingCAKey: "signingCAKey_example",
      forceRotate: 1,
    },
    encryptionConfig: {
      autoLockManagers: false,
    },
    taskDefaults: {
      logDriver: {
        name: "json-file",
        options: {
          "key": "key_example",
        },
      },
    },
  },
    // Rotate the worker join token. (optional)
  rotateWorkerToken: false,
    // Rotate the manager join token. (optional)
  rotateManagerToken: false,
    // Rotate the manager unlock key. (optional)
  rotateManagerUnlockKey: false,
};

const data = await apiInstance.swarmUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SwarmSpec**|  |
 **version** | [**number**] | The version number of the swarm object being updated. This is required to avoid conflicting writes.  | defaults to undefined
 **rotateWorkerToken** | [**boolean**] | Rotate the worker join token. | (optional) defaults to false
 **rotateManagerToken** | [**boolean**] | Rotate the manager join token. | (optional) defaults to false
 **rotateManagerUnlockKey** | [**boolean**] | Rotate the manager unlock key. | (optional) defaults to false


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
**500** | server error |  -  |
**503** | node is not part of a swarm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


