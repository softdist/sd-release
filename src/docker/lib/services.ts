import { DockerClient } from '../client/docker.ts';
import type { DockerResponse } from '../client/connection.ts';
import type { ContainerListData, ContainerListResponse, ContainerCreateData, ContainerCreateResponse2, ContainerInspectData, ContainerInspectResponse, ContainerTopData, ContainerTopResponse, ContainerLogsData, ContainerLogsResponse, ContainerChangesData, ContainerChangesResponse, ContainerExportData, ContainerExportResponse, ContainerStatsData, ContainerStatsResponse, ContainerResizeData, ContainerResizeResponse, ContainerStartData, ContainerStartResponse, ContainerStopData, ContainerStopResponse, ContainerRestartData, ContainerRestartResponse, ContainerKillData, ContainerKillResponse, ContainerUpdateData, ContainerUpdateResponse, ContainerRenameData, ContainerRenameResponse, ContainerPauseData, ContainerPauseResponse, ContainerUnpauseData, ContainerUnpauseResponse, ContainerAttachData, ContainerAttachResponse, ContainerAttachWebsocketData, ContainerAttachWebsocketResponse, ContainerWaitData, ContainerWaitResponse2, ContainerDeleteData, ContainerDeleteResponse, ContainerArchiveInfoData, ContainerArchiveInfoResponse, ContainerArchiveData, ContainerArchiveResponse, PutContainerArchiveData, PutContainerArchiveResponse, ContainerPruneData, ContainerPruneResponse, ImageListData, ImageListResponse, ImageBuildData, ImageBuildResponse, BuildPruneData, BuildPruneResponse, ImageCreateData, ImageCreateResponse, ImageInspectData, ImageInspectResponse, ImageHistoryData, ImageHistoryResponse, ImagePushData, ImagePushResponse, ImageTagData, ImageTagResponse, ImageDeleteData, ImageDeleteResponse, ImageSearchData, ImageSearchResponse, ImagePruneData, ImagePruneResponse, ImageCommitData, ImageCommitResponse, ImageGetData, ImageGetResponse, ImageGetAllData, ImageGetAllResponse, ImageLoadData, ImageLoadResponse, SystemAuthData, SystemAuthResponse, SystemInfoResponse, SystemVersionResponse, SystemPingResponse, SystemPingHeadResponse, SystemEventsData, SystemEventsResponse, SystemDataUsageData, SystemDataUsageResponse, ContainerExecData, ContainerExecResponse, ExecStartData, ExecStartResponse, ExecResizeData, ExecResizeResponse, ExecInspectData, ExecInspectResponse, VolumeListData, VolumeListResponse2, VolumeCreateData, VolumeCreateResponse, VolumeInspectData, VolumeInspectResponse, VolumeUpdateData, VolumeUpdateResponse, VolumeDeleteData, VolumeDeleteResponse, VolumePruneData, VolumePruneResponse, NetworkListData, NetworkListResponse, NetworkInspectData, NetworkInspectResponse, NetworkDeleteData, NetworkDeleteResponse, NetworkCreateData, NetworkCreateResponse, NetworkConnectData, NetworkConnectResponse, NetworkDisconnectData, NetworkDisconnectResponse, NetworkPruneData, NetworkPruneResponse, PluginListData, PluginListResponse, GetPluginPrivilegesData, GetPluginPrivilegesResponse, PluginPullData, PluginPullResponse, PluginInspectData, PluginInspectResponse, PluginDeleteData, PluginDeleteResponse, PluginEnableData, PluginEnableResponse, PluginDisableData, PluginDisableResponse, PluginUpgradeData, PluginUpgradeResponse, PluginCreateData, PluginCreateResponse, PluginPushData, PluginPushResponse, PluginSetData, PluginSetResponse, NodeListData, NodeListResponse, NodeInspectData, NodeInspectResponse, NodeDeleteData, NodeDeleteResponse, NodeUpdateData, NodeUpdateResponse, SwarmInspectResponse, SwarmInitData, SwarmInitResponse, SwarmJoinData, SwarmJoinResponse, SwarmLeaveData, SwarmLeaveResponse, SwarmUpdateData, SwarmUpdateResponse, SwarmUnlockkeyResponse, SwarmUnlockData, SwarmUnlockResponse, ServiceListData, ServiceListResponse, ServiceCreateData, ServiceCreateResponse2, ServiceInspectData, ServiceInspectResponse, ServiceDeleteData, ServiceDeleteResponse, ServiceUpdateData, ServiceUpdateResponse2, ServiceLogsData, ServiceLogsResponse, TaskListData, TaskListResponse, TaskInspectData, TaskInspectResponse, TaskLogsData, TaskLogsResponse, SecretListData, SecretListResponse, SecretCreateData, SecretCreateResponse, SecretInspectData, SecretInspectResponse, SecretDeleteData, SecretDeleteResponse, SecretUpdateData, SecretUpdateResponse, ConfigListData, ConfigListResponse, ConfigCreateData, ConfigCreateResponse, ConfigInspectData, ConfigInspectResponse, ConfigDeleteData, ConfigDeleteResponse, ConfigUpdateData, ConfigUpdateResponse, DistributionInspectData, DistributionInspectResponse } from './types.ts';

