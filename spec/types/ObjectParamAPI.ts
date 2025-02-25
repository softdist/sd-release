import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { AuthConfig } from '../models/AuthConfig';
import { BuildCache } from '../models/BuildCache';
import { BuildInfo } from '../models/BuildInfo';
import { BuildPruneResponse } from '../models/BuildPruneResponse';
import { ChangeType } from '../models/ChangeType';
import { ClusterInfo } from '../models/ClusterInfo';
import { ClusterVolume } from '../models/ClusterVolume';
import { ClusterVolumeInfo } from '../models/ClusterVolumeInfo';
import { ClusterVolumePublishStatusInner } from '../models/ClusterVolumePublishStatusInner';
import { ClusterVolumeSpec } from '../models/ClusterVolumeSpec';
import { ClusterVolumeSpecAccessMode } from '../models/ClusterVolumeSpecAccessMode';
import { ClusterVolumeSpecAccessModeAccessibilityRequirements } from '../models/ClusterVolumeSpecAccessModeAccessibilityRequirements';
import { ClusterVolumeSpecAccessModeCapacityRange } from '../models/ClusterVolumeSpecAccessModeCapacityRange';
import { ClusterVolumeSpecAccessModeSecretsInner } from '../models/ClusterVolumeSpecAccessModeSecretsInner';
import { Commit } from '../models/Commit';
import { Config } from '../models/Config';
import { ConfigCreateRequest } from '../models/ConfigCreateRequest';
import { ConfigReference } from '../models/ConfigReference';
import { ConfigSpec } from '../models/ConfigSpec';
import { ContainerConfig } from '../models/ContainerConfig';
import { ContainerCreateRequest } from '../models/ContainerCreateRequest';
import { ContainerCreateResponse } from '../models/ContainerCreateResponse';
import { ContainerInspectResponse } from '../models/ContainerInspectResponse';
import { ContainerPruneResponse } from '../models/ContainerPruneResponse';
import { ContainerState } from '../models/ContainerState';
import { ContainerStatus } from '../models/ContainerStatus';
import { ContainerSummary } from '../models/ContainerSummary';
import { ContainerSummaryHostConfig } from '../models/ContainerSummaryHostConfig';
import { ContainerSummaryNetworkSettings } from '../models/ContainerSummaryNetworkSettings';
import { ContainerTopResponse } from '../models/ContainerTopResponse';
import { ContainerUpdateRequest } from '../models/ContainerUpdateRequest';
import { ContainerUpdateResponse } from '../models/ContainerUpdateResponse';
import { ContainerWaitExitError } from '../models/ContainerWaitExitError';
import { ContainerWaitResponse } from '../models/ContainerWaitResponse';
import { ContainerdInfo } from '../models/ContainerdInfo';
import { ContainerdInfoNamespaces } from '../models/ContainerdInfoNamespaces';
import { CreateImageInfo } from '../models/CreateImageInfo';
import { DeviceMapping } from '../models/DeviceMapping';
import { DeviceRequest } from '../models/DeviceRequest';
import { DistributionInspect } from '../models/DistributionInspect';
import { Driver } from '../models/Driver';
import { DriverData } from '../models/DriverData';
import { EndpointIPAMConfig } from '../models/EndpointIPAMConfig';
import { EndpointPortConfig } from '../models/EndpointPortConfig';
import { EndpointSettings } from '../models/EndpointSettings';
import { EndpointSpec } from '../models/EndpointSpec';
import { EngineDescription } from '../models/EngineDescription';
import { EngineDescriptionPluginsInner } from '../models/EngineDescriptionPluginsInner';
import { ErrorDetail } from '../models/ErrorDetail';
import { ErrorResponse } from '../models/ErrorResponse';
import { EventActor } from '../models/EventActor';
import { EventMessage } from '../models/EventMessage';
import { ExecConfig } from '../models/ExecConfig';
import { ExecInspectResponse } from '../models/ExecInspectResponse';
import { ExecStartConfig } from '../models/ExecStartConfig';
import { FilesystemChange } from '../models/FilesystemChange';
import { GenericResourcesInner } from '../models/GenericResourcesInner';
import { GenericResourcesInnerDiscreteResourceSpec } from '../models/GenericResourcesInnerDiscreteResourceSpec';
import { GenericResourcesInnerNamedResourceSpec } from '../models/GenericResourcesInnerNamedResourceSpec';
import { Health } from '../models/Health';
import { HealthConfig } from '../models/HealthConfig';
import { HealthcheckResult } from '../models/HealthcheckResult';
import { HistoryResponseItem } from '../models/HistoryResponseItem';
import { HostConfig } from '../models/HostConfig';
import { HostConfigAllOfLogConfig } from '../models/HostConfigAllOfLogConfig';
import { IPAM } from '../models/IPAM';
import { IPAMConfig } from '../models/IPAMConfig';
import { IdResponse } from '../models/IdResponse';
import { ImageConfig } from '../models/ImageConfig';
import { ImageDeleteResponseItem } from '../models/ImageDeleteResponseItem';
import { ImageID } from '../models/ImageID';
import { ImageInspect } from '../models/ImageInspect';
import { ImageInspectMetadata } from '../models/ImageInspectMetadata';
import { ImageInspectRootFS } from '../models/ImageInspectRootFS';
import { ImageManifestSummary } from '../models/ImageManifestSummary';
import { ImageManifestSummaryAttestationData } from '../models/ImageManifestSummaryAttestationData';
import { ImageManifestSummaryImageData } from '../models/ImageManifestSummaryImageData';
import { ImageManifestSummaryImageDataSize } from '../models/ImageManifestSummaryImageDataSize';
import { ImageManifestSummarySize } from '../models/ImageManifestSummarySize';
import { ImagePruneResponse } from '../models/ImagePruneResponse';
import { ImageSearchResponseItem } from '../models/ImageSearchResponseItem';
import { ImageSummary } from '../models/ImageSummary';
import { IndexInfo } from '../models/IndexInfo';
import { JoinTokens } from '../models/JoinTokens';
import { Limit } from '../models/Limit';
import { LocalNodeState } from '../models/LocalNodeState';
import { ManagerStatus } from '../models/ManagerStatus';
import { Mount } from '../models/Mount';
import { MountBindOptions } from '../models/MountBindOptions';
import { MountPoint } from '../models/MountPoint';
import { MountTmpfsOptions } from '../models/MountTmpfsOptions';
import { MountVolumeOptions } from '../models/MountVolumeOptions';
import { MountVolumeOptionsDriverConfig } from '../models/MountVolumeOptionsDriverConfig';
import { Network } from '../models/Network';
import { NetworkAttachmentConfig } from '../models/NetworkAttachmentConfig';
import { NetworkConnectRequest } from '../models/NetworkConnectRequest';
import { NetworkContainer } from '../models/NetworkContainer';
import { NetworkCreateRequest } from '../models/NetworkCreateRequest';
import { NetworkCreateResponse } from '../models/NetworkCreateResponse';
import { NetworkDisconnectRequest } from '../models/NetworkDisconnectRequest';
import { NetworkPruneResponse } from '../models/NetworkPruneResponse';
import { NetworkSettings } from '../models/NetworkSettings';
import { NetworkingConfig } from '../models/NetworkingConfig';
import { Node } from '../models/Node';
import { NodeDescription } from '../models/NodeDescription';
import { NodeSpec } from '../models/NodeSpec';
import { NodeState } from '../models/NodeState';
import { NodeStatus } from '../models/NodeStatus';
import { OCIDescriptor } from '../models/OCIDescriptor';
import { OCIPlatform } from '../models/OCIPlatform';
import { ObjectVersion } from '../models/ObjectVersion';
import { PeerInfo } from '../models/PeerInfo';
import { PeerNode } from '../models/PeerNode';
import { Platform } from '../models/Platform';
import { Plugin } from '../models/Plugin';
import { PluginConfig } from '../models/PluginConfig';
import { PluginConfigArgs } from '../models/PluginConfigArgs';
import { PluginConfigInterface } from '../models/PluginConfigInterface';
import { PluginConfigLinux } from '../models/PluginConfigLinux';
import { PluginConfigNetwork } from '../models/PluginConfigNetwork';
import { PluginConfigRootfs } from '../models/PluginConfigRootfs';
import { PluginConfigUser } from '../models/PluginConfigUser';
import { PluginDevice } from '../models/PluginDevice';
import { PluginEnv } from '../models/PluginEnv';
import { PluginInterfaceType } from '../models/PluginInterfaceType';
import { PluginMount } from '../models/PluginMount';
import { PluginPrivilege } from '../models/PluginPrivilege';
import { PluginSettings } from '../models/PluginSettings';
import { PluginsInfo } from '../models/PluginsInfo';
import { Port } from '../models/Port';
import { PortBinding } from '../models/PortBinding';
import { PortStatus } from '../models/PortStatus';
import { ProcessConfig } from '../models/ProcessConfig';
import { ProgressDetail } from '../models/ProgressDetail';
import { PushImageInfo } from '../models/PushImageInfo';
import { Reachability } from '../models/Reachability';
import { RegistryServiceConfig } from '../models/RegistryServiceConfig';
import { ResourceObject } from '../models/ResourceObject';
import { Resources } from '../models/Resources';
import { ResourcesBlkioWeightDeviceInner } from '../models/ResourcesBlkioWeightDeviceInner';
import { ResourcesUlimitsInner } from '../models/ResourcesUlimitsInner';
import { RestartPolicy } from '../models/RestartPolicy';
import { Runtime } from '../models/Runtime';
import { Secret } from '../models/Secret';
import { SecretCreateRequest } from '../models/SecretCreateRequest';
import { SecretSpec } from '../models/SecretSpec';
import { Service } from '../models/Service';
import { ServiceCreateRequest } from '../models/ServiceCreateRequest';
import { ServiceCreateResponse } from '../models/ServiceCreateResponse';
import { ServiceEndpoint } from '../models/ServiceEndpoint';
import { ServiceEndpointVirtualIPsInner } from '../models/ServiceEndpointVirtualIPsInner';
import { ServiceJobStatus } from '../models/ServiceJobStatus';
import { ServiceServiceStatus } from '../models/ServiceServiceStatus';
import { ServiceSpec } from '../models/ServiceSpec';
import { ServiceSpecMode } from '../models/ServiceSpecMode';
import { ServiceSpecModeReplicated } from '../models/ServiceSpecModeReplicated';
import { ServiceSpecModeReplicatedJob } from '../models/ServiceSpecModeReplicatedJob';
import { ServiceSpecRollbackConfig } from '../models/ServiceSpecRollbackConfig';
import { ServiceSpecUpdateConfig } from '../models/ServiceSpecUpdateConfig';
import { ServiceUpdateRequest } from '../models/ServiceUpdateRequest';
import { ServiceUpdateResponse } from '../models/ServiceUpdateResponse';
import { ServiceUpdateStatus } from '../models/ServiceUpdateStatus';
import { Swarm } from '../models/Swarm';
import { SwarmInfo } from '../models/SwarmInfo';
import { SwarmInitRequest } from '../models/SwarmInitRequest';
import { SwarmJoinRequest } from '../models/SwarmJoinRequest';
import { SwarmSpec } from '../models/SwarmSpec';
import { SwarmSpecCAConfig } from '../models/SwarmSpecCAConfig';
import { SwarmSpecCAConfigExternalCAsInner } from '../models/SwarmSpecCAConfigExternalCAsInner';
import { SwarmSpecDispatcher } from '../models/SwarmSpecDispatcher';
import { SwarmSpecEncryptionConfig } from '../models/SwarmSpecEncryptionConfig';
import { SwarmSpecOrchestration } from '../models/SwarmSpecOrchestration';
import { SwarmSpecRaft } from '../models/SwarmSpecRaft';
import { SwarmSpecTaskDefaults } from '../models/SwarmSpecTaskDefaults';
import { SwarmSpecTaskDefaultsLogDriver } from '../models/SwarmSpecTaskDefaultsLogDriver';
import { SwarmUnlockRequest } from '../models/SwarmUnlockRequest';
import { SystemAuthResponse } from '../models/SystemAuthResponse';
import { SystemDataUsageResponse } from '../models/SystemDataUsageResponse';
import { SystemInfo } from '../models/SystemInfo';
import { SystemInfoDefaultAddressPoolsInner } from '../models/SystemInfoDefaultAddressPoolsInner';
import { SystemVersion } from '../models/SystemVersion';
import { SystemVersionComponentsInner } from '../models/SystemVersionComponentsInner';
import { SystemVersionPlatform } from '../models/SystemVersionPlatform';
import { TLSInfo } from '../models/TLSInfo';
import { Task } from '../models/Task';
import { TaskSpec } from '../models/TaskSpec';
import { TaskSpecContainerSpec } from '../models/TaskSpecContainerSpec';
import { TaskSpecContainerSpecConfigsInner } from '../models/TaskSpecContainerSpecConfigsInner';
import { TaskSpecContainerSpecConfigsInnerFile } from '../models/TaskSpecContainerSpecConfigsInnerFile';
import { TaskSpecContainerSpecDNSConfig } from '../models/TaskSpecContainerSpecDNSConfig';
import { TaskSpecContainerSpecPrivileges } from '../models/TaskSpecContainerSpecPrivileges';
import { TaskSpecContainerSpecPrivilegesAppArmor } from '../models/TaskSpecContainerSpecPrivilegesAppArmor';
import { TaskSpecContainerSpecPrivilegesCredentialSpec } from '../models/TaskSpecContainerSpecPrivilegesCredentialSpec';
import { TaskSpecContainerSpecPrivilegesSELinuxContext } from '../models/TaskSpecContainerSpecPrivilegesSELinuxContext';
import { TaskSpecContainerSpecPrivilegesSeccomp } from '../models/TaskSpecContainerSpecPrivilegesSeccomp';
import { TaskSpecContainerSpecSecretsInner } from '../models/TaskSpecContainerSpecSecretsInner';
import { TaskSpecContainerSpecSecretsInnerFile } from '../models/TaskSpecContainerSpecSecretsInnerFile';
import { TaskSpecLogDriver } from '../models/TaskSpecLogDriver';
import { TaskSpecNetworkAttachmentSpec } from '../models/TaskSpecNetworkAttachmentSpec';
import { TaskSpecPlacement } from '../models/TaskSpecPlacement';
import { TaskSpecPlacementPreferencesInner } from '../models/TaskSpecPlacementPreferencesInner';
import { TaskSpecPlacementPreferencesInnerSpread } from '../models/TaskSpecPlacementPreferencesInnerSpread';
import { TaskSpecPluginSpec } from '../models/TaskSpecPluginSpec';
import { TaskSpecResources } from '../models/TaskSpecResources';
import { TaskSpecRestartPolicy } from '../models/TaskSpecRestartPolicy';
import { TaskState } from '../models/TaskState';
import { TaskStatus } from '../models/TaskStatus';
import { ThrottleDevice } from '../models/ThrottleDevice';
import { UnlockKeyResponse } from '../models/UnlockKeyResponse';
import { Volume } from '../models/Volume';
import { VolumeCreateOptions } from '../models/VolumeCreateOptions';
import { VolumeListResponse } from '../models/VolumeListResponse';
import { VolumePruneResponse } from '../models/VolumePruneResponse';
import { VolumeUpdateRequest } from '../models/VolumeUpdateRequest';
import { VolumeUsageData } from '../models/VolumeUsageData';

