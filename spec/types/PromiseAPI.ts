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
import { ObservableConfigApi } from './ObservableAPI';

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class PromiseConfigApi {
    private api: ObservableConfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a config
     * @param [body]
     */
    public configCreateWithHttpInfo(body?: ConfigCreateRequest, _options?: Configuration): Promise<HttpInfo<IdResponse>> {
        const result = this.api.configCreateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a config
     * @param [body]
     */
    public configCreate(body?: ConfigCreateRequest, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.configCreate(body, _options);
        return result.toPromise();
    }

    /**
     * Delete a config
     * @param id ID of the config
     */
    public configDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.configDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a config
     * @param id ID of the config
     */
    public configDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.configDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a config
     * @param id ID of the config
     */
    public configInspectWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Config>> {
        const result = this.api.configInspectWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a config
     * @param id ID of the config
     */
    public configInspect(id: string, _options?: Configuration): Promise<Config> {
        const result = this.api.configInspect(id, _options);
        return result.toPromise();
    }

    /**
     * List configs
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60; 
     */
    public configListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Config>>> {
        const result = this.api.configListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * List configs
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60; 
     */
    public configList(filters?: string, _options?: Configuration): Promise<Array<Config>> {
        const result = this.api.configList(filters, _options);
        return result.toPromise();
    }

    /**
     * Update a Config
     * @param id The ID or name of the config
     * @param version The version number of the config object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     */
    public configUpdateWithHttpInfo(id: string, version: number, body?: ConfigSpec, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.configUpdateWithHttpInfo(id, version, body, _options);
        return result.toPromise();
    }

    /**
     * Update a Config
     * @param id The ID or name of the config
     * @param version The version number of the config object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     */
    public configUpdate(id: string, version: number, body?: ConfigSpec, _options?: Configuration): Promise<void> {
        const result = this.api.configUpdate(id, version, body, _options);
        return result.toPromise();
    }


}



import { ObservableContainerApi } from './ObservableAPI';

import { ContainerApiRequestFactory, ContainerApiResponseProcessor} from "../apis/ContainerApi";
export class PromiseContainerApi {
    private api: ObservableContainerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContainerApiRequestFactory,
        responseProcessor?: ContainerApiResponseProcessor
    ) {
        this.api = new ObservableContainerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveWithHttpInfo(id: string, path: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerArchiveWithHttpInfo(id, path, _options);
        return result.toPromise();
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchive(id: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerArchive(id, path, _options);
        return result.toPromise();
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveInfoWithHttpInfo(id: string, path: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerArchiveInfoWithHttpInfo(id, path, _options);
        return result.toPromise();
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveInfo(id: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerArchiveInfo(id, path, _options);
        return result.toPromise();
    }

    /**
     * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream and the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`. 
     * Attach to a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     * @param [logs] Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If &#x60;stream&#x60; is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output. 
     * @param [stream] Stream attached streams from the time the request was made onwards. 
     * @param [stdin] Attach to &#x60;stdin&#x60;
     * @param [stdout] Attach to &#x60;stdout&#x60;
     * @param [stderr] Attach to &#x60;stderr&#x60;
     */
    public containerAttachWithHttpInfo(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerAttachWithHttpInfo(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);
        return result.toPromise();
    }

    /**
     * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream and the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`. 
     * Attach to a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     * @param [logs] Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If &#x60;stream&#x60; is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output. 
     * @param [stream] Stream attached streams from the time the request was made onwards. 
     * @param [stdin] Attach to &#x60;stdin&#x60;
     * @param [stdout] Attach to &#x60;stdout&#x60;
     * @param [stderr] Attach to &#x60;stderr&#x60;
     */
    public containerAttach(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerAttach(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);
        return result.toPromise();
    }

    /**
     * Attach to a container via a websocket
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60;, or &#x60;_&#x60;. 
     * @param [logs] Return logs
     * @param [stream] Return stream
     * @param [stdin] Attach to &#x60;stdin&#x60;
     * @param [stdout] Attach to &#x60;stdout&#x60;
     * @param [stderr] Attach to &#x60;stderr&#x60;
     */
    public containerAttachWebsocketWithHttpInfo(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerAttachWebsocketWithHttpInfo(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);
        return result.toPromise();
    }

    /**
     * Attach to a container via a websocket
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60;, or &#x60;_&#x60;. 
     * @param [logs] Return logs
     * @param [stream] Return stream
     * @param [stdin] Attach to &#x60;stdin&#x60;
     * @param [stdout] Attach to &#x60;stdout&#x60;
     * @param [stderr] Attach to &#x60;stderr&#x60;
     */
    public containerAttachWebsocket(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerAttachWebsocket(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);
        return result.toPromise();
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param id ID or name of the container
     */
    public containerChangesWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Array<FilesystemChange>>> {
        const result = this.api.containerChangesWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param id ID or name of the container
     */
    public containerChanges(id: string, _options?: Configuration): Promise<Array<FilesystemChange>> {
        const result = this.api.containerChanges(id, _options);
        return result.toPromise();
    }

    /**
     * Create a container
     * @param body Container to create
     * @param [name] Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;. 
     * @param [platform] Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested 
     */
    public containerCreateWithHttpInfo(body: ContainerCreateRequest, name?: string, platform?: string, _options?: Configuration): Promise<HttpInfo<ContainerCreateResponse>> {
        const result = this.api.containerCreateWithHttpInfo(body, name, platform, _options);
        return result.toPromise();
    }

    /**
     * Create a container
     * @param body Container to create
     * @param [name] Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;. 
     * @param [platform] Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested 
     */
    public containerCreate(body: ContainerCreateRequest, name?: string, platform?: string, _options?: Configuration): Promise<ContainerCreateResponse> {
        const result = this.api.containerCreate(body, name, platform, _options);
        return result.toPromise();
    }

    /**
     * Remove a container
     * @param id ID or name of the container
     * @param [v] Remove anonymous volumes associated with the container.
     * @param [force] If the container is running, kill it before removing it.
     * @param [link] Remove the specified link associated with the container.
     */
    public containerDeleteWithHttpInfo(id: string, v?: boolean, force?: boolean, link?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerDeleteWithHttpInfo(id, v, force, link, _options);
        return result.toPromise();
    }

    /**
     * Remove a container
     * @param id ID or name of the container
     * @param [v] Remove anonymous volumes associated with the container.
     * @param [force] If the container is running, kill it before removing it.
     * @param [link] Remove the specified link associated with the container.
     */
    public containerDelete(id: string, v?: boolean, force?: boolean, link?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerDelete(id, v, force, link, _options);
        return result.toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param id ID or name of the container
     */
    public containerExportWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerExportWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param id ID or name of the container
     */
    public containerExport(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerExport(id, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param id ID or name of the container
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;
     */
    public containerInspectWithHttpInfo(id: string, size?: boolean, _options?: Configuration): Promise<HttpInfo<ContainerInspectResponse>> {
        const result = this.api.containerInspectWithHttpInfo(id, size, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param id ID or name of the container
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;
     */
    public containerInspect(id: string, size?: boolean, _options?: Configuration): Promise<ContainerInspectResponse> {
        const result = this.api.containerInspect(id, size, _options);
        return result.toPromise();
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     */
    public containerKillWithHttpInfo(id: string, signal?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerKillWithHttpInfo(id, signal, _options);
        return result.toPromise();
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     */
    public containerKill(id: string, signal?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerKill(id, signal, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param [all] Return all containers. By default, only running containers are shown. 
     * @param [limit] Return this number of most recently created containers, including non-running ones. 
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;. 
     * @param [filters] Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     */
    public containerListWithHttpInfo(all?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Promise<HttpInfo<Array<ContainerSummary>>> {
        const result = this.api.containerListWithHttpInfo(all, limit, size, filters, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param [all] Return all containers. By default, only running containers are shown. 
     * @param [limit] Return this number of most recently created containers, including non-running ones. 
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;. 
     * @param [filters] Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     */
    public containerList(all?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Promise<Array<ContainerSummary>> {
        const result = this.api.containerList(all, limit, size, filters, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 
     * Get container logs
     * @param id ID or name of the container
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [until] Only return logs before this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public containerLogsWithHttpInfo(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.containerLogsWithHttpInfo(id, follow, stdout, stderr, since, until, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 
     * Get container logs
     * @param id ID or name of the container
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [until] Only return logs before this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public containerLogs(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.containerLogs(id, follow, stdout, stderr, since, until, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param id ID or name of the container
     */
    public containerPauseWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerPauseWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param id ID or name of the container
     */
    public containerPause(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerPause(id, _options);
        return result.toPromise();
    }

    /**
     * Delete stopped containers
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPruneWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<ContainerPruneResponse>> {
        const result = this.api.containerPruneWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete stopped containers
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPrune(filters?: string, _options?: Configuration): Promise<ContainerPruneResponse> {
        const result = this.api.containerPrune(filters, _options);
        return result.toPromise();
    }

    /**
     * Rename a container
     * @param id ID or name of the container
     * @param name New name for the container
     */
    public containerRenameWithHttpInfo(id: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerRenameWithHttpInfo(id, name, _options);
        return result.toPromise();
    }

    /**
     * Rename a container
     * @param id ID or name of the container
     * @param name New name for the container
     */
    public containerRename(id: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerRename(id, name, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param id ID or name of the container
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public containerResizeWithHttpInfo(id: string, h: number, w: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerResizeWithHttpInfo(id, h, w, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param id ID or name of the container
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public containerResize(id: string, h: number, w: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerResize(id, h, w, _options);
        return result.toPromise();
    }

    /**
     * Restart a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerRestartWithHttpInfo(id: string, signal?: string, t?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerRestartWithHttpInfo(id, signal, t, _options);
        return result.toPromise();
    }

    /**
     * Restart a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerRestart(id: string, signal?: string, t?: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerRestart(id, signal, t, _options);
        return result.toPromise();
    }

    /**
     * Start a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     */
    public containerStartWithHttpInfo(id: string, detachKeys?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerStartWithHttpInfo(id, detachKeys, _options);
        return result.toPromise();
    }

    /**
     * Start a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     */
    public containerStart(id: string, detachKeys?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerStart(id, detachKeys, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param id ID or name of the container
     * @param [stream] Stream the output. If false, the stats will be output once and then it will disconnect. 
     * @param [oneShot] Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;. 
     */
    public containerStatsWithHttpInfo(id: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.containerStatsWithHttpInfo(id, stream, oneShot, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param id ID or name of the container
     * @param [stream] Stream the output. If false, the stats will be output once and then it will disconnect. 
     * @param [oneShot] Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;. 
     */
    public containerStats(id: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.containerStats(id, stream, oneShot, _options);
        return result.toPromise();
    }

    /**
     * Stop a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerStopWithHttpInfo(id: string, signal?: string, t?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerStopWithHttpInfo(id, signal, t, _options);
        return result.toPromise();
    }

    /**
     * Stop a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerStop(id: string, signal?: string, t?: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerStop(id, signal, t, _options);
        return result.toPromise();
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param id ID or name of the container
     * @param [psArgs] The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60;
     */
    public containerTopWithHttpInfo(id: string, psArgs?: string, _options?: Configuration): Promise<HttpInfo<ContainerTopResponse>> {
        const result = this.api.containerTopWithHttpInfo(id, psArgs, _options);
        return result.toPromise();
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param id ID or name of the container
     * @param [psArgs] The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60;
     */
    public containerTop(id: string, psArgs?: string, _options?: Configuration): Promise<ContainerTopResponse> {
        const result = this.api.containerTop(id, psArgs, _options);
        return result.toPromise();
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param id ID or name of the container
     */
    public containerUnpauseWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.containerUnpauseWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param id ID or name of the container
     */
    public containerUnpause(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerUnpause(id, _options);
        return result.toPromise();
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param id ID or name of the container
     * @param update
     */
    public containerUpdateWithHttpInfo(id: string, update: ContainerUpdateRequest, _options?: Configuration): Promise<HttpInfo<ContainerUpdateResponse>> {
        const result = this.api.containerUpdateWithHttpInfo(id, update, _options);
        return result.toPromise();
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param id ID or name of the container
     * @param update
     */
    public containerUpdate(id: string, update: ContainerUpdateRequest, _options?: Configuration): Promise<ContainerUpdateResponse> {
        const result = this.api.containerUpdate(id, update, _options);
        return result.toPromise();
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param id ID or name of the container
     * @param [condition] Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty. 
     */
    public containerWaitWithHttpInfo(id: string, condition?: 'not-running' | 'next-exit' | 'removed', _options?: Configuration): Promise<HttpInfo<ContainerWaitResponse>> {
        const result = this.api.containerWaitWithHttpInfo(id, condition, _options);
        return result.toPromise();
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param id ID or name of the container
     * @param [condition] Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty. 
     */
    public containerWait(id: string, condition?: 'not-running' | 'next-exit' | 'removed', _options?: Configuration): Promise<ContainerWaitResponse> {
        const result = this.api.containerWait(id, condition, _options);
        return result.toPromise();
    }

    /**
     * Upload a tar archive to be extracted to a path in the filesystem of container id. `path` parameter is asserted to be a directory. If it exists as a file, 400 error will be returned with message \"not a directory\". 
     * Extract an archive of files or folders to a directory in a container
     * @param id ID or name of the container
     * @param path Path to a directory in the container to extract the archive’s contents into. 
     * @param inputStream The input stream must be a tar archive compressed with one of the following algorithms: &#x60;identity&#x60; (no compression), &#x60;gzip&#x60;, &#x60;bzip2&#x60;, or &#x60;xz&#x60;. 
     * @param [noOverwriteDirNonDir] If &#x60;1&#x60;, &#x60;true&#x60;, or &#x60;True&#x60; then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
     * @param [copyUIDGID] If &#x60;1&#x60;, &#x60;true&#x60;, then it will copy UID/GID maps to the dest file or dir 
     */
    public putContainerArchiveWithHttpInfo(id: string, path: string, inputStream: HttpFile, noOverwriteDirNonDir?: string, copyUIDGID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.putContainerArchiveWithHttpInfo(id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, _options);
        return result.toPromise();
    }

    /**
     * Upload a tar archive to be extracted to a path in the filesystem of container id. `path` parameter is asserted to be a directory. If it exists as a file, 400 error will be returned with message \"not a directory\". 
     * Extract an archive of files or folders to a directory in a container
     * @param id ID or name of the container
     * @param path Path to a directory in the container to extract the archive’s contents into. 
     * @param inputStream The input stream must be a tar archive compressed with one of the following algorithms: &#x60;identity&#x60; (no compression), &#x60;gzip&#x60;, &#x60;bzip2&#x60;, or &#x60;xz&#x60;. 
     * @param [noOverwriteDirNonDir] If &#x60;1&#x60;, &#x60;true&#x60;, or &#x60;True&#x60; then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
     * @param [copyUIDGID] If &#x60;1&#x60;, &#x60;true&#x60;, then it will copy UID/GID maps to the dest file or dir 
     */
    public putContainerArchive(id: string, path: string, inputStream: HttpFile, noOverwriteDirNonDir?: string, copyUIDGID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putContainerArchive(id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, _options);
        return result.toPromise();
    }


}



import { ObservableDistributionApi } from './ObservableAPI';

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class PromiseDistributionApi {
    private api: ObservableDistributionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param name Image name or id
     */
    public distributionInspectWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<DistributionInspect>> {
        const result = this.api.distributionInspectWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param name Image name or id
     */
    public distributionInspect(name: string, _options?: Configuration): Promise<DistributionInspect> {
        const result = this.api.distributionInspect(name, _options);
        return result.toPromise();
    }


}



import { ObservableExecApi } from './ObservableAPI';

import { ExecApiRequestFactory, ExecApiResponseProcessor} from "../apis/ExecApi";
export class PromiseExecApi {
    private api: ObservableExecApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExecApiRequestFactory,
        responseProcessor?: ExecApiResponseProcessor
    ) {
        this.api = new ObservableExecApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param id ID or name of container
     * @param execConfig Exec configuration
     */
    public containerExecWithHttpInfo(id: string, execConfig: ExecConfig, _options?: Configuration): Promise<HttpInfo<IdResponse>> {
        const result = this.api.containerExecWithHttpInfo(id, execConfig, _options);
        return result.toPromise();
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param id ID or name of container
     * @param execConfig Exec configuration
     */
    public containerExec(id: string, execConfig: ExecConfig, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.containerExec(id, execConfig, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspectWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ExecInspectResponse>> {
        const result = this.api.execInspectWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspect(id: string, _options?: Configuration): Promise<ExecInspectResponse> {
        const result = this.api.execInspect(id, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public execResizeWithHttpInfo(id: string, h: number, w: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.execResizeWithHttpInfo(id, h, w, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public execResize(id: string, h: number, w: number, _options?: Configuration): Promise<void> {
        const result = this.api.execResize(id, h, w, _options);
        return result.toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param id Exec instance ID
     * @param [execStartConfig]
     */
    public execStartWithHttpInfo(id: string, execStartConfig?: ExecStartConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.execStartWithHttpInfo(id, execStartConfig, _options);
        return result.toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param id Exec instance ID
     * @param [execStartConfig]
     */
    public execStart(id: string, execStartConfig?: ExecStartConfig, _options?: Configuration): Promise<void> {
        const result = this.api.execStart(id, execStartConfig, _options);
        return result.toPromise();
    }


}



import { ObservableImageApi } from './ObservableAPI';

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class PromiseImageApi {
    private api: ObservableImageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete builder cache
     * @param [keepStorage] Amount of disk space in bytes to keep for cache
     * @param [all] Remove all types of build cache
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60; 
     */
    public buildPruneWithHttpInfo(keepStorage?: number, all?: boolean, filters?: string, _options?: Configuration): Promise<HttpInfo<BuildPruneResponse>> {
        const result = this.api.buildPruneWithHttpInfo(keepStorage, all, filters, _options);
        return result.toPromise();
    }

    /**
     * Delete builder cache
     * @param [keepStorage] Amount of disk space in bytes to keep for cache
     * @param [all] Remove all types of build cache
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60; 
     */
    public buildPrune(keepStorage?: number, all?: boolean, filters?: string, _options?: Configuration): Promise<BuildPruneResponse> {
        const result = this.api.buildPrune(keepStorage, all, filters, _options);
        return result.toPromise();
    }

    /**
     * Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive\'s root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
     * Build an image
     * @param [dockerfile] Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if &#x60;remote&#x60; is specified and points to an external &#x60;Dockerfile&#x60;.
     * @param [t] A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default &#x60;latest&#x60; value is assumed. You can provide several &#x60;t&#x60; parameters.
     * @param [extrahosts] Extra hosts to add to /etc/hosts
     * @param [remote] A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called &#x60;Dockerfile&#x60; and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the &#x60;dockerfile&#x60; parameter is also specified, there must be a file with the corresponding path inside the tarball.
     * @param [q] Suppress verbose build output.
     * @param [nocache] Do not use the cache when building the image.
     * @param [cachefrom] JSON array of images used for build cache resolution.
     * @param [pull] Attempt to pull the image even if an older image exists locally.
     * @param [rm] Remove intermediate containers after a successful build.
     * @param [forcerm] Always remove intermediate containers, even upon failure.
     * @param [memory] Set memory limit for build.
     * @param [memswap] Total memory (memory + swap). Set as &#x60;-1&#x60; to disable swap.
     * @param [cpushares] CPU shares (relative weight).
     * @param [cpusetcpus] CPUs in which to allow execution (e.g., &#x60;0-3&#x60;, &#x60;0,1&#x60;).
     * @param [cpuperiod] The length of a CPU period in microseconds.
     * @param [cpuquota] Microseconds of CPU time that the container can get in a CPU period.
     * @param [buildargs] JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the &#x60;Dockerfile&#x60; RUN instruction, or for variable expansion in other &#x60;Dockerfile&#x60; instructions. This is not meant for passing secret values.  For example, the build arg &#x60;FOO&#x3D;bar&#x60; would become &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; in JSON. This would result in the query parameter &#x60;buildargs&#x3D;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60;. Note that &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg) 
     * @param [shmsize] Size of &#x60;/dev/shm&#x60; in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     * @param [squash] Squash the resulting images layers into a single layer. *(Experimental release only.)*
     * @param [labels] Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     * @param [networkmode] Sets the networking mode for the run commands during build. Supported standard values are: &#x60;bridge&#x60;, &#x60;host&#x60;, &#x60;none&#x60;, and &#x60;container:&lt;name|id&gt;&#x60;. Any other value is taken as a custom network\&#39;s name or ID to which this container should connect to. 
     * @param [contentType]
     * @param [xRegistryConfig] This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  &#x60;&#x60;&#x60; {   \&quot;docker.example.com\&quot;: {     \&quot;username\&quot;: \&quot;janedoe\&quot;,     \&quot;password\&quot;: \&quot;hunter2\&quot;   },   \&quot;https://index.docker.io/v1/\&quot;: {     \&quot;username\&quot;: \&quot;mobydock\&quot;,     \&quot;password\&quot;: \&quot;conta1n3rize14\&quot;   } } &#x60;&#x60;&#x60;  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a &#x60;https://&#x60; prefix and a &#x60;/v1/&#x60; suffix even though Docker will prefer to use the v2 registry API. 
     * @param [platform] Platform in the format os[/arch[/variant]]
     * @param [target] Target build stage
     * @param [outputs] BuildKit output configuration
     * @param [version] Version of the builder backend to use.  - &#x60;1&#x60; is the first generation classic (deprecated) builder in the Docker daemon (default) - &#x60;2&#x60; is [BuildKit](https://github.com/moby/buildkit) 
     * @param [inputStream] A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     */
    public imageBuildWithHttpInfo(dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, version?: '1' | '2', inputStream?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.imageBuildWithHttpInfo(dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, version, inputStream, _options);
        return result.toPromise();
    }

    /**
     * Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive\'s root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
     * Build an image
     * @param [dockerfile] Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if &#x60;remote&#x60; is specified and points to an external &#x60;Dockerfile&#x60;.
     * @param [t] A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default &#x60;latest&#x60; value is assumed. You can provide several &#x60;t&#x60; parameters.
     * @param [extrahosts] Extra hosts to add to /etc/hosts
     * @param [remote] A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called &#x60;Dockerfile&#x60; and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the &#x60;dockerfile&#x60; parameter is also specified, there must be a file with the corresponding path inside the tarball.
     * @param [q] Suppress verbose build output.
     * @param [nocache] Do not use the cache when building the image.
     * @param [cachefrom] JSON array of images used for build cache resolution.
     * @param [pull] Attempt to pull the image even if an older image exists locally.
     * @param [rm] Remove intermediate containers after a successful build.
     * @param [forcerm] Always remove intermediate containers, even upon failure.
     * @param [memory] Set memory limit for build.
     * @param [memswap] Total memory (memory + swap). Set as &#x60;-1&#x60; to disable swap.
     * @param [cpushares] CPU shares (relative weight).
     * @param [cpusetcpus] CPUs in which to allow execution (e.g., &#x60;0-3&#x60;, &#x60;0,1&#x60;).
     * @param [cpuperiod] The length of a CPU period in microseconds.
     * @param [cpuquota] Microseconds of CPU time that the container can get in a CPU period.
     * @param [buildargs] JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the &#x60;Dockerfile&#x60; RUN instruction, or for variable expansion in other &#x60;Dockerfile&#x60; instructions. This is not meant for passing secret values.  For example, the build arg &#x60;FOO&#x3D;bar&#x60; would become &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; in JSON. This would result in the query parameter &#x60;buildargs&#x3D;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60;. Note that &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg) 
     * @param [shmsize] Size of &#x60;/dev/shm&#x60; in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     * @param [squash] Squash the resulting images layers into a single layer. *(Experimental release only.)*
     * @param [labels] Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     * @param [networkmode] Sets the networking mode for the run commands during build. Supported standard values are: &#x60;bridge&#x60;, &#x60;host&#x60;, &#x60;none&#x60;, and &#x60;container:&lt;name|id&gt;&#x60;. Any other value is taken as a custom network\&#39;s name or ID to which this container should connect to. 
     * @param [contentType]
     * @param [xRegistryConfig] This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  &#x60;&#x60;&#x60; {   \&quot;docker.example.com\&quot;: {     \&quot;username\&quot;: \&quot;janedoe\&quot;,     \&quot;password\&quot;: \&quot;hunter2\&quot;   },   \&quot;https://index.docker.io/v1/\&quot;: {     \&quot;username\&quot;: \&quot;mobydock\&quot;,     \&quot;password\&quot;: \&quot;conta1n3rize14\&quot;   } } &#x60;&#x60;&#x60;  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a &#x60;https://&#x60; prefix and a &#x60;/v1/&#x60; suffix even though Docker will prefer to use the v2 registry API. 
     * @param [platform] Platform in the format os[/arch[/variant]]
     * @param [target] Target build stage
     * @param [outputs] BuildKit output configuration
     * @param [version] Version of the builder backend to use.  - &#x60;1&#x60; is the first generation classic (deprecated) builder in the Docker daemon (default) - &#x60;2&#x60; is [BuildKit](https://github.com/moby/buildkit) 
     * @param [inputStream] A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     */
    public imageBuild(dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, version?: '1' | '2', inputStream?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.imageBuild(dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, version, inputStream, _options);
        return result.toPromise();
    }

    /**
     * Create a new image from a container
     * @param [container] The ID or name of the container to commit
     * @param [repo] Repository name for the created image
     * @param [tag] Tag name for the create image
     * @param [comment] Commit message
     * @param [author] Author of the image (e.g., &#x60;John Hannibal Smith &lt;hannibal@a-team.com&gt;&#x60;)
     * @param [pause] Whether to pause the container before committing
     * @param [changes] &#x60;Dockerfile&#x60; instructions to apply while committing
     * @param [containerConfig] The container configuration
     */
    public imageCommitWithHttpInfo(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, containerConfig?: ContainerConfig, _options?: Configuration): Promise<HttpInfo<IdResponse>> {
        const result = this.api.imageCommitWithHttpInfo(container, repo, tag, comment, author, pause, changes, containerConfig, _options);
        return result.toPromise();
    }

    /**
     * Create a new image from a container
     * @param [container] The ID or name of the container to commit
     * @param [repo] Repository name for the created image
     * @param [tag] Tag name for the create image
     * @param [comment] Commit message
     * @param [author] Author of the image (e.g., &#x60;John Hannibal Smith &lt;hannibal@a-team.com&gt;&#x60;)
     * @param [pause] Whether to pause the container before committing
     * @param [changes] &#x60;Dockerfile&#x60; instructions to apply while committing
     * @param [containerConfig] The container configuration
     */
    public imageCommit(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, containerConfig?: ContainerConfig, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.imageCommit(container, repo, tag, comment, author, pause, changes, containerConfig, _options);
        return result.toPromise();
    }

    /**
     * Pull or import an image.
     * Create an image
     * @param [fromImage] Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @param [fromSrc] Source to import. The value may be a URL from which the image can be retrieved or &#x60;-&#x60; to read the image from the request body. This parameter may only be used when importing an image.
     * @param [repo] Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @param [tag] Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @param [message] Set commit message for imported image.
     * @param [xRegistryAuth] A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [changes] Apply &#x60;Dockerfile&#x60; instructions to the image that is created, for example: &#x60;changes&#x3D;ENV DEBUG&#x3D;true&#x60;. Note that &#x60;ENV DEBUG&#x3D;true&#x60; should be URI component encoded.  Supported &#x60;Dockerfile&#x60; instructions: &#x60;CMD&#x60;|&#x60;ENTRYPOINT&#x60;|&#x60;ENV&#x60;|&#x60;EXPOSE&#x60;|&#x60;ONBUILD&#x60;|&#x60;USER&#x60;|&#x60;VOLUME&#x60;|&#x60;WORKDIR&#x60; 
     * @param [platform] Platform in the format os[/arch[/variant]].  When used in combination with the &#x60;fromImage&#x60; option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host\&#39;s native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host\&#39;s native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the &#x60;fromSrc&#x60; option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host\&#39;s native OS and Architecture are used for the imported image. 
     * @param [inputImage] Image content if the value &#x60;-&#x60; has been specified in fromSrc query parameter
     */
    public imageCreateWithHttpInfo(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, xRegistryAuth?: string, changes?: Array<string>, platform?: string, inputImage?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.imageCreateWithHttpInfo(fromImage, fromSrc, repo, tag, message, xRegistryAuth, changes, platform, inputImage, _options);
        return result.toPromise();
    }

    /**
     * Pull or import an image.
     * Create an image
     * @param [fromImage] Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @param [fromSrc] Source to import. The value may be a URL from which the image can be retrieved or &#x60;-&#x60; to read the image from the request body. This parameter may only be used when importing an image.
     * @param [repo] Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @param [tag] Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @param [message] Set commit message for imported image.
     * @param [xRegistryAuth] A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [changes] Apply &#x60;Dockerfile&#x60; instructions to the image that is created, for example: &#x60;changes&#x3D;ENV DEBUG&#x3D;true&#x60;. Note that &#x60;ENV DEBUG&#x3D;true&#x60; should be URI component encoded.  Supported &#x60;Dockerfile&#x60; instructions: &#x60;CMD&#x60;|&#x60;ENTRYPOINT&#x60;|&#x60;ENV&#x60;|&#x60;EXPOSE&#x60;|&#x60;ONBUILD&#x60;|&#x60;USER&#x60;|&#x60;VOLUME&#x60;|&#x60;WORKDIR&#x60; 
     * @param [platform] Platform in the format os[/arch[/variant]].  When used in combination with the &#x60;fromImage&#x60; option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host\&#39;s native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host\&#39;s native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the &#x60;fromSrc&#x60; option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host\&#39;s native OS and Architecture are used for the imported image. 
     * @param [inputImage] Image content if the value &#x60;-&#x60; has been specified in fromSrc query parameter
     */
    public imageCreate(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, xRegistryAuth?: string, changes?: Array<string>, platform?: string, inputImage?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageCreate(fromImage, fromSrc, repo, tag, message, xRegistryAuth, changes, platform, inputImage, _options);
        return result.toPromise();
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param name Image name or ID
     * @param [force] Remove the image even if it is being used by stopped containers or has other tags
     * @param [noprune] Do not delete untagged parent images
     */
    public imageDeleteWithHttpInfo(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Promise<HttpInfo<Array<ImageDeleteResponseItem>>> {
        const result = this.api.imageDeleteWithHttpInfo(name, force, noprune, _options);
        return result.toPromise();
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param name Image name or ID
     * @param [force] Remove the image even if it is being used by stopped containers or has other tags
     * @param [noprune] Do not delete untagged parent images
     */
    public imageDelete(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Promise<Array<ImageDeleteResponseItem>> {
        const result = this.api.imageDelete(name, force, noprune, _options);
        return result.toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param name Image name or ID
     */
    public imageGetWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.imageGetWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param name Image name or ID
     */
    public imageGet(name: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageGet(name, _options);
        return result.toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param [names] Image names to filter by
     */
    public imageGetAllWithHttpInfo(names?: Array<string>, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.imageGetAllWithHttpInfo(names, _options);
        return result.toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param [names] Image names to filter by
     */
    public imageGetAll(names?: Array<string>, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageGetAll(names, _options);
        return result.toPromise();
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param name Image name or ID
     */
    public imageHistoryWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<Array<HistoryResponseItem>>> {
        const result = this.api.imageHistoryWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param name Image name or ID
     */
    public imageHistory(name: string, _options?: Configuration): Promise<Array<HistoryResponseItem>> {
        const result = this.api.imageHistory(name, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param name Image name or id
     */
    public imageInspectWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<ImageInspect>> {
        const result = this.api.imageInspectWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param name Image name or id
     */
    public imageInspect(name: string, _options?: Configuration): Promise<ImageInspect> {
        const result = this.api.imageInspect(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param [all] Show all images. Only images from a final layer (no children) are shown by default.
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list.  Available filters:  - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; 
     * @param [sharedSize] Compute and show shared size as a &#x60;SharedSize&#x60; field on each image.
     * @param [digests] Show digest information as a &#x60;RepoDigests&#x60; field on each image.
     * @param [manifests] Include &#x60;Manifests&#x60; in the image summary.
     */
    public imageListWithHttpInfo(all?: boolean, filters?: string, sharedSize?: boolean, digests?: boolean, manifests?: boolean, _options?: Configuration): Promise<HttpInfo<Array<ImageSummary>>> {
        const result = this.api.imageListWithHttpInfo(all, filters, sharedSize, digests, manifests, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param [all] Show all images. Only images from a final layer (no children) are shown by default.
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list.  Available filters:  - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; 
     * @param [sharedSize] Compute and show shared size as a &#x60;SharedSize&#x60; field on each image.
     * @param [digests] Show digest information as a &#x60;RepoDigests&#x60; field on each image.
     * @param [manifests] Include &#x60;Manifests&#x60; in the image summary.
     */
    public imageList(all?: boolean, filters?: string, sharedSize?: boolean, digests?: boolean, manifests?: boolean, _options?: Configuration): Promise<Array<ImageSummary>> {
        const result = this.api.imageList(all, filters, sharedSize, digests, manifests, _options);
        return result.toPromise();
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param [quiet] Suppress progress details during load.
     * @param [imagesTarball] Tar archive containing images
     */
    public imageLoadWithHttpInfo(quiet?: boolean, imagesTarball?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.imageLoadWithHttpInfo(quiet, imagesTarball, _options);
        return result.toPromise();
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param [quiet] Suppress progress details during load.
     * @param [imagesTarball] Tar archive containing images
     */
    public imageLoad(quiet?: boolean, imagesTarball?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.imageLoad(quiet, imagesTarball, _options);
        return result.toPromise();
    }

    /**
     * Delete unused images
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePruneWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<ImagePruneResponse>> {
        const result = this.api.imagePruneWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete unused images
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePrune(filters?: string, _options?: Configuration): Promise<ImagePruneResponse> {
        const result = this.api.imagePrune(filters, _options);
        return result.toPromise();
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param name Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push. 
     * @param xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [tag] Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed. 
     * @param [platform] JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60; 
     */
    public imagePushWithHttpInfo(name: string, xRegistryAuth: string, tag?: string, platform?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.imagePushWithHttpInfo(name, xRegistryAuth, tag, platform, _options);
        return result.toPromise();
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param name Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push. 
     * @param xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [tag] Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed. 
     * @param [platform] JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60; 
     */
    public imagePush(name: string, xRegistryAuth: string, tag?: string, platform?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imagePush(name, xRegistryAuth, tag, platform, _options);
        return result.toPromise();
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param term Term to search
     * @param [limit] Maximum number of results to return
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars. 
     */
    public imageSearchWithHttpInfo(term: string, limit?: number, filters?: string, _options?: Configuration): Promise<HttpInfo<Array<ImageSearchResponseItem>>> {
        const result = this.api.imageSearchWithHttpInfo(term, limit, filters, _options);
        return result.toPromise();
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param term Term to search
     * @param [limit] Maximum number of results to return
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars. 
     */
    public imageSearch(term: string, limit?: number, filters?: string, _options?: Configuration): Promise<Array<ImageSearchResponseItem>> {
        const result = this.api.imageSearch(term, limit, filters, _options);
        return result.toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name Image name or ID to tag.
     * @param [repo] The repository to tag in. For example, &#x60;someuser/someimage&#x60;.
     * @param [tag] The name of the new tag.
     */
    public imageTagWithHttpInfo(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.imageTagWithHttpInfo(name, repo, tag, _options);
        return result.toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name Image name or ID to tag.
     * @param [repo] The repository to tag in. For example, &#x60;someuser/someimage&#x60;.
     * @param [tag] The name of the new tag.
     */
    public imageTag(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageTag(name, repo, tag, _options);
        return result.toPromise();
    }


}



import { ObservableNetworkApi } from './ObservableAPI';

import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";
export class PromiseNetworkApi {
    private api: ObservableNetworkApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkApiRequestFactory,
        responseProcessor?: NetworkApiResponseProcessor
    ) {
        this.api = new ObservableNetworkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param id Network ID or name
     * @param container
     */
    public networkConnectWithHttpInfo(id: string, container: NetworkConnectRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.networkConnectWithHttpInfo(id, container, _options);
        return result.toPromise();
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param id Network ID or name
     * @param container
     */
    public networkConnect(id: string, container: NetworkConnectRequest, _options?: Configuration): Promise<void> {
        const result = this.api.networkConnect(id, container, _options);
        return result.toPromise();
    }

    /**
     * Create a network
     * @param networkConfig Network configuration
     */
    public networkCreateWithHttpInfo(networkConfig: NetworkCreateRequest, _options?: Configuration): Promise<HttpInfo<NetworkCreateResponse>> {
        const result = this.api.networkCreateWithHttpInfo(networkConfig, _options);
        return result.toPromise();
    }

    /**
     * Create a network
     * @param networkConfig Network configuration
     */
    public networkCreate(networkConfig: NetworkCreateRequest, _options?: Configuration): Promise<NetworkCreateResponse> {
        const result = this.api.networkCreate(networkConfig, _options);
        return result.toPromise();
    }

    /**
     * Remove a network
     * @param id Network ID or name
     */
    public networkDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.networkDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Remove a network
     * @param id Network ID or name
     */
    public networkDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.networkDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Disconnect a container from a network
     * @param id Network ID or name
     * @param container
     */
    public networkDisconnectWithHttpInfo(id: string, container: NetworkDisconnectRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.networkDisconnectWithHttpInfo(id, container, _options);
        return result.toPromise();
    }

    /**
     * Disconnect a container from a network
     * @param id Network ID or name
     * @param container
     */
    public networkDisconnect(id: string, container: NetworkDisconnectRequest, _options?: Configuration): Promise<void> {
        const result = this.api.networkDisconnect(id, container, _options);
        return result.toPromise();
    }

    /**
     * Inspect a network
     * @param id Network ID or name
     * @param [verbose] Detailed inspect output for troubleshooting
     * @param [scope] Filter the network by scope (swarm, global, or local)
     */
    public networkInspectWithHttpInfo(id: string, verbose?: boolean, scope?: string, _options?: Configuration): Promise<HttpInfo<Network>> {
        const result = this.api.networkInspectWithHttpInfo(id, verbose, scope, _options);
        return result.toPromise();
    }

    /**
     * Inspect a network
     * @param id Network ID or name
     * @param [verbose] Detailed inspect output for troubleshooting
     * @param [scope] Filter the network by scope (swarm, global, or local)
     */
    public networkInspect(id: string, verbose?: boolean, scope?: string, _options?: Configuration): Promise<Network> {
        const result = this.api.networkInspect(id, verbose, scope, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks. 
     */
    public networkListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Network>>> {
        const result = this.api.networkListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks. 
     */
    public networkList(filters?: string, _options?: Configuration): Promise<Array<Network>> {
        const result = this.api.networkList(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete unused networks
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPruneWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<NetworkPruneResponse>> {
        const result = this.api.networkPruneWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete unused networks
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPrune(filters?: string, _options?: Configuration): Promise<NetworkPruneResponse> {
        const result = this.api.networkPrune(filters, _options);
        return result.toPromise();
    }


}



import { ObservableNodeApi } from './ObservableAPI';

import { NodeApiRequestFactory, NodeApiResponseProcessor} from "../apis/NodeApi";
export class PromiseNodeApi {
    private api: ObservableNodeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NodeApiRequestFactory,
        responseProcessor?: NodeApiResponseProcessor
    ) {
        this.api = new ObservableNodeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a node
     * @param id The ID or name of the node
     * @param [force] Force remove a node from the swarm
     */
    public nodeDeleteWithHttpInfo(id: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.nodeDeleteWithHttpInfo(id, force, _options);
        return result.toPromise();
    }

    /**
     * Delete a node
     * @param id The ID or name of the node
     * @param [force] Force remove a node from the swarm
     */
    public nodeDelete(id: string, force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.nodeDelete(id, force, _options);
        return result.toPromise();
    }

    /**
     * Inspect a node
     * @param id The ID or name of the node
     */
    public nodeInspectWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Node>> {
        const result = this.api.nodeInspectWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a node
     * @param id The ID or name of the node
     */
    public nodeInspect(id: string, _options?: Configuration): Promise<Node> {
        const result = this.api.nodeInspect(id, _options);
        return result.toPromise();
    }

    /**
     * List nodes
     * @param [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     */
    public nodeListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Node>>> {
        const result = this.api.nodeListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * List nodes
     * @param [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     */
    public nodeList(filters?: string, _options?: Configuration): Promise<Array<Node>> {
        const result = this.api.nodeList(filters, _options);
        return result.toPromise();
    }

    /**
     * Update a node
     * @param id The ID of the node
     * @param version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param [body]
     */
    public nodeUpdateWithHttpInfo(id: string, version: number, body?: NodeSpec, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.nodeUpdateWithHttpInfo(id, version, body, _options);
        return result.toPromise();
    }

    /**
     * Update a node
     * @param id The ID of the node
     * @param version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param [body]
     */
    public nodeUpdate(id: string, version: number, body?: NodeSpec, _options?: Configuration): Promise<void> {
        const result = this.api.nodeUpdate(id, version, body, _options);
        return result.toPromise();
    }


}



import { ObservablePluginApi } from './ObservableAPI';

import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";
export class PromisePluginApi {
    private api: ObservablePluginApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginApiRequestFactory,
        responseProcessor?: PluginApiResponseProcessor
    ) {
        this.api = new ObservablePluginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get plugin privileges
     * @param remote The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public getPluginPrivilegesWithHttpInfo(remote: string, _options?: Configuration): Promise<HttpInfo<Array<PluginPrivilege>>> {
        const result = this.api.getPluginPrivilegesWithHttpInfo(remote, _options);
        return result.toPromise();
    }

    /**
     * Get plugin privileges
     * @param remote The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public getPluginPrivileges(remote: string, _options?: Configuration): Promise<Array<PluginPrivilege>> {
        const result = this.api.getPluginPrivileges(remote, _options);
        return result.toPromise();
    }

    /**
     * Create a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [tarContext] Path to tar containing plugin rootfs and manifest
     */
    public pluginCreateWithHttpInfo(name: string, tarContext?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginCreateWithHttpInfo(name, tarContext, _options);
        return result.toPromise();
    }

    /**
     * Create a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [tarContext] Path to tar containing plugin rootfs and manifest
     */
    public pluginCreate(name: string, tarContext?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.pluginCreate(name, tarContext, _options);
        return result.toPromise();
    }

    /**
     * Remove a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
     */
    public pluginDeleteWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<Plugin>> {
        const result = this.api.pluginDeleteWithHttpInfo(name, force, _options);
        return result.toPromise();
    }

    /**
     * Remove a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
     */
    public pluginDelete(name: string, force?: boolean, _options?: Configuration): Promise<Plugin> {
        const result = this.api.pluginDelete(name, force, _options);
        return result.toPromise();
    }

    /**
     * Disable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Force disable a plugin even if still in use. 
     */
    public pluginDisableWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginDisableWithHttpInfo(name, force, _options);
        return result.toPromise();
    }

    /**
     * Disable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Force disable a plugin even if still in use. 
     */
    public pluginDisable(name: string, force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.pluginDisable(name, force, _options);
        return result.toPromise();
    }

    /**
     * Enable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [timeout] Set the HTTP client timeout (in seconds)
     */
    public pluginEnableWithHttpInfo(name: string, timeout?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginEnableWithHttpInfo(name, timeout, _options);
        return result.toPromise();
    }

    /**
     * Enable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [timeout] Set the HTTP client timeout (in seconds)
     */
    public pluginEnable(name: string, timeout?: number, _options?: Configuration): Promise<void> {
        const result = this.api.pluginEnable(name, timeout, _options);
        return result.toPromise();
    }

    /**
     * Inspect a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginInspectWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<Plugin>> {
        const result = this.api.pluginInspectWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Inspect a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginInspect(name: string, _options?: Configuration): Promise<Plugin> {
        const result = this.api.pluginInspect(name, _options);
        return result.toPromise();
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60; 
     */
    public pluginListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Plugin>>> {
        const result = this.api.pluginListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60; 
     */
    public pluginList(filters?: string, _options?: Configuration): Promise<Array<Plugin>> {
        const result = this.api.pluginList(filters, _options);
        return result.toPromise();
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param remote Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [name] Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginPullWithHttpInfo(remote: string, name?: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginPullWithHttpInfo(remote, name, xRegistryAuth, body, _options);
        return result.toPromise();
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param remote Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [name] Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginPull(remote: string, name?: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Promise<void> {
        const result = this.api.pluginPull(remote, name, xRegistryAuth, body, _options);
        return result.toPromise();
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginPushWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginPushWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginPush(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.pluginPush(name, _options);
        return result.toPromise();
    }

    /**
     * Configure a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [body]
     */
    public pluginSetWithHttpInfo(name: string, body?: Array<string>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginSetWithHttpInfo(name, body, _options);
        return result.toPromise();
    }

    /**
     * Configure a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [body]
     */
    public pluginSet(name: string, body?: Array<string>, _options?: Configuration): Promise<void> {
        const result = this.api.pluginSet(name, body, _options);
        return result.toPromise();
    }

    /**
     * Upgrade a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param remote Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginUpgradeWithHttpInfo(name: string, remote: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pluginUpgradeWithHttpInfo(name, remote, xRegistryAuth, body, _options);
        return result.toPromise();
    }

    /**
     * Upgrade a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param remote Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginUpgrade(name: string, remote: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Promise<void> {
        const result = this.api.pluginUpgrade(name, remote, xRegistryAuth, body, _options);
        return result.toPromise();
    }


}



import { ObservableSecretApi } from './ObservableAPI';

import { SecretApiRequestFactory, SecretApiResponseProcessor} from "../apis/SecretApi";
export class PromiseSecretApi {
    private api: ObservableSecretApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretApiRequestFactory,
        responseProcessor?: SecretApiResponseProcessor
    ) {
        this.api = new ObservableSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param [body]
     */
    public secretCreateWithHttpInfo(body?: SecretCreateRequest, _options?: Configuration): Promise<HttpInfo<IdResponse>> {
        const result = this.api.secretCreateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a secret
     * @param [body]
     */
    public secretCreate(body?: SecretCreateRequest, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.secretCreate(body, _options);
        return result.toPromise();
    }

    /**
     * Delete a secret
     * @param id ID of the secret
     */
    public secretDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.secretDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a secret
     * @param id ID of the secret
     */
    public secretDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.secretDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a secret
     * @param id ID of the secret
     */
    public secretInspectWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Secret>> {
        const result = this.api.secretInspectWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a secret
     * @param id ID of the secret
     */
    public secretInspect(id: string, _options?: Configuration): Promise<Secret> {
        const result = this.api.secretInspect(id, _options);
        return result.toPromise();
    }

    /**
     * List secrets
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60; 
     */
    public secretListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Secret>>> {
        const result = this.api.secretListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * List secrets
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60; 
     */
    public secretList(filters?: string, _options?: Configuration): Promise<Array<Secret>> {
        const result = this.api.secretList(filters, _options);
        return result.toPromise();
    }

    /**
     * Update a Secret
     * @param id The ID or name of the secret
     * @param version The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     */
    public secretUpdateWithHttpInfo(id: string, version: number, body?: SecretSpec, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.secretUpdateWithHttpInfo(id, version, body, _options);
        return result.toPromise();
    }

    /**
     * Update a Secret
     * @param id The ID or name of the secret
     * @param version The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     */
    public secretUpdate(id: string, version: number, body?: SecretSpec, _options?: Configuration): Promise<void> {
        const result = this.api.secretUpdate(id, version, body, _options);
        return result.toPromise();
    }


}



import { ObservableServiceApi } from './ObservableAPI';

import { ServiceApiRequestFactory, ServiceApiResponseProcessor} from "../apis/ServiceApi";
export class PromiseServiceApi {
    private api: ObservableServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceApiRequestFactory,
        responseProcessor?: ServiceApiResponseProcessor
    ) {
        this.api = new ObservableServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a service
     * @param body
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceCreateWithHttpInfo(body: ServiceCreateRequest, xRegistryAuth?: string, _options?: Configuration): Promise<HttpInfo<ServiceCreateResponse>> {
        const result = this.api.serviceCreateWithHttpInfo(body, xRegistryAuth, _options);
        return result.toPromise();
    }

    /**
     * Create a service
     * @param body
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceCreate(body: ServiceCreateRequest, xRegistryAuth?: string, _options?: Configuration): Promise<ServiceCreateResponse> {
        const result = this.api.serviceCreate(body, xRegistryAuth, _options);
        return result.toPromise();
    }

    /**
     * Delete a service
     * @param id ID or name of service.
     */
    public serviceDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.serviceDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a service
     * @param id ID or name of service.
     */
    public serviceDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.serviceDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a service
     * @param id ID or name of service.
     * @param [insertDefaults] Fill empty fields with default values.
     */
    public serviceInspectWithHttpInfo(id: string, insertDefaults?: boolean, _options?: Configuration): Promise<HttpInfo<Service>> {
        const result = this.api.serviceInspectWithHttpInfo(id, insertDefaults, _options);
        return result.toPromise();
    }

    /**
     * Inspect a service
     * @param id ID or name of service.
     * @param [insertDefaults] Fill empty fields with default values.
     */
    public serviceInspect(id: string, insertDefaults?: boolean, _options?: Configuration): Promise<Service> {
        const result = this.api.serviceInspect(id, insertDefaults, _options);
        return result.toPromise();
    }

    /**
     * List services
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * @param [status] Include service status, with count of running and desired tasks. 
     */
    public serviceListWithHttpInfo(filters?: string, status?: boolean, _options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        const result = this.api.serviceListWithHttpInfo(filters, status, _options);
        return result.toPromise();
    }

    /**
     * List services
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * @param [status] Include service status, with count of running and desired tasks. 
     */
    public serviceList(filters?: string, status?: boolean, _options?: Configuration): Promise<Array<Service>> {
        const result = this.api.serviceList(filters, status, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get service logs
     * @param id ID or name of the service
     * @param [details] Show service context and extra details provided to logs.
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public serviceLogsWithHttpInfo(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.serviceLogsWithHttpInfo(id, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get service logs
     * @param id ID or name of the service
     * @param [details] Show service context and extra details provided to logs.
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public serviceLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.serviceLogs(id, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Update a service
     * @param id ID or name of service.
     * @param version The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60; 
     * @param body
     * @param [registryAuthFrom] If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials. 
     * @param [rollback] Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceUpdateWithHttpInfo(id: string, version: number, body: ServiceUpdateRequest, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, _options?: Configuration): Promise<HttpInfo<ServiceUpdateResponse>> {
        const result = this.api.serviceUpdateWithHttpInfo(id, version, body, registryAuthFrom, rollback, xRegistryAuth, _options);
        return result.toPromise();
    }

    /**
     * Update a service
     * @param id ID or name of service.
     * @param version The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60; 
     * @param body
     * @param [registryAuthFrom] If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials. 
     * @param [rollback] Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceUpdate(id: string, version: number, body: ServiceUpdateRequest, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, _options?: Configuration): Promise<ServiceUpdateResponse> {
        const result = this.api.serviceUpdate(id, version, body, registryAuthFrom, rollback, xRegistryAuth, _options);
        return result.toPromise();
    }


}



import { ObservableSessionApi } from './ObservableAPI';

import { SessionApiRequestFactory, SessionApiResponseProcessor} from "../apis/SessionApi";
export class PromiseSessionApi {
    private api: ObservableSessionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionApiRequestFactory,
        responseProcessor?: SessionApiResponseProcessor
    ) {
        this.api = new ObservableSessionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     */
    public sessionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sessionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     */
    public session(_options?: Configuration): Promise<void> {
        const result = this.api.session(_options);
        return result.toPromise();
    }


}



import { ObservableSwarmApi } from './ObservableAPI';

import { SwarmApiRequestFactory, SwarmApiResponseProcessor} from "../apis/SwarmApi";
export class PromiseSwarmApi {
    private api: ObservableSwarmApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SwarmApiRequestFactory,
        responseProcessor?: SwarmApiResponseProcessor
    ) {
        this.api = new ObservableSwarmApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initialize a new swarm
     * @param body
     */
    public swarmInitWithHttpInfo(body: SwarmInitRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.swarmInitWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Initialize a new swarm
     * @param body
     */
    public swarmInit(body: SwarmInitRequest, _options?: Configuration): Promise<string> {
        const result = this.api.swarmInit(body, _options);
        return result.toPromise();
    }

    /**
     * Inspect swarm
     */
    public swarmInspectWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Swarm>> {
        const result = this.api.swarmInspectWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Inspect swarm
     */
    public swarmInspect(_options?: Configuration): Promise<Swarm> {
        const result = this.api.swarmInspect(_options);
        return result.toPromise();
    }

    /**
     * Join an existing swarm
     * @param body
     */
    public swarmJoinWithHttpInfo(body: SwarmJoinRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.swarmJoinWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Join an existing swarm
     * @param body
     */
    public swarmJoin(body: SwarmJoinRequest, _options?: Configuration): Promise<void> {
        const result = this.api.swarmJoin(body, _options);
        return result.toPromise();
    }

    /**
     * Leave a swarm
     * @param [force] Force leave swarm, even if this is the last manager or that it will break the cluster. 
     */
    public swarmLeaveWithHttpInfo(force?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.swarmLeaveWithHttpInfo(force, _options);
        return result.toPromise();
    }

    /**
     * Leave a swarm
     * @param [force] Force leave swarm, even if this is the last manager or that it will break the cluster. 
     */
    public swarmLeave(force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.swarmLeave(force, _options);
        return result.toPromise();
    }

    /**
     * Unlock a locked manager
     * @param body
     */
    public swarmUnlockWithHttpInfo(body: SwarmUnlockRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.swarmUnlockWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Unlock a locked manager
     * @param body
     */
    public swarmUnlock(body: SwarmUnlockRequest, _options?: Configuration): Promise<void> {
        const result = this.api.swarmUnlock(body, _options);
        return result.toPromise();
    }

    /**
     * Get the unlock key
     */
    public swarmUnlockkeyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UnlockKeyResponse>> {
        const result = this.api.swarmUnlockkeyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the unlock key
     */
    public swarmUnlockkey(_options?: Configuration): Promise<UnlockKeyResponse> {
        const result = this.api.swarmUnlockkey(_options);
        return result.toPromise();
    }

    /**
     * Update a swarm
     * @param version The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * @param body
     * @param [rotateWorkerToken] Rotate the worker join token.
     * @param [rotateManagerToken] Rotate the manager join token.
     * @param [rotateManagerUnlockKey] Rotate the manager unlock key.
     */
    public swarmUpdateWithHttpInfo(version: number, body: SwarmSpec, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.swarmUpdateWithHttpInfo(version, body, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey, _options);
        return result.toPromise();
    }

    /**
     * Update a swarm
     * @param version The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * @param body
     * @param [rotateWorkerToken] Rotate the worker join token.
     * @param [rotateManagerToken] Rotate the manager join token.
     * @param [rotateManagerUnlockKey] Rotate the manager unlock key.
     */
    public swarmUpdate(version: number, body: SwarmSpec, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.swarmUpdate(version, body, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey, _options);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class PromiseSystemApi {
    private api: ObservableSystemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param [authConfig] Authentication to check
     */
    public systemAuthWithHttpInfo(authConfig?: AuthConfig, _options?: Configuration): Promise<HttpInfo<SystemAuthResponse | void>> {
        const result = this.api.systemAuthWithHttpInfo(authConfig, _options);
        return result.toPromise();
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param [authConfig] Authentication to check
     */
    public systemAuth(authConfig?: AuthConfig, _options?: Configuration): Promise<SystemAuthResponse | void> {
        const result = this.api.systemAuth(authConfig, _options);
        return result.toPromise();
    }

    /**
     * Get data usage information
     * @param [type] Object types, for which to compute and return data. 
     */
    public systemDataUsageWithHttpInfo(type?: Array<'container' | 'image' | 'volume' | 'build-cache'>, _options?: Configuration): Promise<HttpInfo<SystemDataUsageResponse>> {
        const result = this.api.systemDataUsageWithHttpInfo(type, _options);
        return result.toPromise();
    }

    /**
     * Get data usage information
     * @param [type] Object types, for which to compute and return data. 
     */
    public systemDataUsage(type?: Array<'container' | 'image' | 'volume' | 'build-cache'>, _options?: Configuration): Promise<SystemDataUsageResponse> {
        const result = this.api.systemDataUsage(type, _options);
        return result.toPromise();
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param [since] Show events created since this timestamp then stream new events.
     * @param [until] Show events created until this timestamp then stop streaming.
     * @param [filters] A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name 
     */
    public systemEventsWithHttpInfo(since?: string, until?: string, filters?: string, _options?: Configuration): Promise<HttpInfo<EventMessage>> {
        const result = this.api.systemEventsWithHttpInfo(since, until, filters, _options);
        return result.toPromise();
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param [since] Show events created since this timestamp then stream new events.
     * @param [until] Show events created until this timestamp then stop streaming.
     * @param [filters] A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name 
     */
    public systemEvents(since?: string, until?: string, filters?: string, _options?: Configuration): Promise<EventMessage> {
        const result = this.api.systemEvents(since, until, filters, _options);
        return result.toPromise();
    }

    /**
     * Get system information
     */
    public systemInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SystemInfo>> {
        const result = this.api.systemInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get system information
     */
    public systemInfo(_options?: Configuration): Promise<SystemInfo> {
        const result = this.api.systemInfo(_options);
        return result.toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.systemPingWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPing(_options?: Configuration): Promise<string> {
        const result = this.api.systemPing(_options);
        return result.toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingHeadWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.systemPingHeadWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingHead(_options?: Configuration): Promise<string> {
        const result = this.api.systemPingHead(_options);
        return result.toPromise();
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     */
    public systemVersionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SystemVersion>> {
        const result = this.api.systemVersionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     */
    public systemVersion(_options?: Configuration): Promise<SystemVersion> {
        const result = this.api.systemVersion(_options);
        return result.toPromise();
    }


}



import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Inspect a task
     * @param id ID of the task
     */
    public taskInspectWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.taskInspectWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Inspect a task
     * @param id ID of the task
     */
    public taskInspect(id: string, _options?: Configuration): Promise<Task> {
        const result = this.api.taskInspect(id, _options);
        return result.toPromise();
    }

    /**
     * List tasks
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     */
    public taskListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        const result = this.api.taskListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * List tasks
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     */
    public taskList(filters?: string, _options?: Configuration): Promise<Array<Task>> {
        const result = this.api.taskList(filters, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get task logs
     * @param id ID of the task
     * @param [details] Show task context and extra details provided to logs.
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public taskLogsWithHttpInfo(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.taskLogsWithHttpInfo(id, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * Get task logs
     * @param id ID of the task
     * @param [details] Show task context and extra details provided to logs.
     * @param [follow] Keep connection after returning logs.
     * @param [stdout] Return logs from &#x60;stdout&#x60;
     * @param [stderr] Return logs from &#x60;stderr&#x60;
     * @param [since] Only return logs since this time, as a UNIX timestamp
     * @param [timestamps] Add timestamps to every log line
     * @param [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     */
    public taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
    }


}



import { ObservableVolumeApi } from './ObservableAPI';

import { VolumeApiRequestFactory, VolumeApiResponseProcessor} from "../apis/VolumeApi";
export class PromiseVolumeApi {
    private api: ObservableVolumeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VolumeApiRequestFactory,
        responseProcessor?: VolumeApiResponseProcessor
    ) {
        this.api = new ObservableVolumeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param volumeConfig Volume configuration
     */
    public volumeCreateWithHttpInfo(volumeConfig: VolumeCreateOptions, _options?: Configuration): Promise<HttpInfo<Volume>> {
        const result = this.api.volumeCreateWithHttpInfo(volumeConfig, _options);
        return result.toPromise();
    }

    /**
     * Create a volume
     * @param volumeConfig Volume configuration
     */
    public volumeCreate(volumeConfig: VolumeCreateOptions, _options?: Configuration): Promise<Volume> {
        const result = this.api.volumeCreate(volumeConfig, _options);
        return result.toPromise();
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param name Volume name or ID
     * @param [force] Force the removal of the volume
     */
    public volumeDeleteWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.volumeDeleteWithHttpInfo(name, force, _options);
        return result.toPromise();
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param name Volume name or ID
     * @param [force] Force the removal of the volume
     */
    public volumeDelete(name: string, force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.volumeDelete(name, force, _options);
        return result.toPromise();
    }

    /**
     * Inspect a volume
     * @param name Volume name or ID
     */
    public volumeInspectWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<Volume>> {
        const result = this.api.volumeInspectWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Inspect a volume
     * @param name Volume name or ID
     */
    public volumeInspect(name: string, _options?: Configuration): Promise<Volume> {
        const result = this.api.volumeInspect(name, _options);
        return result.toPromise();
    }

    /**
     * List volumes
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name. 
     */
    public volumeListWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<VolumeListResponse>> {
        const result = this.api.volumeListWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * List volumes
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name. 
     */
    public volumeList(filters?: string, _options?: Configuration): Promise<VolumeListResponse> {
        const result = this.api.volumeList(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete unused volumes
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes. 
     */
    public volumePruneWithHttpInfo(filters?: string, _options?: Configuration): Promise<HttpInfo<VolumePruneResponse>> {
        const result = this.api.volumePruneWithHttpInfo(filters, _options);
        return result.toPromise();
    }

    /**
     * Delete unused volumes
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes. 
     */
    public volumePrune(filters?: string, _options?: Configuration): Promise<VolumePruneResponse> {
        const result = this.api.volumePrune(filters, _options);
        return result.toPromise();
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param name The name or ID of the volume
     * @param version The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field. 
     * @param [body] The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged. 
     */
    public volumeUpdateWithHttpInfo(name: string, version: number, body?: VolumeUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.volumeUpdateWithHttpInfo(name, version, body, _options);
        return result.toPromise();
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param name The name or ID of the volume
     * @param version The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field. 
     * @param [body] The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged. 
     */
    public volumeUpdate(name: string, version: number, body?: VolumeUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.volumeUpdate(name, version, body, _options);
        return result.toPromise();
    }


}