export class ContainerService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List containers
     * Returns a list of containers. For details on the format, see the
     * [inspect endpoint](#operation/ContainerInspect).
     *
     * Note that it uses a different, smaller representation of a container
     * than inspecting a single container. For example, the list of linked
     * containers is not propagated .
     *
     * @param data The data for the request.
     * @param data.all Return all containers. By default, only running containers are shown.
     *
     * @param data.limit Return this number of most recently created containers, including
     * non-running ones.
     *
     * @param data.size Return the size of container as fields `SizeRw` and `SizeRootFs`.
     *
     * @param data.filters Filters to process on the container list, encoded as JSON (a
     * `map[string][]string`). For example, `{"status": ["paused"]}` will
     * only return paused containers.
     *
     * Available filters:
     *
     * - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
     * - `before`=(`<container id>` or `<container name>`)
     * - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
     * - `exited=<int>` containers with exit code of `<int>`
     * - `health`=(`starting`|`healthy`|`unhealthy`|`none`)
     * - `id=<ID>` a container's ID
     * - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only)
     * - `is-task=`(`true`|`false`)
     * - `label=key` or `label="key=value"` of a container label
     * - `name=<name>` a container's name
     * - `network`=(`<network id>` or `<network name>`)
     * - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
     * - `since`=(`<container id>` or `<container name>`)
     * - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`)
     * - `volume`=(`<volume name>` or `<mount point destination>`)
     *
     * @returns ContainerSummary no error
     */
    public containerList(data: ContainerListData = {}): Promise<DockerResponse<ContainerListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/json',
            query: {
                all: data.all,
                limit: data.limit,
                size: data.size,
                filters: data.filters
            },
            errors: {
                400: 'bad parameter',
                500: 'server error'
            }
        });
    }

    /**
     * Create a container
     * @param data The data for the request.
     * @param data.body Container to create
     * @param data.name Assign the specified name to the container. Must match
     * `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.
     *
     * @param data.platform Platform in the format `os[/arch[/variant]]` used for image lookup.
     *
     * When specified, the daemon checks if the requested image is present
     * in the local image cache with the given OS and Architecture, and
     * otherwise returns a `404` status.
     *
     * If the option is not set, the host's native OS and Architecture are
     * used to look up the image in the image cache. However, if no platform
     * is passed and the given image does exist in the local image cache,
     * but its OS or architecture does not match, the container is created
     * with the available image, and a warning is added to the `Warnings`
     * field in the response, for example;
     *
     * WARNING: The requested image's platform (linux/arm64/v8) does not
     * match the detected host platform (linux/amd64) and no
     * specific platform was requested
     *
     * @returns ContainerCreateResponse Container created successfully
     */
    public containerCreate(data: ContainerCreateData): Promise<DockerResponse<ContainerCreateResponse2>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/create',
            query: {
                name: data.name,
                platform: data.platform
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such image',
                409: 'conflict',
                500: 'server error'
            }
        });
    }

    /**
     * Inspect a container
     * Return low-level information about a container.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.size Return the size of container as fields `SizeRw` and `SizeRootFs`
     * @returns unknown no error
     */
    public containerInspect(data: ContainerInspectData): Promise<DockerResponse<ContainerInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/json',
            path: {
                id: data.id
            },
            query: {
                size: data.size
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * List processes running inside a container
     * On Unix systems, this is done by running the `ps` command. This endpoint
     * is not supported on Windows.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.psArgs The arguments to pass to `ps`. For example, `aux`
     * @returns unknown no error
     */
    public containerTop(data: ContainerTopData): Promise<DockerResponse<ContainerTopResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/top',
            path: {
                id: data.id
            },
            query: {
                ps_args: data.psArgs
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Get container logs
     * Get `stdout` and `stderr` logs from a container.
     *
     * Note: This endpoint works only for containers with the `json-file` or
     * `journald` logging driver.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.follow Keep connection after returning logs.
     * @param data.stdout Return logs from `stdout`
     * @param data.stderr Return logs from `stderr`
     * @param data.since Only return logs since this time, as a UNIX timestamp
     * @param data.until Only return logs before this time, as a UNIX timestamp
     * @param data.timestamps Add timestamps to every log line
     * @param data.tail Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     * @returns binary logs returned as a stream in response body.
     * For the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach).
     * Note that unlike the attach endpoint, the logs endpoint does not
     * upgrade the connection and does not set Content-Type.
     *
     */
    public containerLogs(data: ContainerLogsData): Promise<DockerResponse<ContainerLogsResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/logs',
            path: {
                id: data.id
            },
            query: {
                follow: data.follow,
                stdout: data.stdout,
                stderr: data.stderr,
                since: data.since,
                until: data.until,
                timestamps: data.timestamps,
                tail: data.tail
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Get changes on a container’s filesystem
     * Returns which files in a container's filesystem have been added, deleted,
     * or modified. The `Kind` of modification can be one of:
     *
     * - `0`: Modified ("C")
     * - `1`: Added ("A")
     * - `2`: Deleted ("D")
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @returns FilesystemChange The list of changes
     */
    public containerChanges(data: ContainerChangesData): Promise<DockerResponse<ContainerChangesResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/changes',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Export a container
     * Export the contents of a container as a tarball.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @returns unknown no error
     */
    public containerExport(data: ContainerExportData): Promise<DockerResponse<ContainerExportResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/export',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Get container stats based on resource usage
     * This endpoint returns a live stream of a container’s resource usage
     * statistics.
     *
     * The `precpu_stats` is the CPU statistic of the *previous* read, and is
     * used to calculate the CPU usage percentage. It is not an exact copy
     * of the `cpu_stats` field.
     *
     * If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is
     * nil then for compatibility with older daemons the length of the
     * corresponding `cpu_usage.percpu_usage` array should be used.
     *
     * On a cgroup v2 host, the following fields are not set
     * * `blkio_stats`: all fields other than `io_service_bytes_recursive`
     * * `cpu_stats`: `cpu_usage.percpu_usage`
     * * `memory_stats`: `max_usage` and `failcnt`
     * Also, `memory_stats.stats` fields are incompatible with cgroup v1.
     *
     * To calculate the values shown by the `stats` command of the docker cli tool
     * the following formulas can be used:
     * * used_memory = `memory_stats.usage - memory_stats.stats.cache`
     * * available_memory = `memory_stats.limit`
     * * Memory usage % = `(used_memory / available_memory) * 100.0`
     * * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage`
     * * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage`
     * * number_cpus = `lenght(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus`
     * * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0`
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.stream Stream the output. If false, the stats will be output once and then
     * it will disconnect.
     *
     * @param data.oneShot Only get a single stat instead of waiting for 2 cycles. Must be used
     * with `stream=false`.
     *
     * @returns unknown no error
     */
    public containerStats(data: ContainerStatsData): Promise<DockerResponse<ContainerStatsResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/stats',
            path: {
                id: data.id
            },
            query: {
                stream: data.stream,
                'one-shot': data.oneShot
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Resize a container TTY
     * Resize the TTY for a container.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.h Height of the TTY session in characters
     * @param data.w Width of the TTY session in characters
     * @returns unknown no error
     */
    public containerResize(data: ContainerResizeData): Promise<DockerResponse<ContainerResizeResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/resize',
            path: {
                id: data.id
            },
            query: {
                h: data.h,
                w: data.w
            },
            errors: {
                404: 'no such container',
                500: 'cannot resize container'
            }
        });
    }

    /**
     * Start a container
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.detachKeys Override the key sequence for detaching a container. Format is a
     * single character `[a-Z]` or `ctrl-<value>` where `<value>` is one
     * of: `a-z`, `@`, `^`, `[`, `,` or `_`.
     *
     * @returns void no error
     */
    public containerStart(data: ContainerStartData): Promise<DockerResponse<ContainerStartResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/start',
            path: {
                id: data.id
            },
            query: {
                detachKeys: data.detachKeys
            },
            errors: {
                304: 'container already started',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Stop a container
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.signal Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     * @param data.t Number of seconds to wait before killing the container
     * @returns void no error
     */
    public containerStop(data: ContainerStopData): Promise<DockerResponse<ContainerStopResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/stop',
            path: {
                id: data.id
            },
            query: {
                signal: data.signal,
                t: data.t
            },
            errors: {
                304: 'container already stopped',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Restart a container
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.signal Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     * @param data.t Number of seconds to wait before killing the container
     * @returns void no error
     */
    public containerRestart(data: ContainerRestartData): Promise<DockerResponse<ContainerRestartResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/restart',
            path: {
                id: data.id
            },
            query: {
                signal: data.signal,
                t: data.t
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Kill a container
     * Send a POSIX signal to a container, defaulting to killing to the
     * container.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.signal Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     * @returns void no error
     */
    public containerKill(data: ContainerKillData): Promise<DockerResponse<ContainerKillResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/kill',
            path: {
                id: data.id
            },
            query: {
                signal: data.signal
            },
            errors: {
                404: 'no such container',
                409: 'container is not running',
                500: 'server error'
            }
        });
    }

    /**
     * Update a container
     * Change various configuration options of a container without having to
     * recreate it.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.update
     * @returns unknown The container has been updated.
     */
    public containerUpdate(data: ContainerUpdateData): Promise<DockerResponse<ContainerUpdateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/update',
            path: {
                id: data.id
            },
            body: data.update,
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Rename a container
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.name New name for the container
     * @returns void no error
     */
    public containerRename(data: ContainerRenameData): Promise<DockerResponse<ContainerRenameResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/rename',
            path: {
                id: data.id
            },
            query: {
                name: data.name
            },
            errors: {
                404: 'no such container',
                409: 'name already in use',
                500: 'server error'
            }
        });
    }

    /**
     * Pause a container
     * Use the freezer cgroup to suspend all processes in a container.
     *
     * Traditionally, when suspending a process the `SIGSTOP` signal is used,
     * which is observable by the process being suspended. With the freezer
     * cgroup the process is unaware, and unable to capture, that it is being
     * suspended, and subsequently resumed.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @returns void no error
     */
    public containerPause(data: ContainerPauseData): Promise<DockerResponse<ContainerPauseResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/pause',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Unpause a container
     * Resume a container which has been paused.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @returns void no error
     */
    public containerUnpause(data: ContainerUnpauseData): Promise<DockerResponse<ContainerUnpauseResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/unpause',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Attach to a container
     * Attach to a container to read its output or send it input. You can attach
     * to the same container multiple times and you can reattach to containers
     * that have been detached.
     *
     * Either the `stream` or `logs` parameter must be `true` for this endpoint
     * to do anything.
     *
     * See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/)
     * for more details.
     *
     * ### Hijacking
     *
     * This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`,
     * and `stderr` on the same socket.
     *
     * This is the response from the daemon for an attach request:
     *
     * ```
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.docker.raw-stream
     *
     * [STREAM]
     * ```
     *
     * After the headers and two new lines, the TCP connection can now be used
     * for raw, bidirectional communication between the client and server.
     *
     * To hint potential proxies about connection hijacking, the Docker client
     * can also optionally send connection upgrade headers.
     *
     * For example, the client sends this request to upgrade the connection:
     *
     * ```
     * POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
     * Upgrade: tcp
     * Connection: Upgrade
     * ```
     *
     * The Docker daemon will respond with a `101 UPGRADED` response, and will
     * similarly follow with the raw stream:
     *
     * ```
     * HTTP/1.1 101 UPGRADED
     * Content-Type: application/vnd.docker.raw-stream
     * Connection: Upgrade
     * Upgrade: tcp
     *
     * [STREAM]
     * ```
     *
     * ### Stream format
     *
     * When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate),
     * the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream
     * and the stream over the hijacked connected is multiplexed to separate out
     * `stdout` and `stderr`. The stream consists of a series of frames, each
     * containing a header and a payload.
     *
     * The header contains the information which the stream writes (`stdout` or
     * `stderr`). It also contains the size of the associated frame encoded in
     * the last four bytes (`uint32`).
     *
     * It is encoded on the first eight bytes like this:
     *
     * ```go
     * header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
     * ```
     *
     * `STREAM_TYPE` can be:
     *
     * - 0: `stdin` (is written on `stdout`)
     * - 1: `stdout`
     * - 2: `stderr`
     *
     * `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size
     * encoded as big endian.
     *
     * Following the header is the payload, which is the specified number of
     * bytes of `STREAM_TYPE`.
     *
     * The simplest way to implement this protocol is the following:
     *
     * 1. Read 8 bytes.
     * 2. Choose `stdout` or `stderr` depending on the first byte.
     * 3. Extract the frame size from the last four bytes.
     * 4. Read the extracted size and output it on the correct output.
     * 5. Goto 1.
     *
     * ### Stream format when using a TTY
     *
     * When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate),
     * the stream is not multiplexed. The data exchanged over the hijacked
     * connection is simply the raw data from the process PTY and client's
     * `stdin`.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.detachKeys Override the key sequence for detaching a container.Format is a single
     * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
     * `@`, `^`, `[`, `,` or `_`.
     *
     * @param data.logs Replay previous logs from the container.
     *
     * This is useful for attaching to a container that has started and you
     * want to output everything since the container started.
     *
     * If `stream` is also enabled, once all the previous output has been
     * returned, it will seamlessly transition into streaming current
     * output.
     *
     * @param data.stream Stream attached streams from the time the request was made onwards.
     *
     * @param data.stdin Attach to `stdin`
     * @param data.stdout Attach to `stdout`
     * @param data.stderr Attach to `stderr`
     * @returns unknown no error, no upgrade header found
     */
    public containerAttach(data: ContainerAttachData): Promise<DockerResponse<ContainerAttachResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/attach',
            path: {
                id: data.id
            },
            query: {
                detachKeys: data.detachKeys,
                logs: data.logs,
                stream: data.stream,
                stdin: data.stdin,
                stdout: data.stdout,
                stderr: data.stderr
            },
            errors: {
                400: 'bad parameter',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Attach to a container via a websocket
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.detachKeys Override the key sequence for detaching a container.Format is a single
     * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
     * `@`, `^`, `[`, `,`, or `_`.
     *
     * @param data.logs Return logs
     * @param data.stream Return stream
     * @param data.stdin Attach to `stdin`
     * @param data.stdout Attach to `stdout`
     * @param data.stderr Attach to `stderr`
     * @returns unknown no error, no upgrade header found
     */
    public containerAttachWebsocket(data: ContainerAttachWebsocketData): Promise<DockerResponse<ContainerAttachWebsocketResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/attach/ws',
            path: {
                id: data.id
            },
            query: {
                detachKeys: data.detachKeys,
                logs: data.logs,
                stream: data.stream,
                stdin: data.stdin,
                stdout: data.stdout,
                stderr: data.stderr
            },
            errors: {
                400: 'bad parameter',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Wait for a container
     * Block until a container stops, then returns the exit code.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.condition Wait until a container state reaches the given condition.
     *
     * Defaults to `not-running` if omitted or empty.
     *
     * @returns ContainerWaitResponse The container has exit.
     */
    public containerWait(data: ContainerWaitData): Promise<DockerResponse<ContainerWaitResponse2>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/wait',
            path: {
                id: data.id
            },
            query: {
                condition: data.condition
            },
            errors: {
                400: 'bad parameter',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Remove a container
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.v Remove anonymous volumes associated with the container.
     * @param data.force If the container is running, kill it before removing it.
     * @param data.link Remove the specified link associated with the container.
     * @returns void no error
     */
    public containerDelete(data: ContainerDeleteData): Promise<DockerResponse<ContainerDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/containers/{id}',
            path: {
                id: data.id
            },
            query: {
                v: data.v,
                force: data.force,
                link: data.link
            },
            errors: {
                400: 'bad parameter',
                404: 'no such container',
                409: 'conflict',
                500: 'server error'
            }
        });
    }

    /**
     * Get information about files in a container
     * A response header `X-Docker-Container-Path-Stat` is returned, containing
     * a base64 - encoded JSON object with some filesystem header information
     * about the path.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.path Resource in the container’s filesystem to archive.
     * @returns string no error
     */
    public containerArchiveInfo(data: ContainerArchiveInfoData): Promise<DockerResponse<ContainerArchiveInfoResponse>> {
        return this.client.request({
            method: 'HEAD',
            url: '/containers/{id}/archive',
            path: {
                id: data.id
            },
            query: {
                path: data.path
            },
            responseHeader: 'X-Docker-Container-Path-Stat',
            errors: {
                400: 'Bad parameter',
                404: 'Container or path does not exist',
                500: 'Server error'
            }
        });
    }

    /**
     * Get an archive of a filesystem resource in a container
     * Get a tar archive of a resource in the filesystem of container id.
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.path Resource in the container’s filesystem to archive.
     * @returns unknown no error
     */
    public containerArchive(data: ContainerArchiveData): Promise<DockerResponse<ContainerArchiveResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/containers/{id}/archive',
            path: {
                id: data.id
            },
            query: {
                path: data.path
            },
            errors: {
                400: 'Bad parameter',
                404: 'Container or path does not exist',
                500: 'server error'
            }
        });
    }

    /**
     * Extract an archive of files or folders to a directory in a container
     * Upload a tar archive to be extracted to a path in the filesystem of container id.
     * `path` parameter is asserted to be a directory. If it exists as a file, 400 error
     * will be returned with message "not a directory".
     *
     * @param data The data for the request.
     * @param data.id ID or name of the container
     * @param data.path Path to a directory in the container to extract the archive’s contents into.
     * @param data.inputStream The input stream must be a tar archive compressed with one of the
     * following algorithms: `identity` (no compression), `gzip`, `bzip2`,
     * or `xz`.
     *
     * @param data.noOverwriteDirNonDir If `1`, `true`, or `True` then it will be an error if unpacking the
     * given content would cause an existing directory to be replaced with
     * a non-directory and vice versa.
     *
     * @param data.copyUidgid If `1`, `true`, then it will copy UID/GID maps to the dest file or
     * dir
     *
     * @returns unknown The content was extracted successfully
     */
    public putContainerArchive(data: PutContainerArchiveData): Promise<DockerResponse<PutContainerArchiveResponse>> {
        return this.client.request({
            method: 'PUT',
            url: '/containers/{id}/archive',
            path: {
                id: data.id
            },
            query: {
                path: data.path,
                noOverwriteDirNonDir: data.noOverwriteDirNonDir,
                copyUIDGID: data.copyUidgid
            },
            body: data.inputStream,
            errors: {
                400: 'Bad parameter',
                403: 'Permission denied, the volume or container rootfs is marked as read-only.',
                404: 'No such container or path does not exist inside the container',
                500: 'Server error'
            }
        });
    }

    /**
     * Delete stopped containers
     * @param data The data for the request.
     * @param data.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
     *
     * @returns unknown No error
     */
    public containerPrune(data: ContainerPruneData = {}): Promise<DockerResponse<ContainerPruneResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/prune',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

}

export class ImageService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List Images
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * @param data The data for the request.
     * @param data.all Show all images. Only images from a final layer (no children) are shown by default.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the images list.
     *
     * Available filters:
     *
     * - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
     * - `dangling=true`
     * - `label=key` or `label="key=value"` of an image label
     * - `reference`=(`<image-name>[:<tag>]`)
     * - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
     * - `until=<timestamp>`
     *
     * @param data.sharedSize Compute and show shared size as a `SharedSize` field on each image.
     * @param data.digests Show digest information as a `RepoDigests` field on each image.
     * @returns ImageSummary Summary image data for the images matching the query
     */
    public imageList(data: ImageListData = {}): Promise<DockerResponse<ImageListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/json',
            query: {
                all: data.all,
                filters: data.filters,
                'shared-size': data.sharedSize,
                digests: data.digests
            },
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Build an image
     * Build an image from a tar archive with a `Dockerfile` in it.
     *
     * The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).
     *
     * The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.
     *
     * The build is canceled if the client drops the connection by quitting or being killed.
     *
     * @param data The data for the request.
     * @param data.inputStream A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     * @param data.dockerfile Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
     * @param data.t A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
     * @param data.extrahosts Extra hosts to add to /etc/hosts
     * @param data.remote A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
     * @param data.q Suppress verbose build output.
     * @param data.nocache Do not use the cache when building the image.
     * @param data.cachefrom JSON array of images used for build cache resolution.
     * @param data.pull Attempt to pull the image even if an older image exists locally.
     * @param data.rm Remove intermediate containers after a successful build.
     * @param data.forcerm Always remove intermediate containers, even upon failure.
     * @param data.memory Set memory limit for build.
     * @param data.memswap Total memory (memory + swap). Set as `-1` to disable swap.
     * @param data.cpushares CPU shares (relative weight).
     * @param data.cpusetcpus CPUs in which to allow execution (e.g., `0-3`, `0,1`).
     * @param data.cpuperiod The length of a CPU period in microseconds.
     * @param data.cpuquota Microseconds of CPU time that the container can get in a CPU period.
     * @param data.buildargs JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.
     *
     * For example, the build arg `FOO=bar` would become `{"FOO":"bar"}` in JSON. This would result in the query parameter `buildargs={"FOO":"bar"}`. Note that `{"FOO":"bar"}` should be URI component encoded.
     *
     * [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)
     *
     * @param data.shmsize Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     * @param data.squash Squash the resulting images layers into a single layer. *(Experimental release only.)*
     * @param data.labels Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     * @param data.networkmode Sets the networking mode for the run commands during build. Supported
     * standard values are: `bridge`, `host`, `none`, and `container:<name|id>`.
     * Any other value is taken as a custom network's name or ID to which this
     * container should connect to.
     *
     * @param data.contentType
     * @param data.xRegistryConfig This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.
     *
     * The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:
     *
     * ```
     * {
     * "docker.example.com": {
     * "username": "janedoe",
     * "password": "hunter2"
     * },
     * "https://index.docker.io/v1/": {
     * "username": "mobydock",
     * "password": "conta1n3rize14"
     * }
     * }
     * ```
     *
     * Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.
     *
     * @param data.platform Platform in the format os[/arch[/variant]]
     * @param data.target Target build stage
     * @param data.outputs BuildKit output configuration
     * @param data.version Version of the builder backend to use.
     *
     * - `1` is the first generation classic (deprecated) builder in the Docker daemon (default)
     * - `2` is [BuildKit](https://github.com/moby/buildkit)
     *
     * @returns unknown no error
     */
    public imageBuild(data: ImageBuildData = {}): Promise<DockerResponse<ImageBuildResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/build',
            headers: {
                'Content-type': data.contentType,
                'X-Registry-Config': data.xRegistryConfig
            },
            query: {
                dockerfile: data.dockerfile,
                t: data.t,
                extrahosts: data.extrahosts,
                remote: data.remote,
                q: data.q,
                nocache: data.nocache,
                cachefrom: data.cachefrom,
                pull: data.pull,
                rm: data.rm,
                forcerm: data.forcerm,
                memory: data.memory,
                memswap: data.memswap,
                cpushares: data.cpushares,
                cpusetcpus: data.cpusetcpus,
                cpuperiod: data.cpuperiod,
                cpuquota: data.cpuquota,
                buildargs: data.buildargs,
                shmsize: data.shmsize,
                squash: data.squash,
                labels: data.labels,
                networkmode: data.networkmode,
                platform: data.platform,
                target: data.target,
                outputs: data.outputs,
                version: data.version
            },
            body: data.inputStream,
            errors: {
                400: 'Bad parameter',
                500: 'server error'
            }
        });
    }

    /**
     * Delete builder cache
     * @param data The data for the request.
     * @param data.keepStorage Amount of disk space in bytes to keep for cache
     * @param data.all Remove all types of build cache
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the list of build cache objects.
     *
     * Available filters:
     *
     * - `until=<timestamp>` remove cache older than `<timestamp>`. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon's local time.
     * - `id=<id>`
     * - `parent=<id>`
     * - `type=<string>`
     * - `description=<string>`
     * - `inuse`
     * - `shared`
     * - `private`
     *
     * @returns unknown No error
     */
    public buildPrune(data: BuildPruneData = {}): Promise<DockerResponse<BuildPruneResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/build/prune',
            query: {
                'keep-storage': data.keepStorage,
                all: data.all,
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Create an image
     * Pull or import an image.
     * @param data The data for the request.
     * @param data.fromImage Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @param data.fromSrc Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
     * @param data.repo Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @param data.tag Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @param data.message Set commit message for imported image.
     * @param data.inputImage Image content if the value `-` has been specified in fromSrc query parameter
     * @param data.xRegistryAuth A base64url-encoded auth configuration.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @param data.changes Apply `Dockerfile` instructions to the image that is created,
     * for example: `changes=ENV DEBUG=true`.
     * Note that `ENV DEBUG=true` should be URI component encoded.
     *
     * Supported `Dockerfile` instructions:
     * `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`
     *
     * @param data.platform Platform in the format os[/arch[/variant]].
     *
     * When used in combination with the `fromImage` option, the daemon checks
     * if the given image is present in the local image cache with the given
     * OS and Architecture, and otherwise attempts to pull the image. If the
     * option is not set, the host's native OS and Architecture are used.
     * If the given image does not exist in the local image cache, the daemon
     * attempts to pull the image with the host's native OS and Architecture.
     * If the given image does exists in the local image cache, but its OS or
     * architecture does not match, a warning is produced.
     *
     * When used with the `fromSrc` option to import an image from an archive,
     * this option sets the platform information for the imported image. If
     * the option is not set, the host's native OS and Architecture are used
     * for the imported image.
     *
     * @returns unknown no error
     */
    public imageCreate(data: ImageCreateData = {}): Promise<DockerResponse<ImageCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/images/create',
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                fromImage: data.fromImage,
                fromSrc: data.fromSrc,
                repo: data.repo,
                tag: data.tag,
                message: data.message,
                changes: data.changes,
                platform: data.platform
            },
            body: data.inputImage,
            errors: {
                404: 'repository does not exist or no read access',
                500: 'server error'
            }
        });
    }

    /**
     * Inspect an image
     * Return low-level information about an image.
     * @param data The data for the request.
     * @param data.name Image name or id
     * @returns ImageInspect No error
     */
    public imageInspect(data: ImageInspectData): Promise<DockerResponse<ImageInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/{name}/json',
            path: {
                name: data.name
            },
            errors: {
                404: 'No such image',
                500: 'Server error'
            }
        });
    }

    /**
     * Get the history of an image
     * Return parent layers of an image.
     * @param data The data for the request.
     * @param data.name Image name or ID
     * @returns unknown List of image layers
     */
    public imageHistory(data: ImageHistoryData): Promise<DockerResponse<ImageHistoryResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/{name}/history',
            path: {
                name: data.name
            },
            errors: {
                404: 'No such image',
                500: 'Server error'
            }
        });
    }

    /**
     * Push an image
     * Push an image to a registry.
     *
     * If you wish to push an image on to a private registry, that image must
     * already have a tag which references the registry. For example,
     * `registry.example.com/myimage:latest`.
     *
     * The push is cancelled if the HTTP connection is closed.
     *
     * @param data The data for the request.
     * @param data.name Image name or ID.
     * @param data.xRegistryAuth A base64url-encoded auth configuration.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @param data.tag The tag to associate with the image on the registry.
     * @returns unknown No error
     */
    public imagePush(data: ImagePushData): Promise<DockerResponse<ImagePushResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/images/{name}/push',
            path: {
                name: data.name
            },
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                tag: data.tag
            },
            errors: {
                404: 'No such image',
                500: 'Server error'
            }
        });
    }

    /**
     * Tag an image
     * Tag an image so that it becomes part of a repository.
     * @param data The data for the request.
     * @param data.name Image name or ID to tag.
     * @param data.repo The repository to tag in. For example, `someuser/someimage`.
     * @param data.tag The name of the new tag.
     * @returns unknown No error
     */
    public imageTag(data: ImageTagData): Promise<DockerResponse<ImageTagResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/images/{name}/tag',
            path: {
                name: data.name
            },
            query: {
                repo: data.repo,
                tag: data.tag
            },
            errors: {
                400: 'Bad parameter',
                404: 'No such image',
                409: 'Conflict',
                500: 'Server error'
            }
        });
    }

    /**
     * Remove an image
     * Remove an image, along with any untagged parent images that were
     * referenced by that image.
     *
     * Images can't be removed if they have descendant images, are being
     * used by a running container or are being used by a build.
     *
     * @param data The data for the request.
     * @param data.name Image name or ID
     * @param data.force Remove the image even if it is being used by stopped containers or has other tags
     * @param data.noprune Do not delete untagged parent images
     * @returns ImageDeleteResponseItem The image was deleted successfully
     */
    public imageDelete(data: ImageDeleteData): Promise<DockerResponse<ImageDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/images/{name}',
            path: {
                name: data.name
            },
            query: {
                force: data.force,
                noprune: data.noprune
            },
            errors: {
                404: 'No such image',
                409: 'Conflict',
                500: 'Server error'
            }
        });
    }

    /**
     * Search images
     * Search for an image on Docker Hub.
     * @param data The data for the request.
     * @param data.term Term to search
     * @param data.limit Maximum number of results to return
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
     *
     * - `is-official=(true|false)`
     * - `stars=<number>` Matches images that has at least 'number' stars.
     *
     * @returns unknown No error
     */
    public imageSearch(data: ImageSearchData): Promise<DockerResponse<ImageSearchResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/search',
            query: {
                term: data.term,
                limit: data.limit,
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Delete unused images
     * @param data The data for the request.
     * @param data.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
     *
     * - `dangling=<boolean>` When set to `true` (or `1`), prune only
     * unused *and* untagged images. When set to `false`
     * (or `0`), all unused images are pruned.
     * - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
     *
     * @returns unknown No error
     */
    public imagePrune(data: ImagePruneData = {}): Promise<DockerResponse<ImagePruneResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/images/prune',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Create a new image from a container
     * @param data The data for the request.
     * @param data.containerConfig The container configuration
     * @param data.container The ID or name of the container to commit
     * @param data.repo Repository name for the created image
     * @param data.tag Tag name for the create image
     * @param data.comment Commit message
     * @param data.author Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
     * @param data.pause Whether to pause the container before committing
     * @param data.changes `Dockerfile` instructions to apply while committing
     * @returns IdResponse no error
     */
    public imageCommit(data: ImageCommitData = {}): Promise<DockerResponse<ImageCommitResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/commit',
            query: {
                container: data.container,
                repo: data.repo,
                tag: data.tag,
                comment: data.comment,
                author: data.author,
                pause: data.pause,
                changes: data.changes
            },
            body: data.containerConfig,
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    /**
     * Export an image
     * Get a tarball containing all images and metadata for a repository.
     *
     * If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.
     *
     * ### Image tarball format
     *
     * An image tarball contains one directory per image layer (named using its long ID), each containing these files:
     *
     * - `VERSION`: currently `1.0` - the file format version
     * - `json`: detailed layer information, similar to `docker inspect layer_id`
     * - `layer.tar`: A tarfile containing the filesystem changes in this layer
     *
     * The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.
     *
     * If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.
     *
     * ```json
     * {
     * "hello-world": {
     * "latest": "565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1"
     * }
     * }
     * ```
     *
     * @param data The data for the request.
     * @param data.name Image name or ID
     * @returns binary no error
     */
    public imageGet(data: ImageGetData): Promise<DockerResponse<ImageGetResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/{name}/get',
            path: {
                name: data.name
            },
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Export several images
     * Get a tarball containing all images and metadata for several image
     * repositories.
     *
     * For each value of the `names` parameter: if it is a specific name and
     * tag (e.g. `ubuntu:latest`), then only that image (and its parents) are
     * returned; if it is an image ID, similarly only that image (and its parents)
     * are returned and there would be no names referenced in the 'repositories'
     * file for this image ID.
     *
     * For details on the format, see the [export image endpoint](#operation/ImageGet).
     *
     * @param data The data for the request.
     * @param data.names Image names to filter by
     * @returns binary no error
     */
    public imageGetAll(data: ImageGetAllData = {}): Promise<DockerResponse<ImageGetAllResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/images/get',
            query: {
                names: data.names
            },
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Import images
     * Load a set of images and tags into a repository.
     *
     * For details on the format, see the [export image endpoint](#operation/ImageGet).
     *
     * @param data The data for the request.
     * @param data.imagesTarball Tar archive containing images
     * @param data.quiet Suppress progress details during load.
     * @returns unknown no error
     */
    public imageLoad(data: ImageLoadData = {}): Promise<DockerResponse<ImageLoadResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/images/load',
            query: {
                quiet: data.quiet
            },
            body: data.imagesTarball,
            errors: {
                500: 'server error'
            }
        });
    }

}

export class SystemService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * Check auth configuration
     * Validate credentials for a registry and, if available, get an identity
     * token for accessing the registry without password.
     *
     * @param data The data for the request.
     * @param data.authConfig Authentication to check
     * @returns unknown An identity token was generated successfully.
     * @returns void No error
     */
    public systemAuth(data: SystemAuthData = {}): Promise<DockerResponse<SystemAuthResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/auth',
            body: data.authConfig,
            errors: {
                401: 'Auth error',
                500: 'Server error'
            }
        });
    }

    /**
     * Get system information
     * @returns SystemInfo No error
     */
    public systemInfo(): Promise<DockerResponse<SystemInfoResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/info',
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Get version
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * @returns SystemVersion no error
     */
    public systemVersion(): Promise<DockerResponse<SystemVersionResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/version',
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @returns string no error
     */
    public systemPing(): Promise<DockerResponse<SystemPingResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/_ping',
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @returns string no error
     */
    public systemPingHead(): Promise<DockerResponse<SystemPingHeadResponse>> {
        return this.client.request({
            method: 'HEAD',
            url: '/_ping',
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Monitor events
     * Stream real-time events from the server.
     *
     * Various objects within Docker report events when something happens to them.
     *
     * Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`
     *
     * Images report these events: `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`
     *
     * Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`
     *
     * Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`
     *
     * The Docker daemon reports these events: `reload`
     *
     * Services report these events: `create`, `update`, and `remove`
     *
     * Nodes report these events: `create`, `update`, and `remove`
     *
     * Secrets report these events: `create`, `update`, and `remove`
     *
     * Configs report these events: `create`, `update`, and `remove`
     *
     * The Builder reports `prune` events
     *
     * @param data The data for the request.
     * @param data.since Show events created since this timestamp then stream new events.
     * @param data.until Show events created until this timestamp then stop streaming.
     * @param data.filters A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:
     *
     * - `config=<string>` config name or ID
     * - `container=<string>` container name or ID
     * - `daemon=<string>` daemon name or ID
     * - `event=<string>` event type
     * - `image=<string>` image name or ID
     * - `label=<string>` image or container label
     * - `network=<string>` network name or ID
     * - `node=<string>` node ID
     * - `plugin`=<string> plugin name or ID
     * - `scope`=<string> local or swarm
     * - `secret=<string>` secret name or ID
     * - `service=<string>` service name or ID
     * - `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config`
     * - `volume=<string>` volume name
     *
     * @returns EventMessage no error
     */
    public systemEvents(data: SystemEventsData = {}): Promise<DockerResponse<SystemEventsResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/events',
            query: {
                since: data.since,
                until: data.until,
                filters: data.filters
            },
            errors: {
                400: 'bad parameter',
                500: 'server error'
            }
        });
    }

    /**
     * Get data usage information
     * @param data The data for the request.
     * @param data.type Object types, for which to compute and return data.
     *
     * @returns unknown no error
     */
    public systemDataUsage(data: SystemDataUsageData = {}): Promise<DockerResponse<SystemDataUsageResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/system/df',
            query: {
                type: data.type
            },
            errors: {
                500: 'server error'
            }
        });
    }

}