import { ObservableConfigApi } from "./ObservableAPI";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";

export interface ConfigApiConfigCreateRequest {
    /**
     * 
     * @type ConfigCreateRequest
     * @memberof ConfigApiconfigCreate
     */
    body?: ConfigCreateRequest
}

export interface ConfigApiConfigDeleteRequest {
    /**
     * ID of the config
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApiconfigDelete
     */
    id: string
}

export interface ConfigApiConfigInspectRequest {
    /**
     * ID of the config
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApiconfigInspect
     */
    id: string
}

export interface ConfigApiConfigListRequest {
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApiconfigList
     */
    filters?: string
}

export interface ConfigApiConfigUpdateRequest {
    /**
     * The ID or name of the config
     * Defaults to: undefined
     * @type string
     * @memberof ConfigApiconfigUpdate
     */
    id: string
    /**
     * The version number of the config object being updated. This is required to avoid conflicting writes. 
     * Defaults to: undefined
     * @type number
     * @memberof ConfigApiconfigUpdate
     */
    version: number
    /**
     * The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     * @type ConfigSpec
     * @memberof ConfigApiconfigUpdate
     */
    body?: ConfigSpec
}

export class ObjectConfigApi {
    private api: ObservableConfigApi

    public constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a config
     * @param param the request object
     */
    public configCreateWithHttpInfo(param: ConfigApiConfigCreateRequest = {}, options?: Configuration): Promise<HttpInfo<IdResponse>> {
        return this.api.configCreateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a config
     * @param param the request object
     */
    public configCreate(param: ConfigApiConfigCreateRequest = {}, options?: Configuration): Promise<IdResponse> {
        return this.api.configCreate(param.body,  options).toPromise();
    }

    /**
     * Delete a config
     * @param param the request object
     */
    public configDeleteWithHttpInfo(param: ConfigApiConfigDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.configDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a config
     * @param param the request object
     */
    public configDelete(param: ConfigApiConfigDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.configDelete(param.id,  options).toPromise();
    }

    /**
     * Inspect a config
     * @param param the request object
     */
    public configInspectWithHttpInfo(param: ConfigApiConfigInspectRequest, options?: Configuration): Promise<HttpInfo<Config>> {
        return this.api.configInspectWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Inspect a config
     * @param param the request object
     */
    public configInspect(param: ConfigApiConfigInspectRequest, options?: Configuration): Promise<Config> {
        return this.api.configInspect(param.id,  options).toPromise();
    }

    /**
     * List configs
     * @param param the request object
     */
    public configListWithHttpInfo(param: ConfigApiConfigListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Config>>> {
        return this.api.configListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * List configs
     * @param param the request object
     */
    public configList(param: ConfigApiConfigListRequest = {}, options?: Configuration): Promise<Array<Config>> {
        return this.api.configList(param.filters,  options).toPromise();
    }

    /**
     * Update a Config
     * @param param the request object
     */
    public configUpdateWithHttpInfo(param: ConfigApiConfigUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.configUpdateWithHttpInfo(param.id, param.version, param.body,  options).toPromise();
    }

    /**
     * Update a Config
     * @param param the request object
     */
    public configUpdate(param: ConfigApiConfigUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.configUpdate(param.id, param.version, param.body,  options).toPromise();
    }

}

import { ObservableContainerApi } from "./ObservableAPI";
import { ContainerApiRequestFactory, ContainerApiResponseProcessor} from "../apis/ContainerApi";

export interface ContainerApiContainerArchiveRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerArchive
     */
    id: string
    /**
     * Resource in the container’s filesystem to archive.
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerArchive
     */
    path: string
}

export interface ContainerApiContainerArchiveInfoRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerArchiveInfo
     */
    id: string
    /**
     * Resource in the container’s filesystem to archive.
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerArchiveInfo
     */
    path: string
}

export interface ContainerApiContainerAttachRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerAttach
     */
    id: string
    /**
     * Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerAttach
     */
    detachKeys?: string
    /**
     * Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If &#x60;stream&#x60; is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output. 
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttach
     */
    logs?: boolean
    /**
     * Stream attached streams from the time the request was made onwards. 
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttach
     */
    stream?: boolean
    /**
     * Attach to &#x60;stdin&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttach
     */
    stdin?: boolean
    /**
     * Attach to &#x60;stdout&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttach
     */
    stdout?: boolean
    /**
     * Attach to &#x60;stderr&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttach
     */
    stderr?: boolean
}

export interface ContainerApiContainerAttachWebsocketRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerAttachWebsocket
     */
    id: string
    /**
     * Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60;, or &#x60;_&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerAttachWebsocket
     */
    detachKeys?: string
    /**
     * Return logs
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttachWebsocket
     */
    logs?: boolean
    /**
     * Return stream
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttachWebsocket
     */
    stream?: boolean
    /**
     * Attach to &#x60;stdin&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttachWebsocket
     */
    stdin?: boolean
    /**
     * Attach to &#x60;stdout&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttachWebsocket
     */
    stdout?: boolean
    /**
     * Attach to &#x60;stderr&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerAttachWebsocket
     */
    stderr?: boolean
}

export interface ContainerApiContainerChangesRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerChanges
     */
    id: string
}

export interface ContainerApiContainerCreateRequest {
    /**
     * Container to create
     * @type ContainerCreateRequest
     * @memberof ContainerApicontainerCreate
     */
    body: ContainerCreateRequest
    /**
     * Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerCreate
     */
    name?: string
    /**
     * Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerCreate
     */
    platform?: string
}

export interface ContainerApiContainerDeleteRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerDelete
     */
    id: string
    /**
     * Remove anonymous volumes associated with the container.
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerDelete
     */
    v?: boolean
    /**
     * If the container is running, kill it before removing it.
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerDelete
     */
    force?: boolean
    /**
     * Remove the specified link associated with the container.
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerDelete
     */
    link?: boolean
}

export interface ContainerApiContainerExportRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerExport
     */
    id: string
}

export interface ContainerApiContainerInspectRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerInspect
     */
    id: string
    /**
     * Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerInspect
     */
    size?: boolean
}

export interface ContainerApiContainerKillRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerKill
     */
    id: string
    /**
     * Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * Defaults to: &#39;SIGKILL&#39;
     * @type string
     * @memberof ContainerApicontainerKill
     */
    signal?: string
}

export interface ContainerApiContainerListRequest {
    /**
     * Return all containers. By default, only running containers are shown. 
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerList
     */
    all?: boolean
    /**
     * Return this number of most recently created containers, including non-running ones. 
     * Defaults to: undefined
     * @type number
     * @memberof ContainerApicontainerList
     */
    limit?: number
    /**
     * Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;. 
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerList
     */
    size?: boolean
    /**
     * Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerList
     */
    filters?: string
}

export interface ContainerApiContainerLogsRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerLogs
     */
    id: string
    /**
     * Keep connection after returning logs.
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerLogs
     */
    follow?: boolean
    /**
     * Return logs from &#x60;stdout&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerLogs
     */
    stdout?: boolean
    /**
     * Return logs from &#x60;stderr&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerLogs
     */
    stderr?: boolean
    /**
     * Only return logs since this time, as a UNIX timestamp
     * Defaults to: 0
     * @type number
     * @memberof ContainerApicontainerLogs
     */
    since?: number
    /**
     * Only return logs before this time, as a UNIX timestamp
     * Defaults to: 0
     * @type number
     * @memberof ContainerApicontainerLogs
     */
    until?: number
    /**
     * Add timestamps to every log line
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerLogs
     */
    timestamps?: boolean
    /**
     * Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     * Defaults to: &#39;all&#39;
     * @type string
     * @memberof ContainerApicontainerLogs
     */
    tail?: string
}

export interface ContainerApiContainerPauseRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerPause
     */
    id: string
}

export interface ContainerApiContainerPruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerPrune
     */
    filters?: string
}

export interface ContainerApiContainerRenameRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerRename
     */
    id: string
    /**
     * New name for the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerRename
     */
    name: string
}

export interface ContainerApiContainerResizeRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerResize
     */
    id: string
    /**
     * Height of the TTY session in characters
     * Defaults to: undefined
     * @type number
     * @memberof ContainerApicontainerResize
     */
    h: number
    /**
     * Width of the TTY session in characters
     * Defaults to: undefined
     * @type number
     * @memberof ContainerApicontainerResize
     */
    w: number
}

export interface ContainerApiContainerRestartRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerRestart
     */
    id: string
    /**
     * Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerRestart
     */
    signal?: string
    /**
     * Number of seconds to wait before killing the container
     * Defaults to: undefined
     * @type number
     * @memberof ContainerApicontainerRestart
     */
    t?: number
}

export interface ContainerApiContainerStartRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerStart
     */
    id: string
    /**
     * Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerStart
     */
    detachKeys?: string
}

export interface ContainerApiContainerStatsRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerStats
     */
    id: string
    /**
     * Stream the output. If false, the stats will be output once and then it will disconnect. 
     * Defaults to: true
     * @type boolean
     * @memberof ContainerApicontainerStats
     */
    stream?: boolean
    /**
     * Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;. 
     * Defaults to: false
     * @type boolean
     * @memberof ContainerApicontainerStats
     */
    oneShot?: boolean
}

export interface ContainerApiContainerStopRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerStop
     */
    id: string
    /**
     * Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerStop
     */
    signal?: string
    /**
     * Number of seconds to wait before killing the container
     * Defaults to: undefined
     * @type number
     * @memberof ContainerApicontainerStop
     */
    t?: number
}

export interface ContainerApiContainerTopRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerTop
     */
    id: string
    /**
     * The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60;
     * Defaults to: &#39;-ef&#39;
     * @type string
     * @memberof ContainerApicontainerTop
     */
    psArgs?: string
}

export interface ContainerApiContainerUnpauseRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerUnpause
     */
    id: string
}

export interface ContainerApiContainerUpdateRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerUpdate
     */
    id: string
    /**
     * 
     * @type ContainerUpdateRequest
     * @memberof ContainerApicontainerUpdate
     */
    update: ContainerUpdateRequest
}

export interface ContainerApiContainerWaitRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApicontainerWait
     */
    id: string
    /**
     * Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty. 
     * Defaults to: &#39;not-running&#39;
     * @type &#39;not-running&#39; | &#39;next-exit&#39; | &#39;removed&#39;
     * @memberof ContainerApicontainerWait
     */
    condition?: 'not-running' | 'next-exit' | 'removed'
}

export interface ContainerApiPutContainerArchiveRequest {
    /**
     * ID or name of the container
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApiputContainerArchive
     */
    id: string
    /**
     * Path to a directory in the container to extract the archive’s contents into. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApiputContainerArchive
     */
    path: string
    /**
     * The input stream must be a tar archive compressed with one of the following algorithms: &#x60;identity&#x60; (no compression), &#x60;gzip&#x60;, &#x60;bzip2&#x60;, or &#x60;xz&#x60;. 
     * @type HttpFile
     * @memberof ContainerApiputContainerArchive
     */
    inputStream: HttpFile
    /**
     * If &#x60;1&#x60;, &#x60;true&#x60;, or &#x60;True&#x60; then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApiputContainerArchive
     */
    noOverwriteDirNonDir?: string
    /**
     * If &#x60;1&#x60;, &#x60;true&#x60;, then it will copy UID/GID maps to the dest file or dir 
     * Defaults to: undefined
     * @type string
     * @memberof ContainerApiputContainerArchive
     */
    copyUIDGID?: string
}

