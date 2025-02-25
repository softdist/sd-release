import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class ObservableConfigApi {
    private requestFactory: ConfigApiRequestFactory;
    private responseProcessor: ConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigApiResponseProcessor();
    }

    /**
     * Create a config
     * @param [body]
     */
    public configCreateWithHttpInfo(body?: ConfigCreateRequest, _options?: Configuration): Observable<HttpInfo<IdResponse>> {
        const requestContextPromise = this.requestFactory.configCreate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a config
     * @param [body]
     */
    public configCreate(body?: ConfigCreateRequest, _options?: Configuration): Observable<IdResponse> {
        return this.configCreateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

    /**
     * Delete a config
     * @param id ID of the config
     */
    public configDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.configDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a config
     * @param id ID of the config
     */
    public configDelete(id: string, _options?: Configuration): Observable<void> {
        return this.configDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a config
     * @param id ID of the config
     */
    public configInspectWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Config>> {
        const requestContextPromise = this.requestFactory.configInspect(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a config
     * @param id ID of the config
     */
    public configInspect(id: string, _options?: Configuration): Observable<Config> {
        return this.configInspectWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Config>) => apiResponse.data));
    }

    /**
     * List configs
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60; 
     */
    public configListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Config>>> {
        const requestContextPromise = this.requestFactory.configList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List configs
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the configs list.  Available filters:  - &#x60;id&#x3D;&lt;config id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;config name&gt;&#x60; - &#x60;names&#x3D;&lt;config name&gt;&#x60; 
     */
    public configList(filters?: string, _options?: Configuration): Observable<Array<Config>> {
        return this.configListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Config>>) => apiResponse.data));
    }

    /**
     * Update a Config
     * @param id The ID or name of the config
     * @param version The version number of the config object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     */
    public configUpdateWithHttpInfo(id: string, version: number, body?: ConfigSpec, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.configUpdate(id, version, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Config
     * @param id The ID or name of the config
     * @param version The version number of the config object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     */
    public configUpdate(id: string, version: number, body?: ConfigSpec, _options?: Configuration): Observable<void> {
        return this.configUpdateWithHttpInfo(id, version, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ContainerApiRequestFactory, ContainerApiResponseProcessor} from "../apis/ContainerApi";
export class ObservableContainerApi {
    private requestFactory: ContainerApiRequestFactory;
    private responseProcessor: ContainerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContainerApiRequestFactory,
        responseProcessor?: ContainerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContainerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContainerApiResponseProcessor();
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveWithHttpInfo(id: string, path: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerArchive(id, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerArchiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a tar archive of a resource in the filesystem of container id.
     * Get an archive of a filesystem resource in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchive(id: string, path: string, _options?: Configuration): Observable<void> {
        return this.containerArchiveWithHttpInfo(id, path, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveInfoWithHttpInfo(id: string, path: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerArchiveInfo(id, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerArchiveInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * Get information about files in a container
     * @param id ID or name of the container
     * @param path Resource in the container’s filesystem to archive.
     */
    public containerArchiveInfo(id: string, path: string, _options?: Configuration): Observable<void> {
        return this.containerArchiveInfoWithHttpInfo(id, path, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public containerAttachWithHttpInfo(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerAttach(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerAttachWithHttpInfo(rsp)));
            }));
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
    public containerAttach(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Observable<void> {
        return this.containerAttachWithHttpInfo(id, detachKeys, logs, stream, stdin, stdout, stderr, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public containerAttachWebsocketWithHttpInfo(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerAttachWebsocket(id, detachKeys, logs, stream, stdin, stdout, stderr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerAttachWebsocketWithHttpInfo(rsp)));
            }));
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
    public containerAttachWebsocket(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, _options?: Configuration): Observable<void> {
        return this.containerAttachWebsocketWithHttpInfo(id, detachKeys, logs, stream, stdin, stdout, stderr, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param id ID or name of the container
     */
    public containerChangesWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Array<FilesystemChange>>> {
        const requestContextPromise = this.requestFactory.containerChanges(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerChangesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns which files in a container\'s filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified (\"C\") - `1`: Added (\"A\") - `2`: Deleted (\"D\") 
     * Get changes on a container’s filesystem
     * @param id ID or name of the container
     */
    public containerChanges(id: string, _options?: Configuration): Observable<Array<FilesystemChange>> {
        return this.containerChangesWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<FilesystemChange>>) => apiResponse.data));
    }

    /**
     * Create a container
     * @param body Container to create
     * @param [name] Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;. 
     * @param [platform] Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested 
     */
    public containerCreateWithHttpInfo(body: ContainerCreateRequest, name?: string, platform?: string, _options?: Configuration): Observable<HttpInfo<ContainerCreateResponse>> {
        const requestContextPromise = this.requestFactory.containerCreate(body, name, platform, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a container
     * @param body Container to create
     * @param [name] Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;. 
     * @param [platform] Platform in the format &#x60;os[/arch[/variant]]&#x60; used for image lookup.  When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a &#x60;404&#x60; status.  If the option is not set, the host\&#39;s native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the &#x60;Warnings&#x60; field in the response, for example;      WARNING: The requested image\&#39;s platform (linux/arm64/v8) does not              match the detected host platform (linux/amd64) and no              specific platform was requested 
     */
    public containerCreate(body: ContainerCreateRequest, name?: string, platform?: string, _options?: Configuration): Observable<ContainerCreateResponse> {
        return this.containerCreateWithHttpInfo(body, name, platform, _options).pipe(map((apiResponse: HttpInfo<ContainerCreateResponse>) => apiResponse.data));
    }

    /**
     * Remove a container
     * @param id ID or name of the container
     * @param [v] Remove anonymous volumes associated with the container.
     * @param [force] If the container is running, kill it before removing it.
     * @param [link] Remove the specified link associated with the container.
     */
    public containerDeleteWithHttpInfo(id: string, v?: boolean, force?: boolean, link?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerDelete(id, v, force, link, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a container
     * @param id ID or name of the container
     * @param [v] Remove anonymous volumes associated with the container.
     * @param [force] If the container is running, kill it before removing it.
     * @param [link] Remove the specified link associated with the container.
     */
    public containerDelete(id: string, v?: boolean, force?: boolean, link?: boolean, _options?: Configuration): Observable<void> {
        return this.containerDeleteWithHttpInfo(id, v, force, link, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param id ID or name of the container
     */
    public containerExportWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerExport(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerExportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param id ID or name of the container
     */
    public containerExport(id: string, _options?: Configuration): Observable<void> {
        return this.containerExportWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param id ID or name of the container
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;
     */
    public containerInspectWithHttpInfo(id: string, size?: boolean, _options?: Configuration): Observable<HttpInfo<ContainerInspectResponse>> {
        const requestContextPromise = this.requestFactory.containerInspect(id, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return low-level information about a container.
     * Inspect a container
     * @param id ID or name of the container
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;
     */
    public containerInspect(id: string, size?: boolean, _options?: Configuration): Observable<ContainerInspectResponse> {
        return this.containerInspectWithHttpInfo(id, size, _options).pipe(map((apiResponse: HttpInfo<ContainerInspectResponse>) => apiResponse.data));
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     */
    public containerKillWithHttpInfo(id: string, signal?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerKill(id, signal, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerKillWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * Kill a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     */
    public containerKill(id: string, signal?: string, _options?: Configuration): Observable<void> {
        return this.containerKillWithHttpInfo(id, signal, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param [all] Return all containers. By default, only running containers are shown. 
     * @param [limit] Return this number of most recently created containers, including non-running ones. 
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;. 
     * @param [filters] Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     */
    public containerListWithHttpInfo(all?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Observable<HttpInfo<Array<ContainerSummary>>> {
        const requestContextPromise = this.requestFactory.containerList(all, limit, size, filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * List containers
     * @param [all] Return all containers. By default, only running containers are shown. 
     * @param [limit] Return this number of most recently created containers, including non-running ones. 
     * @param [size] Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;. 
     * @param [filters] Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container\&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container\&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     */
    public containerList(all?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Observable<Array<ContainerSummary>> {
        return this.containerListWithHttpInfo(all, limit, size, filters, _options).pipe(map((apiResponse: HttpInfo<Array<ContainerSummary>>) => apiResponse.data));
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
    public containerLogsWithHttpInfo(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.containerLogs(id, follow, stdout, stderr, since, until, timestamps, tail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerLogsWithHttpInfo(rsp)));
            }));
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
    public containerLogs(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpFile> {
        return this.containerLogsWithHttpInfo(id, follow, stdout, stderr, since, until, timestamps, tail, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param id ID or name of the container
     */
    public containerPauseWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerPause(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerPauseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * Pause a container
     * @param id ID or name of the container
     */
    public containerPause(id: string, _options?: Configuration): Observable<void> {
        return this.containerPauseWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete stopped containers
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPruneWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<ContainerPruneResponse>> {
        const requestContextPromise = this.requestFactory.containerPrune(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerPruneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete stopped containers
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPrune(filters?: string, _options?: Configuration): Observable<ContainerPruneResponse> {
        return this.containerPruneWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<ContainerPruneResponse>) => apiResponse.data));
    }

    /**
     * Rename a container
     * @param id ID or name of the container
     * @param name New name for the container
     */
    public containerRenameWithHttpInfo(id: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerRename(id, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerRenameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rename a container
     * @param id ID or name of the container
     * @param name New name for the container
     */
    public containerRename(id: string, name: string, _options?: Configuration): Observable<void> {
        return this.containerRenameWithHttpInfo(id, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param id ID or name of the container
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public containerResizeWithHttpInfo(id: string, h: number, w: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerResize(id, h, w, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerResizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resize the TTY for a container.
     * Resize a container TTY
     * @param id ID or name of the container
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public containerResize(id: string, h: number, w: number, _options?: Configuration): Observable<void> {
        return this.containerResizeWithHttpInfo(id, h, w, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restart a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerRestartWithHttpInfo(id: string, signal?: string, t?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerRestart(id, signal, t, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerRestartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restart a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerRestart(id: string, signal?: string, t?: number, _options?: Configuration): Observable<void> {
        return this.containerRestartWithHttpInfo(id, signal, t, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     */
    public containerStartWithHttpInfo(id: string, detachKeys?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerStart(id, detachKeys, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerStartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start a container
     * @param id ID or name of the container
     * @param [detachKeys] Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;. 
     */
    public containerStart(id: string, detachKeys?: string, _options?: Configuration): Observable<void> {
        return this.containerStartWithHttpInfo(id, detachKeys, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param id ID or name of the container
     * @param [stream] Stream the output. If false, the stats will be output once and then it will disconnect. 
     * @param [oneShot] Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;. 
     */
    public containerStatsWithHttpInfo(id: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.containerStats(id, stream, oneShot, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerStatsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * Get container stats based on resource usage
     * @param id ID or name of the container
     * @param [stream] Stream the output. If false, the stats will be output once and then it will disconnect. 
     * @param [oneShot] Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;. 
     */
    public containerStats(id: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Observable<any> {
        return this.containerStatsWithHttpInfo(id, stream, oneShot, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Stop a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerStopWithHttpInfo(id: string, signal?: string, t?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerStop(id, signal, t, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerStopWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop a container
     * @param id ID or name of the container
     * @param [signal] Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;). 
     * @param [t] Number of seconds to wait before killing the container
     */
    public containerStop(id: string, signal?: string, t?: number, _options?: Configuration): Observable<void> {
        return this.containerStopWithHttpInfo(id, signal, t, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param id ID or name of the container
     * @param [psArgs] The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60;
     */
    public containerTopWithHttpInfo(id: string, psArgs?: string, _options?: Configuration): Observable<HttpInfo<ContainerTopResponse>> {
        const requestContextPromise = this.requestFactory.containerTop(id, psArgs, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerTopWithHttpInfo(rsp)));
            }));
    }

    /**
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * List processes running inside a container
     * @param id ID or name of the container
     * @param [psArgs] The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60;
     */
    public containerTop(id: string, psArgs?: string, _options?: Configuration): Observable<ContainerTopResponse> {
        return this.containerTopWithHttpInfo(id, psArgs, _options).pipe(map((apiResponse: HttpInfo<ContainerTopResponse>) => apiResponse.data));
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param id ID or name of the container
     */
    public containerUnpauseWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.containerUnpause(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerUnpauseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resume a container which has been paused.
     * Unpause a container
     * @param id ID or name of the container
     */
    public containerUnpause(id: string, _options?: Configuration): Observable<void> {
        return this.containerUnpauseWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param id ID or name of the container
     * @param update
     */
    public containerUpdateWithHttpInfo(id: string, update: ContainerUpdateRequest, _options?: Configuration): Observable<HttpInfo<ContainerUpdateResponse>> {
        const requestContextPromise = this.requestFactory.containerUpdate(id, update, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change various configuration options of a container without having to recreate it. 
     * Update a container
     * @param id ID or name of the container
     * @param update
     */
    public containerUpdate(id: string, update: ContainerUpdateRequest, _options?: Configuration): Observable<ContainerUpdateResponse> {
        return this.containerUpdateWithHttpInfo(id, update, _options).pipe(map((apiResponse: HttpInfo<ContainerUpdateResponse>) => apiResponse.data));
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param id ID or name of the container
     * @param [condition] Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty. 
     */
    public containerWaitWithHttpInfo(id: string, condition?: 'not-running' | 'next-exit' | 'removed', _options?: Configuration): Observable<HttpInfo<ContainerWaitResponse>> {
        const requestContextPromise = this.requestFactory.containerWait(id, condition, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerWaitWithHttpInfo(rsp)));
            }));
    }

    /**
     * Block until a container stops, then returns the exit code.
     * Wait for a container
     * @param id ID or name of the container
     * @param [condition] Wait until a container state reaches the given condition.  Defaults to &#x60;not-running&#x60; if omitted or empty. 
     */
    public containerWait(id: string, condition?: 'not-running' | 'next-exit' | 'removed', _options?: Configuration): Observable<ContainerWaitResponse> {
        return this.containerWaitWithHttpInfo(id, condition, _options).pipe(map((apiResponse: HttpInfo<ContainerWaitResponse>) => apiResponse.data));
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
    public putContainerArchiveWithHttpInfo(id: string, path: string, inputStream: HttpFile, noOverwriteDirNonDir?: string, copyUIDGID?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.putContainerArchive(id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putContainerArchiveWithHttpInfo(rsp)));
            }));
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
    public putContainerArchive(id: string, path: string, inputStream: HttpFile, noOverwriteDirNonDir?: string, copyUIDGID?: string, _options?: Configuration): Observable<void> {
        return this.putContainerArchiveWithHttpInfo(id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class ObservableDistributionApi {
    private requestFactory: DistributionApiRequestFactory;
    private responseProcessor: DistributionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DistributionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DistributionApiResponseProcessor();
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param name Image name or id
     */
    public distributionInspectWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<DistributionInspect>> {
        const requestContextPromise = this.requestFactory.distributionInspect(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return image digest and platform information by contacting the registry. 
     * Get image information from the registry
     * @param name Image name or id
     */
    public distributionInspect(name: string, _options?: Configuration): Observable<DistributionInspect> {
        return this.distributionInspectWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<DistributionInspect>) => apiResponse.data));
    }

}

import { ExecApiRequestFactory, ExecApiResponseProcessor} from "../apis/ExecApi";
export class ObservableExecApi {
    private requestFactory: ExecApiRequestFactory;
    private responseProcessor: ExecApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExecApiRequestFactory,
        responseProcessor?: ExecApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExecApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExecApiResponseProcessor();
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param id ID or name of container
     * @param execConfig Exec configuration
     */
    public containerExecWithHttpInfo(id: string, execConfig: ExecConfig, _options?: Configuration): Observable<HttpInfo<IdResponse>> {
        const requestContextPromise = this.requestFactory.containerExec(id, execConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.containerExecWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run a command inside a running container.
     * Create an exec instance
     * @param id ID or name of container
     * @param execConfig Exec configuration
     */
    public containerExec(id: string, execConfig: ExecConfig, _options?: Configuration): Observable<IdResponse> {
        return this.containerExecWithHttpInfo(id, execConfig, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspectWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ExecInspectResponse>> {
        const requestContextPromise = this.requestFactory.execInspect(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.execInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspect(id: string, _options?: Configuration): Observable<ExecInspectResponse> {
        return this.execInspectWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ExecInspectResponse>) => apiResponse.data));
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public execResizeWithHttpInfo(id: string, h: number, w: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.execResize(id, h, w, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.execResizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public execResize(id: string, h: number, w: number, _options?: Configuration): Observable<void> {
        return this.execResizeWithHttpInfo(id, h, w, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param id Exec instance ID
     * @param [execStartConfig]
     */
    public execStartWithHttpInfo(id: string, execStartConfig?: ExecStartConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.execStart(id, execStartConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.execStartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * Start an exec instance
     * @param id Exec instance ID
     * @param [execStartConfig]
     */
    public execStart(id: string, execStartConfig?: ExecStartConfig, _options?: Configuration): Observable<void> {
        return this.execStartWithHttpInfo(id, execStartConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class ObservableImageApi {
    private requestFactory: ImageApiRequestFactory;
    private responseProcessor: ImageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImageApiResponseProcessor();
    }

    /**
     * Delete builder cache
     * @param [keepStorage] Amount of disk space in bytes to keep for cache
     * @param [all] Remove all types of build cache
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60; 
     */
    public buildPruneWithHttpInfo(keepStorage?: number, all?: boolean, filters?: string, _options?: Configuration): Observable<HttpInfo<BuildPruneResponse>> {
        const requestContextPromise = this.requestFactory.buildPrune(keepStorage, all, filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buildPruneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete builder cache
     * @param [keepStorage] Amount of disk space in bytes to keep for cache
     * @param [all] Remove all types of build cache
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60; 
     */
    public buildPrune(keepStorage?: number, all?: boolean, filters?: string, _options?: Configuration): Observable<BuildPruneResponse> {
        return this.buildPruneWithHttpInfo(keepStorage, all, filters, _options).pipe(map((apiResponse: HttpInfo<BuildPruneResponse>) => apiResponse.data));
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
    public imageBuildWithHttpInfo(dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, version?: '1' | '2', inputStream?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.imageBuild(dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, version, inputStream, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageBuildWithHttpInfo(rsp)));
            }));
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
    public imageBuild(dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, version?: '1' | '2', inputStream?: HttpFile, _options?: Configuration): Observable<void> {
        return this.imageBuildWithHttpInfo(dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, version, inputStream, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public imageCommitWithHttpInfo(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, containerConfig?: ContainerConfig, _options?: Configuration): Observable<HttpInfo<IdResponse>> {
        const requestContextPromise = this.requestFactory.imageCommit(container, repo, tag, comment, author, pause, changes, containerConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageCommitWithHttpInfo(rsp)));
            }));
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
    public imageCommit(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, containerConfig?: ContainerConfig, _options?: Configuration): Observable<IdResponse> {
        return this.imageCommitWithHttpInfo(container, repo, tag, comment, author, pause, changes, containerConfig, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
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
    public imageCreateWithHttpInfo(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, xRegistryAuth?: string, changes?: Array<string>, platform?: string, inputImage?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.imageCreate(fromImage, fromSrc, repo, tag, message, xRegistryAuth, changes, platform, inputImage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageCreateWithHttpInfo(rsp)));
            }));
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
    public imageCreate(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, xRegistryAuth?: string, changes?: Array<string>, platform?: string, inputImage?: string, _options?: Configuration): Observable<void> {
        return this.imageCreateWithHttpInfo(fromImage, fromSrc, repo, tag, message, xRegistryAuth, changes, platform, inputImage, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param name Image name or ID
     * @param [force] Remove the image even if it is being used by stopped containers or has other tags
     * @param [noprune] Do not delete untagged parent images
     */
    public imageDeleteWithHttpInfo(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Observable<HttpInfo<Array<ImageDeleteResponseItem>>> {
        const requestContextPromise = this.requestFactory.imageDelete(name, force, noprune, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * Remove an image
     * @param name Image name or ID
     * @param [force] Remove the image even if it is being used by stopped containers or has other tags
     * @param [noprune] Do not delete untagged parent images
     */
    public imageDelete(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Observable<Array<ImageDeleteResponseItem>> {
        return this.imageDeleteWithHttpInfo(name, force, noprune, _options).pipe(map((apiResponse: HttpInfo<Array<ImageDeleteResponseItem>>) => apiResponse.data));
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param name Image name or ID
     */
    public imageGetWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.imageGet(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * Export an image
     * @param name Image name or ID
     */
    public imageGet(name: string, _options?: Configuration): Observable<HttpFile> {
        return this.imageGetWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param [names] Image names to filter by
     */
    public imageGetAllWithHttpInfo(names?: Array<string>, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.imageGetAll(names, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Export several images
     * @param [names] Image names to filter by
     */
    public imageGetAll(names?: Array<string>, _options?: Configuration): Observable<HttpFile> {
        return this.imageGetAllWithHttpInfo(names, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param name Image name or ID
     */
    public imageHistoryWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<Array<HistoryResponseItem>>> {
        const requestContextPromise = this.requestFactory.imageHistory(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return parent layers of an image.
     * Get the history of an image
     * @param name Image name or ID
     */
    public imageHistory(name: string, _options?: Configuration): Observable<Array<HistoryResponseItem>> {
        return this.imageHistoryWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<Array<HistoryResponseItem>>) => apiResponse.data));
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param name Image name or id
     */
    public imageInspectWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<ImageInspect>> {
        const requestContextPromise = this.requestFactory.imageInspect(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param name Image name or id
     */
    public imageInspect(name: string, _options?: Configuration): Observable<ImageInspect> {
        return this.imageInspectWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<ImageInspect>) => apiResponse.data));
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
    public imageListWithHttpInfo(all?: boolean, filters?: string, sharedSize?: boolean, digests?: boolean, manifests?: boolean, _options?: Configuration): Observable<HttpInfo<Array<ImageSummary>>> {
        const requestContextPromise = this.requestFactory.imageList(all, filters, sharedSize, digests, manifests, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageListWithHttpInfo(rsp)));
            }));
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
    public imageList(all?: boolean, filters?: string, sharedSize?: boolean, digests?: boolean, manifests?: boolean, _options?: Configuration): Observable<Array<ImageSummary>> {
        return this.imageListWithHttpInfo(all, filters, sharedSize, digests, manifests, _options).pipe(map((apiResponse: HttpInfo<Array<ImageSummary>>) => apiResponse.data));
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param [quiet] Suppress progress details during load.
     * @param [imagesTarball] Tar archive containing images
     */
    public imageLoadWithHttpInfo(quiet?: boolean, imagesTarball?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.imageLoad(quiet, imagesTarball, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageLoadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * Import images
     * @param [quiet] Suppress progress details during load.
     * @param [imagesTarball] Tar archive containing images
     */
    public imageLoad(quiet?: boolean, imagesTarball?: HttpFile, _options?: Configuration): Observable<void> {
        return this.imageLoadWithHttpInfo(quiet, imagesTarball, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete unused images
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePruneWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<ImagePruneResponse>> {
        const requestContextPromise = this.requestFactory.imagePrune(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagePruneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete unused images
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePrune(filters?: string, _options?: Configuration): Observable<ImagePruneResponse> {
        return this.imagePruneWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<ImagePruneResponse>) => apiResponse.data));
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param name Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push. 
     * @param xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [tag] Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed. 
     * @param [platform] JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60; 
     */
    public imagePushWithHttpInfo(name: string, xRegistryAuth: string, tag?: string, platform?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.imagePush(name, xRegistryAuth, tag, platform, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagePushWithHttpInfo(rsp)));
            }));
    }

    /**
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * Push an image
     * @param name Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push. 
     * @param xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [tag] Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed. 
     * @param [platform] JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60; 
     */
    public imagePush(name: string, xRegistryAuth: string, tag?: string, platform?: string, _options?: Configuration): Observable<void> {
        return this.imagePushWithHttpInfo(name, xRegistryAuth, tag, platform, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param term Term to search
     * @param [limit] Maximum number of results to return
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars. 
     */
    public imageSearchWithHttpInfo(term: string, limit?: number, filters?: string, _options?: Configuration): Observable<HttpInfo<Array<ImageSearchResponseItem>>> {
        const requestContextPromise = this.requestFactory.imageSearch(term, limit, filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for an image on Docker Hub.
     * Search images
     * @param term Term to search
     * @param [limit] Maximum number of results to return
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars. 
     */
    public imageSearch(term: string, limit?: number, filters?: string, _options?: Configuration): Observable<Array<ImageSearchResponseItem>> {
        return this.imageSearchWithHttpInfo(term, limit, filters, _options).pipe(map((apiResponse: HttpInfo<Array<ImageSearchResponseItem>>) => apiResponse.data));
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name Image name or ID to tag.
     * @param [repo] The repository to tag in. For example, &#x60;someuser/someimage&#x60;.
     * @param [tag] The name of the new tag.
     */
    public imageTagWithHttpInfo(name: string, repo?: string, tag?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.imageTag(name, repo, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name Image name or ID to tag.
     * @param [repo] The repository to tag in. For example, &#x60;someuser/someimage&#x60;.
     * @param [tag] The name of the new tag.
     */
    public imageTag(name: string, repo?: string, tag?: string, _options?: Configuration): Observable<void> {
        return this.imageTagWithHttpInfo(name, repo, tag, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";
export class ObservableNetworkApi {
    private requestFactory: NetworkApiRequestFactory;
    private responseProcessor: NetworkApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkApiRequestFactory,
        responseProcessor?: NetworkApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NetworkApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NetworkApiResponseProcessor();
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param id Network ID or name
     * @param container
     */
    public networkConnectWithHttpInfo(id: string, container: NetworkConnectRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.networkConnect(id, container, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkConnectWithHttpInfo(rsp)));
            }));
    }

    /**
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * Connect a container to a network
     * @param id Network ID or name
     * @param container
     */
    public networkConnect(id: string, container: NetworkConnectRequest, _options?: Configuration): Observable<void> {
        return this.networkConnectWithHttpInfo(id, container, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a network
     * @param networkConfig Network configuration
     */
    public networkCreateWithHttpInfo(networkConfig: NetworkCreateRequest, _options?: Configuration): Observable<HttpInfo<NetworkCreateResponse>> {
        const requestContextPromise = this.requestFactory.networkCreate(networkConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a network
     * @param networkConfig Network configuration
     */
    public networkCreate(networkConfig: NetworkCreateRequest, _options?: Configuration): Observable<NetworkCreateResponse> {
        return this.networkCreateWithHttpInfo(networkConfig, _options).pipe(map((apiResponse: HttpInfo<NetworkCreateResponse>) => apiResponse.data));
    }

    /**
     * Remove a network
     * @param id Network ID or name
     */
    public networkDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.networkDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a network
     * @param id Network ID or name
     */
    public networkDelete(id: string, _options?: Configuration): Observable<void> {
        return this.networkDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disconnect a container from a network
     * @param id Network ID or name
     * @param container
     */
    public networkDisconnectWithHttpInfo(id: string, container: NetworkDisconnectRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.networkDisconnect(id, container, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkDisconnectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disconnect a container from a network
     * @param id Network ID or name
     * @param container
     */
    public networkDisconnect(id: string, container: NetworkDisconnectRequest, _options?: Configuration): Observable<void> {
        return this.networkDisconnectWithHttpInfo(id, container, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a network
     * @param id Network ID or name
     * @param [verbose] Detailed inspect output for troubleshooting
     * @param [scope] Filter the network by scope (swarm, global, or local)
     */
    public networkInspectWithHttpInfo(id: string, verbose?: boolean, scope?: string, _options?: Configuration): Observable<HttpInfo<Network>> {
        const requestContextPromise = this.requestFactory.networkInspect(id, verbose, scope, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a network
     * @param id Network ID or name
     * @param [verbose] Detailed inspect output for troubleshooting
     * @param [scope] Filter the network by scope (swarm, global, or local)
     */
    public networkInspect(id: string, verbose?: boolean, scope?: string, _options?: Configuration): Observable<Network> {
        return this.networkInspectWithHttpInfo(id, verbose, scope, _options).pipe(map((apiResponse: HttpInfo<Network>) => apiResponse.data));
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks. 
     */
    public networkListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Network>>> {
        const requestContextPromise = this.requestFactory.networkList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * List networks
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the networks list.  Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    networks that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only networks that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;driver-name&gt;&#x60; Matches a network\&#39;s driver. - &#x60;id&#x3D;&lt;network-id&gt;&#x60; Matches all or part of a network ID. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60; of a network label. - &#x60;name&#x3D;&lt;network-name&gt;&#x60; Matches all or part of a network name. - &#x60;scope&#x3D;[\&quot;swarm\&quot;|\&quot;global\&quot;|\&quot;local\&quot;]&#x60; Filters networks by scope (&#x60;swarm&#x60;, &#x60;global&#x60;, or &#x60;local&#x60;). - &#x60;type&#x3D;[\&quot;custom\&quot;|\&quot;builtin\&quot;]&#x60; Filters networks by type. The &#x60;custom&#x60; keyword returns all user-defined networks. 
     */
    public networkList(filters?: string, _options?: Configuration): Observable<Array<Network>> {
        return this.networkListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Network>>) => apiResponse.data));
    }

    /**
     * Delete unused networks
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPruneWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<NetworkPruneResponse>> {
        const requestContextPromise = this.requestFactory.networkPrune(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkPruneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete unused networks
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPrune(filters?: string, _options?: Configuration): Observable<NetworkPruneResponse> {
        return this.networkPruneWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<NetworkPruneResponse>) => apiResponse.data));
    }

}

import { NodeApiRequestFactory, NodeApiResponseProcessor} from "../apis/NodeApi";
export class ObservableNodeApi {
    private requestFactory: NodeApiRequestFactory;
    private responseProcessor: NodeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NodeApiRequestFactory,
        responseProcessor?: NodeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NodeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NodeApiResponseProcessor();
    }

    /**
     * Delete a node
     * @param id The ID or name of the node
     * @param [force] Force remove a node from the swarm
     */
    public nodeDeleteWithHttpInfo(id: string, force?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nodeDelete(id, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nodeDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a node
     * @param id The ID or name of the node
     * @param [force] Force remove a node from the swarm
     */
    public nodeDelete(id: string, force?: boolean, _options?: Configuration): Observable<void> {
        return this.nodeDeleteWithHttpInfo(id, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a node
     * @param id The ID or name of the node
     */
    public nodeInspectWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Node>> {
        const requestContextPromise = this.requestFactory.nodeInspect(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nodeInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a node
     * @param id The ID or name of the node
     */
    public nodeInspect(id: string, _options?: Configuration): Observable<Node> {
        return this.nodeInspectWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Node>) => apiResponse.data));
    }

    /**
     * List nodes
     * @param [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     */
    public nodeListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Node>>> {
        const requestContextPromise = this.requestFactory.nodeList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nodeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List nodes
     * @param [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     */
    public nodeList(filters?: string, _options?: Configuration): Observable<Array<Node>> {
        return this.nodeListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Node>>) => apiResponse.data));
    }

    /**
     * Update a node
     * @param id The ID of the node
     * @param version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param [body]
     */
    public nodeUpdateWithHttpInfo(id: string, version: number, body?: NodeSpec, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nodeUpdate(id, version, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nodeUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a node
     * @param id The ID of the node
     * @param version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param [body]
     */
    public nodeUpdate(id: string, version: number, body?: NodeSpec, _options?: Configuration): Observable<void> {
        return this.nodeUpdateWithHttpInfo(id, version, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";
export class ObservablePluginApi {
    private requestFactory: PluginApiRequestFactory;
    private responseProcessor: PluginApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginApiRequestFactory,
        responseProcessor?: PluginApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PluginApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PluginApiResponseProcessor();
    }

    /**
     * Get plugin privileges
     * @param remote The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public getPluginPrivilegesWithHttpInfo(remote: string, _options?: Configuration): Observable<HttpInfo<Array<PluginPrivilege>>> {
        const requestContextPromise = this.requestFactory.getPluginPrivileges(remote, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPluginPrivilegesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get plugin privileges
     * @param remote The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public getPluginPrivileges(remote: string, _options?: Configuration): Observable<Array<PluginPrivilege>> {
        return this.getPluginPrivilegesWithHttpInfo(remote, _options).pipe(map((apiResponse: HttpInfo<Array<PluginPrivilege>>) => apiResponse.data));
    }

    /**
     * Create a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [tarContext] Path to tar containing plugin rootfs and manifest
     */
    public pluginCreateWithHttpInfo(name: string, tarContext?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginCreate(name, tarContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [tarContext] Path to tar containing plugin rootfs and manifest
     */
    public pluginCreate(name: string, tarContext?: HttpFile, _options?: Configuration): Observable<void> {
        return this.pluginCreateWithHttpInfo(name, tarContext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
     */
    public pluginDeleteWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Observable<HttpInfo<Plugin>> {
        const requestContextPromise = this.requestFactory.pluginDelete(name, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
     */
    public pluginDelete(name: string, force?: boolean, _options?: Configuration): Observable<Plugin> {
        return this.pluginDeleteWithHttpInfo(name, force, _options).pipe(map((apiResponse: HttpInfo<Plugin>) => apiResponse.data));
    }

    /**
     * Disable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Force disable a plugin even if still in use. 
     */
    public pluginDisableWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginDisable(name, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginDisableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [force] Force disable a plugin even if still in use. 
     */
    public pluginDisable(name: string, force?: boolean, _options?: Configuration): Observable<void> {
        return this.pluginDisableWithHttpInfo(name, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [timeout] Set the HTTP client timeout (in seconds)
     */
    public pluginEnableWithHttpInfo(name: string, timeout?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginEnable(name, timeout, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginEnableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [timeout] Set the HTTP client timeout (in seconds)
     */
    public pluginEnable(name: string, timeout?: number, _options?: Configuration): Observable<void> {
        return this.pluginEnableWithHttpInfo(name, timeout, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginInspectWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<Plugin>> {
        const requestContextPromise = this.requestFactory.pluginInspect(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginInspect(name: string, _options?: Configuration): Observable<Plugin> {
        return this.pluginInspectWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<Plugin>) => apiResponse.data));
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60; 
     */
    public pluginListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Plugin>>> {
        const requestContextPromise = this.requestFactory.pluginList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about installed plugins.
     * List plugins
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60; 
     */
    public pluginList(filters?: string, _options?: Configuration): Observable<Array<Plugin>> {
        return this.pluginListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Plugin>>) => apiResponse.data));
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param remote Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [name] Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginPullWithHttpInfo(remote: string, name?: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginPull(remote, name, xRegistryAuth, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginPullWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * Install a plugin
     * @param remote Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [name] Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginPull(remote: string, name?: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Observable<void> {
        return this.pluginPullWithHttpInfo(remote, name, xRegistryAuth, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginPushWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginPush(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginPushWithHttpInfo(rsp)));
            }));
    }

    /**
     * Push a plugin to the registry. 
     * Push a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     */
    public pluginPush(name: string, _options?: Configuration): Observable<void> {
        return this.pluginPushWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Configure a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [body]
     */
    public pluginSetWithHttpInfo(name: string, body?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginSet(name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Configure a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param [body]
     */
    public pluginSet(name: string, body?: Array<string>, _options?: Configuration): Observable<void> {
        return this.pluginSetWithHttpInfo(name, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Upgrade a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param remote Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginUpgradeWithHttpInfo(name: string, remote: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pluginUpgrade(name, remote, xRegistryAuth, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pluginUpgradeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upgrade a plugin
     * @param name The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted. 
     * @param remote Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted. 
     * @param [xRegistryAuth] A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param [body]
     */
    public pluginUpgrade(name: string, remote: string, xRegistryAuth?: string, body?: Array<PluginPrivilege>, _options?: Configuration): Observable<void> {
        return this.pluginUpgradeWithHttpInfo(name, remote, xRegistryAuth, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SecretApiRequestFactory, SecretApiResponseProcessor} from "../apis/SecretApi";
export class ObservableSecretApi {
    private requestFactory: SecretApiRequestFactory;
    private responseProcessor: SecretApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretApiRequestFactory,
        responseProcessor?: SecretApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecretApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecretApiResponseProcessor();
    }

    /**
     * Create a secret
     * @param [body]
     */
    public secretCreateWithHttpInfo(body?: SecretCreateRequest, _options?: Configuration): Observable<HttpInfo<IdResponse>> {
        const requestContextPromise = this.requestFactory.secretCreate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.secretCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a secret
     * @param [body]
     */
    public secretCreate(body?: SecretCreateRequest, _options?: Configuration): Observable<IdResponse> {
        return this.secretCreateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

    /**
     * Delete a secret
     * @param id ID of the secret
     */
    public secretDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.secretDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.secretDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a secret
     * @param id ID of the secret
     */
    public secretDelete(id: string, _options?: Configuration): Observable<void> {
        return this.secretDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a secret
     * @param id ID of the secret
     */
    public secretInspectWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Secret>> {
        const requestContextPromise = this.requestFactory.secretInspect(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.secretInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a secret
     * @param id ID of the secret
     */
    public secretInspect(id: string, _options?: Configuration): Observable<Secret> {
        return this.secretInspectWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Secret>) => apiResponse.data));
    }

    /**
     * List secrets
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60; 
     */
    public secretListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Secret>>> {
        const requestContextPromise = this.requestFactory.secretList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.secretListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List secrets
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60; 
     */
    public secretList(filters?: string, _options?: Configuration): Observable<Array<Secret>> {
        return this.secretListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Secret>>) => apiResponse.data));
    }

    /**
     * Update a Secret
     * @param id The ID or name of the secret
     * @param version The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     */
    public secretUpdateWithHttpInfo(id: string, version: number, body?: SecretSpec, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.secretUpdate(id, version, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.secretUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Secret
     * @param id The ID or name of the secret
     * @param version The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * @param [body] The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     */
    public secretUpdate(id: string, version: number, body?: SecretSpec, _options?: Configuration): Observable<void> {
        return this.secretUpdateWithHttpInfo(id, version, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ServiceApiRequestFactory, ServiceApiResponseProcessor} from "../apis/ServiceApi";
export class ObservableServiceApi {
    private requestFactory: ServiceApiRequestFactory;
    private responseProcessor: ServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceApiRequestFactory,
        responseProcessor?: ServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceApiResponseProcessor();
    }

    /**
     * Create a service
     * @param body
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceCreateWithHttpInfo(body: ServiceCreateRequest, xRegistryAuth?: string, _options?: Configuration): Observable<HttpInfo<ServiceCreateResponse>> {
        const requestContextPromise = this.requestFactory.serviceCreate(body, xRegistryAuth, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a service
     * @param body
     * @param [xRegistryAuth] A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     */
    public serviceCreate(body: ServiceCreateRequest, xRegistryAuth?: string, _options?: Configuration): Observable<ServiceCreateResponse> {
        return this.serviceCreateWithHttpInfo(body, xRegistryAuth, _options).pipe(map((apiResponse: HttpInfo<ServiceCreateResponse>) => apiResponse.data));
    }

    /**
     * Delete a service
     * @param id ID or name of service.
     */
    public serviceDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.serviceDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a service
     * @param id ID or name of service.
     */
    public serviceDelete(id: string, _options?: Configuration): Observable<void> {
        return this.serviceDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a service
     * @param id ID or name of service.
     * @param [insertDefaults] Fill empty fields with default values.
     */
    public serviceInspectWithHttpInfo(id: string, insertDefaults?: boolean, _options?: Configuration): Observable<HttpInfo<Service>> {
        const requestContextPromise = this.requestFactory.serviceInspect(id, insertDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a service
     * @param id ID or name of service.
     * @param [insertDefaults] Fill empty fields with default values.
     */
    public serviceInspect(id: string, insertDefaults?: boolean, _options?: Configuration): Observable<Service> {
        return this.serviceInspectWithHttpInfo(id, insertDefaults, _options).pipe(map((apiResponse: HttpInfo<Service>) => apiResponse.data));
    }

    /**
     * List services
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * @param [status] Include service status, with count of running and desired tasks. 
     */
    public serviceListWithHttpInfo(filters?: string, status?: boolean, _options?: Configuration): Observable<HttpInfo<Array<Service>>> {
        const requestContextPromise = this.requestFactory.serviceList(filters, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List services
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60; 
     * @param [status] Include service status, with count of running and desired tasks. 
     */
    public serviceList(filters?: string, status?: boolean, _options?: Configuration): Observable<Array<Service>> {
        return this.serviceListWithHttpInfo(filters, status, _options).pipe(map((apiResponse: HttpInfo<Array<Service>>) => apiResponse.data));
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
    public serviceLogsWithHttpInfo(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.serviceLogs(id, details, follow, stdout, stderr, since, timestamps, tail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceLogsWithHttpInfo(rsp)));
            }));
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
    public serviceLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpFile> {
        return this.serviceLogsWithHttpInfo(id, details, follow, stdout, stderr, since, timestamps, tail, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
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
    public serviceUpdateWithHttpInfo(id: string, version: number, body: ServiceUpdateRequest, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, _options?: Configuration): Observable<HttpInfo<ServiceUpdateResponse>> {
        const requestContextPromise = this.requestFactory.serviceUpdate(id, version, body, registryAuthFrom, rollback, xRegistryAuth, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceUpdateWithHttpInfo(rsp)));
            }));
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
    public serviceUpdate(id: string, version: number, body: ServiceUpdateRequest, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, _options?: Configuration): Observable<ServiceUpdateResponse> {
        return this.serviceUpdateWithHttpInfo(id, version, body, registryAuthFrom, rollback, xRegistryAuth, _options).pipe(map((apiResponse: HttpInfo<ServiceUpdateResponse>) => apiResponse.data));
    }

}

import { SessionApiRequestFactory, SessionApiResponseProcessor} from "../apis/SessionApi";
export class ObservableSessionApi {
    private requestFactory: SessionApiRequestFactory;
    private responseProcessor: SessionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionApiRequestFactory,
        responseProcessor?: SessionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionApiResponseProcessor();
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     */
    public sessionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.session(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sessionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 
     * Initialize interactive session
     */
    public session(_options?: Configuration): Observable<void> {
        return this.sessionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SwarmApiRequestFactory, SwarmApiResponseProcessor} from "../apis/SwarmApi";
export class ObservableSwarmApi {
    private requestFactory: SwarmApiRequestFactory;
    private responseProcessor: SwarmApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SwarmApiRequestFactory,
        responseProcessor?: SwarmApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SwarmApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SwarmApiResponseProcessor();
    }

    /**
     * Initialize a new swarm
     * @param body
     */
    public swarmInitWithHttpInfo(body: SwarmInitRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.swarmInit(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmInitWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initialize a new swarm
     * @param body
     */
    public swarmInit(body: SwarmInitRequest, _options?: Configuration): Observable<string> {
        return this.swarmInitWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Inspect swarm
     */
    public swarmInspectWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Swarm>> {
        const requestContextPromise = this.requestFactory.swarmInspect(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect swarm
     */
    public swarmInspect(_options?: Configuration): Observable<Swarm> {
        return this.swarmInspectWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Swarm>) => apiResponse.data));
    }

    /**
     * Join an existing swarm
     * @param body
     */
    public swarmJoinWithHttpInfo(body: SwarmJoinRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.swarmJoin(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmJoinWithHttpInfo(rsp)));
            }));
    }

    /**
     * Join an existing swarm
     * @param body
     */
    public swarmJoin(body: SwarmJoinRequest, _options?: Configuration): Observable<void> {
        return this.swarmJoinWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Leave a swarm
     * @param [force] Force leave swarm, even if this is the last manager or that it will break the cluster. 
     */
    public swarmLeaveWithHttpInfo(force?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.swarmLeave(force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmLeaveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Leave a swarm
     * @param [force] Force leave swarm, even if this is the last manager or that it will break the cluster. 
     */
    public swarmLeave(force?: boolean, _options?: Configuration): Observable<void> {
        return this.swarmLeaveWithHttpInfo(force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Unlock a locked manager
     * @param body
     */
    public swarmUnlockWithHttpInfo(body: SwarmUnlockRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.swarmUnlock(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmUnlockWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unlock a locked manager
     * @param body
     */
    public swarmUnlock(body: SwarmUnlockRequest, _options?: Configuration): Observable<void> {
        return this.swarmUnlockWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the unlock key
     */
    public swarmUnlockkeyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UnlockKeyResponse>> {
        const requestContextPromise = this.requestFactory.swarmUnlockkey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmUnlockkeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the unlock key
     */
    public swarmUnlockkey(_options?: Configuration): Observable<UnlockKeyResponse> {
        return this.swarmUnlockkeyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UnlockKeyResponse>) => apiResponse.data));
    }

    /**
     * Update a swarm
     * @param version The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * @param body
     * @param [rotateWorkerToken] Rotate the worker join token.
     * @param [rotateManagerToken] Rotate the manager join token.
     * @param [rotateManagerUnlockKey] Rotate the manager unlock key.
     */
    public swarmUpdateWithHttpInfo(version: number, body: SwarmSpec, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.swarmUpdate(version, body, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.swarmUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a swarm
     * @param version The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * @param body
     * @param [rotateWorkerToken] Rotate the worker join token.
     * @param [rotateManagerToken] Rotate the manager join token.
     * @param [rotateManagerUnlockKey] Rotate the manager unlock key.
     */
    public swarmUpdate(version: number, body: SwarmSpec, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, _options?: Configuration): Observable<void> {
        return this.swarmUpdateWithHttpInfo(version, body, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class ObservableSystemApi {
    private requestFactory: SystemApiRequestFactory;
    private responseProcessor: SystemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemApiResponseProcessor();
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param [authConfig] Authentication to check
     */
    public systemAuthWithHttpInfo(authConfig?: AuthConfig, _options?: Configuration): Observable<HttpInfo<SystemAuthResponse | void>> {
        const requestContextPromise = this.requestFactory.systemAuth(authConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemAuthWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * Check auth configuration
     * @param [authConfig] Authentication to check
     */
    public systemAuth(authConfig?: AuthConfig, _options?: Configuration): Observable<SystemAuthResponse | void> {
        return this.systemAuthWithHttpInfo(authConfig, _options).pipe(map((apiResponse: HttpInfo<SystemAuthResponse | void>) => apiResponse.data));
    }

    /**
     * Get data usage information
     * @param [type] Object types, for which to compute and return data. 
     */
    public systemDataUsageWithHttpInfo(type?: Array<'container' | 'image' | 'volume' | 'build-cache'>, _options?: Configuration): Observable<HttpInfo<SystemDataUsageResponse>> {
        const requestContextPromise = this.requestFactory.systemDataUsage(type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemDataUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get data usage information
     * @param [type] Object types, for which to compute and return data. 
     */
    public systemDataUsage(type?: Array<'container' | 'image' | 'volume' | 'build-cache'>, _options?: Configuration): Observable<SystemDataUsageResponse> {
        return this.systemDataUsageWithHttpInfo(type, _options).pipe(map((apiResponse: HttpInfo<SystemDataUsageResponse>) => apiResponse.data));
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param [since] Show events created since this timestamp then stream new events.
     * @param [until] Show events created until this timestamp then stop streaming.
     * @param [filters] A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name 
     */
    public systemEventsWithHttpInfo(since?: string, until?: string, filters?: string, _options?: Configuration): Observable<HttpInfo<EventMessage>> {
        const requestContextPromise = this.requestFactory.systemEvents(since, until, filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * Monitor events
     * @param [since] Show events created since this timestamp then stream new events.
     * @param [until] Show events created until this timestamp then stop streaming.
     * @param [filters] A JSON encoded value of filters (a &#x60;map[string][]string&#x60;) to process on the event list. Available filters:  - &#x60;config&#x3D;&lt;string&gt;&#x60; config name or ID - &#x60;container&#x3D;&lt;string&gt;&#x60; container name or ID - &#x60;daemon&#x3D;&lt;string&gt;&#x60; daemon name or ID - &#x60;event&#x3D;&lt;string&gt;&#x60; event type - &#x60;image&#x3D;&lt;string&gt;&#x60; image name or ID - &#x60;label&#x3D;&lt;string&gt;&#x60; image or container label - &#x60;network&#x3D;&lt;string&gt;&#x60; network name or ID - &#x60;node&#x3D;&lt;string&gt;&#x60; node ID - &#x60;plugin&#x60;&#x3D;&lt;string&gt; plugin name or ID - &#x60;scope&#x60;&#x3D;&lt;string&gt; local or swarm - &#x60;secret&#x3D;&lt;string&gt;&#x60; secret name or ID - &#x60;service&#x3D;&lt;string&gt;&#x60; service name or ID - &#x60;type&#x3D;&lt;string&gt;&#x60; object to filter by, one of &#x60;container&#x60;, &#x60;image&#x60;, &#x60;volume&#x60;, &#x60;network&#x60;, &#x60;daemon&#x60;, &#x60;plugin&#x60;, &#x60;node&#x60;, &#x60;service&#x60;, &#x60;secret&#x60; or &#x60;config&#x60; - &#x60;volume&#x3D;&lt;string&gt;&#x60; volume name 
     */
    public systemEvents(since?: string, until?: string, filters?: string, _options?: Configuration): Observable<EventMessage> {
        return this.systemEventsWithHttpInfo(since, until, filters, _options).pipe(map((apiResponse: HttpInfo<EventMessage>) => apiResponse.data));
    }

    /**
     * Get system information
     */
    public systemInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SystemInfo>> {
        const requestContextPromise = this.requestFactory.systemInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get system information
     */
    public systemInfo(_options?: Configuration): Observable<SystemInfo> {
        return this.systemInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemInfo>) => apiResponse.data));
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.systemPing(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemPingWithHttpInfo(rsp)));
            }));
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPing(_options?: Configuration): Observable<string> {
        return this.systemPingWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingHeadWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.systemPingHead(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemPingHeadWithHttpInfo(rsp)));
            }));
    }

    /**
     * This is a dummy endpoint you can use to test if the server is accessible.
     * Ping
     */
    public systemPingHead(_options?: Configuration): Observable<string> {
        return this.systemPingHeadWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     */
    public systemVersionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SystemVersion>> {
        const requestContextPromise = this.requestFactory.systemVersion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.systemVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * Get version
     */
    public systemVersion(_options?: Configuration): Observable<SystemVersion> {
        return this.systemVersionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemVersion>) => apiResponse.data));
    }

}

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class ObservableTaskApi {
    private requestFactory: TaskApiRequestFactory;
    private responseProcessor: TaskApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskApiResponseProcessor();
    }

    /**
     * Inspect a task
     * @param id ID of the task
     */
    public taskInspectWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.taskInspect(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taskInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a task
     * @param id ID of the task
     */
    public taskInspect(id: string, _options?: Configuration): Observable<Task> {
        return this.taskInspectWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * List tasks
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     */
    public taskListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<Array<Task>>> {
        const requestContextPromise = this.requestFactory.taskList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taskListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List tasks
     * @param [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     */
    public taskList(filters?: string, _options?: Configuration): Observable<Array<Task>> {
        return this.taskListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<Array<Task>>) => apiResponse.data));
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
    public taskLogsWithHttpInfo(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taskLogsWithHttpInfo(rsp)));
            }));
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
    public taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpFile> {
        return this.taskLogsWithHttpInfo(id, details, follow, stdout, stderr, since, timestamps, tail, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

}

import { VolumeApiRequestFactory, VolumeApiResponseProcessor} from "../apis/VolumeApi";
export class ObservableVolumeApi {
    private requestFactory: VolumeApiRequestFactory;
    private responseProcessor: VolumeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VolumeApiRequestFactory,
        responseProcessor?: VolumeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VolumeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VolumeApiResponseProcessor();
    }

    /**
     * Create a volume
     * @param volumeConfig Volume configuration
     */
    public volumeCreateWithHttpInfo(volumeConfig: VolumeCreateOptions, _options?: Configuration): Observable<HttpInfo<Volume>> {
        const requestContextPromise = this.requestFactory.volumeCreate(volumeConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumeCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a volume
     * @param volumeConfig Volume configuration
     */
    public volumeCreate(volumeConfig: VolumeCreateOptions, _options?: Configuration): Observable<Volume> {
        return this.volumeCreateWithHttpInfo(volumeConfig, _options).pipe(map((apiResponse: HttpInfo<Volume>) => apiResponse.data));
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param name Volume name or ID
     * @param [force] Force the removal of the volume
     */
    public volumeDeleteWithHttpInfo(name: string, force?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.volumeDelete(name, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumeDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Instruct the driver to remove the volume.
     * Remove a volume
     * @param name Volume name or ID
     * @param [force] Force the removal of the volume
     */
    public volumeDelete(name: string, force?: boolean, _options?: Configuration): Observable<void> {
        return this.volumeDeleteWithHttpInfo(name, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Inspect a volume
     * @param name Volume name or ID
     */
    public volumeInspectWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<Volume>> {
        const requestContextPromise = this.requestFactory.volumeInspect(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumeInspectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Inspect a volume
     * @param name Volume name or ID
     */
    public volumeInspect(name: string, _options?: Configuration): Observable<Volume> {
        return this.volumeInspectWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<Volume>) => apiResponse.data));
    }

    /**
     * List volumes
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name. 
     */
    public volumeListWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<VolumeListResponse>> {
        const requestContextPromise = this.requestFactory.volumeList(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List volumes
     * @param [filters] JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the volumes list. Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), returns all    volumes that are not in use by a container. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), only volumes that are in use by one or more    containers are returned. - &#x60;driver&#x3D;&lt;volume-driver-name&gt;&#x60; Matches volumes based on their driver. - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches volumes based on    the presence of a &#x60;label&#x60; alone or a &#x60;label&#x60; and a value. - &#x60;name&#x3D;&lt;volume-name&gt;&#x60; Matches all or part of a volume name. 
     */
    public volumeList(filters?: string, _options?: Configuration): Observable<VolumeListResponse> {
        return this.volumeListWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<VolumeListResponse>) => apiResponse.data));
    }

    /**
     * Delete unused volumes
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes. 
     */
    public volumePruneWithHttpInfo(filters?: string, _options?: Configuration): Observable<HttpInfo<VolumePruneResponse>> {
        const requestContextPromise = this.requestFactory.volumePrune(filters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumePruneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete unused volumes
     * @param [filters] Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. - &#x60;all&#x60; (&#x60;all&#x3D;true&#x60;) - Consider all (local) volumes for pruning and not just anonymous volumes. 
     */
    public volumePrune(filters?: string, _options?: Configuration): Observable<VolumePruneResponse> {
        return this.volumePruneWithHttpInfo(filters, _options).pipe(map((apiResponse: HttpInfo<VolumePruneResponse>) => apiResponse.data));
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param name The name or ID of the volume
     * @param version The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field. 
     * @param [body] The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged. 
     */
    public volumeUpdateWithHttpInfo(name: string, version: number, body?: VolumeUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.volumeUpdate(name, version, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.volumeUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * \"Update a volume. Valid only for Swarm cluster volumes\" 
     * @param name The name or ID of the volume
     * @param version The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume\&#39;s &#x60;ClusterVolume&#x60; field. 
     * @param [body] The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged. 
     */
    public volumeUpdate(name: string, version: number, body?: VolumeUpdateRequest, _options?: Configuration): Observable<void> {
        return this.volumeUpdateWithHttpInfo(name, version, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