export class ExecService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * Create an exec instance
     * Run a command inside a running container.
     * @param data The data for the request.
     * @param data.execConfig Exec configuration
     * @param data.id ID or name of container
     * @returns IdResponse no error
     */
    public containerExec(data: ContainerExecData): Promise<DockerResponse<ContainerExecResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/containers/{id}/exec',
            path: {
                id: data.id
            },
            body: data.execConfig,
            errors: {
                404: 'no such container',
                409: 'container is paused',
                500: 'Server error'
            }
        });
    }

    /**
     * Start an exec instance
     * Starts a previously set up exec instance. If detach is true, this endpoint
     * returns immediately after starting the command. Otherwise, it sets up an
     * interactive session with the command.
     *
     * @param data The data for the request.
     * @param data.id Exec instance ID
     * @param data.execStartConfig
     * @returns unknown No error
     */
    public execStart(data: ExecStartData): Promise<DockerResponse<ExecStartResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/exec/{id}/start',
            path: {
                id: data.id
            },
            body: data.execStartConfig,
            errors: {
                404: 'No such exec instance',
                409: 'Container is stopped or paused'
            }
        });
    }

    /**
     * Resize an exec instance
     * Resize the TTY session used by an exec instance. This endpoint only works
     * if `tty` was specified as part of creating and starting the exec instance.
     *
     * @param data The data for the request.
     * @param data.id Exec instance ID
     * @param data.h Height of the TTY session in characters
     * @param data.w Width of the TTY session in characters
     * @returns unknown No error
     */
    public execResize(data: ExecResizeData): Promise<DockerResponse<ExecResizeResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/exec/{id}/resize',
            path: {
                id: data.id
            },
            query: {
                h: data.h,
                w: data.w
            },
            errors: {
                400: 'bad parameter',
                404: 'No such exec instance',
                500: 'Server error'
            }
        });
    }

    /**
     * Inspect an exec instance
     * Return low-level information about an exec instance.
     * @param data The data for the request.
     * @param data.id Exec instance ID
     * @returns unknown No error
     */
    public execInspect(data: ExecInspectData): Promise<DockerResponse<ExecInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/exec/{id}/json',
            path: {
                id: data.id
            },
            errors: {
                404: 'No such exec instance',
                500: 'Server error'
            }
        });
    }

}