export class ObjectContainerApi {
    private api: ObservableContainerApi

    public constructor(configuration: Configuration, requestFactory?: ContainerApiRequestFactory, responseProcessor?: ContainerApiResponseProcessor) {
        this.api = new ObservableContainerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param param the request object
     */
    public containerArchiveWithHttpInfo(param: ContainerApiContainerArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerArchiveWithHttpInfo(param.id, param.path,  options).toPromise();
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param param the request object
     */
    public containerArchive(param: ContainerApiContainerArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.containerArchive(param.id, param.path,  options).toPromise();
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param param the request object
     */
    public containerArchiveInfoWithHttpInfo(param: ContainerApiContainerArchiveInfoRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerArchiveInfoWithHttpInfo(param.id, param.path,  options).toPromise();
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param param the request object
     */
    public containerArchiveInfo(param: ContainerApiContainerArchiveInfoRequest, options?: Configuration): Promise<void> {
        return this.api.containerArchiveInfo(param.id, param.path,  options).toPromise();
    }

    /**
     * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream and the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`. 
     * Attach to a container
     * @param param the request object
     */
    public containerAttachWithHttpInfo(param: ContainerApiContainerAttachRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerAttachWithHttpInfo(param.id, param.detachKeys, param.logs, param.stream, param.stdin, param.stdout, param.stderr,  options).toPromise();
    }

    /**
     * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream and the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`. 
     * Attach to a container
     * @param param the request object
     */
    public containerAttach(param: ContainerApiContainerAttachRequest, options?: Configuration): Promise<void> {
        return this.api.containerAttach(param.id, param.detachKeys, param.logs, param.stream, param.stdin, param.stdout, param.stderr,  options).toPromise();
    }

    /**
     * Attach to a container via a websocket
     * @param param the request object
     */
    public containerAttachWebsocketWithHttpInfo(param: ContainerApiContainerAttachWebsocketRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerAttachWebsocketWithHttpInfo(param.id, param.detachKeys, param.logs, param.stream, param.stdin, param.stdout, param.stderr,  options).toPromise();
    }

    /**
     * Attach to a container via a websocket
     * @param param the request object
     */
    public containerAttachWebsocket(param: ContainerApiContainerAttachWebsocketRequest, options?: Configuration): Promise<void> {
        return this.api.containerAttachWebsocket(param.id, param.detachKeys, param.logs, param.stream, param.stdin, param.stdout, param.stderr,  options).toPromise();
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param param the request object
     */
    public containerChangesWithHttpInfo(param: ContainerApiContainerChangesRequest, options?: Configuration): Promise<HttpInfo<Array<FilesystemChange>>> {
        return this.api.containerChangesWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param param the request object
     */
    public containerChanges(param: ContainerApiContainerChangesRequest, options?: Configuration): Promise<Array<FilesystemChange>> {
        return this.api.containerChanges(param.id,  options).toPromise();
    }

    /**
     * Create a container
     * @param param the request object
     */
    public containerCreateWithHttpInfo(param: ContainerApiContainerCreateRequest, options?: Configuration): Promise<HttpInfo<ContainerCreateResponse>> {
        return this.api.containerCreateWithHttpInfo(param.body, param.name, param.platform,  options).toPromise();
    }

    /**
     * Create a container
     * @param param the request object
     */
    public containerCreate(param: ContainerApiContainerCreateRequest, options?: Configuration): Promise<ContainerCreateResponse> {
        return this.api.containerCreate(param.body, param.name, param.platform,  options).toPromise();
    }

    /**
     * Remove a container
     * @param param the request object
     */
    public containerDeleteWithHttpInfo(param: ContainerApiContainerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerDeleteWithHttpInfo(param.id, param.v, param.force, param.link,  options).toPromise();
    }

    /**
     * Remove a container
     * @param param the request object
     */
    public containerDelete(param: ContainerApiContainerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.containerDelete(param.id, param.v, param.force, param.link,  options).toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param param the request object
     */
    public containerExportWithHttpInfo(param: ContainerApiContainerExportRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerExportWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param param the request object
     */
    public containerExport(param: ContainerApiContainerExportRequest, options?: Configuration): Promise<void> {
        return this.api.containerExport(param.id,  options).toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param param the request object
     */
    public containerInspectWithHttpInfo(param: ContainerApiContainerInspectRequest, options?: Configuration): Promise<HttpInfo<ContainerInspectResponse>> {
        return this.api.containerInspectWithHttpInfo(param.id, param.size,  options).toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param param the request object
     */
    public containerInspect(param: ContainerApiContainerInspectRequest, options?: Configuration): Promise<ContainerInspectResponse> {
        return this.api.containerInspect(param.id, param.size,  options).toPromise();
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param param the request object
     */
    public containerKillWithHttpInfo(param: ContainerApiContainerKillRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerKillWithHttpInfo(param.id, param.signal,  options).toPromise();
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param param the request object
     */
    public containerKill(param: ContainerApiContainerKillRequest, options?: Configuration): Promise<void> {
        return this.api.containerKill(param.id, param.signal,  options).toPromise();
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param param the request object
     */
    public containerListWithHttpInfo(param: ContainerApiContainerListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ContainerSummary>>> {
        return this.api.containerListWithHttpInfo(param.all, param.limit, param.size, param.filters,  options).toPromise();
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param param the request object
     */
    public containerList(param: ContainerApiContainerListRequest = {}, options?: Configuration): Promise<Array<ContainerSummary>> {
        return this.api.containerList(param.all, param.limit, param.size, param.filters,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 
     * Get container logs
     * @param param the request object
     */
    public containerLogsWithHttpInfo(param: ContainerApiContainerLogsRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.containerLogsWithHttpInfo(param.id, param.follow, param.stdout, param.stderr, param.since, param.until, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 
     * Get container logs
     * @param param the request object
     */
    public containerLogs(param: ContainerApiContainerLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.containerLogs(param.id, param.follow, param.stdout, param.stderr, param.since, param.until, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param param the request object
     */
    public containerPauseWithHttpInfo(param: ContainerApiContainerPauseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerPauseWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param param the request object
     */
    public containerPause(param: ContainerApiContainerPauseRequest, options?: Configuration): Promise<void> {
        return this.api.containerPause(param.id,  options).toPromise();
    }

    /**
     * Delete stopped containers
     * @param param the request object
     */
    public containerPruneWithHttpInfo(param: ContainerApiContainerPruneRequest = {}, options?: Configuration): Promise<HttpInfo<ContainerPruneResponse>> {
        return this.api.containerPruneWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Delete stopped containers
     * @param param the request object
     */
    public containerPrune(param: ContainerApiContainerPruneRequest = {}, options?: Configuration): Promise<ContainerPruneResponse> {
        return this.api.containerPrune(param.filters,  options).toPromise();
    }

    /**
     * Rename a container
     * @param param the request object
     */
    public containerRenameWithHttpInfo(param: ContainerApiContainerRenameRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerRenameWithHttpInfo(param.id, param.name,  options).toPromise();
    }

    /**
     * Rename a container
     * @param param the request object
     */
    public containerRename(param: ContainerApiContainerRenameRequest, options?: Configuration): Promise<void> {
        return this.api.containerRename(param.id, param.name,  options).toPromise();
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param param the request object
     */
    public containerResizeWithHttpInfo(param: ContainerApiContainerResizeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerResizeWithHttpInfo(param.id, param.h, param.w,  options).toPromise();
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param param the request object
     */
    public containerResize(param: ContainerApiContainerResizeRequest, options?: Configuration): Promise<void> {
        return this.api.containerResize(param.id, param.h, param.w,  options).toPromise();
    }

    /**
     * Restart a container
     * @param param the request object
     */
    public containerRestartWithHttpInfo(param: ContainerApiContainerRestartRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerRestartWithHttpInfo(param.id, param.signal, param.t,  options).toPromise();
    }

    /**
     * Restart a container
     * @param param the request object
     */
    public containerRestart(param: ContainerApiContainerRestartRequest, options?: Configuration): Promise<void> {
        return this.api.containerRestart(param.id, param.signal, param.t,  options).toPromise();
    }

    /**
     * Start a container
     * @param param the request object
     */
    public containerStartWithHttpInfo(param: ContainerApiContainerStartRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerStartWithHttpInfo(param.id, param.detachKeys,  options).toPromise();
    }

    /**
     * Start a container
     * @param param the request object
     */
    public containerStart(param: ContainerApiContainerStartRequest, options?: Configuration): Promise<void> {
        return this.api.containerStart(param.id, param.detachKeys,  options).toPromise();
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param param the request object
     */
    public containerStatsWithHttpInfo(param: ContainerApiContainerStatsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.containerStatsWithHttpInfo(param.id, param.stream, param.oneShot,  options).toPromise();
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param param the request object
     */
    public containerStats(param: ContainerApiContainerStatsRequest, options?: Configuration): Promise<any> {
        return this.api.containerStats(param.id, param.stream, param.oneShot,  options).toPromise();
    }

    /**
     * Stop a container
     * @param param the request object
     */
    public containerStopWithHttpInfo(param: ContainerApiContainerStopRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerStopWithHttpInfo(param.id, param.signal, param.t,  options).toPromise();
    }

    /**
     * Stop a container
     * @param param the request object
     */
    public containerStop(param: ContainerApiContainerStopRequest, options?: Configuration): Promise<void> {
        return this.api.containerStop(param.id, param.signal, param.t,  options).toPromise();
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param param the request object
     */
    public containerTopWithHttpInfo(param: ContainerApiContainerTopRequest, options?: Configuration): Promise<HttpInfo<ContainerTopResponse>> {
        return this.api.containerTopWithHttpInfo(param.id, param.psArgs,  options).toPromise();
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param param the request object
     */
    public containerTop(param: ContainerApiContainerTopRequest, options?: Configuration): Promise<ContainerTopResponse> {
        return this.api.containerTop(param.id, param.psArgs,  options).toPromise();
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param param the request object
     */
    public containerUnpauseWithHttpInfo(param: ContainerApiContainerUnpauseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.containerUnpauseWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param param the request object
     */
    public containerUnpause(param: ContainerApiContainerUnpauseRequest, options?: Configuration): Promise<void> {
        return this.api.containerUnpause(param.id,  options).toPromise();
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param param the request object
     */
    public containerUpdateWithHttpInfo(param: ContainerApiContainerUpdateRequest, options?: Configuration): Promise<HttpInfo<ContainerUpdateResponse>> {
        return this.api.containerUpdateWithHttpInfo(param.id, param.update,  options).toPromise();
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param param the request object
     */
    public containerUpdate(param: ContainerApiContainerUpdateRequest, options?: Configuration): Promise<ContainerUpdateResponse> {
        return this.api.containerUpdate(param.id, param.update,  options).toPromise();
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param param the request object
     */
    public containerWaitWithHttpInfo(param: ContainerApiContainerWaitRequest, options?: Configuration): Promise<HttpInfo<ContainerWaitResponse>> {
        return this.api.containerWaitWithHttpInfo(param.id, param.condition,  options).toPromise();
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param param the request object
     */
    public containerWait(param: ContainerApiContainerWaitRequest, options?: Configuration): Promise<ContainerWaitResponse> {
        return this.api.containerWait(param.id, param.condition,  options).toPromise();
    }

    /**
     * Upload a tar archive to be extracted to a path in the filesystem of container id. `path` parameter is asserted to be a directory. If it exists as a file, 400 error will be returned with message \"not a directory\". 
     * Extract an archive of files or folders to a directory in a container
     * @param param the request object
     */
    public putContainerArchiveWithHttpInfo(param: ContainerApiPutContainerArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.putContainerArchiveWithHttpInfo(param.id, param.path, param.inputStream, param.noOverwriteDirNonDir, param.copyUIDGID,  options).toPromise();
    }

    /**
     * Upload a tar archive to be extracted to a path in the filesystem of container id. `path` parameter is asserted to be a directory. If it exists as a file, 400 error will be returned with message \"not a directory\". 
     * Extract an archive of files or folders to a directory in a container
     * @param param the request object
     */
    public putContainerArchive(param: ContainerApiPutContainerArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.putContainerArchive(param.id, param.path, param.inputStream, param.noOverwriteDirNonDir, param.copyUIDGID,  options).toPromise();
    }

}

import { ObservableDistributionApi } from "./ObservableAPI";
import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";

export interface DistributionApiDistributionInspectRequest {
    /**
     * Image name or id
     * Defaults to: undefined
     * @type string
     * @memberof DistributionApidistributionInspect
     */
    name: string
}

export class ObjectDistributionApi {
    private api: ObservableDistributionApi

    public constructor(configuration: Configuration, requestFactory?: DistributionApiRequestFactory, responseProcessor?: DistributionApiResponseProcessor) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param param the request object
     */
    public distributionInspectWithHttpInfo(param: DistributionApiDistributionInspectRequest, options?: Configuration): Promise<HttpInfo<DistributionInspect>> {
        return this.api.distributionInspectWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param param the request object
     */
    public distributionInspect(param: DistributionApiDistributionInspectRequest, options?: Configuration): Promise<DistributionInspect> {
        return this.api.distributionInspect(param.name,  options).toPromise();
    }

}

import { ObservableExecApi } from "./ObservableAPI";
import { ExecApiRequestFactory, ExecApiResponseProcessor} from "../apis/ExecApi";

export interface ExecApiContainerExecRequest {
    /**
     * ID or name of container
     * Defaults to: undefined
     * @type string
     * @memberof ExecApicontainerExec
     */
    id: string
    /**
     * Exec configuration
     * @type ExecConfig
     * @memberof ExecApicontainerExec
     */
    execConfig: ExecConfig
}

export interface ExecApiExecInspectRequest {
    /**
     * Exec instance ID
     * Defaults to: undefined
     * @type string
     * @memberof ExecApiexecInspect
     */
    id: string
}

export interface ExecApiExecResizeRequest {
    /**
     * Exec instance ID
     * Defaults to: undefined
     * @type string
     * @memberof ExecApiexecResize
     */
    id: string
    /**
     * Height of the TTY session in characters
     * Defaults to: undefined
     * @type number
     * @memberof ExecApiexecResize
     */
    h: number
    /**
     * Width of the TTY session in characters
     * Defaults to: undefined
     * @type number
     * @memberof ExecApiexecResize
     */
    w: number
}

export interface ExecApiExecStartRequest {
    /**
     * Exec instance ID
     * Defaults to: undefined
     * @type string
     * @memberof ExecApiexecStart
     */
    id: string
    /**
     * 
     * @type ExecStartConfig
     * @memberof ExecApiexecStart
     */
    execStartConfig?: ExecStartConfig
}

export class ObjectExecApi {
    private api: ObservableExecApi

    public constructor(configuration: Configuration, requestFactory?: ExecApiRequestFactory, responseProcessor?: ExecApiResponseProcessor) {
        this.api = new ObservableExecApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param param the request object
     */
    public containerExecWithHttpInfo(param: ExecApiContainerExecRequest, options?: Configuration): Promise<HttpInfo<IdResponse>> {
        return this.api.containerExecWithHttpInfo(param.id, param.execConfig,  options).toPromise();
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param param the request object
     */
    public containerExec(param: ExecApiContainerExecRequest, options?: Configuration): Promise<IdResponse> {
        return this.api.containerExec(param.id, param.execConfig,  options).toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param param the request object
     */
    public execInspectWithHttpInfo(param: ExecApiExecInspectRequest, options?: Configuration): Promise<HttpInfo<ExecInspectResponse>> {
        return this.api.execInspectWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param param the request object
     */
    public execInspect(param: ExecApiExecInspectRequest, options?: Configuration): Promise<ExecInspectResponse> {
        return this.api.execInspect(param.id,  options).toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param param the request object
     */
    public execResizeWithHttpInfo(param: ExecApiExecResizeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.execResizeWithHttpInfo(param.id, param.h, param.w,  options).toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param param the request object
     */
    public execResize(param: ExecApiExecResizeRequest, options?: Configuration): Promise<void> {
        return this.api.execResize(param.id, param.h, param.w,  options).toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param param the request object
     */
    public execStartWithHttpInfo(param: ExecApiExecStartRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.execStartWithHttpInfo(param.id, param.execStartConfig,  options).toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param param the request object
     */
    public execStart(param: ExecApiExecStartRequest, options?: Configuration): Promise<void> {
        return this.api.execStart(param.id, param.execStartConfig,  options).toPromise();
    }

}

import { ObservableImageApi } from "./ObservableAPI";
import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";

export interface ImageApiBuildPruneRequest {
    /**
     * Amount of disk space in bytes to keep for cache
     * Defaults to: undefined
     * @type number
     * @memberof ImageApibuildPrune
     */
    keepStorage?: number
    /**
     * Remove all types of build cache
     * Defaults to: undefined
     * @type boolean
     * @memberof ImageApibuildPrune
     */
    all?: boolean
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApibuildPrune
     */
    filters?: string
}

export interface ImageApiImageBuildRequest {
    /**
     * Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if &#x60;remote&#x60; is specified and points to an external &#x60;Dockerfile&#x60;.
     * Defaults to: &#39;Dockerfile&#39;
     * @type string
     * @memberof ImageApiimageBuild
     */
    dockerfile?: string
    /**
     * A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default &#x60;latest&#x60; value is assumed. You can provide several &#x60;t&#x60; parameters.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    t?: string
    /**
     * Extra hosts to add to /etc/hosts
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    extrahosts?: string
    /**
     * A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called &#x60;Dockerfile&#x60; and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the &#x60;dockerfile&#x60; parameter is also specified, there must be a file with the corresponding path inside the tarball.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    remote?: string
    /**
     * Suppress verbose build output.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageBuild
     */
    q?: boolean
    /**
     * Do not use the cache when building the image.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageBuild
     */
    nocache?: boolean
    /**
     * JSON array of images used for build cache resolution.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    cachefrom?: string
    /**
     * Attempt to pull the image even if an older image exists locally.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    pull?: string
    /**
     * Remove intermediate containers after a successful build.
     * Defaults to: true
     * @type boolean
     * @memberof ImageApiimageBuild
     */
    rm?: boolean
    /**
     * Always remove intermediate containers, even upon failure.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageBuild
     */
    forcerm?: boolean
    /**
     * Set memory limit for build.
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    memory?: number
    /**
     * Total memory (memory + swap). Set as &#x60;-1&#x60; to disable swap.
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    memswap?: number
    /**
     * CPU shares (relative weight).
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    cpushares?: number
    /**
     * CPUs in which to allow execution (e.g., &#x60;0-3&#x60;, &#x60;0,1&#x60;).
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    cpusetcpus?: string
    /**
     * The length of a CPU period in microseconds.
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    cpuperiod?: number
    /**
     * Microseconds of CPU time that the container can get in a CPU period.
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    cpuquota?: number
    /**
     * JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the &#x60;Dockerfile&#x60; RUN instruction, or for variable expansion in other &#x60;Dockerfile&#x60; instructions. This is not meant for passing secret values.  For example, the build arg &#x60;FOO&#x3D;bar&#x60; would become &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; in JSON. This would result in the query parameter &#x60;buildargs&#x3D;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60;. Note that &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg) 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    buildargs?: string
    /**
     * Size of &#x60;/dev/shm&#x60; in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageBuild
     */
    shmsize?: number
    /**
     * Squash the resulting images layers into a single layer. *(Experimental release only.)*
     * Defaults to: undefined
     * @type boolean
     * @memberof ImageApiimageBuild
     */
    squash?: boolean
    /**
     * Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    labels?: string
    /**
     * Sets the networking mode for the run commands during build. Supported standard values are: &#x60;bridge&#x60;, &#x60;host&#x60;, &#x60;none&#x60;, and &#x60;container:&lt;name|id&gt;&#x60;. Any other value is taken as a custom network\&#39;s name or ID to which this container should connect to. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    networkmode?: string
    /**
     * 
     * Defaults to: &#39;application/x-tar&#39;
     * @type &#39;application/x-tar&#39;
     * @memberof ImageApiimageBuild
     */
    contentType?: 'application/x-tar'
    /**
     * This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  &#x60;&#x60;&#x60; {   \&quot;docker.example.com\&quot;: {     \&quot;username\&quot;: \&quot;janedoe\&quot;,     \&quot;password\&quot;: \&quot;hunter2\&quot;   },   \&quot;https://index.docker.io/v1/\&quot;: {     \&quot;username\&quot;: \&quot;mobydock\&quot;,     \&quot;password\&quot;: \&quot;conta1n3rize14\&quot;   } } &#x60;&#x60;&#x60;  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a &#x60;https://&#x60; prefix and a &#x60;/v1/&#x60; suffix even though Docker will prefer to use the v2 registry API. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    xRegistryConfig?: string
    /**
     * Platform in the format os[/arch[/variant]]
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    platform?: string
    /**
     * Target build stage
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    target?: string
    /**
     * BuildKit output configuration
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageBuild
     */
    outputs?: string
    /**
     * Version of the builder backend to use.  - &#x60;1&#x60; is the first generation classic (deprecated) builder in the Docker daemon (default) - &#x60;2&#x60; is [BuildKit](https://github.com/moby/buildkit) 
     * Defaults to: &#39;1&#39;
     * @type &#39;1&#39; | &#39;2&#39;
     * @memberof ImageApiimageBuild
     */
    version?: '1' | '2'
    /**
     * A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     * @type HttpFile
     * @memberof ImageApiimageBuild
     */
    inputStream?: HttpFile
}

export interface ImageApiImageCommitRequest {
    /**
     * The ID or name of the container to commit
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    container?: string
    /**
     * Repository name for the created image
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    repo?: string
    /**
     * Tag name for the create image
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    tag?: string
    /**
     * Commit message
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    comment?: string
    /**
     * Author of the image (e.g., &#x60;John Hannibal Smith &lt;hannibal@a-team.com&gt;&#x60;)
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    author?: string
    /**
     * Whether to pause the container before committing
     * Defaults to: true
     * @type boolean
     * @memberof ImageApiimageCommit
     */
    pause?: boolean
    /**
     * &#x60;Dockerfile&#x60; instructions to apply while committing
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCommit
     */
    changes?: string
    /**
     * The container configuration
     * @type ContainerConfig
     * @memberof ImageApiimageCommit
     */
    containerConfig?: ContainerConfig
}

export interface ImageApiImageCreateRequest {
    /**
     * Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    fromImage?: string
    /**
     * Source to import. The value may be a URL from which the image can be retrieved or &#x60;-&#x60; to read the image from the request body. This parameter may only be used when importing an image.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    fromSrc?: string
    /**
     * Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    repo?: string
    /**
     * Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    tag?: string
    /**
     * Set commit message for imported image.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    message?: string
    /**
     * A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    xRegistryAuth?: string
    /**
     * Apply &#x60;Dockerfile&#x60; instructions to the image that is created, for example: &#x60;changes&#x3D;ENV DEBUG&#x3D;true&#x60;. Note that &#x60;ENV DEBUG&#x3D;true&#x60; should be URI component encoded.  Supported &#x60;Dockerfile&#x60; instructions: &#x60;CMD&#x60;|&#x60;ENTRYPOINT&#x60;|&#x60;ENV&#x60;|&#x60;EXPOSE&#x60;|&#x60;ONBUILD&#x60;|&#x60;USER&#x60;|&#x60;VOLUME&#x60;|&#x60;WORKDIR&#x60; 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ImageApiimageCreate
     */
    changes?: Array<string>
    /**
     * Platform in the format os[/arch[/variant]].  When used in combination with the &#x60;fromImage&#x60; option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host\&#39;s native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host\&#39;s native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the &#x60;fromSrc&#x60; option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host\&#39;s native OS and Architecture are used for the imported image. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageCreate
     */
    platform?: string
    /**
     * Image content if the value &#x60;-&#x60; has been specified in fromSrc query parameter
     * @type string
     * @memberof ImageApiimageCreate
     */
    inputImage?: string
}

export interface ImageApiImageDeleteRequest {
    /**
     * Image name or ID
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageDelete
     */
    name: string
    /**
     * Remove the image even if it is being used by stopped containers or has other tags
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageDelete
     */
    force?: boolean
    /**
     * Do not delete untagged parent images
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageDelete
     */
    noprune?: boolean
}

export interface ImageApiImageGetRequest {
    /**
     * Image name or ID
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageGet
     */
    name: string
}

export interface ImageApiImageGetAllRequest {
    /**
     * Image names to filter by
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ImageApiimageGetAll
     */
    names?: Array<string>
}

export interface ImageApiImageHistoryRequest {
    /**
     * Image name or ID
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageHistory
     */
    name: string
}

export interface ImageApiImageInspectRequest {
    /**
     * Image name or id
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageInspect
     */
    name: string
}

export interface ImageApiImageListRequest {
    /**
     * Show all images. Only images from a final layer (no children) are shown by default.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageList
     */
    all?: boolean
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list.  Available filters:  - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageList
     */
    filters?: string
    /**
     * Compute and show shared size as a &#x60;SharedSize&#x60; field on each image.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageList
     */
    sharedSize?: boolean
    /**
     * Show digest information as a &#x60;RepoDigests&#x60; field on each image.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageList
     */
    digests?: boolean
    /**
     * Include &#x60;Manifests&#x60; in the image summary.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageList
     */
    manifests?: boolean
}

export interface ImageApiImageLoadRequest {
    /**
     * Suppress progress details during load.
     * Defaults to: false
     * @type boolean
     * @memberof ImageApiimageLoad
     */
    quiet?: boolean
    /**
     * Tar archive containing images
     * @type HttpFile
     * @memberof ImageApiimageLoad
     */
    imagesTarball?: HttpFile
}

export interface ImageApiImagePruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimagePrune
     */
    filters?: string
}

export interface ImageApiImagePushRequest {
    /**
     * Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimagePush
     */
    name: string
    /**
     * A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimagePush
     */
    xRegistryAuth: string
    /**
     * Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimagePush
     */
    tag?: string
    /**
     * JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimagePush
     */
    platform?: string
}

export interface ImageApiImageSearchRequest {
    /**
     * Term to search
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageSearch
     */
    term: string
    /**
     * Maximum number of results to return
     * Defaults to: undefined
     * @type number
     * @memberof ImageApiimageSearch
     */
    limit?: number
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars. 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageSearch
     */
    filters?: string
}

export interface ImageApiImageTagRequest {
    /**
     * Image name or ID to tag.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageTag
     */
    name: string
    /**
     * The repository to tag in. For example, &#x60;someuser/someimage&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageTag
     */
    repo?: string
    /**
     * The name of the new tag.
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiimageTag
     */
    tag?: string
}

export class ObjectImageApi {
    private api: ObservableImageApi

    public constructor(configuration: Configuration, requestFactory?: ImageApiRequestFactory, responseProcessor?: ImageApiResponseProcessor) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete builder cache
     * @param param the request object
     */
    public buildPruneWithHttpInfo(param: ImageApiBuildPruneRequest = {}, options?: Configuration): Promise<HttpInfo<BuildPruneResponse>> {
        return this.api.buildPruneWithHttpInfo(param.keepStorage, param.all, param.filters,  options).toPromise();
    }

    /**
     * Delete builder cache
     * @param param the request object
     */
    public buildPrune(param: ImageApiBuildPruneRequest = {}, options?: Configuration): Promise<BuildPruneResponse> {
        return this.api.buildPrune(param.keepStorage, param.all, param.filters,  options).toPromise();
    }

    /**
     * Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive\'s root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
     * Build an image
     * @param param the request object
     */
    public imageBuildWithHttpInfo(param: ImageApiImageBuildRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.imageBuildWithHttpInfo(param.dockerfile, param.t, param.extrahosts, param.remote, param.q, param.nocache, param.cachefrom, param.pull, param.rm, param.forcerm, param.memory, param.memswap, param.cpushares, param.cpusetcpus, param.cpuperiod, param.cpuquota, param.buildargs, param.shmsize, param.squash, param.labels, param.networkmode, param.contentType, param.xRegistryConfig, param.platform, param.target, param.outputs, param.version, param.inputStream,  options).toPromise();
    }

    /**
     * Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive\'s root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
     * Build an image
     * @param param the request object
     */
    public imageBuild(param: ImageApiImageBuildRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imageBuild(param.dockerfile, param.t, param.extrahosts, param.remote, param.q, param.nocache, param.cachefrom, param.pull, param.rm, param.forcerm, param.memory, param.memswap, param.cpushares, param.cpusetcpus, param.cpuperiod, param.cpuquota, param.buildargs, param.shmsize, param.squash, param.labels, param.networkmode, param.contentType, param.xRegistryConfig, param.platform, param.target, param.outputs, param.version, param.inputStream,  options).toPromise();
    }

    /**
     * Create a new image from a container
     * @param param the request object
     */
    public imageCommitWithHttpInfo(param: ImageApiImageCommitRequest = {}, options?: Configuration): Promise<HttpInfo<IdResponse>> {
        return this.api.imageCommitWithHttpInfo(param.container, param.repo, param.tag, param.comment, param.author, param.pause, param.changes, param.containerConfig,  options).toPromise();
    }

    /**
     * Create a new image from a container
     * @param param the request object
     */
    public imageCommit(param: ImageApiImageCommitRequest = {}, options?: Configuration): Promise<IdResponse> {
        return this.api.imageCommit(param.container, param.repo, param.tag, param.comment, param.author, param.pause, param.changes, param.containerConfig,  options).toPromise();
    }

    /**
     * Pull or import an image.
     * Create an image
     * @param param the request object
     */
    public imageCreateWithHttpInfo(param: ImageApiImageCreateRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.imageCreateWithHttpInfo(param.fromImage, param.fromSrc, param.repo, param.tag, param.message, param.xRegistryAuth, param.changes, param.platform, param.inputImage,  options).toPromise();
    }

    /**
     * Pull or import an image.
     * Create an image
     * @param param the request object
     */
    public imageCreate(param: ImageApiImageCreateRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imageCreate(param.fromImage, param.fromSrc, param.repo, param.tag, param.message, param.xRegistryAuth, param.changes, param.platform, param.inputImage,  options).toPromise();
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param param the request object
     */
    public imageDeleteWithHttpInfo(param: ImageApiImageDeleteRequest, options?: Configuration): Promise<HttpInfo<Array<ImageDeleteResponseItem>>> {
        return this.api.imageDeleteWithHttpInfo(param.name, param.force, param.noprune,  options).toPromise();
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param param the request object
     */
    public imageDelete(param: ImageApiImageDeleteRequest, options?: Configuration): Promise<Array<ImageDeleteResponseItem>> {
        return this.api.imageDelete(param.name, param.force, param.noprune,  options).toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param param the request object
     */
    public imageGetWithHttpInfo(param: ImageApiImageGetRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.imageGetWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param param the request object
     */
    public imageGet(param: ImageApiImageGetRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imageGet(param.name,  options).toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param param the request object
     */
    public imageGetAllWithHttpInfo(param: ImageApiImageGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.imageGetAllWithHttpInfo(param.names,  options).toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param param the request object
     */
    public imageGetAll(param: ImageApiImageGetAllRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.imageGetAll(param.names,  options).toPromise();
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param param the request object
     */
    public imageHistoryWithHttpInfo(param: ImageApiImageHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<HistoryResponseItem>>> {
        return this.api.imageHistoryWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param param the request object
     */
    public imageHistory(param: ImageApiImageHistoryRequest, options?: Configuration): Promise<Array<HistoryResponseItem>> {
        return this.api.imageHistory(param.name,  options).toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param param the request object
     */
    public imageInspectWithHttpInfo(param: ImageApiImageInspectRequest, options?: Configuration): Promise<HttpInfo<ImageInspect>> {
        return this.api.imageInspectWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param param the request object
     */
    public imageInspect(param: ImageApiImageInspectRequest, options?: Configuration): Promise<ImageInspect> {
        return this.api.imageInspect(param.name,  options).toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param param the request object
     */
    public imageListWithHttpInfo(param: ImageApiImageListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ImageSummary>>> {
        return this.api.imageListWithHttpInfo(param.all, param.filters, param.sharedSize, param.digests, param.manifests,  options).toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param param the request object
     */
    public imageList(param: ImageApiImageListRequest = {}, options?: Configuration): Promise<Array<ImageSummary>> {
        return this.api.imageList(param.all, param.filters, param.sharedSize, param.digests, param.manifests,  options).toPromise();
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param param the request object
     */
    public imageLoadWithHttpInfo(param: ImageApiImageLoadRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.imageLoadWithHttpInfo(param.quiet, param.imagesTarball,  options).toPromise();
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param param the request object
     */
    public imageLoad(param: ImageApiImageLoadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imageLoad(param.quiet, param.imagesTarball,  options).toPromise();
    }

    /**
     * Delete unused images
     * @param param the request object
     */
    public imagePruneWithHttpInfo(param: ImageApiImagePruneRequest = {}, options?: Configuration): Promise<HttpInfo<ImagePruneResponse>> {
        return this.api.imagePruneWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Delete unused images
     * @param param the request object
     */
    public imagePrune(param: ImageApiImagePruneRequest = {}, options?: Configuration): Promise<ImagePruneResponse> {
        return this.api.imagePrune(param.filters,  options).toPromise();
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param param the request object
     */
    public imagePushWithHttpInfo(param: ImageApiImagePushRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.imagePushWithHttpInfo(param.name, param.xRegistryAuth, param.tag, param.platform,  options).toPromise();
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param param the request object
     */
    public imagePush(param: ImageApiImagePushRequest, options?: Configuration): Promise<void> {
        return this.api.imagePush(param.name, param.xRegistryAuth, param.tag, param.platform,  options).toPromise();
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param param the request object
     */
    public imageSearchWithHttpInfo(param: ImageApiImageSearchRequest, options?: Configuration): Promise<HttpInfo<Array<ImageSearchResponseItem>>> {
        return this.api.imageSearchWithHttpInfo(param.term, param.limit, param.filters,  options).toPromise();
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param param the request object
     */
    public imageSearch(param: ImageApiImageSearchRequest, options?: Configuration): Promise<Array<ImageSearchResponseItem>> {
        return this.api.imageSearch(param.term, param.limit, param.filters,  options).toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param param the request object
     */
    public imageTagWithHttpInfo(param: ImageApiImageTagRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.imageTagWithHttpInfo(param.name, param.repo, param.tag,  options).toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param param the request object
     */
    public imageTag(param: ImageApiImageTagRequest, options?: Configuration): Promise<void> {
        return this.api.imageTag(param.name, param.repo, param.tag,  options).toPromise();
    }

}

import { ObservableNetworkApi } from "./ObservableAPI";
import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";

export interface NetworkApiNetworkConnectRequest {
    /**
     * Network ID or name
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkConnect
     */
    id: string
    /**
     * 
     * @type NetworkConnectRequest
     * @memberof NetworkApinetworkConnect
     */
    container: NetworkConnectRequest
}

export interface NetworkApiNetworkCreateRequest {
    /**
     * Network configuration
     * @type NetworkCreateRequest
     * @memberof NetworkApinetworkCreate
     */
    networkConfig: NetworkCreateRequest
}

export interface NetworkApiNetworkDeleteRequest {
    /**
     * Network ID or name
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkDelete
     */
    id: string
}

export interface NetworkApiNetworkDisconnectRequest {
    /**
     * Network ID or name
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkDisconnect
     */
    id: string
    /**
     * 
     * @type NetworkDisconnectRequest
     * @memberof NetworkApinetworkDisconnect
     */
    container: NetworkDisconnectRequest
}

export interface NetworkApiNetworkInspectRequest {
    /**
     * Network ID or name
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkInspect
     */
    id: string
    /**
     * Detailed inspect output for troubleshooting
     * Defaults to: false
     * @type boolean
     * @memberof NetworkApinetworkInspect
     */
    verbose?: boolean
    /**
     * Filter the network by scope (swarm, global, or local)
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkInspect
     */
    scope?: string
}

export interface NetworkApiNetworkListRequest {
    /**
     * JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks. 
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkList
     */
    filters?: string
}

export interface NetworkApiNetworkPruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * Defaults to: undefined
     * @type string
     * @memberof NetworkApinetworkPrune
     */
    filters?: string
}

export class ObjectNetworkApi {
    private api: ObservableNetworkApi

    public constructor(configuration: Configuration, requestFactory?: NetworkApiRequestFactory, responseProcessor?: NetworkApiResponseProcessor) {
        this.api = new ObservableNetworkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param param the request object
     */
    public networkConnectWithHttpInfo(param: NetworkApiNetworkConnectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.networkConnectWithHttpInfo(param.id, param.container,  options).toPromise();
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param param the request object
     */
    public networkConnect(param: NetworkApiNetworkConnectRequest, options?: Configuration): Promise<void> {
        return this.api.networkConnect(param.id, param.container,  options).toPromise();
    }

    /**
     * Create a network
     * @param param the request object
     */
    public networkCreateWithHttpInfo(param: NetworkApiNetworkCreateRequest, options?: Configuration): Promise<HttpInfo<NetworkCreateResponse>> {
        return this.api.networkCreateWithHttpInfo(param.networkConfig,  options).toPromise();
    }

    /**
     * Create a network
     * @param param the request object
     */
    public networkCreate(param: NetworkApiNetworkCreateRequest, options?: Configuration): Promise<NetworkCreateResponse> {
        return this.api.networkCreate(param.networkConfig,  options).toPromise();
    }

    /**
     * Remove a network
     * @param param the request object
     */
    public networkDeleteWithHttpInfo(param: NetworkApiNetworkDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.networkDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Remove a network
     * @param param the request object
     */
    public networkDelete(param: NetworkApiNetworkDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.networkDelete(param.id,  options).toPromise();
    }

    /**
     * Disconnect a container from a network
     * @param param the request object
     */
    public networkDisconnectWithHttpInfo(param: NetworkApiNetworkDisconnectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.networkDisconnectWithHttpInfo(param.id, param.container,  options).toPromise();
    }

    /**
     * Disconnect a container from a network
     * @param param the request object
     */
    public networkDisconnect(param: NetworkApiNetworkDisconnectRequest, options?: Configuration): Promise<void> {
        return this.api.networkDisconnect(param.id, param.container,  options).toPromise();
    }

    /**
     * Inspect a network
     * @param param the request object
     */
    public networkInspectWithHttpInfo(param: NetworkApiNetworkInspectRequest, options?: Configuration): Promise<HttpInfo<Network>> {
        return this.api.networkInspectWithHttpInfo(param.id, param.verbose, param.scope,  options).toPromise();
    }

    /**
     * Inspect a network
     * @param param the request object
     */
    public networkInspect(param: NetworkApiNetworkInspectRequest, options?: Configuration): Promise<Network> {
        return this.api.networkInspect(param.id, param.verbose, param.scope,  options).toPromise();
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param param the request object
     */
    public networkListWithHttpInfo(param: NetworkApiNetworkListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Network>>> {
        return this.api.networkListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param param the request object
     */
    public networkList(param: NetworkApiNetworkListRequest = {}, options?: Configuration): Promise<Array<Network>> {
        return this.api.networkList(param.filters,  options).toPromise();
    }

    /**
     * Delete unused networks
     * @param param the request object
     */
    public networkPruneWithHttpInfo(param: NetworkApiNetworkPruneRequest = {}, options?: Configuration): Promise<HttpInfo<NetworkPruneResponse>> {
        return this.api.networkPruneWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Delete unused networks
     * @param param the request object
     */
    public networkPrune(param: NetworkApiNetworkPruneRequest = {}, options?: Configuration): Promise<NetworkPruneResponse> {
        return this.api.networkPrune(param.filters,  options).toPromise();
    }

}

import { ObservableNodeApi } from "./ObservableAPI";
import { NodeApiRequestFactory, NodeApiResponseProcessor} from "../apis/NodeApi";

export interface NodeApiNodeDeleteRequest {
    /**
     * The ID or name of the node
     * Defaults to: undefined
     * @type string
     * @memberof NodeApinodeDelete
     */
    id: string
    /**
     * Force remove a node from the swarm
     * Defaults to: false
     * @type boolean
     * @memberof NodeApinodeDelete
     */
    force?: boolean
}

export interface NodeApiNodeInspectRequest {
    /**
     * The ID or name of the node
     * Defaults to: undefined
     * @type string
     * @memberof NodeApinodeInspect
     */
    id: string
}

export interface NodeApiNodeListRequest {
    /**
     * Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof NodeApinodeList
     */
    filters?: string
}

export interface NodeApiNodeUpdateRequest {
    /**
     * The ID of the node
     * Defaults to: undefined
     * @type string
     * @memberof NodeApinodeUpdate
     */
    id: string
    /**
     * The version number of the node object being updated. This is required to avoid conflicting writes. 
     * Defaults to: undefined
     * @type number
     * @memberof NodeApinodeUpdate
     */
    version: number
    /**
     * 
     * @type NodeSpec
     * @memberof NodeApinodeUpdate
     */
    body?: NodeSpec
}

export class ObjectNodeApi {
    private api: ObservableNodeApi

    public constructor(configuration: Configuration, requestFactory?: NodeApiRequestFactory, responseProcessor?: NodeApiResponseProcessor) {
        this.api = new ObservableNodeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a node
     * @param param the request object
     */
    public nodeDeleteWithHttpInfo(param: NodeApiNodeDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.nodeDeleteWithHttpInfo(param.id, param.force,  options).toPromise();
    }

    /**
     * Delete a node
     * @param param the request object
     */
    public nodeDelete(param: NodeApiNodeDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.nodeDelete(param.id, param.force,  options).toPromise();
    }

    /**
     * Inspect a node
     * @param param the request object
     */
    public nodeInspectWithHttpInfo(param: NodeApiNodeInspectRequest, options?: Configuration): Promise<HttpInfo<Node>> {
        return this.api.nodeInspectWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Inspect a node
     * @param param the request object
     */
    public nodeInspect(param: NodeApiNodeInspectRequest, options?: Configuration): Promise<Node> {
        return this.api.nodeInspect(param.id,  options).toPromise();
    }

    /**
     * List nodes
     * @param param the request object
     */
    public nodeListWithHttpInfo(param: NodeApiNodeListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Node>>> {
        return this.api.nodeListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * List nodes
     * @param param the request object
     */
    public nodeList(param: NodeApiNodeListRequest = {}, options?: Configuration): Promise<Array<Node>> {
        return this.api.nodeList(param.filters,  options).toPromise();
    }

    /**
     * Update a node
     * @param param the request object
     */
    public nodeUpdateWithHttpInfo(param: NodeApiNodeUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.nodeUpdateWithHttpInfo(param.id, param.version, param.body,  options).toPromise();
    }

    /**
     * Update a node
     * @param param the request object
     */
    public nodeUpdate(param: NodeApiNodeUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.nodeUpdate(param.id, param.version, param.body,  options).toPromise();
    }

}

import { ObservablePluginApi } from "./ObservableAPI";
import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";

export interface PluginApiGetPluginPrivilegesRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApigetPluginPrivileges
     */
    remote: string
}

export interface PluginApiPluginCreateRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginCreate
     */
    name: string
    /**
     * Path to tar containing plugin rootfs and manifest
     * @type HttpFile
     * @memberof PluginApipluginCreate
     */
    tarContext?: HttpFile
}

export interface PluginApiPluginDeleteRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginDelete
     */
    name: string
    /**
     * Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
     * Defaults to: false
     * @type boolean
     * @memberof PluginApipluginDelete
     */
    force?: boolean
}

export interface PluginApiPluginDisableRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginDisable
     */
    name: string
    /**
     * Force disable a plugin even if still in use. 
     * Defaults to: undefined
     * @type boolean
     * @memberof PluginApipluginDisable
     */
    force?: boolean
}

export interface PluginApiPluginEnableRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginEnable
     */
    name: string
    /**
     * Set the HTTP client timeout (in seconds)
     * Defaults to: 0
     * @type number
     * @memberof PluginApipluginEnable
     */
    timeout?: number
}

export interface PluginApiPluginInspectRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginInspect
     */
    name: string
}

export interface PluginApiPluginListRequest {
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginList
     */
    filters?: string
}

export interface PluginApiPluginPullRequest {
    /**
     * Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginPull
     */
    remote: string
    /**
     * Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginPull
     */
    name?: string
    /**
     * A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginPull
     */
    xRegistryAuth?: string
    /**
     * 
     * @type Array&lt;PluginPrivilege&gt;
     * @memberof PluginApipluginPull
     */
    body?: Array<PluginPrivilege>
}

export interface PluginApiPluginPushRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginPush
     */
    name: string
}

export interface PluginApiPluginSetRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginSet
     */
    name: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PluginApipluginSet
     */
    body?: Array<string>
}

export interface PluginApiPluginUpgradeRequest {
    /**
     * The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginUpgrade
     */
    name: string
    /**
     * Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginUpgrade
     */
    remote: string
    /**
     * A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof PluginApipluginUpgrade
     */
    xRegistryAuth?: string
    /**
     * 
     * @type Array&lt;PluginPrivilege&gt;
     * @memberof PluginApipluginUpgrade
     */
    body?: Array<PluginPrivilege>
}

export class ObjectPluginApi {
    private api: ObservablePluginApi

    public constructor(configuration: Configuration, requestFactory?: PluginApiRequestFactory, responseProcessor?: PluginApiResponseProcessor) {
        this.api = new ObservablePluginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get plugin privileges
     * @param param the request object
     */
    public getPluginPrivilegesWithHttpInfo(param: PluginApiGetPluginPrivilegesRequest, options?: Configuration): Promise<HttpInfo<Array<PluginPrivilege>>> {
        return this.api.getPluginPrivilegesWithHttpInfo(param.remote,  options).toPromise();
    }

    /**
     * Get plugin privileges
     * @param param the request object
     */
    public getPluginPrivileges(param: PluginApiGetPluginPrivilegesRequest, options?: Configuration): Promise<Array<PluginPrivilege>> {
        return this.api.getPluginPrivileges(param.remote,  options).toPromise();
    }

    /**
     * Create a plugin
     * @param param the request object
     */
    public pluginCreateWithHttpInfo(param: PluginApiPluginCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginCreateWithHttpInfo(param.name, param.tarContext,  options).toPromise();
    }

    /**
     * Create a plugin
     * @param param the request object
     */
    public pluginCreate(param: PluginApiPluginCreateRequest, options?: Configuration): Promise<void> {
        return this.api.pluginCreate(param.name, param.tarContext,  options).toPromise();
    }

    /**
     * Remove a plugin
     * @param param the request object
     */
    public pluginDeleteWithHttpInfo(param: PluginApiPluginDeleteRequest, options?: Configuration): Promise<HttpInfo<Plugin>> {
        return this.api.pluginDeleteWithHttpInfo(param.name, param.force,  options).toPromise();
    }

    /**
     * Remove a plugin
     * @param param the request object
     */
    public pluginDelete(param: PluginApiPluginDeleteRequest, options?: Configuration): Promise<Plugin> {
        return this.api.pluginDelete(param.name, param.force,  options).toPromise();
    }

    /**
     * Disable a plugin
     * @param param the request object
     */
    public pluginDisableWithHttpInfo(param: PluginApiPluginDisableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginDisableWithHttpInfo(param.name, param.force,  options).toPromise();
    }

    /**
     * Disable a plugin
     * @param param the request object
     */
    public pluginDisable(param: PluginApiPluginDisableRequest, options?: Configuration): Promise<void> {
        return this.api.pluginDisable(param.name, param.force,  options).toPromise();
    }

    /**
     * Enable a plugin
     * @param param the request object
     */
    public pluginEnableWithHttpInfo(param: PluginApiPluginEnableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginEnableWithHttpInfo(param.name, param.timeout,  options).toPromise();
    }

    /**
     * Enable a plugin
     * @param param the request object
     */
    public pluginEnable(param: PluginApiPluginEnableRequest, options?: Configuration): Promise<void> {
        return this.api.pluginEnable(param.name, param.timeout,  options).toPromise();
    }

    /**
     * Inspect a plugin
     * @param param the request object
     */
    public pluginInspectWithHttpInfo(param: PluginApiPluginInspectRequest, options?: Configuration): Promise<HttpInfo<Plugin>> {
        return this.api.pluginInspectWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Inspect a plugin
     * @param param the request object
     */
    public pluginInspect(param: PluginApiPluginInspectRequest, options?: Configuration): Promise<Plugin> {
        return this.api.pluginInspect(param.name,  options).toPromise();
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param param the request object
     */
    public pluginListWithHttpInfo(param: PluginApiPluginListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Plugin>>> {
        return this.api.pluginListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param param the request object
     */
    public pluginList(param: PluginApiPluginListRequest = {}, options?: Configuration): Promise<Array<Plugin>> {
        return this.api.pluginList(param.filters,  options).toPromise();
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param param the request object
     */
    public pluginPullWithHttpInfo(param: PluginApiPluginPullRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginPullWithHttpInfo(param.remote, param.name, param.xRegistryAuth, param.body,  options).toPromise();
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param param the request object
     */
    public pluginPull(param: PluginApiPluginPullRequest, options?: Configuration): Promise<void> {
        return this.api.pluginPull(param.remote, param.name, param.xRegistryAuth, param.body,  options).toPromise();
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param param the request object
     */
    public pluginPushWithHttpInfo(param: PluginApiPluginPushRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginPushWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param param the request object
     */
    public pluginPush(param: PluginApiPluginPushRequest, options?: Configuration): Promise<void> {
        return this.api.pluginPush(param.name,  options).toPromise();
    }

    /**
     * Configure a plugin
     * @param param the request object
     */
    public pluginSetWithHttpInfo(param: PluginApiPluginSetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginSetWithHttpInfo(param.name, param.body,  options).toPromise();
    }

    /**
     * Configure a plugin
     * @param param the request object
     */
    public pluginSet(param: PluginApiPluginSetRequest, options?: Configuration): Promise<void> {
        return this.api.pluginSet(param.name, param.body,  options).toPromise();
    }

    /**
     * Upgrade a plugin
     * @param param the request object
     */
    public pluginUpgradeWithHttpInfo(param: PluginApiPluginUpgradeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pluginUpgradeWithHttpInfo(param.name, param.remote, param.xRegistryAuth, param.body,  options).toPromise();
    }

    /**
     * Upgrade a plugin
     * @param param the request object
     */
    public pluginUpgrade(param: PluginApiPluginUpgradeRequest, options?: Configuration): Promise<void> {
        return this.api.pluginUpgrade(param.name, param.remote, param.xRegistryAuth, param.body,  options).toPromise();
    }

}

import { ObservableSecretApi } from "./ObservableAPI";
import { SecretApiRequestFactory, SecretApiResponseProcessor} from "../apis/SecretApi";

export interface SecretApiSecretCreateRequest {
    /**
     * 
     * @type SecretCreateRequest
     * @memberof SecretApisecretCreate
     */
    body?: SecretCreateRequest
}

export interface SecretApiSecretDeleteRequest {
    /**
     * ID of the secret
     * Defaults to: undefined
     * @type string
     * @memberof SecretApisecretDelete
     */
    id: string
}

export interface SecretApiSecretInspectRequest {
    /**
     * ID of the secret
     * Defaults to: undefined
     * @type string
     * @memberof SecretApisecretInspect
     */
    id: string
}

export interface SecretApiSecretListRequest {
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof SecretApisecretList
     */
    filters?: string
}

export interface SecretApiSecretUpdateRequest {
    /**
     * The ID or name of the secret
     * Defaults to: undefined
     * @type string
     * @memberof SecretApisecretUpdate
     */
    id: string
    /**
     * The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * Defaults to: undefined
     * @type number
     * @memberof SecretApisecretUpdate
     */
    version: number
    /**
     * The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     * @type SecretSpec
     * @memberof SecretApisecretUpdate
     */
    body?: SecretSpec
}

export class ObjectSecretApi {
    private api: ObservableSecretApi

    public constructor(configuration: Configuration, requestFactory?: SecretApiRequestFactory, responseProcessor?: SecretApiResponseProcessor) {
        this.api = new ObservableSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param param the request object
     */
    public secretCreateWithHttpInfo(param: SecretApiSecretCreateRequest = {}, options?: Configuration): Promise<HttpInfo<IdResponse>> {
        return this.api.secretCreateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a secret
     * @param param the request object
     */
    public secretCreate(param: SecretApiSecretCreateRequest = {}, options?: Configuration): Promise<IdResponse> {
        return this.api.secretCreate(param.body,  options).toPromise();
    }

    /**
     * Delete a secret
     * @param param the request object
     */
    public secretDeleteWithHttpInfo(param: SecretApiSecretDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.secretDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a secret
     * @param param the request object
     */
    public secretDelete(param: SecretApiSecretDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.secretDelete(param.id,  options).toPromise();
    }

    /**
     * Inspect a secret
     * @param param the request object
     */
    public secretInspectWithHttpInfo(param: SecretApiSecretInspectRequest, options?: Configuration): Promise<HttpInfo<Secret>> {
        return this.api.secretInspectWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Inspect a secret
     * @param param the request object
     */
    public secretInspect(param: SecretApiSecretInspectRequest, options?: Configuration): Promise<Secret> {
        return this.api.secretInspect(param.id,  options).toPromise();
    }

    /**
     * List secrets
     * @param param the request object
     */
    public secretListWithHttpInfo(param: SecretApiSecretListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Secret>>> {
        return this.api.secretListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * List secrets
     * @param param the request object
     */
    public secretList(param: SecretApiSecretListRequest = {}, options?: Configuration): Promise<Array<Secret>> {
        return this.api.secretList(param.filters,  options).toPromise();
    }

    /**
     * Update a Secret
     * @param param the request object
     */
    public secretUpdateWithHttpInfo(param: SecretApiSecretUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.secretUpdateWithHttpInfo(param.id, param.version, param.body,  options).toPromise();
    }

    /**
     * Update a Secret
     * @param param the request object
     */
    public secretUpdate(param: SecretApiSecretUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.secretUpdate(param.id, param.version, param.body,  options).toPromise();
    }

}

import { ObservableServiceApi } from "./ObservableAPI";
import { ServiceApiRequestFactory, ServiceApiResponseProcessor} from "../apis/ServiceApi";

export interface ServiceApiServiceCreateRequest {
    /**
     * 
     * @type ServiceCreateRequest
     * @memberof ServiceApiserviceCreate
     */
    body: ServiceCreateRequest
    /**
     * A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceCreate
     */
    xRegistryAuth?: string
}

export interface ServiceApiServiceDeleteRequest {
    /**
     * ID or name of service.
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceDelete
     */
    id: string
}

export interface ServiceApiServiceInspectRequest {
    /**
     * ID or name of service.
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceInspect
     */
    id: string
    /**
     * Fill empty fields with default values.
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceInspect
     */
    insertDefaults?: boolean
}

export interface ServiceApiServiceListRequest {
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceList
     */
    filters?: string
    /**
     * Include service status, with count of running and desired tasks. 
     * Defaults to: undefined
     * @type boolean
     * @memberof ServiceApiserviceList
     */
    status?: boolean
}

export interface ServiceApiServiceLogsRequest {
    /**
     * ID or name of the service
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceLogs
     */
    id: string
    /**
     * Show service context and extra details provided to logs.
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceLogs
     */
    details?: boolean
    /**
     * Keep connection after returning logs.
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceLogs
     */
    follow?: boolean
    /**
     * Return logs from &#x60;stdout&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceLogs
     */
    stdout?: boolean
    /**
     * Return logs from &#x60;stderr&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceLogs
     */
    stderr?: boolean
    /**
     * Only return logs since this time, as a UNIX timestamp
     * Defaults to: 0
     * @type number
     * @memberof ServiceApiserviceLogs
     */
    since?: number
    /**
     * Add timestamps to every log line
     * Defaults to: false
     * @type boolean
     * @memberof ServiceApiserviceLogs
     */
    timestamps?: boolean
    /**
     * Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     * Defaults to: &#39;all&#39;
     * @type string
     * @memberof ServiceApiserviceLogs
     */
    tail?: string
}

export interface ServiceApiServiceUpdateRequest {
    /**
     * ID or name of service.
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceUpdate
     */
    id: string
    /**
     * The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60; 
     * Defaults to: undefined
     * @type number
     * @memberof ServiceApiserviceUpdate
     */
    version: number
    /**
     * 
     * @type ServiceUpdateRequest
     * @memberof ServiceApiserviceUpdate
     */
    body: ServiceUpdateRequest
    /**
     * If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials. 
     * Defaults to: &#39;spec&#39;
     * @type &#39;spec&#39; | &#39;previous-spec&#39;
     * @memberof ServiceApiserviceUpdate
     */
    registryAuthFrom?: 'spec' | 'previous-spec'
    /**
     * Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceUpdate
     */
    rollback?: string
    /**
     * A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     * Defaults to: undefined
     * @type string
     * @memberof ServiceApiserviceUpdate
     */
    xRegistryAuth?: string
}

export class ObjectServiceApi {
    private api: ObservableServiceApi

    public constructor(configuration: Configuration, requestFactory?: ServiceApiRequestFactory, responseProcessor?: ServiceApiResponseProcessor) {
        this.api = new ObservableServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a service
     * @param param the request object
     */
    public serviceCreateWithHttpInfo(param: ServiceApiServiceCreateRequest, options?: Configuration): Promise<HttpInfo<ServiceCreateResponse>> {
        return this.api.serviceCreateWithHttpInfo(param.body, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Create a service
     * @param param the request object
     */
    public serviceCreate(param: ServiceApiServiceCreateRequest, options?: Configuration): Promise<ServiceCreateResponse> {
        return this.api.serviceCreate(param.body, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Delete a service
     * @param param the request object
     */
    public serviceDeleteWithHttpInfo(param: ServiceApiServiceDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.serviceDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a service
     * @param param the request object
     */
    public serviceDelete(param: ServiceApiServiceDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.serviceDelete(param.id,  options).toPromise();
    }

    /**
     * Inspect a service
     * @param param the request object
     */
    public serviceInspectWithHttpInfo(param: ServiceApiServiceInspectRequest, options?: Configuration): Promise<HttpInfo<Service>> {
        return this.api.serviceInspectWithHttpInfo(param.id, param.insertDefaults,  options).toPromise();
    }

    /**
     * Inspect a service
     * @param param the request object
     */
    public serviceInspect(param: ServiceApiServiceInspectRequest, options?: Configuration): Promise<Service> {
        return this.api.serviceInspect(param.id, param.insertDefaults,  options).toPromise();
    }

    /**
     * List services
     * @param param the request object
     */
    public serviceListWithHttpInfo(param: ServiceApiServiceListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        return this.api.serviceListWithHttpInfo(param.filters, param.status,  options).toPromise();
    }

    /**
     * List services
     * @param param the request object
     */
    public serviceList(param: ServiceApiServiceListRequest = {}, options?: Configuration): Promise<Array<Service>> {
        return this.api.serviceList(param.filters, param.status,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get service logs
     * @param param the request object
     */
    public serviceLogsWithHttpInfo(param: ServiceApiServiceLogsRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.serviceLogsWithHttpInfo(param.id, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get service logs
     * @param param the request object
     */
    public serviceLogs(param: ServiceApiServiceLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.serviceLogs(param.id, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Update a service
     * @param param the request object
     */
    public serviceUpdateWithHttpInfo(param: ServiceApiServiceUpdateRequest, options?: Configuration): Promise<HttpInfo<ServiceUpdateResponse>> {
        return this.api.serviceUpdateWithHttpInfo(param.id, param.version, param.body, param.registryAuthFrom, param.rollback, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Update a service
     * @param param the request object
     */
    public serviceUpdate(param: ServiceApiServiceUpdateRequest, options?: Configuration): Promise<ServiceUpdateResponse> {
        return this.api.serviceUpdate(param.id, param.version, param.body, param.registryAuthFrom, param.rollback, param.xRegistryAuth,  options).toPromise();
    }

}

import { ObservableSessionApi } from "./ObservableAPI";
import { SessionApiRequestFactory, SessionApiResponseProcessor} from "../apis/SessionApi";

export interface SessionApiSessionRequest {
}

export class ObjectSessionApi {
    private api: ObservableSessionApi

    public constructor(configuration: Configuration, requestFactory?: SessionApiRequestFactory, responseProcessor?: SessionApiResponseProcessor) {
        this.api = new ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     * @param param the request object
     */
    public sessionWithHttpInfo(param: SessionApiSessionRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sessionWithHttpInfo( options).toPromise();
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     * @param param the request object
     */
    public session(param: SessionApiSessionRequest = {}, options?: Configuration): Promise<void> {
        return this.api.session( options).toPromise();
    }

}

import { ObservableSwarmApi } from "./ObservableAPI";
import { SwarmApiRequestFactory, SwarmApiResponseProcessor} from "../apis/SwarmApi";

export interface SwarmApiSwarmInitRequest {
    /**
     * 
     * @type SwarmInitRequest
     * @memberof SwarmApiswarmInit
     */
    body: SwarmInitRequest
}

export interface SwarmApiSwarmInspectRequest {
}

export interface SwarmApiSwarmJoinRequest {
    /**
     * 
     * @type SwarmJoinRequest
     * @memberof SwarmApiswarmJoin
     */
    body: SwarmJoinRequest
}

export interface SwarmApiSwarmLeaveRequest {
    /**
     * Force leave swarm, even if this is the last manager or that it will break the cluster. 
     * Defaults to: false
     * @type boolean
     * @memberof SwarmApiswarmLeave
     */
    force?: boolean
}

export interface SwarmApiSwarmUnlockRequest {
    /**
     * 
     * @type SwarmUnlockRequest
     * @memberof SwarmApiswarmUnlock
     */
    body: SwarmUnlockRequest
}

export interface SwarmApiSwarmUnlockkeyRequest {
}

export interface SwarmApiSwarmUpdateRequest {
    /**
     * The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * Defaults to: undefined
     * @type number
     * @memberof SwarmApiswarmUpdate
     */
    version: number
    /**
     * 
     * @type SwarmSpec
     * @memberof SwarmApiswarmUpdate
     */
    body: SwarmSpec
    /**
     * Rotate the worker join token.
     * Defaults to: false
     * @type boolean
     * @memberof SwarmApiswarmUpdate
     */
    rotateWorkerToken?: boolean
    /**
     * Rotate the manager join token.
     * Defaults to: false
     * @type boolean
     * @memberof SwarmApiswarmUpdate
     */
    rotateManagerToken?: boolean
    /**
     * Rotate the manager unlock key.
     * Defaults to: false
     * @type boolean
     * @memberof SwarmApiswarmUpdate
     */
    rotateManagerUnlockKey?: boolean
}

export class ObjectSwarmApi {
    private api: ObservableSwarmApi

    public constructor(configuration: Configuration, requestFactory?: SwarmApiRequestFactory, responseProcessor?: SwarmApiResponseProcessor) {
        this.api = new ObservableSwarmApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initialize a new swarm
     * @param param the request object
     */
    public swarmInitWithHttpInfo(param: SwarmApiSwarmInitRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.swarmInitWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Initialize a new swarm
     * @param param the request object
     */
    public swarmInit(param: SwarmApiSwarmInitRequest, options?: Configuration): Promise<string> {
        return this.api.swarmInit(param.body,  options).toPromise();
    }

    /**
     * Inspect swarm
     * @param param the request object
     */
    public swarmInspectWithHttpInfo(param: SwarmApiSwarmInspectRequest = {}, options?: Configuration): Promise<HttpInfo<Swarm>> {
        return this.api.swarmInspectWithHttpInfo( options).toPromise();
    }

    /**
     * Inspect swarm
     * @param param the request object
     */
    public swarmInspect(param: SwarmApiSwarmInspectRequest = {}, options?: Configuration): Promise<Swarm> {
        return this.api.swarmInspect( options).toPromise();
    }

    /**
     * Join an existing swarm
     * @param param the request object
     */
    public swarmJoinWithHttpInfo(param: SwarmApiSwarmJoinRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.swarmJoinWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Join an existing swarm
     * @param param the request object
     */
    public swarmJoin(param: SwarmApiSwarmJoinRequest, options?: Configuration): Promise<void> {
        return this.api.swarmJoin(param.body,  options).toPromise();
    }

    /**
     * Leave a swarm
     * @param param the request object
     */
    public swarmLeaveWithHttpInfo(param: SwarmApiSwarmLeaveRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.swarmLeaveWithHttpInfo(param.force,  options).toPromise();
    }

    /**
     * Leave a swarm
     * @param param the request object
     */
    public swarmLeave(param: SwarmApiSwarmLeaveRequest = {}, options?: Configuration): Promise<void> {
        return this.api.swarmLeave(param.force,  options).toPromise();
    }

    /**
     * Unlock a locked manager
     * @param param the request object
     */
    public swarmUnlockWithHttpInfo(param: SwarmApiSwarmUnlockRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.swarmUnlockWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Unlock a locked manager
     * @param param the request object
     */
    public swarmUnlock(param: SwarmApiSwarmUnlockRequest, options?: Configuration): Promise<void> {
        return this.api.swarmUnlock(param.body,  options).toPromise();
    }

    /**
     * Get the unlock key
     * @param param the request object
     */
    public swarmUnlockkeyWithHttpInfo(param: SwarmApiSwarmUnlockkeyRequest = {}, options?: Configuration): Promise<HttpInfo<UnlockKeyResponse>> {
        return this.api.swarmUnlockkeyWithHttpInfo( options).toPromise();
    }

    /**
     * Get the unlock key
     * @param param the request object
     */
    public swarmUnlockkey(param: SwarmApiSwarmUnlockkeyRequest = {}, options?: Configuration): Promise<UnlockKeyResponse> {
        return this.api.swarmUnlockkey( options).toPromise();
    }

    /**
     * Update a swarm
     * @param param the request object
     */
    public swarmUpdateWithHttpInfo(param: SwarmApiSwarmUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.swarmUpdateWithHttpInfo(param.version, param.body, param.rotateWorkerToken, param.rotateManagerToken, param.rotateManagerUnlockKey,  options).toPromise();
    }

    /**
     * Update a swarm
     * @param param the request object
     */
    public swarmUpdate(param: SwarmApiSwarmUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.swarmUpdate(param.version, param.body, param.rotateWorkerToken, param.rotateManagerToken, param.rotateManagerUnlockKey,  options).toPromise();
    }

}

import { ObservableSystemApi } from "./ObservableAPI";
import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";

export interface SystemApiSystemAuthRequest {
    /**
     * Authentication to check
     * @type AuthConfig
     * @memberof SystemApisystemAuth
     */
    authConfig?: AuthConfig
}

export interface SystemApiSystemDataUsageRequest {
    /**
     * Object types, for which to compute and return data. 
     * Defaults to: undefined
     * @type Array&lt;&#39;container&#39; | &#39;image&#39; | &#39;volume&#39; | &#39;build-cache&#39;&gt;
     * @memberof SystemApisystemDataUsage
     */
    type?: Array<'container' | 'image' | 'volume' | 'build-cache'>
}

export interface SystemApiSystemEventsRequest {
    /**
     * Show events created since this timestamp then stream new events.
     * Defaults to: undefined
     * @type string
     * @memberof SystemApisystemEvents
     */
    since?: string
    /**
     * Show events created until this timestamp then stop streaming.
     * Defaults to: undefined
     * @type string
     * @memberof SystemApisystemEvents
     */
    until?: string
    /**
     * A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name 
     * Defaults to: undefined
     * @type string
     * @memberof SystemApisystemEvents
     */
    filters?: string
}

export interface SystemApiSystemInfoRequest {
}

export interface SystemApiSystemPingRequest {
}

export interface SystemApiSystemPingHeadRequest {
}

export interface SystemApiSystemVersionRequest {
}

export class ObjectSystemApi {
    private api: ObservableSystemApi

    public constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param param the request object
     */
    public systemAuthWithHttpInfo(param: SystemApiSystemAuthRequest = {}, options?: Configuration): Promise<HttpInfo<SystemAuthResponse | void>> {
        return this.api.systemAuthWithHttpInfo(param.authConfig,  options).toPromise();
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param param the request object
     */
    public systemAuth(param: SystemApiSystemAuthRequest = {}, options?: Configuration): Promise<SystemAuthResponse | void> {
        return this.api.systemAuth(param.authConfig,  options).toPromise();
    }

    /**
     * Get data usage information
     * @param param the request object
     */
    public systemDataUsageWithHttpInfo(param: SystemApiSystemDataUsageRequest = {}, options?: Configuration): Promise<HttpInfo<SystemDataUsageResponse>> {
        return this.api.systemDataUsageWithHttpInfo(param.type,  options).toPromise();
    }

    /**
     * Get data usage information
     * @param param the request object
     */
    public systemDataUsage(param: SystemApiSystemDataUsageRequest = {}, options?: Configuration): Promise<SystemDataUsageResponse> {
        return this.api.systemDataUsage(param.type,  options).toPromise();
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param param the request object
     */
    public systemEventsWithHttpInfo(param: SystemApiSystemEventsRequest = {}, options?: Configuration): Promise<HttpInfo<EventMessage>> {
        return this.api.systemEventsWithHttpInfo(param.since, param.until, param.filters,  options).toPromise();
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param param the request object
     */
    public systemEvents(param: SystemApiSystemEventsRequest = {}, options?: Configuration): Promise<EventMessage> {
        return this.api.systemEvents(param.since, param.until, param.filters,  options).toPromise();
    }

    /**
     * Get system information
     * @param param the request object
     */
    public systemInfoWithHttpInfo(param: SystemApiSystemInfoRequest = {}, options?: Configuration): Promise<HttpInfo<SystemInfo>> {
        return this.api.systemInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Get system information
     * @param param the request object
     */
    public systemInfo(param: SystemApiSystemInfoRequest = {}, options?: Configuration): Promise<SystemInfo> {
        return this.api.systemInfo( options).toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     * @param param the request object
     */
    public systemPingWithHttpInfo(param: SystemApiSystemPingRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.systemPingWithHttpInfo( options).toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     * @param param the request object
     */
    public systemPing(param: SystemApiSystemPingRequest = {}, options?: Configuration): Promise<string> {
        return this.api.systemPing( options).toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     * @param param the request object
     */
    public systemPingHeadWithHttpInfo(param: SystemApiSystemPingHeadRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.systemPingHeadWithHttpInfo( options).toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     * @param param the request object
     */
    public systemPingHead(param: SystemApiSystemPingHeadRequest = {}, options?: Configuration): Promise<string> {
        return this.api.systemPingHead( options).toPromise();
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     * @param param the request object
     */
    public systemVersionWithHttpInfo(param: SystemApiSystemVersionRequest = {}, options?: Configuration): Promise<HttpInfo<SystemVersion>> {
        return this.api.systemVersionWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     * @param param the request object
     */
    public systemVersion(param: SystemApiSystemVersionRequest = {}, options?: Configuration): Promise<SystemVersion> {
        return this.api.systemVersion( options).toPromise();
    }

}

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiTaskInspectRequest {
    /**
     * ID of the task
     * Defaults to: undefined
     * @type string
     * @memberof TaskApitaskInspect
     */
    id: string
}

export interface TaskApiTaskListRequest {
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApitaskList
     */
    filters?: string
}

export interface TaskApiTaskLogsRequest {
    /**
     * ID of the task
     * Defaults to: undefined
     * @type string
     * @memberof TaskApitaskLogs
     */
    id: string
    /**
     * Show task context and extra details provided to logs.
     * Defaults to: false
     * @type boolean
     * @memberof TaskApitaskLogs
     */
    details?: boolean
    /**
     * Keep connection after returning logs.
     * Defaults to: false
     * @type boolean
     * @memberof TaskApitaskLogs
     */
    follow?: boolean
    /**
     * Return logs from &#x60;stdout&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof TaskApitaskLogs
     */
    stdout?: boolean
    /**
     * Return logs from &#x60;stderr&#x60;
     * Defaults to: false
     * @type boolean
     * @memberof TaskApitaskLogs
     */
    stderr?: boolean
    /**
     * Only return logs since this time, as a UNIX timestamp
     * Defaults to: 0
     * @type number
     * @memberof TaskApitaskLogs
     */
    since?: number
    /**
     * Add timestamps to every log line
     * Defaults to: false
     * @type boolean
     * @memberof TaskApitaskLogs
     */
    timestamps?: boolean
    /**
     * Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     * Defaults to: &#39;all&#39;
     * @type string
     * @memberof TaskApitaskLogs
     */
    tail?: string
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Inspect a task
     * @param param the request object
     */
    public taskInspectWithHttpInfo(param: TaskApiTaskInspectRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.taskInspectWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Inspect a task
     * @param param the request object
     */
    public taskInspect(param: TaskApiTaskInspectRequest, options?: Configuration): Promise<Task> {
        return this.api.taskInspect(param.id,  options).toPromise();
    }

    /**
     * List tasks
     * @param param the request object
     */
    public taskListWithHttpInfo(param: TaskApiTaskListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        return this.api.taskListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * List tasks
     * @param param the request object
     */
    public taskList(param: TaskApiTaskListRequest = {}, options?: Configuration): Promise<Array<Task>> {
        return this.api.taskList(param.filters,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get task logs
     * @param param the request object
     */
    public taskLogsWithHttpInfo(param: TaskApiTaskLogsRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.taskLogsWithHttpInfo(param.id, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get task logs
     * @param param the request object
     */
    public taskLogs(param: TaskApiTaskLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.taskLogs(param.id, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

}

import { ObservableVolumeApi } from "./ObservableAPI";
import { VolumeApiRequestFactory, VolumeApiResponseProcessor} from "../apis/VolumeApi";

export interface VolumeApiVolumeCreateRequest {
    /**
     * Volume configuration
     * @type VolumeCreateOptions
     * @memberof VolumeApivolumeCreate
     */
    volumeConfig: VolumeCreateOptions
}

export interface VolumeApiVolumeDeleteRequest {
    /**
     * Volume name or ID
     * Defaults to: undefined
     * @type string
     * @memberof VolumeApivolumeDelete
     */
    name: string
    /**
     * Force the removal of the volume
     * Defaults to: false
     * @type boolean
     * @memberof VolumeApivolumeDelete
     */
    force?: boolean
}

export interface VolumeApiVolumeInspectRequest {
    /**
     * Volume name or ID
     * Defaults to: undefined
     * @type string
     * @memberof VolumeApivolumeInspect
     */
    name: string
}

export interface VolumeApiVolumeListRequest {
    /**
     * JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name. 
     * Defaults to: undefined
     * @type string
     * @memberof VolumeApivolumeList
     */
    filters?: string
}

export interface VolumeApiVolumePruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes. 
     * Defaults to: undefined
     * @type string
     * @memberof VolumeApivolumePrune
     */
    filters?: string
}

export interface VolumeApiVolumeUpdateRequest {
    /**
     * The name or ID of the volume
     * Defaults to: undefined
     * @type string
     * @memberof VolumeApivolumeUpdate
     */
    name: string
    /**
     * The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field. 
     * Defaults to: undefined
     * @type number
     * @memberof VolumeApivolumeUpdate
     */
    version: number
    /**
     * The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged. 
     * @type VolumeUpdateRequest
     * @memberof VolumeApivolumeUpdate
     */
    body?: VolumeUpdateRequest
}

export class ObjectVolumeApi {
    private api: ObservableVolumeApi

    public constructor(configuration: Configuration, requestFactory?: VolumeApiRequestFactory, responseProcessor?: VolumeApiResponseProcessor) {
        this.api = new ObservableVolumeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param param the request object
     */
    public volumeCreateWithHttpInfo(param: VolumeApiVolumeCreateRequest, options?: Configuration): Promise<HttpInfo<Volume>> {
        return this.api.volumeCreateWithHttpInfo(param.volumeConfig,  options).toPromise();
    }

    /**
     * Create a volume
     * @param param the request object
     */
    public volumeCreate(param: VolumeApiVolumeCreateRequest, options?: Configuration): Promise<Volume> {
        return this.api.volumeCreate(param.volumeConfig,  options).toPromise();
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param param the request object
     */
    public volumeDeleteWithHttpInfo(param: VolumeApiVolumeDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.volumeDeleteWithHttpInfo(param.name, param.force,  options).toPromise();
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param param the request object
     */
    public volumeDelete(param: VolumeApiVolumeDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.volumeDelete(param.name, param.force,  options).toPromise();
    }

    /**
     * Inspect a volume
     * @param param the request object
     */
    public volumeInspectWithHttpInfo(param: VolumeApiVolumeInspectRequest, options?: Configuration): Promise<HttpInfo<Volume>> {
        return this.api.volumeInspectWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Inspect a volume
     * @param param the request object
     */
    public volumeInspect(param: VolumeApiVolumeInspectRequest, options?: Configuration): Promise<Volume> {
        return this.api.volumeInspect(param.name,  options).toPromise();
    }

    /**
     * List volumes
     * @param param the request object
     */
    public volumeListWithHttpInfo(param: VolumeApiVolumeListRequest = {}, options?: Configuration): Promise<HttpInfo<VolumeListResponse>> {
        return this.api.volumeListWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * List volumes
     * @param param the request object
     */
    public volumeList(param: VolumeApiVolumeListRequest = {}, options?: Configuration): Promise<VolumeListResponse> {
        return this.api.volumeList(param.filters,  options).toPromise();
    }

    /**
     * Delete unused volumes
     * @param param the request object
     */
    public volumePruneWithHttpInfo(param: VolumeApiVolumePruneRequest = {}, options?: Configuration): Promise<HttpInfo<VolumePruneResponse>> {
        return this.api.volumePruneWithHttpInfo(param.filters,  options).toPromise();
    }

    /**
     * Delete unused volumes
     * @param param the request object
     */
    public volumePrune(param: VolumeApiVolumePruneRequest = {}, options?: Configuration): Promise<VolumePruneResponse> {
        return this.api.volumePrune(param.filters,  options).toPromise();
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param param the request object
     */
    public volumeUpdateWithHttpInfo(param: VolumeApiVolumeUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.volumeUpdateWithHttpInfo(param.name, param.version, param.body,  options).toPromise();
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param param the request object
     */
    public volumeUpdate(param: VolumeApiVolumeUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.volumeUpdate(param.name, param.version, param.body,  options).toPromise();
    }

}