export class VolumeService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List volumes
     * @param data The data for the request.
     * @param data.filters JSON encoded value of the filters (a `map[string][]string`) to
     * process on the volumes list. Available filters:
     *
     * - `dangling=<boolean>` When set to `true` (or `1`), returns all
     * volumes that are not in use by a container. When set to `false`
     * (or `0`), only volumes that are in use by one or more
     * containers are returned.
     * - `driver=<volume-driver-name>` Matches volumes based on their driver.
     * - `label=<key>` or `label=<key>:<value>` Matches volumes based on
     * the presence of a `label` alone or a `label` and a value.
     * - `name=<volume-name>` Matches all or part of a volume name.
     *
     * @returns VolumeListResponse Summary volume data that matches the query
     */
    public volumeList(data: VolumeListData = {}): Promise<DockerResponse<VolumeListResponse2>> {
        return this.client.request({
            method: 'GET',
            url: '/volumes',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Create a volume
     * @param data The data for the request.
     * @param data.volumeConfig Volume configuration
     * @returns Volume The volume was created successfully
     */
    public volumeCreate(data: VolumeCreateData): Promise<DockerResponse<VolumeCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/volumes/create',
            body: data.volumeConfig,
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Inspect a volume
     * @param data The data for the request.
     * @param data.name Volume name or ID
     * @returns Volume No error
     */
    public volumeInspect(data: VolumeInspectData): Promise<DockerResponse<VolumeInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/volumes/{name}',
            path: {
                name: data.name
            },
            errors: {
                404: 'No such volume',
                500: 'Server error'
            }
        });
    }

    /**
     * "Update a volume. Valid only for Swarm cluster volumes"
     *
     * @param data The data for the request.
     * @param data.name The name or ID of the volume
     * @param data.version The version number of the volume being updated. This is required to
     * avoid conflicting writes. Found in the volume's `ClusterVolume`
     * field.
     *
     * @param data.body The spec of the volume to update. Currently, only Availability may
     * change. All other fields must remain unchanged.
     *
     * @returns unknown no error
     */
    public volumeUpdate(data: VolumeUpdateData): Promise<DockerResponse<VolumeUpdateResponse>> {
        return this.client.request({
            method: 'PUT',
            url: '/volumes/{name}',
            path: {
                name: data.name
            },
            query: {
                version: data.version
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such volume',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Remove a volume
     * Instruct the driver to remove the volume.
     * @param data The data for the request.
     * @param data.name Volume name or ID
     * @param data.force Force the removal of the volume
     * @returns void The volume was removed
     */
    public volumeDelete(data: VolumeDeleteData): Promise<DockerResponse<VolumeDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/volumes/{name}',
            path: {
                name: data.name
            },
            query: {
                force: data.force
            },
            errors: {
                404: 'No such volume or volume driver',
                409: 'Volume is in use and cannot be removed',
                500: 'Server error'
            }
        });
    }

    /**
     * Delete unused volumes
     * @param data The data for the request.
     * @param data.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
     * - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.
     *
     * @returns unknown No error
     */
    public volumePrune(data: VolumePruneData = {}): Promise<DockerResponse<VolumePruneResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/volumes/prune',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

}

export class NetworkService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List networks
     * Returns a list of networks. For details on the format, see the
     * [network inspect endpoint](#operation/NetworkInspect).
     *
     * Note that it uses a different, smaller representation of a network than
     * inspecting a single network. For example, the list of containers attached
     * to the network is not propagated in API versions 1.28 and up.
     *
     * @param data The data for the request.
     * @param data.filters JSON encoded value of the filters (a `map[string][]string`) to process
     * on the networks list.
     *
     * Available filters:
     *
     * - `dangling=<boolean>` When set to `true` (or `1`), returns all
     * networks that are not in use by a container. When set to `false`
     * (or `0`), only networks that are in use by one or more
     * containers are returned.
     * - `driver=<driver-name>` Matches a network's driver.
     * - `id=<network-id>` Matches all or part of a network ID.
     * - `label=<key>` or `label=<key>=<value>` of a network label.
     * - `name=<network-name>` Matches all or part of a network name.
     * - `scope=["swarm"|"global"|"local"]` Filters networks by scope (`swarm`, `global`, or `local`).
     * - `type=["custom"|"builtin"]` Filters networks by type. The `custom` keyword returns all user-defined networks.
     *
     * @returns Network No error
     */
    public networkList(data: NetworkListData = {}): Promise<DockerResponse<NetworkListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/networks',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Inspect a network
     * @param data The data for the request.
     * @param data.id Network ID or name
     * @param data.verbose Detailed inspect output for troubleshooting
     * @param data.scope Filter the network by scope (swarm, global, or local)
     * @returns Network No error
     */
    public networkInspect(data: NetworkInspectData): Promise<DockerResponse<NetworkInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/networks/{id}',
            path: {
                id: data.id
            },
            query: {
                verbose: data.verbose,
                scope: data.scope
            },
            errors: {
                404: 'Network not found',
                500: 'Server error'
            }
        });
    }

    /**
     * Remove a network
     * @param data The data for the request.
     * @param data.id Network ID or name
     * @returns void No error
     */
    public networkDelete(data: NetworkDeleteData): Promise<DockerResponse<NetworkDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/networks/{id}',
            path: {
                id: data.id
            },
            errors: {
                403: 'operation not supported for pre-defined networks',
                404: 'no such network',
                500: 'Server error'
            }
        });
    }

    /**
     * Create a network
     * @param data The data for the request.
     * @param data.networkConfig Network configuration
     * @returns unknown No error
     */
    public networkCreate(data: NetworkCreateData): Promise<DockerResponse<NetworkCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/networks/create',
            body: data.networkConfig,
            errors: {
                400: 'bad parameter',
                403: `Forbidden operation. This happens when trying to create a network named after a pre-defined network,
or when trying to create an overlay network on a daemon which is not part of a Swarm cluster.
`,
                404: 'plugin not found',
                500: 'Server error'
            }
        });
    }

    /**
     * Connect a container to a network
     * The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
     * @param data The data for the request.
     * @param data.id Network ID or name
     * @param data.container
     * @returns unknown No error
     */
    public networkConnect(data: NetworkConnectData): Promise<DockerResponse<NetworkConnectResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/networks/{id}/connect',
            path: {
                id: data.id
            },
            body: data.container,
            errors: {
                400: 'bad parameter',
                403: 'Operation forbidden',
                404: 'Network or container not found',
                500: 'Server error'
            }
        });
    }

    /**
     * Disconnect a container from a network
     * @param data The data for the request.
     * @param data.id Network ID or name
     * @param data.container
     * @returns unknown No error
     */
    public networkDisconnect(data: NetworkDisconnectData): Promise<DockerResponse<NetworkDisconnectResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/networks/{id}/disconnect',
            path: {
                id: data.id
            },
            body: data.container,
            errors: {
                403: 'Operation not supported for swarm scoped networks',
                404: 'Network or container not found',
                500: 'Server error'
            }
        });
    }

    /**
     * Delete unused networks
     * @param data The data for the request.
     * @param data.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
     *
     * @returns unknown No error
     */
    public networkPrune(data: NetworkPruneData = {}): Promise<DockerResponse<NetworkPruneResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/networks/prune',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

}

export class PluginService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List plugins
     * Returns information about installed plugins.
     * @param data The data for the request.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the plugin list.
     *
     * Available filters:
     *
     * - `capability=<capability name>`
     * - `enable=<true>|<false>`
     *
     * @returns Plugin No error
     */
    public pluginList(data: PluginListData = {}): Promise<DockerResponse<PluginListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/plugins',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'Server error'
            }
        });
    }

    /**
     * Get plugin privileges
     * @param data The data for the request.
     * @param data.remote The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @returns PluginPrivilege no error
     */
    public getPluginPrivileges(data: GetPluginPrivilegesData): Promise<DockerResponse<GetPluginPrivilegesResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/plugins/privileges',
            query: {
                remote: data.remote
            },
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Install a plugin
     * Pulls and installs a plugin. After the plugin is installed, it can be
     * enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable).
     *
     * @param data The data for the request.
     * @param data.remote Remote reference for plugin to install.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     * @param data.name Local name for the pulled plugin.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     * @param data.xRegistryAuth A base64url-encoded auth configuration to use when pulling a plugin
     * from a registry.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @param data.body
     * @returns void no error
     */
    public pluginPull(data: PluginPullData): Promise<DockerResponse<PluginPullResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/pull',
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                remote: data.remote,
                name: data.name
            },
            body: data.body,
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Inspect a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @returns Plugin no error
     */
    public pluginInspect(data: PluginInspectData): Promise<DockerResponse<PluginInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/plugins/{name}/json',
            path: {
                name: data.name
            },
            errors: {
                404: 'plugin is not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Remove a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.force Disable the plugin before removing. This may result in issues if the
     * plugin is in use by a container.
     *
     * @returns Plugin no error
     */
    public pluginDelete(data: PluginDeleteData): Promise<DockerResponse<PluginDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/plugins/{name}',
            path: {
                name: data.name
            },
            query: {
                force: data.force
            },
            errors: {
                404: 'plugin is not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Enable a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.timeout Set the HTTP client timeout (in seconds)
     * @returns unknown no error
     */
    public pluginEnable(data: PluginEnableData): Promise<DockerResponse<PluginEnableResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/{name}/enable',
            path: {
                name: data.name
            },
            query: {
                timeout: data.timeout
            },
            errors: {
                404: 'plugin is not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Disable a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.force Force disable a plugin even if still in use.
     *
     * @returns unknown no error
     */
    public pluginDisable(data: PluginDisableData): Promise<DockerResponse<PluginDisableResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/{name}/disable',
            path: {
                name: data.name
            },
            query: {
                force: data.force
            },
            errors: {
                404: 'plugin is not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Upgrade a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.remote Remote reference to upgrade to.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     * @param data.xRegistryAuth A base64url-encoded auth configuration to use when pulling a plugin
     * from a registry.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @param data.body
     * @returns void no error
     */
    public pluginUpgrade(data: PluginUpgradeData): Promise<DockerResponse<PluginUpgradeResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/{name}/upgrade',
            path: {
                name: data.name
            },
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                remote: data.remote
            },
            body: data.body,
            errors: {
                404: 'plugin not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Create a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.tarContext Path to tar containing plugin rootfs and manifest
     * @returns void no error
     */
    public pluginCreate(data: PluginCreateData): Promise<DockerResponse<PluginCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/create',
            query: {
                name: data.name
            },
            body: data.tarContext,
            errors: {
                500: 'server error'
            }
        });
    }

    /**
     * Push a plugin
     * Push a plugin to the registry.
     *
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @returns unknown no error
     */
    public pluginPush(data: PluginPushData): Promise<DockerResponse<PluginPushResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/{name}/push',
            path: {
                name: data.name
            },
            errors: {
                404: 'plugin not installed',
                500: 'server error'
            }
        });
    }

    /**
     * Configure a plugin
     * @param data The data for the request.
     * @param data.name The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     * @param data.body
     * @returns void No error
     */
    public pluginSet(data: PluginSetData): Promise<DockerResponse<PluginSetResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/plugins/{name}/set',
            path: {
                name: data.name
            },
            body: data.body,
            errors: {
                404: 'Plugin not installed',
                500: 'Server error'
            }
        });
    }

}

export class NodeService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List nodes
     * @param data The data for the request.
     * @param data.filters Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `id=<node id>`
     * - `label=<engine label>`
     * - `membership=`(`accepted`|`pending`)`
     * - `name=<node name>`
     * - `node.label=<node label>`
     * - `role=`(`manager`|`worker`)`
     *
     * @returns Node no error
     */
    public nodeList(data: NodeListData = {}): Promise<DockerResponse<NodeListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/nodes',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Inspect a node
     * @param data The data for the request.
     * @param data.id The ID or name of the node
     * @returns Node no error
     */
    public nodeInspect(data: NodeInspectData): Promise<DockerResponse<NodeInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/nodes/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such node',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Delete a node
     * @param data The data for the request.
     * @param data.id The ID or name of the node
     * @param data.force Force remove a node from the swarm
     * @returns unknown no error
     */
    public nodeDelete(data: NodeDeleteData): Promise<DockerResponse<NodeDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/nodes/{id}',
            path: {
                id: data.id
            },
            query: {
                force: data.force
            },
            errors: {
                404: 'no such node',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Update a node
     * @param data The data for the request.
     * @param data.id The ID of the node
     * @param data.version The version number of the node object being updated. This is required
     * to avoid conflicting writes.
     *
     * @param data.body
     * @returns unknown no error
     */
    public nodeUpdate(data: NodeUpdateData): Promise<DockerResponse<NodeUpdateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/nodes/{id}/update',
            path: {
                id: data.id
            },
            query: {
                version: data.version
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such node',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class SwarmService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * Inspect swarm
     * @returns Swarm no error
     */
    public swarmInspect(): Promise<DockerResponse<SwarmInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/swarm',
            errors: {
                404: 'no such swarm',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Initialize a new swarm
     * @param data The data for the request.
     * @param data.body
     * @returns string no error
     */
    public swarmInit(data: SwarmInitData): Promise<DockerResponse<SwarmInitResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/swarm/init',
            body: data.body,
            errors: {
                400: 'bad parameter',
                500: 'server error',
                503: 'node is already part of a swarm'
            }
        });
    }

    /**
     * Join an existing swarm
     * @param data The data for the request.
     * @param data.body
     * @returns unknown no error
     */
    public swarmJoin(data: SwarmJoinData): Promise<DockerResponse<SwarmJoinResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/swarm/join',
            body: data.body,
            errors: {
                400: 'bad parameter',
                500: 'server error',
                503: 'node is already part of a swarm'
            }
        });
    }

    /**
     * Leave a swarm
     * @param data The data for the request.
     * @param data.force Force leave swarm, even if this is the last manager or that it will
     * break the cluster.
     *
     * @returns unknown no error
     */
    public swarmLeave(data: SwarmLeaveData = {}): Promise<DockerResponse<SwarmLeaveResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/swarm/leave',
            query: {
                force: data.force
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Update a swarm
     * @param data The data for the request.
     * @param data.body
     * @param data.version The version number of the swarm object being updated. This is
     * required to avoid conflicting writes.
     *
     * @param data.rotateWorkerToken Rotate the worker join token.
     * @param data.rotateManagerToken Rotate the manager join token.
     * @param data.rotateManagerUnlockKey Rotate the manager unlock key.
     * @returns unknown no error
     */
    public swarmUpdate(data: SwarmUpdateData): Promise<DockerResponse<SwarmUpdateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/swarm/update',
            query: {
                version: data.version,
                rotateWorkerToken: data.rotateWorkerToken,
                rotateManagerToken: data.rotateManagerToken,
                rotateManagerUnlockKey: data.rotateManagerUnlockKey
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Get the unlock key
     * @returns unknown no error
     */
    public swarmUnlockkey(): Promise<DockerResponse<SwarmUnlockkeyResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/swarm/unlockkey',
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Unlock a locked manager
     * @param data The data for the request.
     * @param data.body
     * @returns unknown no error
     */
    public swarmUnlock(data: SwarmUnlockData): Promise<DockerResponse<SwarmUnlockResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/swarm/unlock',
            body: data.body,
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class ServiceService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List services
     * @param data The data for the request.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the services list.
     *
     * Available filters:
     *
     * - `id=<service id>`
     * - `label=<service label>`
     * - `mode=["replicated"|"global"]`
     * - `name=<service name>`
     *
     * @param data.status Include service status, with count of running and desired tasks.
     *
     * @returns Service no error
     */
    public serviceList(data: ServiceListData = {}): Promise<DockerResponse<ServiceListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/services',
            query: {
                filters: data.filters,
                status: data.status
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Create a service
     * @param data The data for the request.
     * @param data.body
     * @param data.xRegistryAuth A base64url-encoded auth configuration for pulling from private
     * registries.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @returns ServiceCreateResponse no error
     */
    public serviceCreate(data: ServiceCreateData): Promise<DockerResponse<ServiceCreateResponse2>> {
        return this.client.request({
            method: 'POST',
            url: '/services/create',
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                403: 'network is not eligible for services',
                409: 'name conflicts with an existing service',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Inspect a service
     * @param data The data for the request.
     * @param data.id ID or name of service.
     * @param data.insertDefaults Fill empty fields with default values.
     * @returns Service no error
     */
    public serviceInspect(data: ServiceInspectData): Promise<DockerResponse<ServiceInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/services/{id}',
            path: {
                id: data.id
            },
            query: {
                insertDefaults: data.insertDefaults
            },
            errors: {
                404: 'no such service',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Delete a service
     * @param data The data for the request.
     * @param data.id ID or name of service.
     * @returns unknown no error
     */
    public serviceDelete(data: ServiceDeleteData): Promise<DockerResponse<ServiceDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/services/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such service',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Update a service
     * @param data The data for the request.
     * @param data.id ID or name of service.
     * @param data.body
     * @param data.version The version number of the service object being updated. This is
     * required to avoid conflicting writes.
     * This version number should be the value as currently set on the
     * service *before* the update. You can find the current version by
     * calling `GET /services/{id}`
     *
     * @param data.registryAuthFrom If the `X-Registry-Auth` header is not specified, this parameter
     * indicates where to find registry authorization credentials.
     *
     * @param data.rollback Set to this parameter to `previous` to cause a server-side rollback
     * to the previous service spec. The supplied spec will be ignored in
     * this case.
     *
     * @param data.xRegistryAuth A base64url-encoded auth configuration for pulling from private
     * registries.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     * @returns ServiceUpdateResponse no error
     */
    public serviceUpdate(data: ServiceUpdateData): Promise<DockerResponse<ServiceUpdateResponse2>> {
        return this.client.request({
            method: 'POST',
            url: '/services/{id}/update',
            path: {
                id: data.id
            },
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                version: data.version,
                registryAuthFrom: data.registryAuthFrom,
                rollback: data.rollback
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such service',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Get service logs
     * Get `stdout` and `stderr` logs from a service. See also
     * [`/containers/{id}/logs`](#operation/ContainerLogs).
     *
     * **Note**: This endpoint works only for services with the `local`,
     * `json-file` or `journald` logging drivers.
     *
     * @param data The data for the request.
     * @param data.id ID or name of the service
     * @param data.details Show service context and extra details provided to logs.
     * @param data.follow Keep connection after returning logs.
     * @param data.stdout Return logs from `stdout`
     * @param data.stderr Return logs from `stderr`
     * @param data.since Only return logs since this time, as a UNIX timestamp
     * @param data.timestamps Add timestamps to every log line
     * @param data.tail Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     * @returns binary logs returned as a stream in response body
     */
    public serviceLogs(data: ServiceLogsData): Promise<DockerResponse<ServiceLogsResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/services/{id}/logs',
            path: {
                id: data.id
            },
            query: {
                details: data.details,
                follow: data.follow,
                stdout: data.stdout,
                stderr: data.stderr,
                since: data.since,
                timestamps: data.timestamps,
                tail: data.tail
            },
            errors: {
                404: 'no such service',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class TaskService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List tasks
     * @param data The data for the request.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the tasks list.
     *
     * Available filters:
     *
     * - `desired-state=(running | shutdown | accepted)`
     * - `id=<task id>`
     * - `label=key` or `label="key=value"`
     * - `name=<task name>`
     * - `node=<node id or name>`
     * - `service=<service name>`
     *
     * @returns Task no error
     */
    public taskList(data: TaskListData = {}): Promise<DockerResponse<TaskListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/tasks',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Inspect a task
     * @param data The data for the request.
     * @param data.id ID of the task
     * @returns Task no error
     */
    public taskInspect(data: TaskInspectData): Promise<DockerResponse<TaskInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/tasks/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'no such task',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Get task logs
     * Get `stdout` and `stderr` logs from a task.
     * See also [`/containers/{id}/logs`](#operation/ContainerLogs).
     *
     * **Note**: This endpoint works only for services with the `local`,
     * `json-file` or `journald` logging drivers.
     *
     * @param data The data for the request.
     * @param data.id ID of the task
     * @param data.details Show task context and extra details provided to logs.
     * @param data.follow Keep connection after returning logs.
     * @param data.stdout Return logs from `stdout`
     * @param data.stderr Return logs from `stderr`
     * @param data.since Only return logs since this time, as a UNIX timestamp
     * @param data.timestamps Add timestamps to every log line
     * @param data.tail Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     * @returns binary logs returned as a stream in response body
     */
    public taskLogs(data: TaskLogsData): Promise<DockerResponse<TaskLogsResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/tasks/{id}/logs',
            path: {
                id: data.id
            },
            query: {
                details: data.details,
                follow: data.follow,
                stdout: data.stdout,
                stderr: data.stderr,
                since: data.since,
                timestamps: data.timestamps,
                tail: data.tail
            },
            errors: {
                404: 'no such task',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class SecretService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List secrets
     * @param data The data for the request.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the secrets list.
     *
     * Available filters:
     *
     * - `id=<secret id>`
     * - `label=<key> or label=<key>=value`
     * - `name=<secret name>`
     * - `names=<secret name>`
     *
     * @returns Secret no error
     */
    public secretList(data: SecretListData = {}): Promise<DockerResponse<SecretListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/secrets',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Create a secret
     * @param data The data for the request.
     * @param data.body
     * @returns IdResponse no error
     */
    public secretCreate(data: SecretCreateData = {}): Promise<DockerResponse<SecretCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/secrets/create',
            body: data.body,
            errors: {
                409: 'name conflicts with an existing object',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Inspect a secret
     * @param data The data for the request.
     * @param data.id ID of the secret
     * @returns Secret no error
     */
    public secretInspect(data: SecretInspectData): Promise<DockerResponse<SecretInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/secrets/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'secret not found',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Delete a secret
     * @param data The data for the request.
     * @param data.id ID of the secret
     * @returns void no error
     */
    public secretDelete(data: SecretDeleteData): Promise<DockerResponse<SecretDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/secrets/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'secret not found',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Update a Secret
     * @param data The data for the request.
     * @param data.id The ID or name of the secret
     * @param data.version The version number of the secret object being updated. This is
     * required to avoid conflicting writes.
     *
     * @param data.body The spec of the secret to update. Currently, only the Labels field
     * can be updated. All other fields must remain unchanged from the
     * [SecretInspect endpoint](#operation/SecretInspect) response values.
     *
     * @returns unknown no error
     */
    public secretUpdate(data: SecretUpdateData): Promise<DockerResponse<SecretUpdateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/secrets/{id}/update',
            path: {
                id: data.id
            },
            query: {
                version: data.version
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such secret',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class ConfigService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * List configs
     * @param data The data for the request.
     * @param data.filters A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the configs list.
     *
     * Available filters:
     *
     * - `id=<config id>`
     * - `label=<key> or label=<key>=value`
     * - `name=<config name>`
     * - `names=<config name>`
     *
     * @returns Config no error
     */
    public configList(data: ConfigListData = {}): Promise<DockerResponse<ConfigListResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/configs',
            query: {
                filters: data.filters
            },
            errors: {
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Create a config
     * @param data The data for the request.
     * @param data.body
     * @returns IdResponse no error
     */
    public configCreate(data: ConfigCreateData = {}): Promise<DockerResponse<ConfigCreateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/configs/create',
            body: data.body,
            errors: {
                409: 'name conflicts with an existing object',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Inspect a config
     * @param data The data for the request.
     * @param data.id ID of the config
     * @returns Config no error
     */
    public configInspect(data: ConfigInspectData): Promise<DockerResponse<ConfigInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/configs/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'config not found',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Delete a config
     * @param data The data for the request.
     * @param data.id ID of the config
     * @returns void no error
     */
    public configDelete(data: ConfigDeleteData): Promise<DockerResponse<ConfigDeleteResponse>> {
        return this.client.request({
            method: 'DELETE',
            url: '/configs/{id}',
            path: {
                id: data.id
            },
            errors: {
                404: 'config not found',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

    /**
     * Update a Config
     * @param data The data for the request.
     * @param data.id The ID or name of the config
     * @param data.version The version number of the config object being updated. This is
     * required to avoid conflicting writes.
     *
     * @param data.body The spec of the config to update. Currently, only the Labels field
     * can be updated. All other fields must remain unchanged from the
     * [ConfigInspect endpoint](#operation/ConfigInspect) response values.
     *
     * @returns unknown no error
     */
    public configUpdate(data: ConfigUpdateData): Promise<DockerResponse<ConfigUpdateResponse>> {
        return this.client.request({
            method: 'POST',
            url: '/configs/{id}/update',
            path: {
                id: data.id
            },
            query: {
                version: data.version
            },
            body: data.body,
            errors: {
                400: 'bad parameter',
                404: 'no such config',
                500: 'server error',
                503: 'node is not part of a swarm'
            }
        });
    }

}

export class DistributionService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * Get image information from the registry
     * Return image digest and platform information by contacting the registry.
     *
     * @param data The data for the request.
     * @param data.name Image name or id
     * @returns DistributionInspect descriptor and platform information
     */
    public distributionInspect(data: DistributionInspectData): Promise<DockerResponse<DistributionInspectResponse>> {
        return this.client.request({
            method: 'GET',
            url: '/distribution/{name}/json',
            path: {
                name: data.name
            },
            errors: {
                401: 'Failed authentication or no image found',
                500: 'Server error'
            }
        });
    }

}

export class SessionService {
    private readonly client: DockerClient;

    constructor(client: DockerClient) { this.client = client; }

    /**
     * Initialize interactive session
     * Start a new interactive session with a server. Session allows server to
     * call back to the client for advanced capabilities.
     *
     * ### Hijacking
     *
     * This endpoint hijacks the HTTP connection to HTTP2 transport that allows
     * the client to expose gPRC services on that connection.
     *
     * For example, the client sends this request to upgrade the connection:
     *
     * ```
     * POST /session HTTP/1.1
     * Upgrade: h2c
     * Connection: Upgrade
     * ```
     *
     * The Docker daemon responds with a `101 UPGRADED` response follow with
     * the raw stream:
     *
     * ```
     * HTTP/1.1 101 UPGRADED
     * Connection: Upgrade
     * Upgrade: h2c
     * ```
     *
     */
    public session(): Promise<DockerResponse<void>> {
        return this.client.request({
            method: 'POST',
            url: '/session',
            errors: {
                400: 'bad parameter',
                500: 'server error'
            }
        });
    }

}
