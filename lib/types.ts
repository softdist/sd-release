/**
 * Signals
 */
export type Signal =
    | "SIGABRT"
    | "SIGALRM"
    | "SIGBREAK"
    | "SIGBUS"
    | "SIGCHLD"
    | "SIGCONT"
    | "SIGEMT"
    | "SIGFPE"
    | "SIGHUP"
    | "SIGILL"
    | "SIGINFO"
    | "SIGINT"
    | "SIGIO"
    | "SIGKILL"
    | "SIGPIPE"
    | "SIGPROF"
    | "SIGPWR"
    | "SIGQUIT"
    | "SIGSEGV"
    | "SIGSTKFLT"
    | "SIGSTOP"
    | "SIGSYS"
    | "SIGTERM"
    | "SIGTRAP"
    | "SIGTSTP"
    | "SIGTTIN"
    | "SIGTTOU"
    | "SIGURG"
    | "SIGUSR1"
    | "SIGUSR2"
    | "SIGVTALRM"
    | "SIGWINCH"
    | "SIGXCPU"
    | "SIGXFSZ";

export interface Output {
    stdout: Uint8Array;
    stderr: Uint8Array;
    code: number;
    signal?: string;
    success: boolean;

    validate(fn?: (code: number) => boolean, failOnStderr?: true): this;

    text(): string;
    lines(): string[];
    json(): unknown;

    errorText(): string;
    errorLines(): string[];
    errorJson(): unknown;

    toString(): string;
}

/**
 * @category Sub Process
 */
export interface CommandStatus {
    /** If the child process exits with a 0 status code, `success` will be set
     * to `true`, otherwise `false`. */
    success: boolean;
    /** The exit code of the child process. */
    code: number;
    /** The signal associated with the child process. */
    signal: Signal | string | null;
}
/**
 * The interface for handling a child process returned from
 * {@linkcode Deno.Command.spawn}.
 *
 * @category Sub Process
 */
export interface ChildProcess extends AsyncDisposable {
    get stdin(): WritableStream<Uint8Array>;
    get stdout(): ReadableStream<Uint8Array>;
    get stderr(): ReadableStream<Uint8Array>;
    readonly pid: number;
    /** Get the status of the child. */
    readonly status: Promise<CommandStatus>;

    /** Waits for the child to exit completely, returning all its output and
     * status. */
    output(): Promise<Output>;
    /** Kills the process with given {@linkcode Deno.Signal}.
     *
     * Defaults to `SIGTERM` if no signal is provided.
     *
     * @param [signo="SIGTERM"]
     */
    kill(signo?: Signal): void;

    /** Ensure that the status of the child process prevents the Deno process
     * from exiting. */
    ref(): void;
    /** Ensure that the status of the child process does not block the Deno
     * process from exiting. */
    unref(): void;

    [Symbol.asyncDispose](): Promise<void>;
}

export interface CommandOptions {
    /**
     * The working directory of the process.
     *
     * If not specified, the `cwd` of the parent process is used.
     */
    cwd?: string | URL;
    /**
     * Clear environmental variables from parent process.
     *
     * Doesn't guarantee that only `env` variables are present, as the OS may
     * set environmental variables for processes.
     *
     * @default {false}
     */
    clearEnv?: boolean;
    /** Environmental variables to pass to the subprocess. */
    env?: Record<string, string>;
    /**
     * Sets the child process’s user ID. This translates to a setuid call in the
     * child process. Failure in the set uid call will cause the spawn to fail.
     */
    uid?: number;
    /** Similar to `uid`, but sets the group ID of the child process. */
    gid?: number;
    /**
     * An {@linkcode AbortSignal} that allows closing the process using the
     * corresponding {@linkcode AbortController} by sending the process a
     * SIGTERM signal.
     *
     * Not supported in {@linkcode Deno.Command.outputSync}.
     */
    signal?: AbortSignal;

    /** How `stdin` of the spawned process should be handled.
     *
     * Defaults to `"inherit"` for `output` & `outputSync`,
     * and `"inherit"` for `spawn`. */
    stdin?: "piped" | "inherit" | "null";
    /** How `stdout` of the spawned process should be handled.
     *
     * Defaults to `"piped"` for `output` & `outputSync`,
     * and `"inherit"` for `spawn`. */
    stdout?: "piped" | "inherit" | "null";
    /** How `stderr` of the spawned process should be handled.
     *
     * Defaults to `"piped"` for `output` & `outputSync`,
     * and `"inherit"` for `spawn`. */
    stderr?: "piped" | "inherit" | "null";

    /**
     * Log the command that will be executed. Generally used to
     * log to standard output.
     * @param file The executable file that will be invoked.
     * @param args The arguments to pass to the executable.
     * @returns void
     */
    log?: (file: string, args?: string[]) => void;

    /** Skips quoting and escaping of the arguments on windows. This option
     * is ignored on non-windows platforms.
     *
     * @default {false} */
    windowsRawArguments?: boolean;
}


/**
 * Timestamp
 */
export type TimeStampDetails = {
    plain: string;
    base64: string;
};

/**
 * An open port on a container
 */
export type Port = {
    /**
     * Host IP address that the container's port is mapped to
     */
    IP?: string;
    /**
     * Port on the container
     */
    PrivatePort: number;
    /**
     * Port exposed on the host
     */
    PublicPort?: number;
    Type: 'tcp' | 'udp' | 'sctp';
};

/**
 * MountPoint represents a mount point configuration inside the container.
 * This is used for reporting the mountpoints in use by a container.
 *
 */
export type MountPoint = {
    /**
     * The mount type:
     *
     * - `bind` a mount of a file or directory from the host into the container.
     * - `volume` a docker volume with the given `Name`.
     * - `tmpfs` a `tmpfs`.
     * - `npipe` a named pipe from the host into the container.
     * - `cluster` a Swarm cluster volume
     *
     */
    Type?: 'bind' | 'volume' | 'tmpfs' | 'npipe' | 'cluster';
    /**
     * Name is the name reference to the underlying data defined by `Source`
     * e.g., the volume name.
     *
     */
    Name?: string;
    /**
     * Source location of the mount.
     *
     * For volumes, this contains the storage location of the volume (within
     * `/var/lib/docker/volumes/`). For bind-mounts, and `npipe`, this contains
     * the source (host) part of the bind-mount. For `tmpfs` mount points, this
     * field is empty.
     *
     */
    Source?: string;
    /**
     * Destination is the path relative to the container root (`/`) where
     * the `Source` is mounted inside the container.
     *
     */
    Destination?: string;
    /**
     * Driver is the volume driver used to create the volume (if it is a volume).
     *
     */
    Driver?: string;
    /**
     * Mode is a comma separated list of options supplied by the user when
     * creating the bind/volume mount.
     *
     * The default is platform-specific (`"z"` on Linux, empty on Windows).
     *
     */
    Mode?: string;
    /**
     * Whether the mount is mounted writable (read-write).
     *
     */
    RW?: boolean;
    /**
     * Propagation describes how mounts are propagated from the host into the
     * mount point, and vice-versa. Refer to the [Linux kernel documentation](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt)
     * for details. This field is not used on Windows.
     *
     */
    Propagation?: string;
};

/**
 * A device mapping between the host and container
 */
export type DeviceMapping = {
    PathOnHost?: string;
    PathInContainer?: string;
    CgroupPermissions?: string;
};

/**
 * A request for devices to be sent to device drivers
 */
export type DeviceRequest = {
    Driver?: string;
    Count?: number;
    DeviceIDs?: Array<(string)>;
    /**
     * A list of capabilities; an OR list of AND lists of capabilities.
     *
     */
    Capabilities?: Array<Array<(string)>>;
    /**
     * Driver-specific options, specified as a key/value pairs. These options
     * are passed directly to the driver.
     *
     */
    Options?: {
        [key: string]: (string);
    };
};

export type ThrottleDevice = {
    /**
     * Device path
     */
    Path?: string;
    /**
     * Rate
     */
    Rate?: number;
};

export type Mount = {
    /**
     * Container path.
     */
    Target?: string;
    /**
     * Mount source (e.g. a volume name, a host path).
     */
    Source?: string;
    /**
     * The mount type. Available types:
     *
     * - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container.
     * - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.
     * - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
     * - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container.
     * - `cluster` a Swarm cluster volume
     *
     */
    Type?: 'bind' | 'volume' | 'tmpfs' | 'npipe' | 'cluster';
    /**
     * Whether the mount should be read-only.
     */
    ReadOnly?: boolean;
    /**
     * The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.
     */
    Consistency?: string;
    /**
     * Optional configuration for the `bind` type.
     */
    BindOptions?: {
        /**
         * A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.
         */
        Propagation?: 'private' | 'rprivate' | 'shared' | 'rshared' | 'slave' | 'rslave';
        /**
         * Disable recursive bind mount.
         */
        NonRecursive?: boolean;
        /**
         * Create mount point on host if missing
         */
        CreateMountpoint?: boolean;
        /**
         * Make the mount non-recursively read-only, but still leave the mount recursive
         * (unless NonRecursive is set to `true` in conjunction).
         *
         * Addded in v1.44, before that version all read-only mounts were
         * non-recursive by default. To match the previous behaviour this
         * will default to `true` for clients on versions prior to v1.44.
         *
         */
        ReadOnlyNonRecursive?: boolean;
        /**
         * Raise an error if the mount cannot be made recursively read-only.
         */
        ReadOnlyForceRecursive?: boolean;
    };
    /**
     * Optional configuration for the `volume` type.
     */
    VolumeOptions?: {
        /**
         * Populate volume with data from the target.
         */
        NoCopy?: boolean;
        /**
         * User-defined key/value metadata.
         */
        Labels?: {
            [key: string]: (string);
        };
        /**
         * Map of driver specific options
         */
        DriverConfig?: {
            /**
             * Name of the driver to use to create the volume.
             */
            Name?: string;
            /**
             * key/value map of driver specific options.
             */
            Options?: {
                [key: string]: (string);
            };
        };
        /**
         * Source path inside the volume. Must be relative without any back traversals.
         */
        Subpath?: string;
    };
    /**
     * Optional configuration for the `tmpfs` type.
     */
    TmpfsOptions?: {
        /**
         * The size for the tmpfs mount in bytes.
         */
        SizeBytes?: number;
        /**
         * The permission mode for the tmpfs mount in an integer.
         */
        Mode?: number;
    };
};

/**
 * The behavior to apply when the container exits. The default is not to
 * restart.
 *
 * An ever increasing delay (double the previous delay, starting at 100ms) is
 * added before each restart to prevent flooding the server.
 *
 */
export type RestartPolicy = {
    /**
     * - Empty string means not to restart
     * - `no` Do not automatically restart
     * - `always` Always restart
     * - `unless-stopped` Restart always except when the user has manually stopped the container
     * - `on-failure` Restart only when the container exit code is non-zero
     *
     */
    Name?: '' | 'no' | 'always' | 'unless-stopped' | 'on-failure';
    /**
     * If `on-failure` is used, the number of times to retry before giving up.
     *
     */
    MaximumRetryCount?: number;
};

/**
 * A container's resources (cgroups config, ulimits, etc)
 */
export type Resources = {
    /**
     * An integer value representing this container's relative CPU weight
     * versus other containers.
     *
     */
    CpuShares?: number;
    /**
     * Memory limit in bytes.
     */
    Memory?: number;
    /**
     * Path to `cgroups` under which the container's `cgroup` is created. If
     * the path is not absolute, the path is considered to be relative to the
     * `cgroups` path of the init process. Cgroups are created if they do not
     * already exist.
     *
     */
    CgroupParent?: string;
    /**
     * Block IO weight (relative weight).
     */
    BlkioWeight?: number;
    /**
     * Block IO weight (relative device weight) in the form:
     *
     * ```
     * [{"Path": "device_path", "Weight": weight}]
     * ```
     *
     */
    BlkioWeightDevice?: Array<{
        Path?: string;
        Weight?: number;
    }>;
    /**
     * Limit read rate (bytes per second) from a device, in the form:
     *
     * ```
     * [{"Path": "device_path", "Rate": rate}]
     * ```
     *
     */
    BlkioDeviceReadBps?: Array<ThrottleDevice>;
    /**
     * Limit write rate (bytes per second) to a device, in the form:
     *
     * ```
     * [{"Path": "device_path", "Rate": rate}]
     * ```
     *
     */
    BlkioDeviceWriteBps?: Array<ThrottleDevice>;
    /**
     * Limit read rate (IO per second) from a device, in the form:
     *
     * ```
     * [{"Path": "device_path", "Rate": rate}]
     * ```
     *
     */
    BlkioDeviceReadIOps?: Array<ThrottleDevice>;
    /**
     * Limit write rate (IO per second) to a device, in the form:
     *
     * ```
     * [{"Path": "device_path", "Rate": rate}]
     * ```
     *
     */
    BlkioDeviceWriteIOps?: Array<ThrottleDevice>;
    /**
     * The length of a CPU period in microseconds.
     */
    CpuPeriod?: number;
    /**
     * Microseconds of CPU time that the container can get in a CPU period.
     *
     */
    CpuQuota?: number;
    /**
     * The length of a CPU real-time period in microseconds. Set to 0 to
     * allocate no time allocated to real-time tasks.
     *
     */
    CpuRealtimePeriod?: number;
    /**
     * The length of a CPU real-time runtime in microseconds. Set to 0 to
     * allocate no time allocated to real-time tasks.
     *
     */
    CpuRealtimeRuntime?: number;
    /**
     * CPUs in which to allow execution (e.g., `0-3`, `0,1`).
     *
     */
    CpusetCpus?: string;
    /**
     * Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only
     * effective on NUMA systems.
     *
     */
    CpusetMems?: string;
    /**
     * A list of devices to add to the container.
     */
    Devices?: Array<DeviceMapping>;
    /**
     * a list of cgroup rules to apply to the container
     */
    DeviceCgroupRules?: Array<(string)>;
    /**
     * A list of requests for devices to be sent to device drivers.
     *
     */
    DeviceRequests?: Array<DeviceRequest>;
    /**
     * Hard limit for kernel TCP buffer memory (in bytes). Depending on the
     * OCI runtime in use, this option may be ignored. It is no longer supported
     * by the default (runc) runtime.
     *
     * This field is omitted when empty.
     *
     */
    KernelMemoryTCP?: number;
    /**
     * Memory soft limit in bytes.
     */
    MemoryReservation?: number;
    /**
     * Total memory limit (memory + swap). Set as `-1` to enable unlimited
     * swap.
     *
     */
    MemorySwap?: number;
    /**
     * Tune a container's memory swappiness behavior. Accepts an integer
     * between 0 and 100.
     *
     */
    MemorySwappiness?: number;
    /**
     * CPU quota in units of 10<sup>-9</sup> CPUs.
     */
    NanoCpus?: number;
    /**
     * Disable OOM Killer for the container.
     */
    OomKillDisable?: boolean;
    /**
     * Run an init inside the container that forwards signals and reaps
     * processes. This field is omitted if empty, and the default (as
     * configured on the daemon) is used.
     *
     */
    Init?: boolean | null;
    /**
     * Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null`
     * to not change.
     *
     */
    PidsLimit?: number | null;
    /**
     * A list of resource limits to set in the container. For example:
     *
     * ```
     * {"Name": "nofile", "Soft": 1024, "Hard": 2048}
     * ```
     *
     */
    Ulimits?: Array<{
        /**
         * Name of ulimit
         */
        Name?: string;
        /**
         * Soft limit
         */
        Soft?: number;
        /**
         * Hard limit
         */
        Hard?: number;
    }>;
    /**
     * The number of usable CPUs (Windows only).
     *
     * On Windows Server containers, the processor resource controls are
     * mutually exclusive. The order of precedence is `CPUCount` first, then
     * `CPUShares`, and `CPUPercent` last.
     *
     */
    CpuCount?: number;
    /**
     * The usable percentage of the available CPUs (Windows only).
     *
     * On Windows Server containers, the processor resource controls are
     * mutually exclusive. The order of precedence is `CPUCount` first, then
     * `CPUShares`, and `CPUPercent` last.
     *
     */
    CpuPercent?: number;
    /**
     * Maximum IOps for the container system drive (Windows only)
     */
    IOMaximumIOps?: number;
    /**
     * Maximum IO in bytes per second for the container system drive
     * (Windows only).
     *
     */
    IOMaximumBandwidth?: number;
};

/**
 * An object describing a limit on resources which can be requested by a task.
 *
 */
export type Limit = {
    NanoCPUs?: number;
    MemoryBytes?: number;
    /**
     * Limits the maximum number of PIDs in the container. Set `0` for unlimited.
     *
     */
    Pids?: number;
};

/**
 * An object describing the resources which can be advertised by a node and
 * requested by a task.
 *
 */
export type ResourceObject = {
    NanoCPUs?: number;
    MemoryBytes?: number;
    GenericResources?: GenericResources;
};

/**
 * User-defined resources can be either Integer resources (e.g, `SSD=3`) or
 * String resources (e.g, `GPU=UUID1`).
 *
 */
export type GenericResources = Array<{
    NamedResourceSpec?: {
        Kind?: string;
        Value?: string;
    };
    DiscreteResourceSpec?: {
        Kind?: string;
        Value?: number;
    };
}>;

/**
 * A test to perform to check that the container is healthy.
 */
export type HealthConfig = {
    /**
     * The test to perform. Possible values are:
     *
     * - `[]` inherit healthcheck from image or parent image
     * - `["NONE"]` disable healthcheck
     * - `["CMD", args...]` exec arguments directly
     * - `["CMD-SHELL", command]` run command with system's default shell
     *
     */
    Test?: Array<(string)>;
    /**
     * The time to wait between checks in nanoseconds. It should be 0 or at
     * least 1000000 (1 ms). 0 means inherit.
     *
     */
    Interval?: number;
    /**
     * The time to wait before considering the check to have hung. It should
     * be 0 or at least 1000000 (1 ms). 0 means inherit.
     *
     */
    Timeout?: number;
    /**
     * The number of consecutive failures needed to consider a container as
     * unhealthy. 0 means inherit.
     *
     */
    Retries?: number;
    /**
     * Start period for the container to initialize before starting
     * health-retries countdown in nanoseconds. It should be 0 or at least
     * 1000000 (1 ms). 0 means inherit.
     *
     */
    StartPeriod?: number;
    /**
     * The time to wait between checks in nanoseconds during the start period.
     * It should be 0 or at least 1000000 (1 ms). 0 means inherit.
     *
     */
    StartInterval?: number;
};

/**
 * Health stores information about the container's healthcheck results.
 *
 */
export type Health = {
    /**
     * Status is one of `none`, `starting`, `healthy` or `unhealthy`
     *
     * - "none"      Indicates there is no healthcheck
     * - "starting"  Starting indicates that the container is not yet ready
     * - "healthy"   Healthy indicates that the container is running correctly
     * - "unhealthy" Unhealthy indicates that the container has a problem
     *
     */
    Status?: 'none' | 'starting' | 'healthy' | 'unhealthy';
    /**
     * FailingStreak is the number of consecutive failures
     */
    FailingStreak?: number;
    /**
     * Log contains the last few results (oldest first)
     *
     */
    Log?: Array<HealthcheckResult>;
} | null;

/**
 * HealthcheckResult stores information about a single run of a healthcheck probe
 *
 */
export type HealthcheckResult = {
    /**
     * Date and time at which this check started in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    Start?: string;
    /**
     * Date and time at which this check ended in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    End?: string;
    /**
     * ExitCode meanings:
     *
     * - `0` healthy
     * - `1` unhealthy
     * - `2` reserved (considered unhealthy)
     * - other values: error running probe
     *
     */
    ExitCode?: number;
    /**
     * Output from last check
     */
    Output?: string;
} | null;

/**
 * Container configuration that depends on the host we are running on
 */
export type HostConfig = Resources & {
    /**
     * A list of volume bindings for this container. Each volume binding
     * is a string in one of these forms:
     *
     * - `host-src:container-dest[:options]` to bind-mount a host path
     * into the container. Both `host-src`, and `container-dest` must
     * be an _absolute_ path.
     * - `volume-name:container-dest[:options]` to bind-mount a volume
     * managed by a volume driver into the container. `container-dest`
     * must be an _absolute_ path.
     *
     * `options` is an optional, comma-delimited list of:
     *
     * - `nocopy` disables automatic copying of data from the container
     * path to the volume. The `nocopy` flag only applies to named volumes.
     * - `[ro|rw]` mounts a volume read-only or read-write, respectively.
     * If omitted or set to `rw`, volumes are mounted read-write.
     * - `[z|Z]` applies SELinux labels to allow or deny multiple containers
     * to read and write to the same volume.
     * - `z`: a _shared_ content label is applied to the content. This
     * label indicates that multiple containers can share the volume
     * content, for both reading and writing.
     * - `Z`: a _private unshared_ label is applied to the content.
     * This label indicates that only the current container can use
     * a private volume. Labeling systems such as SELinux require
     * proper labels to be placed on volume content that is mounted
     * into a container. Without a label, the security system can
     * prevent a container's processes from using the content. By
     * default, the labels set by the host operating system are not
     * modified.
     * - `[[r]shared|[r]slave|[r]private]` specifies mount
     * [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).
     * This only applies to bind-mounted volumes, not internal volumes
     * or named volumes. Mount propagation requires the source mount
     * point (the location where the source directory is mounted in the
     * host operating system) to have the correct propagation properties.
     * For shared volumes, the source mount point must be set to `shared`.
     * For slave volumes, the mount must be set to either `shared` or
     * `slave`.
     *
     */
    Binds?: Array<(string)>;
    /**
     * Path to a file where the container ID is written
     */
    ContainerIDFile?: string;
    /**
     * The logging configuration for this container
     */
    LogConfig?: {
        Type?: 'json-file' | 'syslog' | 'journald' | 'gelf' | 'fluentd' | 'awslogs' | 'splunk' | 'etwlogs' | 'none';
        Config?: {
            [key: string]: (string);
        };
    };
    /**
     * Network mode to use for this container. Supported standard values
     * are: `bridge`, `host`, `none`, and `container:<name|id>`. Any
     * other value is taken as a custom network's name to which this
     * container should connect to.
     *
     */
    NetworkMode?: string;
    PortBindings?: PortMap;
    RestartPolicy?: RestartPolicy;
    /**
     * Automatically remove the container when the container's process
     * exits. This has no effect if `RestartPolicy` is set.
     *
     */
    AutoRemove?: boolean;
    /**
     * Driver that this container uses to mount volumes.
     */
    VolumeDriver?: string;
    /**
     * A list of volumes to inherit from another container, specified in
     * the form `<container name>[:<ro|rw>]`.
     *
     */
    VolumesFrom?: Array<(string)>;
    /**
     * Specification for mounts to be added to the container.
     *
     */
    Mounts?: Array<Mount>;
    /**
     * Initial console size, as an `[height, width]` array.
     *
     */
    ConsoleSize?: [
        number,
        number
    ] | null;
    /**
     * Arbitrary non-identifying metadata attached to container and
     * provided to the runtime when the container is started.
     *
     */
    Annotations?: {
        [key: string]: (string);
    };
    /**
     * A list of kernel capabilities to add to the container. Conflicts
     * with option 'Capabilities'.
     *
     */
    CapAdd?: Array<(string)>;
    /**
     * A list of kernel capabilities to drop from the container. Conflicts
     * with option 'Capabilities'.
     *
     */
    CapDrop?: Array<(string)>;
    /**
     * cgroup namespace mode for the container. Possible values are:
     *
     * - `"private"`: the container runs in its own private cgroup namespace
     * - `"host"`: use the host system's cgroup namespace
     *
     * If not specified, the daemon default is used, which can either be `"private"`
     * or `"host"`, depending on daemon version, kernel support and configuration.
     *
     */
    CgroupnsMode?: 'private' | 'host';
    /**
     * A list of DNS servers for the container to use.
     */
    Dns?: Array<(string)>;
    /**
     * A list of DNS options.
     */
    DnsOptions?: Array<(string)>;
    /**
     * A list of DNS search domains.
     */
    DnsSearch?: Array<(string)>;
    /**
     * A list of hostnames/IP mappings to add to the container's `/etc/hosts`
     * file. Specified in the form `["hostname:IP"]`.
     *
     */
    ExtraHosts?: Array<(string)>;
    /**
     * A list of additional groups that the container process will run as.
     *
     */
    GroupAdd?: Array<(string)>;
    /**
     * IPC sharing mode for the container. Possible values are:
     *
     * - `"none"`: own private IPC namespace, with /dev/shm not mounted
     * - `"private"`: own private IPC namespace
     * - `"shareable"`: own private IPC namespace, with a possibility to share it with other containers
     * - `"container:<name|id>"`: join another (shareable) container's IPC namespace
     * - `"host"`: use the host system's IPC namespace
     *
     * If not specified, daemon default is used, which can either be `"private"`
     * or `"shareable"`, depending on daemon version and configuration.
     *
     */
    IpcMode?: string;
    /**
     * Cgroup to use for the container.
     */
    Cgroup?: string;
    /**
     * A list of links for the container in the form `container_name:alias`.
     *
     */
    Links?: Array<(string)>;
    /**
     * An integer value containing the score given to the container in
     * order to tune OOM killer preferences.
     *
     */
    OomScoreAdj?: number;
    /**
     * Set the PID (Process) Namespace mode for the container. It can be
     * either:
     *
     * - `"container:<name|id>"`: joins another container's PID namespace
     * - `"host"`: use the host's PID namespace inside the container
     *
     */
    PidMode?: string;
    /**
     * Gives the container full access to the host.
     */
    Privileged?: boolean;
    /**
     * Allocates an ephemeral host port for all of a container's
     * exposed ports.
     *
     * Ports are de-allocated when the container stops and allocated when
     * the container starts. The allocated port might be changed when
     * restarting the container.
     *
     * The port is selected from the ephemeral port range that depends on
     * the kernel. For example, on Linux the range is defined by
     * `/proc/sys/net/ipv4/ip_local_port_range`.
     *
     */
    PublishAllPorts?: boolean;
    /**
     * Mount the container's root filesystem as read only.
     */
    ReadonlyRootfs?: boolean;
    /**
     * A list of string values to customize labels for MLS systems, such
     * as SELinux.
     *
     */
    SecurityOpt?: Array<(string)>;
    /**
     * Storage driver options for this container, in the form `{"size": "120G"}`.
     *
     */
    StorageOpt?: {
        [key: string]: (string);
    };
    /**
     * A map of container directories which should be replaced by tmpfs
     * mounts, and their corresponding mount options. For example:
     *
     * ```
     * { "/run": "rw,noexec,nosuid,size=65536k" }
     * ```
     *
     */
    Tmpfs?: {
        [key: string]: (string);
    };
    /**
     * UTS namespace to use for the container.
     */
    UTSMode?: string;
    /**
     * Sets the usernamespace mode for the container when usernamespace
     * remapping option is enabled.
     *
     */
    UsernsMode?: string;
    /**
     * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.
     *
     */
    ShmSize?: number;
    /**
     * A list of kernel parameters (sysctls) to set in the container.
     * For example:
     *
     * ```
     * {"net.ipv4.ip_forward": "1"}
     * ```
     *
     */
    Sysctls?: {
        [key: string]: (string);
    };
    /**
     * Runtime to use with this container.
     */
    Runtime?: string;
    /**
     * Isolation technology of the container. (Windows only)
     *
     */
    Isolation?: 'default' | 'process' | 'hyperv';
    /**
     * The list of paths to be masked inside the container (this overrides
     * the default set of paths).
     *
     */
    MaskedPaths?: Array<(string)>;
    /**
     * The list of paths to be set as read-only inside the container
     * (this overrides the default set of paths).
     *
     */
    ReadonlyPaths?: Array<(string)>;
};

/**
 * Configuration for a container that is portable between hosts.
 *
 * When used as `ContainerConfig` field in an image, `ContainerConfig` is an
 * optional field containing the configuration of the container that was last
 * committed when creating the image.
 *
 * Previous versions of Docker builder used this field to store build cache,
 * and it is not in active use anymore.
 *
 */
export type ContainerConfig = {
    /**
     * The hostname to use for the container, as a valid RFC 1123 hostname.
     *
     */
    Hostname?: string;
    /**
     * The domain name to use for the container.
     *
     */
    Domainname?: string;
    /**
     * The user that commands are run as inside the container.
     */
    User?: string;
    /**
     * Whether to attach to `stdin`.
     */
    AttachStdin?: boolean;
    /**
     * Whether to attach to `stdout`.
     */
    AttachStdout?: boolean;
    /**
     * Whether to attach to `stderr`.
     */
    AttachStderr?: boolean;
    /**
     * An object mapping ports to an empty object in the form:
     *
     * `{"<port>/<tcp|udp|sctp>": {}}`
     *
     */
    ExposedPorts?: {
        [key: string]: unknown;
    } | null;
    /**
     * Attach standard streams to a TTY, including `stdin` if it is not closed.
     *
     */
    Tty?: boolean;
    /**
     * Open `stdin`
     */
    OpenStdin?: boolean;
    /**
     * Close `stdin` after one attached client disconnects
     */
    StdinOnce?: boolean;
    /**
     * A list of environment variables to set inside the container in the
     * form `["VAR=value", ...]`. A variable without `=` is removed from the
     * environment, rather than to have an empty value.
     *
     */
    Env?: Array<(string)>;
    /**
     * Command to run specified as a string or an array of strings.
     *
     */
    Cmd?: Array<(string)>;
    Healthcheck?: HealthConfig;
    /**
     * Command is already escaped (Windows only)
     */
    ArgsEscaped?: boolean | null;
    /**
     * The name (or reference) of the image to use when creating the container,
     * or which was used when the container was created.
     *
     */
    Image?: string;
    /**
     * An object mapping mount point paths inside the container to empty
     * objects.
     *
     */
    Volumes?: {
        [key: string]: unknown;
    };
    /**
     * The working directory for commands to run in.
     */
    WorkingDir?: string;
    /**
     * The entry point for the container as a string or an array of strings.
     *
     * If the array consists of exactly one empty string (`[""]`) then the
     * entry point is reset to system default (i.e., the entry point used by
     * docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).
     *
     */
    Entrypoint?: Array<(string)>;
    /**
     * Disable networking for the container.
     */
    NetworkDisabled?: boolean | null;
    /**
     * MAC address of the container.
     *
     * Deprecated: this field is deprecated in API v1.44 and up. Use EndpointSettings.MacAddress instead.
     *
     */
    MacAddress?: string | null;
    /**
     * `ONBUILD` metadata that were defined in the image's `Dockerfile`.
     *
     */
    OnBuild?: Array<(string)> | null;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * Signal to stop a container as a string or unsigned integer.
     *
     */
    StopSignal?: string | null;
    /**
     * Timeout to stop a container in seconds.
     */
    StopTimeout?: number | null;
    /**
     * Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
     *
     */
    Shell?: Array<(string)> | null;
};

/**
 * NetworkingConfig represents the container's networking configuration for
 * each of its interfaces.
 * It is used for the networking configs specified in the `docker create`
 * and `docker network connect` commands.
 *
 */
export type NetworkingConfig = {
    /**
     * A mapping of network name to endpoint configuration for that network.
     * The endpoint configuration can be left empty to connect to that
     * network with no particular endpoint configuration.
     *
     */
    EndpointsConfig?: {
        [key: string]: EndpointSettings;
    };
};

/**
 * NetworkSettings exposes the network settings in the API
 */
export type NetworkSettings = {
    /**
     * Name of the default bridge interface when dockerd's --bridge flag is set.
     *
     */
    Bridge?: string;
    /**
     * SandboxID uniquely represents a container's network stack.
     */
    SandboxID?: string;
    /**
     * Indicates if hairpin NAT should be enabled on the virtual interface.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    HairpinMode?: boolean;
    /**
     * IPv6 unicast address using the link-local prefix.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    LinkLocalIPv6Address?: string;
    /**
     * Prefix length of the IPv6 unicast address.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    LinkLocalIPv6PrefixLen?: number;
    Ports?: PortMap;
    /**
     * SandboxKey is the full path of the netns handle
     */
    SandboxKey?: string;
    /**
     * Deprecated: This field is never set and will be removed in a future release.
     */
    SecondaryIPAddresses?: Array<Address> | null;
    /**
     * Deprecated: This field is never set and will be removed in a future release.
     */
    SecondaryIPv6Addresses?: Array<Address> | null;
    /**
     * EndpointID uniquely represents a service endpoint in a Sandbox.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    EndpointID?: string;
    /**
     * Gateway address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    Gateway?: string;
    /**
     * Global IPv6 address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    GlobalIPv6Address?: string;
    /**
     * Mask length of the global IPv6 address.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    GlobalIPv6PrefixLen?: number;
    /**
     * IPv4 address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPAddress?: string;
    /**
     * Mask length of the IPv4 address.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPPrefixLen?: number;
    /**
     * IPv6 gateway address for this network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPv6Gateway?: string;
    /**
     * MAC address for the container on the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    MacAddress?: string;
    /**
     * Information about all networks that the container is connected to.
     *
     */
    Networks?: {
        [key: string]: EndpointSettings;
    };
};

/**
 * Address represents an IPv4 or IPv6 IP address.
 */
export type Address = {
    /**
     * IP address.
     */
    Addr?: string;
    /**
     * Mask length of the IP address.
     */
    PrefixLen?: number;
};

/**
 * PortMap describes the mapping of container ports to host ports, using the
 * container's port-number and protocol as key in the format `<port>/<protocol>`,
 * for example, `80/udp`.
 *
 * If a container's port is mapped for multiple protocols, separate entries
 * are added to the mapping table.
 *
 */
export type PortMap = {
    [key: string]: (Array<PortBinding> | null);
};

/**
 * PortBinding represents a binding between a host IP address and a host
 * port.
 *
 */
export type PortBinding = {
    /**
     * Host IP address that the container's port is mapped to.
     */
    HostIp?: string;
    /**
     * Host port number that the container's port is mapped to.
     */
    HostPort?: string;
};

/**
 * Information about the storage driver used to store the container's and
 * image's filesystem.
 *
 */
export type GraphDriverData = {
    /**
     * Name of the storage driver.
     */
    Name: string;
    /**
     * Low-level storage metadata, provided as key/value pairs.
     *
     * This information is driver-specific, and depends on the storage-driver
     * in use, and should be used for informational purposes only.
     *
     */
    Data: {
        [key: string]: (string);
    };
};

/**
 * Change in the container's filesystem.
 *
 */
export type FilesystemChange = {
    /**
     * Path to file or directory that has changed.
     *
     */
    Path: string;
    Kind: ChangeType;
};

/**
 * Kind of change
 *
 * Can be one of:
 *
 * - `0`: Modified ("C")
 * - `1`: Added ("A")
 * - `2`: Deleted ("D")
 *
 */
export enum ChangeType {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2
}

/**
 * Information about an image in the local image cache.
 *
 */
export type ImageInspect = {
    /**
     * ID is the content-addressable ID of an image.
     *
     * This identifier is a content-addressable digest calculated from the
     * image's configuration (which includes the digests of layers used by
     * the image).
     *
     * Note that this digest differs from the `RepoDigests` below, which
     * holds digests of image manifests that reference the image.
     *
     */
    Id?: string;
    /**
     * List of image names/tags in the local image cache that reference this
     * image.
     *
     * Multiple image tags can refer to the same image, and this list may be
     * empty if no tags reference the image, in which case the image is
     * "untagged", in which case it can still be referenced by its ID.
     *
     */
    RepoTags?: Array<(string)>;
    /**
     * List of content-addressable digests of locally available image manifests
     * that the image is referenced from. Multiple manifests can refer to the
     * same image.
     *
     * These digests are usually only available if the image was either pulled
     * from a registry, or if the image was pushed to a registry, which is when
     * the manifest is generated and its digest calculated.
     *
     */
    RepoDigests?: Array<(string)>;
    /**
     * ID of the parent image.
     *
     * Depending on how the image was created, this field may be empty and
     * is only set for images that were built/created locally. This field
     * is empty if the image was pulled from an image registry.
     *
     */
    Parent?: string;
    /**
     * Optional message that was set when committing or importing the image.
     *
     */
    Comment?: string;
    /**
     * Date and time at which the image was created, formatted in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     * This information is only available if present in the image,
     * and omitted otherwise.
     *
     */
    Created?: string | null;
    /**
     * The ID of the container that was used to create the image.
     *
     * Depending on how the image was created, this field may be empty.
     *
     * **Deprecated**: this field is kept for backward compatibility, but
     * will be removed in API v1.45.
     *
     */
    Container?: string;
    /**
     * **Deprecated**: this field is kept for backward compatibility, but
     * will be removed in API v1.45.
     *
     */
    ContainerConfig?: ContainerConfig;
    /**
     * The version of Docker that was used to build the image.
     *
     * Depending on how the image was created, this field may be empty.
     *
     */
    DockerVersion?: string;
    /**
     * Name of the author that was specified when committing the image, or as
     * specified through MAINTAINER (deprecated) in the Dockerfile.
     *
     */
    Author?: string;
    Config?: ContainerConfig;
    /**
     * Hardware CPU architecture that the image runs on.
     *
     */
    Architecture?: string;
    /**
     * CPU architecture variant (presently ARM-only).
     *
     */
    Variant?: string | null;
    /**
     * Operating System the image is built to run on.
     *
     */
    Os?: string;
    /**
     * Operating System version the image is built to run on (especially
     * for Windows).
     *
     */
    OsVersion?: string | null;
    /**
     * Total size of the image including all layers it is composed of.
     *
     */
    Size?: number;
    /**
     * Total size of the image including all layers it is composed of.
     *
     * Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
     *
     */
    VirtualSize?: number;
    GraphDriver?: GraphDriverData;
    /**
     * Information about the image's RootFS, including the layer IDs.
     *
     */
    RootFS?: {
        Type: string;
        Layers?: Array<(string)>;
    };
    /**
     * Additional metadata of the image in the local cache. This information
     * is local to the daemon, and not part of the image itself.
     *
     */
    Metadata?: {
        /**
         * Date and time at which the image was last tagged in
         * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
         *
         * This information is only available if the image was tagged locally,
         * and omitted otherwise.
         *
         */
        LastTagTime?: string | null;
    };
};

export type ImageSummary = {
    /**
     * ID is the content-addressable ID of an image.
     *
     * This identifier is a content-addressable digest calculated from the
     * image's configuration (which includes the digests of layers used by
     * the image).
     *
     * Note that this digest differs from the `RepoDigests` below, which
     * holds digests of image manifests that reference the image.
     *
     */
    Id: string;
    /**
     * ID of the parent image.
     *
     * Depending on how the image was created, this field may be empty and
     * is only set for images that were built/created locally. This field
     * is empty if the image was pulled from an image registry.
     *
     */
    ParentId: string;
    /**
     * List of image names/tags in the local image cache that reference this
     * image.
     *
     * Multiple image tags can refer to the same image, and this list may be
     * empty if no tags reference the image, in which case the image is
     * "untagged", in which case it can still be referenced by its ID.
     *
     */
    RepoTags: Array<(string)>;
    /**
     * List of content-addressable digests of locally available image manifests
     * that the image is referenced from. Multiple manifests can refer to the
     * same image.
     *
     * These digests are usually only available if the image was either pulled
     * from a registry, or if the image was pushed to a registry, which is when
     * the manifest is generated and its digest calculated.
     *
     */
    RepoDigests: Array<(string)>;
    /**
     * Date and time at which the image was created as a Unix timestamp
     * (number of seconds sinds EPOCH).
     *
     */
    Created: number;
    /**
     * Total size of the image including all layers it is composed of.
     *
     */
    Size: number;
    /**
     * Total size of image layers that are shared between this image and other
     * images.
     *
     * This size is not calculated by default. `-1` indicates that the value
     * has not been set / calculated.
     *
     */
    SharedSize: number;
    /**
     * Total size of the image including all layers it is composed of.
     *
     * Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
     */
    VirtualSize?: number;
    /**
     * User-defined key/value metadata.
     */
    Labels: {
        [key: string]: (string);
    };
    /**
     * Number of containers using this image. Includes both stopped and running
     * containers.
     *
     * This size is not calculated by default, and depends on which API endpoint
     * is used. `-1` indicates that the value has not been set / calculated.
     *
     */
    Containers: number;
};

export type AuthConfig = {
    username?: string;
    password?: string;
    email?: string;
    serveraddress?: string;
};

export type ProcessConfig = {
    privileged?: boolean;
    user?: string;
    tty?: boolean;
    entrypoint?: string;
    arguments?: Array<(string)>;
};

export type Volume = {
    /**
     * Name of the volume.
     */
    Name: string;
    /**
     * Name of the volume driver used by the volume.
     */
    Driver: string;
    /**
     * Mount path of the volume on the host.
     */
    Mountpoint: string;
    /**
     * Date/Time the volume was created.
     */
    CreatedAt?: string;
    /**
     * Low-level details about the volume, provided by the volume driver.
     * Details are returned as a map with key/value pairs:
     * `{"key":"value","key2":"value2"}`.
     *
     * The `Status` field is optional, and is omitted if the volume driver
     * does not support this feature.
     *
     */
    Status?: {
        [key: string]: unknown;
    };
    /**
     * User-defined key/value metadata.
     */
    Labels: {
        [key: string]: (string);
    };
    /**
     * The level at which the volume exists. Either `global` for cluster-wide,
     * or `local` for machine level.
     *
     */
    Scope: 'local' | 'global';
    ClusterVolume?: ClusterVolume;
    /**
     * The driver specific options used when creating the volume.
     *
     */
    Options: {
        [key: string]: (string);
    };
    /**
     * Usage details about the volume. This information is used by the
     * `GET /system/df` endpoint, and omitted in other endpoints.
     *
     */
    UsageData?: {
        /**
         * Amount of disk space used by the volume (in bytes). This information
         * is only available for volumes created with the `"local"` volume
         * driver. For volumes created with other volume drivers, this field
         * is set to `-1` ("not available")
         *
         */
        Size: number;
        /**
         * The number of containers referencing this volume. This field
         * is set to `-1` if the reference-count is not available.
         *
         */
        RefCount: number;
    } | null;
};

/**
 * Volume configuration
 */
export type VolumeCreateOptions = {
    /**
     * The new volume's name. If not specified, Docker generates a name.
     *
     */
    Name?: string;
    /**
     * Name of the volume driver to use.
     */
    Driver?: string;
    /**
     * A mapping of driver options and values. These options are
     * passed directly to the driver and are driver specific.
     *
     */
    DriverOpts?: {
        [key: string]: (string);
    };
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    ClusterVolumeSpec?: ClusterVolumeSpec;
};

/**
 * Volume list response
 */
export type VolumeListResponse = {
    /**
     * List of volumes
     */
    Volumes?: Array<Volume>;
    /**
     * Warnings that occurred when fetching the list of volumes.
     *
     */
    Warnings?: Array<(string)>;
};

export type Network = {
    Name?: string;
    Id?: string;
    Created?: string;
    Scope?: string;
    Driver?: string;
    EnableIPv6?: boolean;
    IPAM?: IPAM;
    Internal?: boolean;
    Attachable?: boolean;
    Ingress?: boolean;
    Containers?: {
        [key: string]: NetworkContainer;
    };
    Options?: {
        [key: string]: (string);
    };
    Labels?: {
        [key: string]: (string);
    };
};

export type IPAM = {
    /**
     * Name of the IPAM driver to use.
     */
    Driver?: string;
    /**
     * List of IPAM configuration options, specified as a map:
     *
     * ```
     * {"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}
     * ```
     *
     */
    Config?: Array<IPAMConfig>;
    /**
     * Driver-specific options, specified as a map.
     */
    Options?: {
        [key: string]: (string);
    };
};

export type IPAMConfig = {
    Subnet?: string;
    IPRange?: string;
    Gateway?: string;
    AuxiliaryAddresses?: {
        [key: string]: (string);
    };
};

export type NetworkContainer = {
    Name?: string;
    EndpointID?: string;
    MacAddress?: string;
    IPv4Address?: string;
    IPv6Address?: string;
};

export type BuildInfo = {
    id?: string;
    stream?: string;
    error?: string;
    errorDetail?: ErrorDetail;
    status?: string;
    progress?: string;
    progressDetail?: ProgressDetail;
    aux?: ImageID;
};

/**
 * BuildCache contains information about a build cache record.
 *
 */
export type BuildCache = {
    /**
     * Unique ID of the build cache record.
     *
     */
    ID?: string;
    /**
     * ID of the parent build cache record.
     *
     * > **Deprecated**: This field is deprecated, and omitted if empty.
     *
     */
    Parent?: string | null;
    /**
     * List of parent build cache record IDs.
     *
     */
    Parents?: Array<(string)> | null;
    /**
     * Cache record type.
     *
     */
    Type?: 'internal' | 'frontend' | 'source.local' | 'source.git.checkout' | 'exec.cachemount' | 'regular';
    /**
     * Description of the build-step that produced the build cache.
     *
     */
    Description?: string;
    /**
     * Indicates if the build cache is in use.
     *
     */
    InUse?: boolean;
    /**
     * Indicates if the build cache is shared.
     *
     */
    Shared?: boolean;
    /**
     * Amount of disk space used by the build cache (in bytes).
     *
     */
    Size?: number;
    /**
     * Date and time at which the build cache was created in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    CreatedAt?: string;
    /**
     * Date and time at which the build cache was last used in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    LastUsedAt?: string | null;
    UsageCount?: number;
};

/**
 * Image ID or Digest
 */
export type ImageID = {
    ID?: string;
};

export type CreateImageInfo = {
    id?: string;
    error?: string;
    errorDetail?: ErrorDetail;
    status?: string;
    progress?: string;
    progressDetail?: ProgressDetail;
};

export type PushImageInfo = {
    error?: string;
    status?: string;
    progress?: string;
    progressDetail?: ProgressDetail;
};

export type ErrorDetail = {
    code?: number;
    message?: string;
};

export type ProgressDetail = {
    current?: number;
    total?: number;
};

/**
 * Represents an error.
 */
export type ErrorResponse = {
    /**
     * The error message.
     */
    message: string;
};

/**
 * Response to an API call that returns just an Id
 */
export type IdResponse = {
    /**
     * The id of the newly created object.
     */
    Id: string;
};

/**
 * Configuration for a network endpoint.
 */
export type EndpointSettings = {
    IPAMConfig?: EndpointIPAMConfig;
    Links?: Array<(string)>;
    /**
     * MAC address for the endpoint on this network. The network driver might ignore this parameter.
     *
     */
    MacAddress?: string;
    Aliases?: Array<(string)>;
    /**
     * Unique ID of the network.
     *
     */
    NetworkID?: string;
    /**
     * Unique ID for the service endpoint in a Sandbox.
     *
     */
    EndpointID?: string;
    /**
     * Gateway address for this network.
     *
     */
    Gateway?: string;
    /**
     * IPv4 address.
     *
     */
    IPAddress?: string;
    /**
     * Mask length of the IPv4 address.
     *
     */
    IPPrefixLen?: number;
    /**
     * IPv6 gateway address.
     *
     */
    IPv6Gateway?: string;
    /**
     * Global IPv6 address.
     *
     */
    GlobalIPv6Address?: string;
    /**
     * Mask length of the global IPv6 address.
     *
     */
    GlobalIPv6PrefixLen?: number;
    /**
     * DriverOpts is a mapping of driver options and values. These options
     * are passed directly to the driver and are driver specific.
     *
     */
    DriverOpts?: {
        [key: string]: (string);
    } | null;
    /**
     * List of all DNS names an endpoint has on a specific network. This
     * list is based on the container name, network aliases, container short
     * ID, and hostname.
     *
     * These DNS names are non-fully qualified but can contain several dots.
     * You can get fully qualified DNS names by appending `.<network-name>`.
     * For instance, if container name is `my.ctr` and the network is named
     * `testnet`, `DNSNames` will contain `my.ctr` and the FQDN will be
     * `my.ctr.testnet`.
     *
     */
    DNSNames?: Array<(string)>;
};

/**
 * EndpointIPAMConfig represents an endpoint's IPAM configuration.
 *
 */
export type EndpointIPAMConfig = {
    IPv4Address?: string;
    IPv6Address?: string;
    LinkLocalIPs?: Array<(string)>;
} | null;

export type PluginMount = {
    Name: string;
    Description: string;
    Settable: Array<(string)>;
    Source: string;
    Destination: string;
    Type: string;
    Options: Array<(string)>;
};

export type PluginDevice = {
    Name: string;
    Description: string;
    Settable: Array<(string)>;
    Path: string;
};

export type PluginEnv = {
    Name: string;
    Description: string;
    Settable: Array<(string)>;
    Value: string;
};

export type PluginInterfaceType = {
    Prefix: string;
    Capability: string;
    Version: string;
};

/**
 * Describes a permission the user has to accept upon installing
 * the plugin.
 *
 */
export type PluginPrivilege = {
    Name?: string;
    Description?: string;
    Value?: Array<(string)>;
};

/**
 * A plugin for the Engine API
 */
export type Plugin = {
    Id?: string;
    Name: string;
    /**
     * True if the plugin is running. False if the plugin is not running, only installed.
     */
    Enabled: boolean;
    /**
     * Settings that can be modified by users.
     */
    Settings: {
        Mounts: Array<PluginMount>;
        Env: Array<(string)>;
        Args: Array<(string)>;
        Devices: Array<PluginDevice>;
    };
    /**
     * plugin remote reference used to push/pull the plugin
     */
    PluginReference?: string;
    /**
     * The config of a plugin.
     */
    Config: {
        /**
         * Docker Version used to create the plugin
         */
        DockerVersion?: string;
        Description: string;
        Documentation: string;
        /**
         * The interface between Docker and the plugin
         */
        Interface: {
            Types: Array<PluginInterfaceType>;
            Socket: string;
            /**
             * Protocol to use for clients connecting to the plugin.
             */
            ProtocolScheme?: '' | 'moby.plugins.http/v1';
        };
        Entrypoint: Array<(string)>;
        WorkDir: string;
        User?: {
            UID?: number;
            GID?: number;
        };
        Network: {
            Type: string;
        };
        Linux: {
            Capabilities: Array<(string)>;
            AllowAllDevices: boolean;
            Devices: Array<PluginDevice>;
        };
        PropagatedMount: string;
        IpcHost: boolean;
        PidHost: boolean;
        Mounts: Array<PluginMount>;
        Env: Array<PluginEnv>;
        Args: {
            Name: string;
            Description: string;
            Settable: Array<(string)>;
            Value: Array<(string)>;
        };
        rootfs?: {
            type?: string;
            diff_ids?: Array<(string)>;
        };
    };
};

/**
 * The version number of the object such as node, service, etc. This is needed
 * to avoid conflicting writes. The client must send the version number along
 * with the modified specification when updating these objects.
 *
 * This approach ensures safe concurrency and determinism in that the change
 * on the object may not be applied if the version number has changed from the
 * last read. In other words, if two update requests specify the same base
 * version, only one of the requests can succeed. As a result, two separate
 * update requests that happen at the same time will not unintentionally
 * overwrite each other.
 *
 */
export type ObjectVersion = {
    Index?: number;
};

export type NodeSpec = {
    /**
     * Name for the node.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * Role of the node.
     */
    Role?: 'worker' | 'manager';
    /**
     * Availability of the node.
     */
    Availability?: 'active' | 'pause' | 'drain';
};

export type Node = {
    ID?: string;
    Version?: ObjectVersion;
    /**
     * Date and time at which the node was added to the swarm in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    CreatedAt?: string;
    /**
     * Date and time at which the node was last updated in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    UpdatedAt?: string;
    Spec?: NodeSpec;
    Description?: NodeDescription;
    Status?: NodeStatus;
    ManagerStatus?: ManagerStatus;
};

/**
 * NodeDescription encapsulates the properties of the Node as reported by the
 * agent.
 *
 */
export type NodeDescription = {
    Hostname?: string;
    Platform?: Platform;
    Resources?: ResourceObject;
    Engine?: EngineDescription;
    TLSInfo?: TLSInfo;
};

/**
 * Platform represents the platform (Arch/OS).
 *
 */
export type Platform = {
    /**
     * Architecture represents the hardware architecture (for example,
     * `x86_64`).
     *
     */
    Architecture?: string;
    /**
     * OS represents the Operating System (for example, `linux` or `windows`).
     *
     */
    OS?: string;
};

/**
 * EngineDescription provides information about an engine.
 */
export type EngineDescription = {
    EngineVersion?: string;
    Labels?: {
        [key: string]: (string);
    };
    Plugins?: Array<{
        Type?: string;
        Name?: string;
    }>;
};

/**
 * Information about the issuer of leaf TLS certificates and the trusted root
 * CA certificate.
 *
 */
export type TLSInfo = {
    /**
     * The root CA certificate(s) that are used to validate leaf TLS
     * certificates.
     *
     */
    TrustRoot?: string;
    /**
     * The base64-url-safe-encoded raw subject bytes of the issuer.
     */
    CertIssuerSubject?: string;
    /**
     * The base64-url-safe-encoded raw public key bytes of the issuer.
     *
     */
    CertIssuerPublicKey?: string;
};

/**
 * NodeStatus represents the status of a node.
 *
 * It provides the current status of the node, as seen by the manager.
 *
 */
export type NodeStatus = {
    State?: NodeState;
    Message?: string;
    /**
     * IP address of the node.
     */
    Addr?: string;
};

/**
 * NodeState represents the state of a node.
 */
export enum NodeState {
    UNKNOWN = 'unknown',
    DOWN = 'down',
    READY = 'ready',
    DISCONNECTED = 'disconnected'
}

/**
 * ManagerStatus represents the status of a manager.
 *
 * It provides the current status of a node's manager component, if the node
 * is a manager.
 *
 */
export type ManagerStatus = {
    Leader?: boolean;
    Reachability?: Reachability;
    /**
     * The IP address and port at which the manager is reachable.
     *
     */
    Addr?: string;
} | null;

/**
 * Reachability represents the reachability of a node.
 */
export enum Reachability {
    UNKNOWN = 'unknown',
    UNREACHABLE = 'unreachable',
    REACHABLE = 'reachable'
}

/**
 * User modifiable swarm configuration.
 */
export type SwarmSpec = {
    /**
     * Name of the swarm.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * Orchestration configuration.
     */
    Orchestration?: {
        /**
         * The number of historic tasks to keep per instance or node. If
         * negative, never remove completed or failed tasks.
         *
         */
        TaskHistoryRetentionLimit?: number;
    } | null;
    /**
     * Raft configuration.
     */
    Raft?: {
        /**
         * The number of log entries between snapshots.
         */
        SnapshotInterval?: number;
        /**
         * The number of snapshots to keep beyond the current snapshot.
         *
         */
        KeepOldSnapshots?: number;
        /**
         * The number of log entries to keep around to sync up slow followers
         * after a snapshot is created.
         *
         */
        LogEntriesForSlowFollowers?: number;
        /**
         * The number of ticks that a follower will wait for a message from
         * the leader before becoming a candidate and starting an election.
         * `ElectionTick` must be greater than `HeartbeatTick`.
         *
         * A tick currently defaults to one second, so these translate
         * directly to seconds currently, but this is NOT guaranteed.
         *
         */
        ElectionTick?: number;
        /**
         * The number of ticks between heartbeats. Every HeartbeatTick ticks,
         * the leader will send a heartbeat to the followers.
         *
         * A tick currently defaults to one second, so these translate
         * directly to seconds currently, but this is NOT guaranteed.
         *
         */
        HeartbeatTick?: number;
    };
    /**
     * Dispatcher configuration.
     */
    Dispatcher?: {
        /**
         * The delay for an agent to send a heartbeat to the dispatcher.
         *
         */
        HeartbeatPeriod?: number;
    } | null;
    /**
     * CA configuration.
     */
    CAConfig?: {
        /**
         * The duration node certificates are issued for.
         */
        NodeCertExpiry?: number;
        /**
         * Configuration for forwarding signing requests to an external
         * certificate authority.
         *
         */
        ExternalCAs?: Array<{
            /**
             * Protocol for communication with the external CA (currently
             * only `cfssl` is supported).
             *
             */
            Protocol?: 'cfssl';
            /**
             * URL where certificate signing requests should be sent.
             *
             */
            URL?: string;
            /**
             * An object with key/value pairs that are interpreted as
             * protocol-specific options for the external CA driver.
             *
             */
            Options?: {
                [key: string]: (string);
            };
            /**
             * The root CA certificate (in PEM format) this external CA uses
             * to issue TLS certificates (assumed to be to the current swarm
             * root CA certificate if not provided).
             *
             */
            CACert?: string;
        }>;
        /**
         * The desired signing CA certificate for all swarm node TLS leaf
         * certificates, in PEM format.
         *
         */
        SigningCACert?: string;
        /**
         * The desired signing CA key for all swarm node TLS leaf certificates,
         * in PEM format.
         *
         */
        SigningCAKey?: string;
        /**
         * An integer whose purpose is to force swarm to generate a new
         * signing CA certificate and key, if none have been specified in
         * `SigningCACert` and `SigningCAKey`
         *
         */
        ForceRotate?: number;
    } | null;
    /**
     * Parameters related to encryption-at-rest.
     */
    EncryptionConfig?: {
        /**
         * If set, generate a key and use it to lock data stored on the
         * managers.
         *
         */
        AutoLockManagers?: boolean;
    };
    /**
     * Defaults for creating tasks in this cluster.
     */
    TaskDefaults?: {
        /**
         * The log driver to use for tasks created in the orchestrator if
         * unspecified by a service.
         *
         * Updating this value only affects new tasks. Existing tasks continue
         * to use their previously configured log driver until recreated.
         *
         */
        LogDriver?: {
            /**
             * The log driver to use as a default for new tasks.
             *
             */
            Name?: string;
            /**
             * Driver-specific options for the selectd log driver, specified
             * as key/value pairs.
             *
             */
            Options?: {
                [key: string]: (string);
            };
        };
    };
};

/**
 * ClusterInfo represents information about the swarm as is returned by the
 * "/info" endpoint. Join-tokens are not included.
 *
 */
export type ClusterInfo = {
    /**
     * The ID of the swarm.
     */
    ID?: string;
    Version?: ObjectVersion;
    /**
     * Date and time at which the swarm was initialised in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    CreatedAt?: string;
    /**
     * Date and time at which the swarm was last updated in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    UpdatedAt?: string;
    Spec?: SwarmSpec;
    TLSInfo?: TLSInfo;
    /**
     * Whether there is currently a root CA rotation in progress for the swarm
     *
     */
    RootRotationInProgress?: boolean;
    /**
     * DataPathPort specifies the data path port number for data traffic.
     * Acceptable port range is 1024 to 49151.
     * If no port is set or is set to 0, the default port (4789) is used.
     *
     */
    DataPathPort?: number;
    /**
     * Default Address Pool specifies default subnet pools for global scope
     * networks.
     *
     */
    DefaultAddrPool?: Array<(string)>;
    /**
     * SubnetSize specifies the subnet size of the networks created from the
     * default subnet pool.
     *
     */
    SubnetSize?: number;
} | null;

/**
 * JoinTokens contains the tokens workers and managers need to join the swarm.
 *
 */
export type JoinTokens = {
    /**
     * The token workers can use to join the swarm.
     *
     */
    Worker?: string;
    /**
     * The token managers can use to join the swarm.
     *
     */
    Manager?: string;
};

export type Swarm = ClusterInfo & {
    JoinTokens?: JoinTokens;
};

/**
 * User modifiable task configuration.
 */
export type TaskSpec = {
    /**
     * Plugin spec for the service.  *(Experimental release only.)*
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    PluginSpec?: {
        /**
         * The name or 'alias' to use for the plugin.
         */
        Name?: string;
        /**
         * The plugin image reference to use.
         */
        Remote?: string;
        /**
         * Disable the plugin once scheduled.
         */
        Disabled?: boolean;
        PluginPrivilege?: Array<PluginPrivilege>;
    };
    /**
     * Container spec for the service.
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    ContainerSpec?: {
        /**
         * The image name to use for the container
         */
        Image?: string;
        /**
         * User-defined key/value data.
         */
        Labels?: {
            [key: string]: (string);
        };
        /**
         * The command to be run in the image.
         */
        Command?: Array<(string)>;
        /**
         * Arguments to the command.
         */
        Args?: Array<(string)>;
        /**
         * The hostname to use for the container, as a valid
         * [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname.
         *
         */
        Hostname?: string;
        /**
         * A list of environment variables in the form `VAR=value`.
         *
         */
        Env?: Array<(string)>;
        /**
         * The working directory for commands to run in.
         */
        Dir?: string;
        /**
         * The user inside the container.
         */
        User?: string;
        /**
         * A list of additional groups that the container process will run as.
         *
         */
        Groups?: Array<(string)>;
        /**
         * Security options for the container
         */
        Privileges?: {
            /**
             * CredentialSpec for managed service account (Windows only)
             */
            CredentialSpec?: {
                /**
                 * Load credential spec from a Swarm Config with the given ID.
                 * The specified config must also be present in the Configs
                 * field with the Runtime property set.
                 *
                 * <p><br /></p>
                 *
                 *
                 * > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                 * > and `CredentialSpec.Config` are mutually exclusive.
                 *
                 */
                Config?: string;
                /**
                 * Load credential spec from this file. The file is read by
                 * the daemon, and must be present in the `CredentialSpecs`
                 * subdirectory in the docker data directory, which defaults
                 * to `C:\ProgramData\Docker\` on Windows.
                 *
                 * For example, specifying `spec.json` loads
                 * `C:\ProgramData\Docker\CredentialSpecs\spec.json`.
                 *
                 * <p><br /></p>
                 *
                 * > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                 * > and `CredentialSpec.Config` are mutually exclusive.
                 *
                 */
                File?: string;
                /**
                 * Load credential spec from this value in the Windows
                 * registry. The specified registry value must be located in:
                 *
                 * `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Containers\CredentialSpecs`
                 *
                 * <p><br /></p>
                 *
                 *
                 * > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                 * > and `CredentialSpec.Config` are mutually exclusive.
                 *
                 */
                Registry?: string;
            };
            /**
             * SELinux labels of the container
             */
            SELinuxContext?: {
                /**
                 * Disable SELinux
                 */
                Disable?: boolean;
                /**
                 * SELinux user label
                 */
                User?: string;
                /**
                 * SELinux role label
                 */
                Role?: string;
                /**
                 * SELinux type label
                 */
                Type?: string;
                /**
                 * SELinux level label
                 */
                Level?: string;
            };
            /**
             * Options for configuring seccomp on the container
             */
            Seccomp?: {
                Mode?: 'default' | 'unconfined' | 'custom';
                /**
                 * The custom seccomp profile as a json object
                 */
                Profile?: string;
            };
            /**
             * Options for configuring AppArmor on the container
             */
            AppArmor?: {
                Mode?: 'default' | 'disabled';
            };
            /**
             * Configuration of the no_new_privs bit in the container
             */
            NoNewPrivileges?: boolean;
        };
        /**
         * Whether a pseudo-TTY should be allocated.
         */
        TTY?: boolean;
        /**
         * Open `stdin`
         */
        OpenStdin?: boolean;
        /**
         * Mount the container's root filesystem as read only.
         */
        ReadOnly?: boolean;
        /**
         * Specification for mounts to be added to containers created as part
         * of the service.
         *
         */
        Mounts?: Array<Mount>;
        /**
         * Signal to stop the container.
         */
        StopSignal?: string;
        /**
         * Amount of time to wait for the container to terminate before
         * forcefully killing it.
         *
         */
        StopGracePeriod?: number;
        HealthCheck?: HealthConfig;
        /**
         * A list of hostname/IP mappings to add to the container's `hosts`
         * file. The format of extra hosts is specified in the
         * [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)
         * man page:
         *
         * IP_address canonical_hostname [aliases...]
         *
         */
        Hosts?: Array<(string)>;
        /**
         * Specification for DNS related configurations in resolver configuration
         * file (`resolv.conf`).
         *
         */
        DNSConfig?: {
            /**
             * The IP addresses of the name servers.
             */
            Nameservers?: Array<(string)>;
            /**
             * A search list for host-name lookup.
             */
            Search?: Array<(string)>;
            /**
             * A list of internal resolver variables to be modified (e.g.,
             * `debug`, `ndots:3`, etc.).
             *
             */
            Options?: Array<(string)>;
        };
        /**
         * Secrets contains references to zero or more secrets that will be
         * exposed to the service.
         *
         */
        Secrets?: Array<{
            /**
             * File represents a specific target that is backed by a file.
             *
             */
            File?: {
                /**
                 * Name represents the final filename in the filesystem.
                 *
                 */
                Name?: string;
                /**
                 * UID represents the file UID.
                 */
                UID?: string;
                /**
                 * GID represents the file GID.
                 */
                GID?: string;
                /**
                 * Mode represents the FileMode of the file.
                 */
                Mode?: number;
            };
            /**
             * SecretID represents the ID of the specific secret that we're
             * referencing.
             *
             */
            SecretID?: string;
            /**
             * SecretName is the name of the secret that this references,
             * but this is just provided for lookup/display purposes. The
             * secret in the reference will be identified by its ID.
             *
             */
            SecretName?: string;
        }>;
        /**
         * Configs contains references to zero or more configs that will be
         * exposed to the service.
         *
         */
        Configs?: Array<{
            /**
             * File represents a specific target that is backed by a file.
             *
             * <p><br /><p>
             *
             * > **Note**: `Configs.File` and `Configs.Runtime` are mutually exclusive
             *
             */
            File?: {
                /**
                 * Name represents the final filename in the filesystem.
                 *
                 */
                Name?: string;
                /**
                 * UID represents the file UID.
                 */
                UID?: string;
                /**
                 * GID represents the file GID.
                 */
                GID?: string;
                /**
                 * Mode represents the FileMode of the file.
                 */
                Mode?: number;
            };
            /**
             * Runtime represents a target that is not mounted into the
             * container but is used by the task
             *
             * <p><br /><p>
             *
             * > **Note**: `Configs.File` and `Configs.Runtime` are mutually
             * > exclusive
             *
             */
            Runtime?: unknown;
            /**
             * ConfigID represents the ID of the specific config that we're
             * referencing.
             *
             */
            ConfigID?: string;
            /**
             * ConfigName is the name of the config that this references,
             * but this is just provided for lookup/display purposes. The
             * config in the reference will be identified by its ID.
             *
             */
            ConfigName?: string;
        }>;
        /**
         * Isolation technology of the containers running the service.
         * (Windows only)
         *
         */
        Isolation?: 'default' | 'process' | 'hyperv';
        /**
         * Run an init inside the container that forwards signals and reaps
         * processes. This field is omitted if empty, and the default (as
         * configured on the daemon) is used.
         *
         */
        Init?: boolean | null;
        /**
         * Set kernel namedspaced parameters (sysctls) in the container.
         * The Sysctls option on services accepts the same sysctls as the
         * are supported on containers. Note that while the same sysctls are
         * supported, no guarantees or checks are made about their
         * suitability for a clustered environment, and it's up to the user
         * to determine whether a given sysctl will work properly in a
         * Service.
         *
         */
        Sysctls?: {
            [key: string]: (string);
        };
        /**
         * A list of kernel capabilities to add to the default set
         * for the container.
         *
         */
        CapabilityAdd?: Array<(string)>;
        /**
         * A list of kernel capabilities to drop from the default set
         * for the container.
         *
         */
        CapabilityDrop?: Array<(string)>;
        /**
         * A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
         *
         */
        Ulimits?: Array<{
            /**
             * Name of ulimit
             */
            Name?: string;
            /**
             * Soft limit
             */
            Soft?: number;
            /**
             * Hard limit
             */
            Hard?: number;
        }>;
    };
    /**
     * Read-only spec type for non-swarm containers attached to swarm overlay
     * networks.
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    NetworkAttachmentSpec?: {
        /**
         * ID of the container represented by this task
         */
        ContainerID?: string;
    };
    /**
     * Resource requirements which apply to each individual container created
     * as part of the service.
     *
     */
    Resources?: {
        /**
         * Define resources limits.
         */
        Limits?: Limit;
        /**
         * Define resources reservation.
         */
        Reservations?: ResourceObject;
    };
    /**
     * Specification for the restart policy which applies to containers
     * created as part of this service.
     *
     */
    RestartPolicy?: {
        /**
         * Condition for restart.
         */
        Condition?: 'none' | 'on-failure' | 'any';
        /**
         * Delay between restart attempts.
         */
        Delay?: number;
        /**
         * Maximum attempts to restart a given container before giving up
         * (default value is 0, which is ignored).
         *
         */
        MaxAttempts?: number;
        /**
         * Windows is the time window used to evaluate the restart policy
         * (default value is 0, which is unbounded).
         *
         */
        Window?: number;
    };
    Placement?: {
        /**
         * An array of constraint expressions to limit the set of nodes where
         * a task can be scheduled. Constraint expressions can either use a
         * _match_ (`==`) or _exclude_ (`!=`) rule. Multiple constraints find
         * nodes that satisfy every expression (AND match). Constraints can
         * match node or Docker Engine labels as follows:
         *
         * node attribute       | matches                        | example
         * ---------------------|--------------------------------|-----------------------------------------------
         * `node.id`            | Node ID                        | `node.id==2ivku8v2gvtg4`
         * `node.hostname`      | Node hostname                  | `node.hostname!=node-2`
         * `node.role`          | Node role (`manager`/`worker`) | `node.role==manager`
         * `node.platform.os`   | Node operating system          | `node.platform.os==windows`
         * `node.platform.arch` | Node architecture              | `node.platform.arch==x86_64`
         * `node.labels`        | User-defined node labels       | `node.labels.security==high`
         * `engine.labels`      | Docker Engine's labels         | `engine.labels.operatingsystem==ubuntu-14.04`
         *
         * `engine.labels` apply to Docker Engine labels like operating system,
         * drivers, etc. Swarm administrators add `node.labels` for operational
         * purposes by using the [`node update endpoint`](#operation/NodeUpdate).
         *
         */
        Constraints?: Array<(string)>;
        /**
         * Preferences provide a way to make the scheduler aware of factors
         * such as topology. They are provided in order from highest to
         * lowest precedence.
         *
         */
        Preferences?: Array<{
            Spread?: {
                /**
                 * label descriptor, such as `engine.labels.az`.
                 *
                 */
                SpreadDescriptor?: string;
            };
        }>;
        /**
         * Maximum number of replicas for per node (default value is 0, which
         * is unlimited)
         *
         */
        MaxReplicas?: number;
        /**
         * Platforms stores all the platforms that the service's image can
         * run on. This field is used in the platform filter for scheduling.
         * If empty, then the platform filter is off, meaning there are no
         * scheduling restrictions.
         *
         */
        Platforms?: Array<Platform>;
    };
    /**
     * A counter that triggers an update even if no relevant parameters have
     * been changed.
     *
     */
    ForceUpdate?: number;
    /**
     * Runtime is the type of runtime specified for the task executor.
     *
     */
    Runtime?: string;
    /**
     * Specifies which networks the service should attach to.
     */
    Networks?: Array<NetworkAttachmentConfig>;
    /**
     * Specifies the log driver to use for tasks created from this spec. If
     * not present, the default one for the swarm will be used, finally
     * falling back to the engine default if not specified.
     *
     */
    LogDriver?: {
        Name?: string;
        Options?: {
            [key: string]: (string);
        };
    };
};

export enum TaskState {
    NEW = 'new',
    ALLOCATED = 'allocated',
    PENDING = 'pending',
    ASSIGNED = 'assigned',
    ACCEPTED = 'accepted',
    PREPARING = 'preparing',
    READY = 'ready',
    STARTING = 'starting',
    RUNNING = 'running',
    COMPLETE = 'complete',
    SHUTDOWN = 'shutdown',
    FAILED = 'failed',
    REJECTED = 'rejected',
    REMOVE = 'remove',
    ORPHANED = 'orphaned'
}

/**
 * represents the status of a container.
 */
export type ContainerStatus = {
    ContainerID?: string;
    PID?: number;
    ExitCode?: number;
};

/**
 * represents the port status of a task's host ports whose service has published host ports
 */
export type PortStatus = {
    Ports?: Array<EndpointPortConfig>;
};

/**
 * represents the status of a task.
 */
export type TaskStatus = {
    Timestamp?: string;
    State?: TaskState;
    Message?: string;
    Err?: string;
    ContainerStatus?: ContainerStatus;
    PortStatus?: PortStatus;
};

export type Task = {
    /**
     * The ID of the task.
     */
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    /**
     * Name of the task.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    Spec?: TaskSpec;
    /**
     * The ID of the service this task is part of.
     */
    ServiceID?: string;
    Slot?: number;
    /**
     * The ID of the node that this task is on.
     */
    NodeID?: string;
    AssignedGenericResources?: GenericResources;
    Status?: TaskStatus;
    DesiredState?: TaskState;
    /**
     * If the Service this Task belongs to is a job-mode service, contains
     * the JobIteration of the Service this Task was created for. Absent if
     * the Task was created for a Replicated or Global Service.
     *
     */
    JobIteration?: ObjectVersion;
};

/**
 * User modifiable configuration for a service.
 */
export type ServiceSpec = {
    /**
     * Name of the service.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    TaskTemplate?: TaskSpec;
    /**
     * Scheduling mode for the service.
     */
    Mode?: {
        Replicated?: {
            Replicas?: number;
        };
        Global?: unknown;
        /**
         * The mode used for services with a finite number of tasks that run
         * to a completed state.
         *
         */
        ReplicatedJob?: {
            /**
             * The maximum number of replicas to run simultaneously.
             *
             */
            MaxConcurrent?: number;
            /**
             * The total number of replicas desired to reach the Completed
             * state. If unset, will default to the value of `MaxConcurrent`
             *
             */
            TotalCompletions?: number;
        };
        /**
         * The mode used for services which run a task to the completed state
         * on each valid node.
         *
         */
        GlobalJob?: unknown;
    };
    /**
     * Specification for the update strategy of the service.
     */
    UpdateConfig?: {
        /**
         * Maximum number of tasks to be updated in one iteration (0 means
         * unlimited parallelism).
         *
         */
        Parallelism?: number;
        /**
         * Amount of time between updates, in nanoseconds.
         */
        Delay?: number;
        /**
         * Action to take if an updated task fails to run, or stops running
         * during the update.
         *
         */
        FailureAction?: 'continue' | 'pause' | 'rollback';
        /**
         * Amount of time to monitor each updated task for failures, in
         * nanoseconds.
         *
         */
        Monitor?: number;
        /**
         * The fraction of tasks that may fail during an update before the
         * failure action is invoked, specified as a floating point number
         * between 0 and 1.
         *
         */
        MaxFailureRatio?: number;
        /**
         * The order of operations when rolling out an updated task. Either
         * the old task is shut down before the new task is started, or the
         * new task is started before the old task is shut down.
         *
         */
        Order?: 'stop-first' | 'start-first';
    };
    /**
     * Specification for the rollback strategy of the service.
     */
    RollbackConfig?: {
        /**
         * Maximum number of tasks to be rolled back in one iteration (0 means
         * unlimited parallelism).
         *
         */
        Parallelism?: number;
        /**
         * Amount of time between rollback iterations, in nanoseconds.
         *
         */
        Delay?: number;
        /**
         * Action to take if an rolled back task fails to run, or stops
         * running during the rollback.
         *
         */
        FailureAction?: 'continue' | 'pause';
        /**
         * Amount of time to monitor each rolled back task for failures, in
         * nanoseconds.
         *
         */
        Monitor?: number;
        /**
         * The fraction of tasks that may fail during a rollback before the
         * failure action is invoked, specified as a floating point number
         * between 0 and 1.
         *
         */
        MaxFailureRatio?: number;
        /**
         * The order of operations when rolling back a task. Either the old
         * task is shut down before the new task is started, or the new task
         * is started before the old task is shut down.
         *
         */
        Order?: 'stop-first' | 'start-first';
    };
    /**
     * Specifies which networks the service should attach to.
     *
     * Deprecated: This field is deprecated since v1.44. The Networks field in TaskSpec should be used instead.
     *
     */
    Networks?: Array<NetworkAttachmentConfig>;
    EndpointSpec?: EndpointSpec;
};

export type EndpointPortConfig = {
    Name?: string;
    Protocol?: 'tcp' | 'udp' | 'sctp';
    /**
     * The port inside the container.
     */
    TargetPort?: number;
    /**
     * The port on the swarm hosts.
     */
    PublishedPort?: number;
    /**
     * The mode in which port is published.
     *
     * <p><br /></p>
     *
     * - "ingress" makes the target port accessible on every node,
     * regardless of whether there is a task for the service running on
     * that node or not.
     * - "host" bypasses the routing mesh and publish the port directly on
     * the swarm node where that service is running.
     *
     */
    PublishMode?: 'ingress' | 'host';
};

/**
 * Properties that can be configured to access and load balance a service.
 */
export type EndpointSpec = {
    /**
     * The mode of resolution to use for internal load balancing between tasks.
     *
     */
    Mode?: 'vip' | 'dnsrr';
    /**
     * List of exposed ports that this service is accessible on from the
     * outside. Ports can only be provided if `vip` resolution mode is used.
     *
     */
    Ports?: Array<EndpointPortConfig>;
};

export type Service = {
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: ServiceSpec;
    Endpoint?: {
        Spec?: EndpointSpec;
        Ports?: Array<EndpointPortConfig>;
        VirtualIPs?: Array<{
            NetworkID?: string;
            Addr?: string;
        }>;
    };
    /**
     * The status of a service update.
     */
    UpdateStatus?: {
        State?: 'updating' | 'paused' | 'completed';
        StartedAt?: string;
        CompletedAt?: string;
        Message?: string;
    };
    /**
     * The status of the service's tasks. Provided only when requested as
     * part of a ServiceList operation.
     *
     */
    ServiceStatus?: {
        /**
         * The number of tasks for the service currently in the Running state.
         *
         */
        RunningTasks?: number;
        /**
         * The number of tasks for the service desired to be running.
         * For replicated services, this is the replica count from the
         * service spec. For global services, this is computed by taking
         * count of all tasks for the service with a Desired State other
         * than Shutdown.
         *
         */
        DesiredTasks?: number;
        /**
         * The number of tasks for a job that are in the Completed state.
         * This field must be cross-referenced with the service type, as the
         * value of 0 may mean the service is not in a job mode, or it may
         * mean the job-mode service has no tasks yet Completed.
         *
         */
        CompletedTasks?: number;
    };
    /**
     * The status of the service when it is in one of ReplicatedJob or
     * GlobalJob modes. Absent on Replicated and Global mode services. The
     * JobIteration is an ObjectVersion, but unlike the Service's version,
     * does not need to be sent with an update request.
     *
     */
    JobStatus?: {
        /**
         * JobIteration is a value increased each time a Job is executed,
         * successfully or otherwise. "Executed", in this case, means the
         * job as a whole has been started, not that an individual Task has
         * been launched. A job is "Executed" when its ServiceSpec is
         * updated. JobIteration can be used to disambiguate Tasks belonging
         * to different executions of a job.  Though JobIteration will
         * increase with each subsequent execution, it may not necessarily
         * increase by 1, and so JobIteration should not be used to
         *
         */
        JobIteration?: ObjectVersion;
        /**
         * The last time, as observed by the server, that this job was
         * started.
         *
         */
        LastExecution?: string;
    };
};

export type ImageDeleteResponseItem = {
    /**
     * The image ID of an image that was untagged
     */
    Untagged?: string;
    /**
     * The image ID of an image that was deleted
     */
    Deleted?: string;
};

/**
 * contains the information returned to a client on the
 * creation of a new service.
 *
 */
export type ServiceCreateResponse = {
    /**
     * The ID of the created service.
     */
    ID?: string;
    /**
     * Optional warning message.
     *
     * FIXME(thaJeztah): this should have "omitempty" in the generated type.
     *
     */
    Warnings?: Array<(string)> | null;
};

export type ServiceUpdateResponse = {
    /**
     * Optional warning messages
     */
    Warnings?: Array<(string)>;
};

export type ContainerSummary = {
    /**
     * The ID of this container
     */
    Id?: string;
    /**
     * The names that this container has been given
     */
    Names?: Array<(string)>;
    /**
     * The name of the image used when creating this container
     */
    Image?: string;
    /**
     * The ID of the image that this container was created from
     */
    ImageID?: string;
    /**
     * Command to run when starting the container
     */
    Command?: string;
    /**
     * When the container was created
     */
    Created?: number;
    /**
     * The ports exposed by this container
     */
    Ports?: Array<Port>;
    /**
     * The size of files that have been created or changed by this container
     */
    SizeRw?: number;
    /**
     * The total size of all the files in this container
     */
    SizeRootFs?: number;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * The state of this container (e.g. `Exited`)
     */
    State?: string;
    /**
     * Additional human-readable status of this container (e.g. `Exit 0`)
     */
    Status?: string;
    HostConfig?: {
        NetworkMode?: string;
    };
    /**
     * A summary of the container's network settings
     */
    NetworkSettings?: {
        Networks?: {
            [key: string]: EndpointSettings;
        };
    };
    Mounts?: Array<MountPoint>;
};

/**
 * Driver represents a driver (network, logging, secrets).
 */
export type Driver = {
    /**
     * Name of the driver.
     */
    Name: string;
    /**
     * Key/value map of driver-specific options.
     */
    Options?: {
        [key: string]: (string);
    };
};

export type SecretSpec = {
    /**
     * User-defined name of the secret.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
     * data to store as secret.
     *
     * This field is only used to _create_ a secret, and is not returned by
     * other endpoints.
     *
     */
    Data?: string;
    /**
     * Name of the secrets driver used to fetch the secret's value from an
     * external secret store.
     *
     */
    Driver?: Driver;
    /**
     * Templating driver, if applicable
     *
     * Templating controls whether and how to evaluate the config payload as
     * a template. If no driver is set, no templating is used.
     *
     */
    Templating?: Driver;
};

export type Secret = {
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: SecretSpec;
};

export type ConfigSpec = {
    /**
     * User-defined name of the config.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: {
        [key: string]: (string);
    };
    /**
     * Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
     * config data.
     *
     */
    Data?: string;
    /**
     * Templating driver, if applicable
     *
     * Templating controls whether and how to evaluate the config payload as
     * a template. If no driver is set, no templating is used.
     *
     */
    Templating?: Driver;
};

export type Config = {
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: ConfigSpec;
};

/**
 * ContainerState stores container's running state. It's part of ContainerJSONBase
 * and will be returned by the "inspect" command.
 *
 */
export type ContainerState = {
    /**
     * String representation of the container state. Can be one of "created",
     * "running", "paused", "restarting", "removing", "exited", or "dead".
     *
     */
    Status?: 'created' | 'running' | 'paused' | 'restarting' | 'removing' | 'exited' | 'dead';
    /**
     * Whether this container is running.
     *
     * Note that a running container can be _paused_. The `Running` and `Paused`
     * booleans are not mutually exclusive:
     *
     * When pausing a container (on Linux), the freezer cgroup is used to suspend
     * all processes in the container. Freezing the process requires the process to
     * be running. As a result, paused containers are both `Running` _and_ `Paused`.
     *
     * Use the `Status` field instead to determine if a container's state is "running".
     *
     */
    Running?: boolean;
    /**
     * Whether this container is paused.
     */
    Paused?: boolean;
    /**
     * Whether this container is restarting.
     */
    Restarting?: boolean;
    /**
     * Whether a process within this container has been killed because it ran
     * out of memory since the container was last started.
     *
     */
    OOMKilled?: boolean;
    Dead?: boolean;
    /**
     * The process ID of this container
     */
    Pid?: number;
    /**
     * The last exit code of this container
     */
    ExitCode?: number;
    Error?: string;
    /**
     * The time when this container was last started.
     */
    StartedAt?: string;
    /**
     * The time when this container last exited.
     */
    FinishedAt?: string;
    Health?: Health;
} | null;

/**
 * OK response to ContainerCreate operation
 */
export type ContainerCreateResponse = {
    /**
     * The ID of the created container
     */
    Id: string;
    /**
     * Warnings encountered when creating the container
     */
    Warnings: Array<(string)>;
};

/**
 * OK response to ContainerWait operation
 */
export type ContainerWaitResponse = {
    /**
     * Exit code of the container
     */
    StatusCode: number;
    Error?: ContainerWaitExitError;
};

/**
 * container waiting error, if any
 */
export type ContainerWaitExitError = {
    /**
     * Details of an error
     */
    Message?: string;
};

/**
 * Response of Engine API: GET "/version"
 *
 */
export type SystemVersion = {
    Platform?: {
        Name: string;
    };
    /**
     * Information about system components
     *
     */
    Components?: Array<{
        /**
         * Name of the component
         *
         */
        Name: string;
        /**
         * Version of the component
         *
         */
        Version: string;
        /**
         * Key/value pairs of strings with additional information about the
         * component. These values are intended for informational purposes
         * only, and their content is not defined, and not part of the API
         * specification.
         *
         * These messages can be printed by the client as information to the user.
         *
         */
        Details?: unknown;
    }>;
    /**
     * The version of the daemon
     */
    Version?: string;
    /**
     * The default (and highest) API version that is supported by the daemon
     *
     */
    ApiVersion?: string;
    /**
     * The minimum API version that is supported by the daemon
     *
     */
    MinAPIVersion?: string;
    /**
     * The Git commit of the source code that was used to build the daemon
     *
     */
    GitCommit?: string;
    /**
     * The version Go used to compile the daemon, and the version of the Go
     * runtime in use.
     *
     */
    GoVersion?: string;
    /**
     * The operating system that the daemon is running on ("linux" or "windows")
     *
     */
    Os?: string;
    /**
     * The architecture that the daemon is running on
     *
     */
    Arch?: string;
    /**
     * The kernel version (`uname -r`) that the daemon is running on.
     *
     * This field is omitted when empty.
     *
     */
    KernelVersion?: string;
    /**
     * Indicates if the daemon is started with experimental features enabled.
     *
     * This field is omitted when empty / false.
     *
     */
    Experimental?: boolean;
    /**
     * The date and time that the daemon was compiled.
     *
     */
    BuildTime?: string;
};

export type SystemInfo = {
    /**
     * Unique identifier of the daemon.
     *
     * <p><br /></p>
     *
     * > **Note**: The format of the ID itself is not part of the API, and
     * > should not be considered stable.
     *
     */
    ID?: string;
    /**
     * Total number of containers on the host.
     */
    Containers?: number;
    /**
     * Number of containers with status `"running"`.
     *
     */
    ContainersRunning?: number;
    /**
     * Number of containers with status `"paused"`.
     *
     */
    ContainersPaused?: number;
    /**
     * Number of containers with status `"stopped"`.
     *
     */
    ContainersStopped?: number;
    /**
     * Total number of images on the host.
     *
     * Both _tagged_ and _untagged_ (dangling) images are counted.
     *
     */
    Images?: number;
    /**
     * Name of the storage driver in use.
     */
    Driver?: string;
    /**
     * Information specific to the storage driver, provided as
     * "label" / "value" pairs.
     *
     * This information is provided by the storage driver, and formatted
     * in a way consistent with the output of `docker info` on the command
     * line.
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including the
     * > formatting of values and labels, should not be considered stable,
     * > and may change without notice.
     *
     */
    DriverStatus?: Array<Array<(string)>>;
    /**
     * Root directory of persistent Docker state.
     *
     * Defaults to `/var/lib/docker` on Linux, and `C:\ProgramData\docker`
     * on Windows.
     *
     */
    DockerRootDir?: string;
    Plugins?: PluginsInfo;
    /**
     * Indicates if the host has memory limit support enabled.
     */
    MemoryLimit?: boolean;
    /**
     * Indicates if the host has memory swap limit support enabled.
     */
    SwapLimit?: boolean;
    /**
     * Indicates if the host has kernel memory TCP limit support enabled. This
     * field is omitted if not supported.
     *
     * Kernel memory TCP limits are not supported when using cgroups v2, which
     * does not support the corresponding `memory.kmem.tcp.limit_in_bytes` cgroup.
     *
     */
    KernelMemoryTCP?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) period is supported by
     * the host.
     *
     */
    CpuCfsPeriod?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by
     * the host.
     *
     */
    CpuCfsQuota?: boolean;
    /**
     * Indicates if CPU Shares limiting is supported by the host.
     *
     */
    CPUShares?: boolean;
    /**
     * Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.
     *
     * See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)
     *
     */
    CPUSet?: boolean;
    /**
     * Indicates if the host kernel has PID limit support enabled.
     */
    PidsLimit?: boolean;
    /**
     * Indicates if OOM killer disable is supported on the host.
     */
    OomKillDisable?: boolean;
    /**
     * Indicates IPv4 forwarding is enabled.
     */
    IPv4Forwarding?: boolean;
    /**
     * Indicates if `bridge-nf-call-iptables` is available on the host.
     */
    BridgeNfIptables?: boolean;
    /**
     * Indicates if `bridge-nf-call-ip6tables` is available on the host.
     */
    BridgeNfIp6tables?: boolean;
    /**
     * Indicates if the daemon is running in debug-mode / with debug-level
     * logging enabled.
     *
     */
    Debug?: boolean;
    /**
     * The total number of file Descriptors in use by the daemon process.
     *
     * This information is only returned if debug-mode is enabled.
     *
     */
    NFd?: number;
    /**
     * The  number of goroutines that currently exist.
     *
     * This information is only returned if debug-mode is enabled.
     *
     */
    NGoroutines?: number;
    /**
     * Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
     * format with nano-seconds.
     *
     */
    SystemTime?: string;
    /**
     * The logging driver to use as a default for new containers.
     *
     */
    LoggingDriver?: string;
    /**
     * The driver to use for managing cgroups.
     *
     */
    CgroupDriver?: 'cgroupfs' | 'systemd' | 'none';
    /**
     * The version of the cgroup.
     *
     */
    CgroupVersion?: '1' | '2';
    /**
     * Number of event listeners subscribed.
     */
    NEventsListener?: number;
    /**
     * Kernel version of the host.
     *
     * On Linux, this information obtained from `uname`. On Windows this
     * information is queried from the <kbd>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\</kbd>
     * registry value, for example _"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)"_.
     *
     */
    KernelVersion?: string;
    /**
     * Name of the host's operating system, for example: "Ubuntu 16.04.2 LTS"
     * or "Windows Server 2016 Datacenter"
     *
     */
    OperatingSystem?: string;
    /**
     * Version of the host's operating system
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including its
     * > very existence, and the formatting of values, should not be considered
     * > stable, and may change without notice.
     *
     */
    OSVersion?: string;
    /**
     * Generic type of the operating system of the host, as returned by the
     * Go runtime (`GOOS`).
     *
     * Currently returned values are "linux" and "windows". A full list of
     * possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
     *
     */
    OSType?: string;
    /**
     * Hardware architecture of the host, as returned by the Go runtime
     * (`GOARCH`).
     *
     * A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
     *
     */
    Architecture?: string;
    /**
     * The number of logical CPUs usable by the daemon.
     *
     * The number of available CPUs is checked by querying the operating
     * system when the daemon starts. Changes to operating system CPU
     * allocation after the daemon is started are not reflected.
     *
     */
    NCPU?: number;
    /**
     * Total amount of physical memory available on the host, in bytes.
     *
     */
    MemTotal?: number;
    /**
     * Address / URL of the index server that is used for image search,
     * and as a default for user authentication for Docker Hub and Docker Cloud.
     *
     */
    IndexServerAddress?: string;
    RegistryConfig?: RegistryServiceConfig;
    GenericResources?: GenericResources;
    /**
     * HTTP-proxy configured for the daemon. This value is obtained from the
     * [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
     * Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
     * are masked in the API response.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    HttpProxy?: string;
    /**
     * HTTPS-proxy configured for the daemon. This value is obtained from the
     * [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
     * Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
     * are masked in the API response.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    HttpsProxy?: string;
    /**
     * Comma-separated list of domain extensions for which no proxy should be
     * used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)
     * environment variable.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    NoProxy?: string;
    /**
     * Hostname of the host.
     */
    Name?: string;
    /**
     * User-defined labels (key/value metadata) as set on the daemon.
     *
     * <p><br /></p>
     *
     * > **Note**: When part of a Swarm, nodes can both have _daemon_ labels,
     * > set through the daemon configuration, and _node_ labels, set from a
     * > manager node in the Swarm. Node labels are not included in this
     * > field. Node labels can be retrieved using the `/nodes/(id)` endpoint
     * > on a manager node in the Swarm.
     *
     */
    Labels?: Array<(string)>;
    /**
     * Indicates if experimental features are enabled on the daemon.
     *
     */
    ExperimentalBuild?: boolean;
    /**
     * Version string of the daemon.
     *
     */
    ServerVersion?: string;
    /**
     * List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
     * runtimes configured on the daemon. Keys hold the "name" used to
     * reference the runtime.
     *
     * The Docker daemon relies on an OCI compliant runtime (invoked via the
     * `containerd` daemon) as its interface to the Linux kernel namespaces,
     * cgroups, and SELinux.
     *
     * The default runtime is `runc`, and automatically configured. Additional
     * runtimes can be configured by the user and will be listed here.
     *
     */
    Runtimes?: {
        [key: string]: Runtime;
    };
    /**
     * Name of the default OCI runtime that is used when starting containers.
     *
     * The default can be overridden per-container at create time.
     *
     */
    DefaultRuntime?: string;
    Swarm?: SwarmInfo;
    /**
     * Indicates if live restore is enabled.
     *
     * If enabled, containers are kept running when the daemon is shutdown
     * or upon daemon start if running containers are detected.
     *
     */
    LiveRestoreEnabled?: boolean;
    /**
     * Represents the isolation technology to use as a default for containers.
     * The supported values are platform-specific.
     *
     * If no isolation value is specified on daemon start, on Windows client,
     * the default is `hyperv`, and on Windows server, the default is `process`.
     *
     * This option is currently not used on other platforms.
     *
     */
    Isolation?: 'default' | 'hyperv' | 'process';
    /**
     * Name and, optional, path of the `docker-init` binary.
     *
     * If the path is omitted, the daemon searches the host's `$PATH` for the
     * binary and uses the first result.
     *
     */
    InitBinary?: string;
    ContainerdCommit?: Commit;
    RuncCommit?: Commit;
    InitCommit?: Commit;
    /**
     * List of security features that are enabled on the daemon, such as
     * apparmor, seccomp, SELinux, user-namespaces (userns), rootless and
     * no-new-privileges.
     *
     * Additional configuration options for each security feature may
     * be present, and are included as a comma-separated list of key/value
     * pairs.
     *
     */
    SecurityOptions?: Array<(string)>;
    /**
     * Reports a summary of the product license on the daemon.
     *
     * If a commercial license has been applied to the daemon, information
     * such as number of nodes, and expiration are included.
     *
     */
    ProductLicense?: string;
    /**
     * List of custom default address pools for local networks, which can be
     * specified in the daemon.json file or dockerd option.
     *
     * Example: a Base "10.10.0.0/16" with Size 24 will define the set of 256
     * 10.10.[0-255].0/24 address pools.
     *
     */
    DefaultAddressPools?: Array<{
        /**
         * The network address in CIDR format
         */
        Base?: string;
        /**
         * The network pool size
         */
        Size?: number;
    }>;
    /**
     * List of warnings / informational messages about missing features, or
     * issues related to the daemon configuration.
     *
     * These messages can be printed by the client as information to the user.
     *
     */
    Warnings?: Array<(string)>;
    /**
     * List of directories where (Container Device Interface) CDI
     * specifications are located.
     *
     * These specifications define vendor-specific modifications to an OCI
     * runtime specification for a container being created.
     *
     * An empty list indicates that CDI device injection is disabled.
     *
     * Note that since using CDI device injection requires the daemon to have
     * experimental enabled. For non-experimental daemons an empty list will
     * always be returned.
     *
     */
    CDISpecDirs?: Array<(string)>;
};

/**
 * Available plugins per type.
 *
 * <p><br /></p>
 *
 * > **Note**: Only unmanaged (V1) plugins are included in this list.
 * > V1 plugins are "lazily" loaded, and are not returned in this list
 * > if there is no resource using the plugin.
 *
 */
export type PluginsInfo = {
    /**
     * Names of available volume-drivers, and network-driver plugins.
     */
    Volume?: Array<(string)>;
    /**
     * Names of available network-drivers, and network-driver plugins.
     */
    Network?: Array<(string)>;
    /**
     * Names of available authorization plugins.
     */
    Authorization?: Array<(string)>;
    /**
     * Names of available logging-drivers, and logging-driver plugins.
     */
    Log?: Array<(string)>;
};

/**
 * RegistryServiceConfig stores daemon registry services configuration.
 *
 */
export type RegistryServiceConfig = {
    /**
     * List of IP ranges to which nondistributable artifacts can be pushed,
     * using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).
     *
     * Some images (for example, Windows base images) contain artifacts
     * whose distribution is restricted by license. When these images are
     * pushed to a registry, restricted artifacts are not included.
     *
     * This configuration override this behavior, and enables the daemon to
     * push nondistributable artifacts to all registries whose resolved IP
     * address is within the subnet described by the CIDR syntax.
     *
     * This option is useful when pushing images containing
     * nondistributable artifacts to a registry on an air-gapped network so
     * hosts on that network can pull the images without connecting to
     * another server.
     *
     * > **Warning**: Nondistributable artifacts typically have restrictions
     * > on how and where they can be distributed and shared. Only use this
     * > feature to push artifacts to private registries and ensure that you
     * > are in compliance with any terms that cover redistributing
     * > nondistributable artifacts.
     *
     */
    AllowNondistributableArtifactsCIDRs?: Array<(string)>;
    /**
     * List of registry hostnames to which nondistributable artifacts can be
     * pushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.
     *
     * Some images (for example, Windows base images) contain artifacts
     * whose distribution is restricted by license. When these images are
     * pushed to a registry, restricted artifacts are not included.
     *
     * This configuration override this behavior for the specified
     * registries.
     *
     * This option is useful when pushing images containing
     * nondistributable artifacts to a registry on an air-gapped network so
     * hosts on that network can pull the images without connecting to
     * another server.
     *
     * > **Warning**: Nondistributable artifacts typically have restrictions
     * > on how and where they can be distributed and shared. Only use this
     * > feature to push artifacts to private registries and ensure that you
     * > are in compliance with any terms that cover redistributing
     * > nondistributable artifacts.
     *
     */
    AllowNondistributableArtifactsHostnames?: Array<(string)>;
    /**
     * List of IP ranges of insecure registries, using the CIDR syntax
     * ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries
     * accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates
     * from unknown CAs) communication.
     *
     * By default, local registries (`127.0.0.0/8`) are configured as
     * insecure. All other registries are secure. Communicating with an
     * insecure registry is not possible if the daemon assumes that registry
     * is secure.
     *
     * This configuration override this behavior, insecure communication with
     * registries whose resolved IP address is within the subnet described by
     * the CIDR syntax.
     *
     * Registries can also be marked insecure by hostname. Those registries
     * are listed under `IndexConfigs` and have their `Secure` field set to
     * `false`.
     *
     * > **Warning**: Using this option can be useful when running a local
     * > registry, but introduces security vulnerabilities. This option
     * > should therefore ONLY be used for testing purposes. For increased
     * > security, users should add their CA to their system's list of trusted
     * > CAs instead of enabling this option.
     *
     */
    InsecureRegistryCIDRs?: Array<(string)>;
    IndexConfigs?: {
        [key: string]: IndexInfo;
    };
    /**
     * List of registry URLs that act as a mirror for the official
     * (`docker.io`) registry.
     *
     */
    Mirrors?: Array<(string)>;
} | null;

/**
 * IndexInfo contains information about a registry.
 */
export type IndexInfo = {
    /**
     * Name of the registry, such as "docker.io".
     *
     */
    Name?: string;
    /**
     * List of mirrors, expressed as URIs.
     *
     */
    Mirrors?: Array<(string)>;
    /**
     * Indicates if the registry is part of the list of insecure
     * registries.
     *
     * If `false`, the registry is insecure. Insecure registries accept
     * un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from
     * unknown CAs) communication.
     *
     * > **Warning**: Insecure registries can be useful when running a local
     * > registry. However, because its use creates security vulnerabilities
     * > it should ONLY be enabled for testing purposes. For increased
     * > security, users should add their CA to their system's list of
     * > trusted CAs instead of enabling this option.
     *
     */
    Secure?: boolean;
    /**
     * Indicates whether this is an official registry (i.e., Docker Hub / docker.io)
     *
     */
    Official?: boolean;
} | null;

/**
 * Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)
 * runtime.
 *
 * The runtime is invoked by the daemon via the `containerd` daemon. OCI
 * runtimes act as an interface to the Linux kernel namespaces, cgroups,
 * and SELinux.
 *
 */
export type Runtime = {
    /**
     * Name and, optional, path, of the OCI executable binary.
     *
     * If the path is omitted, the daemon searches the host's `$PATH` for the
     * binary and uses the first result.
     *
     */
    path?: string;
    /**
     * List of command-line arguments to pass to the runtime when invoked.
     *
     */
    runtimeArgs?: Array<(string)> | null;
    /**
     * Information specific to the runtime.
     *
     * While this API specification does not define data provided by runtimes,
     * the following well-known properties may be provided by runtimes:
     *
     * `org.opencontainers.runtime-spec.features`: features structure as defined
     * in the [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/main/features.md),
     * in a JSON string representation.
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including the
     * > formatting of values and labels, should not be considered stable,
     * > and may change without notice.
     *
     */
    status?: {
        [key: string]: (string);
    } | null;
};

/**
 * Commit holds the Git-commit (SHA1) that a binary was built from, as
 * reported in the version-string of external tools, such as `containerd`,
 * or `runC`.
 *
 */
export type Commit = {
    /**
     * Actual commit ID of external tool.
     */
    ID?: string;
    /**
     * Commit ID of external tool expected by dockerd as set at build time.
     *
     */
    Expected?: string;
};

/**
 * Represents generic information about swarm.
 *
 */
export type SwarmInfo = {
    /**
     * Unique identifier of for this node in the swarm.
     */
    NodeID?: string;
    /**
     * IP address at which this node can be reached by other nodes in the
     * swarm.
     *
     */
    NodeAddr?: string;
    LocalNodeState?: LocalNodeState;
    ControlAvailable?: boolean;
    Error?: string;
    /**
     * List of ID's and addresses of other managers in the swarm.
     *
     */
    RemoteManagers?: Array<PeerNode> | null;
    /**
     * Total number of nodes in the swarm.
     */
    Nodes?: number | null;
    /**
     * Total number of managers in the swarm.
     */
    Managers?: number | null;
    Cluster?: ClusterInfo;
};

/**
 * Current local status of this node.
 */
export enum LocalNodeState {
    EMPTY_STRING = '',
    INACTIVE = 'inactive',
    PENDING = 'pending',
    ACTIVE = 'active',
    ERROR = 'error',
    LOCKED = 'locked'
}

/**
 * Represents a peer-node in the swarm
 */
export type PeerNode = {
    /**
     * Unique identifier of for this node in the swarm.
     */
    NodeID?: string;
    /**
     * IP address and ports at which this node can be reached.
     *
     */
    Addr?: string;
};

/**
 * Specifies how a service should be attached to a particular network.
 *
 */
export type NetworkAttachmentConfig = {
    /**
     * The target network for attachment. Must be a network name or ID.
     *
     */
    Target?: string;
    /**
     * Discoverable alternate names for the service on this network.
     *
     */
    Aliases?: Array<(string)>;
    /**
     * Driver attachment options for the network target.
     *
     */
    DriverOpts?: {
        [key: string]: (string);
    };
};

/**
 * Actor describes something that generates events, like a container, network,
 * or a volume.
 *
 */
export type EventActor = {
    /**
     * The ID of the object emitting the event
     */
    ID?: string;
    /**
     * Various key/value attributes of the object, depending on its type.
     *
     */
    Attributes?: {
        [key: string]: (string);
    };
};

/**
 * EventMessage represents the information an event contains.
 *
 */
export type EventMessage = {
    /**
     * The type of object emitting the event
     */
    Type?: 'builder' | 'config' | 'container' | 'daemon' | 'image' | 'network' | 'node' | 'plugin' | 'secret' | 'service' | 'volume';
    /**
     * The type of event
     */
    Action?: string;
    Actor?: EventActor;
    /**
     * Scope of the event. Engine events are `local` scope. Cluster (Swarm)
     * events are `swarm` scope.
     *
     */
    scope?: 'local' | 'swarm';
    /**
     * Timestamp of event
     */
    time?: number;
    /**
     * Timestamp of event, with nanosecond accuracy
     */
    timeNano?: number;
};

/**
 * A descriptor struct containing digest, media type, and size, as defined in
 * the [OCI Content Descriptors Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/descriptor.md).
 *
 */
export type OCIDescriptor = {
    /**
     * The media type of the object this schema refers to.
     *
     */
    mediaType?: string;
    /**
     * The digest of the targeted content.
     *
     */
    digest?: string;
    /**
     * The size in bytes of the blob.
     *
     */
    size?: number;
};

/**
 * Describes the platform which the image in the manifest runs on, as defined
 * in the [OCI Image Index Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/image-index.md).
 *
 */
export type OCIPlatform = {
    /**
     * The CPU architecture, for example `amd64` or `ppc64`.
     *
     */
    architecture?: string;
    /**
     * The operating system, for example `linux` or `windows`.
     *
     */
    os?: string;
    /**
     * Optional field specifying the operating system version, for example on
     * Windows `10.0.19041.1165`.
     *
     */
    'os.version'?: string;
    /**
     * Optional field specifying an array of strings, each listing a required
     * OS feature (for example on Windows `win32k`).
     *
     */
    'os.features'?: Array<(string)>;
    /**
     * Optional field specifying a variant of the CPU, for example `v7` to
     * specify ARMv7 when architecture is `arm`.
     *
     */
    variant?: string;
};

/**
 * Describes the result obtained from contacting the registry to retrieve
 * image metadata.
 *
 */
export type DistributionInspect = {
    Descriptor: OCIDescriptor;
    /**
     * An array containing all platforms supported by the image.
     *
     */
    Platforms: Array<OCIPlatform>;
};

/**
 * Options and information specific to, and only present on, Swarm CSI
 * cluster volumes.
 *
 */
export type ClusterVolume = {
    /**
     * The Swarm ID of this volume. Because cluster volumes are Swarm
     * objects, they have an ID, unlike non-cluster volumes. This ID can
     * be used to refer to the Volume instead of the name.
     *
     */
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: ClusterVolumeSpec;
    /**
     * Information about the global status of the volume.
     *
     */
    Info?: {
        /**
         * The capacity of the volume in bytes. A value of 0 indicates that
         * the capacity is unknown.
         *
         */
        CapacityBytes?: number;
        /**
         * A map of strings to strings returned from the storage plugin when
         * the volume is created.
         *
         */
        VolumeContext?: {
            [key: string]: (string);
        };
        /**
         * The ID of the volume as returned by the CSI storage plugin. This
         * is distinct from the volume's ID as provided by Docker. This ID
         * is never used by the user when communicating with Docker to refer
         * to this volume. If the ID is blank, then the Volume has not been
         * successfully created in the plugin yet.
         *
         */
        VolumeID?: string;
        /**
         * The topology this volume is actually accessible from.
         *
         */
        AccessibleTopology?: Array<Topology>;
    };
    /**
     * The status of the volume as it pertains to its publishing and use on
     * specific nodes
     *
     */
    PublishStatus?: Array<{
        /**
         * The ID of the Swarm node the volume is published on.
         *
         */
        NodeID?: string;
        /**
         * The published state of the volume.
         * * `pending-publish` The volume should be published to this node, but the call to the controller plugin to do so has not yet been successfully completed.
         * * `published` The volume is published successfully to the node.
         * * `pending-node-unpublish` The volume should be unpublished from the node, and the manager is awaiting confirmation from the worker that it has done so.
         * * `pending-controller-unpublish` The volume is successfully unpublished from the node, but has not yet been successfully unpublished on the controller.
         *
         */
        State?: 'pending-publish' | 'published' | 'pending-node-unpublish' | 'pending-controller-unpublish';
        /**
         * A map of strings to strings returned by the CSI controller
         * plugin when a volume is published.
         *
         */
        PublishContext?: {
            [key: string]: (string);
        };
    }>;
};

/**
 * Cluster-specific options used to create the volume.
 *
 */
export type ClusterVolumeSpec = {
    /**
     * Group defines the volume group of this volume. Volumes belonging to
     * the same group can be referred to by group name when creating
     * Services.  Referring to a volume by group instructs Swarm to treat
     * volumes in that group interchangeably for the purpose of scheduling.
     * Volumes with an empty string for a group technically all belong to
     * the same, emptystring group.
     *
     */
    Group?: string;
    /**
     * Defines how the volume is used by tasks.
     *
     */
    AccessMode?: {
        /**
         * The set of nodes this volume can be used on at one time.
         * - `single` The volume may only be scheduled to one node at a time.
         * - `multi` the volume may be scheduled to any supported number of nodes at a time.
         *
         */
        Scope?: 'single' | 'multi';
        /**
         * The number and way that different tasks can use this volume
         * at one time.
         * - `none` The volume may only be used by one task at a time.
         * - `readonly` The volume may be used by any number of tasks, but they all must mount the volume as readonly
         * - `onewriter` The volume may be used by any number of tasks, but only one may mount it as read/write.
         * - `all` The volume may have any number of readers and writers.
         *
         */
        Sharing?: 'none' | 'readonly' | 'onewriter' | 'all';
        /**
         * Options for using this volume as a Mount-type volume.
         *
         * Either MountVolume or BlockVolume, but not both, must be
         * present.
         * properties:
         * FsType:
         * type: "string"
         * description: |
         * Specifies the filesystem type for the mount volume.
         * Optional.
         * MountFlags:
         * type: "array"
         * description: |
         * Flags to pass when mounting the volume. Optional.
         * items:
         * type: "string"
         * BlockVolume:
         * type: "object"
         * description: |
         * Options for using this volume as a Block-type volume.
         * Intentionally empty.
         *
         */
        MountVolume?: unknown;
        /**
         * Swarm Secrets that are passed to the CSI storage plugin when
         * operating on this volume.
         *
         */
        Secrets?: Array<{
            /**
             * Key is the name of the key of the key-value pair passed to
             * the plugin.
             *
             */
            Key?: string;
            /**
             * Secret is the swarm Secret object from which to read data.
             * This can be a Secret name or ID. The Secret data is
             * retrieved by swarm and used as the value of the key-value
             * pair passed to the plugin.
             *
             */
            Secret?: string;
        }>;
        /**
         * Requirements for the accessible topology of the volume. These
         * fields are optional. For an in-depth description of what these
         * fields mean, see the CSI specification.
         *
         */
        AccessibilityRequirements?: {
            /**
             * A list of required topologies, at least one of which the
             * volume must be accessible from.
             *
             */
            Requisite?: Array<Topology>;
            /**
             * A list of topologies that the volume should attempt to be
             * provisioned in.
             *
             */
            Preferred?: Array<Topology>;
        };
        /**
         * The desired capacity that the volume should be created with. If
         * empty, the plugin will decide the capacity.
         *
         */
        CapacityRange?: {
            /**
             * The volume must be at least this big. The value of 0
             * indicates an unspecified minimum
             *
             */
            RequiredBytes?: number;
            /**
             * The volume must not be bigger than this. The value of 0
             * indicates an unspecified maximum.
             *
             */
            LimitBytes?: number;
        };
        /**
         * The availability of the volume for use in tasks.
         * - `active` The volume is fully available for scheduling on the cluster
         * - `pause` No new workloads should use the volume, but existing workloads are not stopped.
         * - `drain` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
         *
         */
        Availability?: 'active' | 'pause' | 'drain';
    };
};

/**
 * A map of topological domains to topological segments. For in depth
 * details, see documentation for the Topology object in the CSI
 * specification.
 *
 */
export type Topology = {
    [key: string]: (string);
};

export type ContainerListData = {
    /**
     * Return all containers. By default, only running containers are shown.
     *
     */
    all?: boolean;
    /**
     * Filters to process on the container list, encoded as JSON (a
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
     */
    filters?: string;
    /**
     * Return this number of most recently created containers, including
     * non-running ones.
     *
     */
    limit?: number;
    /**
     * Return the size of container as fields `SizeRw` and `SizeRootFs`.
     *
     */
    size?: boolean;
};

export type ContainerListResponse = Array<ContainerSummary>;

export type ContainerCreateData = {
    /**
     * Container to create
     */
    body: ContainerConfig & {
    HostConfig?: HostConfig;
    NetworkingConfig?: NetworkingConfig;
};
    /**
     * Assign the specified name to the container. Must match
     * `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.
     *
     */
    name?: string;
    /**
     * Platform in the format `os[/arch[/variant]]` used for image lookup.
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
     */
    platform?: string;
};

export type ContainerCreateResponse2 = ContainerCreateResponse;

export type ContainerInspectData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Return the size of container as fields `SizeRw` and `SizeRootFs`
     */
    size?: boolean;
};

export type ContainerInspectResponse = {
    /**
     * The ID of the container
     */
    Id?: string;
    /**
     * The time the container was created
     */
    Created?: string;
    /**
     * The path to the command being run
     */
    Path?: string;
    /**
     * The arguments to the command being run
     */
    Args?: Array<(string)>;
    State?: ContainerState;
    /**
     * The container's image ID
     */
    Image?: string;
    ResolvConfPath?: string;
    HostnamePath?: string;
    HostsPath?: string;
    LogPath?: string;
    Name?: string;
    RestartCount?: number;
    Driver?: string;
    Platform?: string;
    MountLabel?: string;
    ProcessLabel?: string;
    AppArmorProfile?: string;
    /**
     * IDs of exec instances that are running in the container.
     */
    ExecIDs?: Array<(string)> | null;
    HostConfig?: HostConfig;
    GraphDriver?: GraphDriverData;
    /**
     * The size of files that have been created or changed by this
     * container.
     *
     */
    SizeRw?: number;
    /**
     * The total size of all the files in this container.
     */
    SizeRootFs?: number;
    Mounts?: Array<MountPoint>;
    Config?: ContainerConfig;
    NetworkSettings?: NetworkSettings;
};

export type ContainerTopData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * The arguments to pass to `ps`. For example, `aux`
     */
    psArgs?: string;
};

export type ContainerTopResponse = {
    /**
     * The ps column titles
     */
    Titles?: Array<(string)>;
    /**
     * Each process running in the container, where each is process
     * is an array of values corresponding to the titles.
     *
     */
    Processes?: Array<Array<(string)>>;
};

export type ContainerLogsData = {
    /**
     * Keep connection after returning logs.
     */
    follow?: boolean;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Only return logs since this time, as a UNIX timestamp
     */
    since?: number;
    /**
     * Return logs from `stderr`
     */
    stderr?: boolean;
    /**
     * Return logs from `stdout`
     */
    stdout?: boolean;
    /**
     * Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     */
    tail?: string;
    /**
     * Add timestamps to every log line
     */
    timestamps?: boolean;
    /**
     * Only return logs before this time, as a UNIX timestamp
     */
    until?: number;
};

export type ContainerLogsResponse = (Blob | File);

export type ContainerChangesData = {
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerChangesResponse = Array<FilesystemChange>;

export type ContainerExportData = {
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerExportResponse = unknown;

export type ContainerStatsData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Only get a single stat instead of waiting for 2 cycles. Must be used
     * with `stream=false`.
     *
     */
    oneShot?: boolean;
    /**
     * Stream the output. If false, the stats will be output once and then
     * it will disconnect.
     *
     */
    stream?: boolean;
};

export type ContainerStatsResponse = unknown;

export type ContainerResizeData = {
    /**
     * Height of the TTY session in characters
     */
    h?: number;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Width of the TTY session in characters
     */
    w?: number;
};

export type ContainerResizeResponse = unknown;

export type ContainerStartData = {
    /**
     * Override the key sequence for detaching a container. Format is a
     * single character `[a-Z]` or `ctrl-<value>` where `<value>` is one
     * of: `a-z`, `@`, `^`, `[`, `,` or `_`.
     *
     */
    detachKeys?: string;
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerStartResponse = void;

export type ContainerStopData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     */
    signal?: string;
    /**
     * Number of seconds to wait before killing the container
     */
    t?: number;
};

export type ContainerStopResponse = void;

export type ContainerRestartData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     */
    signal?: string;
    /**
     * Number of seconds to wait before killing the container
     */
    t?: number;
};

export type ContainerRestartResponse = void;

export type ContainerKillData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Signal to send to the container as an integer or string (e.g. `SIGINT`).
     *
     */
    signal?: string;
};

export type ContainerKillResponse = void;

export type ContainerUpdateData = {
    /**
     * ID or name of the container
     */
    id: string;
    update: Resources & {
    RestartPolicy?: RestartPolicy;
};
};

export type ContainerUpdateResponse = {
    Warnings?: Array<(string)>;
};

export type ContainerRenameData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * New name for the container
     */
    name: string;
};

export type ContainerRenameResponse = void;

export type ContainerPauseData = {
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerPauseResponse = void;

export type ContainerUnpauseData = {
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerUnpauseResponse = void;

export type ContainerAttachData = {
    /**
     * Override the key sequence for detaching a container.Format is a single
     * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
     * `@`, `^`, `[`, `,` or `_`.
     *
     */
    detachKeys?: string;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Replay previous logs from the container.
     *
     * This is useful for attaching to a container that has started and you
     * want to output everything since the container started.
     *
     * If `stream` is also enabled, once all the previous output has been
     * returned, it will seamlessly transition into streaming current
     * output.
     *
     */
    logs?: boolean;
    /**
     * Attach to `stderr`
     */
    stderr?: boolean;
    /**
     * Attach to `stdin`
     */
    stdin?: boolean;
    /**
     * Attach to `stdout`
     */
    stdout?: boolean;
    /**
     * Stream attached streams from the time the request was made onwards.
     *
     */
    stream?: boolean;
};

export type ContainerAttachResponse = unknown;

export type ContainerAttachWebsocketData = {
    /**
     * Override the key sequence for detaching a container.Format is a single
     * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
     * `@`, `^`, `[`, `,`, or `_`.
     *
     */
    detachKeys?: string;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Return logs
     */
    logs?: boolean;
    /**
     * Attach to `stderr`
     */
    stderr?: boolean;
    /**
     * Attach to `stdin`
     */
    stdin?: boolean;
    /**
     * Attach to `stdout`
     */
    stdout?: boolean;
    /**
     * Return stream
     */
    stream?: boolean;
};

export type ContainerAttachWebsocketResponse = unknown;

export type ContainerWaitData = {
    /**
     * Wait until a container state reaches the given condition.
     *
     * Defaults to `not-running` if omitted or empty.
     *
     */
    condition?: 'not-running' | 'next-exit' | 'removed';
    /**
     * ID or name of the container
     */
    id: string;
};

export type ContainerWaitResponse2 = ContainerWaitResponse;

export type ContainerDeleteData = {
    /**
     * If the container is running, kill it before removing it.
     */
    force?: boolean;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Remove the specified link associated with the container.
     */
    link?: boolean;
    /**
     * Remove anonymous volumes associated with the container.
     */
    v?: boolean;
};

export type ContainerDeleteResponse = void;

export type ContainerArchiveInfoData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Resource in the container’s filesystem to archive.
     */
    path: string;
};

export type ContainerArchiveInfoResponse = string;

export type ContainerArchiveData = {
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * Resource in the container’s filesystem to archive.
     */
    path: string;
};

export type ContainerArchiveResponse = unknown;

export type PutContainerArchiveData = {
    /**
     * If `1`, `true`, then it will copy UID/GID maps to the dest file or
     * dir
     *
     */
    copyUidgid?: string;
    /**
     * ID or name of the container
     */
    id: string;
    /**
     * The input stream must be a tar archive compressed with one of the
     * following algorithms: `identity` (no compression), `gzip`, `bzip2`,
     * or `xz`.
     *
     */
    inputStream: (Blob | File);
    /**
     * If `1`, `true`, or `True` then it will be an error if unpacking the
     * given content would cause an existing directory to be replaced with
     * a non-directory and vice versa.
     *
     */
    noOverwriteDirNonDir?: string;
    /**
     * Path to a directory in the container to extract the archive’s contents into.
     */
    path: string;
};

export type PutContainerArchiveResponse = unknown;

export type ContainerPruneData = {
    /**
     * Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
     *
     */
    filters?: string;
};

export type ContainerPruneResponse = {
    /**
     * Container IDs that were deleted
     */
    ContainersDeleted?: Array<(string)>;
    /**
     * Disk space reclaimed in bytes
     */
    SpaceReclaimed?: number;
};

export type ImageListData = {
    /**
     * Show all images. Only images from a final layer (no children) are shown by default.
     */
    all?: boolean;
    /**
     * Show digest information as a `RepoDigests` field on each image.
     */
    digests?: boolean;
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
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
     */
    filters?: string;
    /**
     * Compute and show shared size as a `SharedSize` field on each image.
     */
    sharedSize?: boolean;
};

export type ImageListResponse = Array<ImageSummary>;

export type ImageBuildData = {
    /**
     * JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.
     *
     * For example, the build arg `FOO=bar` would become `{"FOO":"bar"}` in JSON. This would result in the query parameter `buildargs={"FOO":"bar"}`. Note that `{"FOO":"bar"}` should be URI component encoded.
     *
     * [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)
     *
     */
    buildargs?: string;
    /**
     * JSON array of images used for build cache resolution.
     */
    cachefrom?: string;
    contentType?: 'application/x-tar';
    /**
     * The length of a CPU period in microseconds.
     */
    cpuperiod?: number;
    /**
     * Microseconds of CPU time that the container can get in a CPU period.
     */
    cpuquota?: number;
    /**
     * CPUs in which to allow execution (e.g., `0-3`, `0,1`).
     */
    cpusetcpus?: string;
    /**
     * CPU shares (relative weight).
     */
    cpushares?: number;
    /**
     * Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
     */
    dockerfile?: string;
    /**
     * Extra hosts to add to /etc/hosts
     */
    extrahosts?: string;
    /**
     * Always remove intermediate containers, even upon failure.
     */
    forcerm?: boolean;
    /**
     * A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     */
    inputStream?: (Blob | File);
    /**
     * Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     */
    labels?: string;
    /**
     * Set memory limit for build.
     */
    memory?: number;
    /**
     * Total memory (memory + swap). Set as `-1` to disable swap.
     */
    memswap?: number;
    /**
     * Sets the networking mode for the run commands during build. Supported
     * standard values are: `bridge`, `host`, `none`, and `container:<name|id>`.
     * Any other value is taken as a custom network's name or ID to which this
     * container should connect to.
     *
     */
    networkmode?: string;
    /**
     * Do not use the cache when building the image.
     */
    nocache?: boolean;
    /**
     * BuildKit output configuration
     */
    outputs?: string;
    /**
     * Platform in the format os[/arch[/variant]]
     */
    platform?: string;
    /**
     * Attempt to pull the image even if an older image exists locally.
     */
    pull?: string;
    /**
     * Suppress verbose build output.
     */
    q?: boolean;
    /**
     * A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
     */
    remote?: string;
    /**
     * Remove intermediate containers after a successful build.
     */
    rm?: boolean;
    /**
     * Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     */
    shmsize?: number;
    /**
     * Squash the resulting images layers into a single layer. *(Experimental release only.)*
     */
    squash?: boolean;
    /**
     * A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
     */
    t?: string;
    /**
     * Target build stage
     */
    target?: string;
    /**
     * Version of the builder backend to use.
     *
     * - `1` is the first generation classic (deprecated) builder in the Docker daemon (default)
     * - `2` is [BuildKit](https://github.com/moby/buildkit)
     *
     */
    version?: '1' | '2';
    /**
     * This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.
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
     */
    xRegistryConfig?: string;
};

export type ImageBuildResponse = unknown;

export type BuildPruneData = {
    /**
     * Remove all types of build cache
     */
    all?: boolean;
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
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
     */
    filters?: string;
    /**
     * Amount of disk space in bytes to keep for cache
     */
    keepStorage?: number;
};

export type BuildPruneResponse = {
    CachesDeleted?: Array<(string)>;
    /**
     * Disk space reclaimed in bytes
     */
    SpaceReclaimed?: number;
};

export type ImageCreateData = {
    /**
     * Apply `Dockerfile` instructions to the image that is created,
     * for example: `changes=ENV DEBUG=true`.
     * Note that `ENV DEBUG=true` should be URI component encoded.
     *
     * Supported `Dockerfile` instructions:
     * `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`
     *
     */
    changes?: Array<string>;
    /**
     * Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     */
    fromImage?: string;
    /**
     * Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
     */
    fromSrc?: string;
    /**
     * Image content if the value `-` has been specified in fromSrc query parameter
     */
    inputImage?: string;
    /**
     * Set commit message for imported image.
     */
    message?: string;
    /**
     * Platform in the format os[/arch[/variant]].
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
     */
    platform?: string;
    /**
     * Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     */
    repo?: string;
    /**
     * Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     */
    tag?: string;
    /**
     * A base64url-encoded auth configuration.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth?: string;
};

export type ImageCreateResponse = unknown;

export type ImageInspectData = {
    /**
     * Image name or id
     */
    name: string;
};

export type ImageInspectResponse = ImageInspect;

export type ImageHistoryData = {
    /**
     * Image name or ID
     */
    name: string;
};

export type ImageHistoryResponse = Array<{
    Id: string;
    Created: number;
    CreatedBy: string;
    Tags: Array<(string)>;
    Size: number;
    Comment: string;
}>;

export type ImagePushData = {
    /**
     * Image name or ID.
     */
    name: string;
    /**
     * The tag to associate with the image on the registry.
     */
    tag?: string;
    /**
     * A base64url-encoded auth configuration.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth: string;
};

export type ImagePushResponse = unknown;

export type ImageTagData = {
    /**
     * Image name or ID to tag.
     */
    name: string;
    /**
     * The repository to tag in. For example, `someuser/someimage`.
     */
    repo?: string;
    /**
     * The name of the new tag.
     */
    tag?: string;
};

export type ImageTagResponse = unknown;

export type ImageDeleteData = {
    /**
     * Remove the image even if it is being used by stopped containers or has other tags
     */
    force?: boolean;
    /**
     * Image name or ID
     */
    name: string;
    /**
     * Do not delete untagged parent images
     */
    noprune?: boolean;
};

export type ImageDeleteResponse = Array<ImageDeleteResponseItem>;

export type ImageSearchData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
     *
     * - `is-official=(true|false)`
     * - `stars=<number>` Matches images that has at least 'number' stars.
     *
     */
    filters?: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Term to search
     */
    term: string;
};

export type ImageSearchResponse = Array<{
    description?: string;
    is_official?: boolean;
    /**
     * Whether this repository has automated builds enabled.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is deprecated and will always be "false".
     *
     */
    is_automated?: boolean;
    name?: string;
    star_count?: number;
}>;

export type ImagePruneData = {
    /**
     * Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
     *
     * - `dangling=<boolean>` When set to `true` (or `1`), prune only
     * unused *and* untagged images. When set to `false`
     * (or `0`), all unused images are pruned.
     * - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
     *
     */
    filters?: string;
};

export type ImagePruneResponse = {
    /**
     * Images that were deleted
     */
    ImagesDeleted?: Array<ImageDeleteResponseItem>;
    /**
     * Disk space reclaimed in bytes
     */
    SpaceReclaimed?: number;
};

export type ImageCommitData = {
    /**
     * Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
     */
    author?: string;
    /**
     * `Dockerfile` instructions to apply while committing
     */
    changes?: string;
    /**
     * Commit message
     */
    comment?: string;
    /**
     * The ID or name of the container to commit
     */
    container?: string;
    /**
     * The container configuration
     */
    containerConfig?: ContainerConfig;
    /**
     * Whether to pause the container before committing
     */
    pause?: boolean;
    /**
     * Repository name for the created image
     */
    repo?: string;
    /**
     * Tag name for the create image
     */
    tag?: string;
};

export type ImageCommitResponse = IdResponse;

export type ImageGetData = {
    /**
     * Image name or ID
     */
    name: string;
};

export type ImageGetResponse = (Blob | File);

export type ImageGetAllData = {
    /**
     * Image names to filter by
     */
    names?: Array<string>;
};

export type ImageGetAllResponse = (Blob | File);

export type ImageLoadData = {
    /**
     * Tar archive containing images
     */
    imagesTarball?: (Blob | File);
    /**
     * Suppress progress details during load.
     */
    quiet?: boolean;
};

export type ImageLoadResponse = unknown;

export type SystemAuthData = {
    /**
     * Authentication to check
     */
    authConfig?: AuthConfig;
};

export type SystemAuthResponse = {
    /**
     * The status of the authentication
     */
    Status: string;
    /**
     * An opaque token used to authenticate a user after a successful login
     */
    IdentityToken?: string;
} | void;

export type SystemInfoResponse = SystemInfo;

export type SystemVersionResponse = SystemVersion;

export type SystemPingResponse = string;

export type SystemPingHeadResponse = string;

export type SystemEventsData = {
    /**
     * A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:
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
     */
    filters?: string;
    /**
     * Show events created since this timestamp then stream new events.
     */
    since?: string;
    /**
     * Show events created until this timestamp then stop streaming.
     */
    until?: string;
};

export type SystemEventsResponse = EventMessage;

export type SystemDataUsageData = {
    /**
     * Object types, for which to compute and return data.
     *
     */
    type?: Array<string>;
};

export type SystemDataUsageResponse = {
    LayersSize?: number;
    Images?: Array<ImageSummary>;
    Containers?: Array<ContainerSummary>;
    Volumes?: Array<Volume>;
    BuildCache?: Array<BuildCache>;
};

export type ContainerExecData = {
    /**
     * Exec configuration
     */
    execConfig: {
        /**
         * Attach to `stdin` of the exec command.
         */
        AttachStdin?: boolean;
        /**
         * Attach to `stdout` of the exec command.
         */
        AttachStdout?: boolean;
        /**
         * Attach to `stderr` of the exec command.
         */
        AttachStderr?: boolean;
        /**
         * Initial console size, as an `[height, width]` array.
         */
        ConsoleSize?: [
            number,
            number
        ] | null;
        /**
         * Override the key sequence for detaching a container. Format is
         * a single character `[a-Z]` or `ctrl-<value>` where `<value>`
         * is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
         *
         */
        DetachKeys?: string;
        /**
         * Allocate a pseudo-TTY.
         */
        Tty?: boolean;
        /**
         * A list of environment variables in the form `["VAR=value", ...]`.
         *
         */
        Env?: Array<(string)>;
        /**
         * Command to run, as a string or array of strings.
         */
        Cmd?: Array<(string)>;
        /**
         * Runs the exec process with extended privileges.
         */
        Privileged?: boolean;
        /**
         * The user, and optionally, group to run the exec process inside
         * the container. Format is one of: `user`, `user:group`, `uid`,
         * or `uid:gid`.
         *
         */
        User?: string;
        /**
         * The working directory for the exec process inside the container.
         *
         */
        WorkingDir?: string;
    };
    /**
     * ID or name of container
     */
    id: string;
};

export type ContainerExecResponse = IdResponse;

export type ExecStartData = {
    execStartConfig?: {
        /**
         * Detach from the command.
         */
        Detach?: boolean;
        /**
         * Allocate a pseudo-TTY.
         */
        Tty?: boolean;
        /**
         * Initial console size, as an `[height, width]` array.
         */
        ConsoleSize?: [
            number,
            number
        ] | null;
    };
    /**
     * Exec instance ID
     */
    id: string;
};

export type ExecStartResponse = unknown;

export type ExecResizeData = {
    /**
     * Height of the TTY session in characters
     */
    h?: number;
    /**
     * Exec instance ID
     */
    id: string;
    /**
     * Width of the TTY session in characters
     */
    w?: number;
};

export type ExecResizeResponse = unknown;

export type ExecInspectData = {
    /**
     * Exec instance ID
     */
    id: string;
};

export type ExecInspectResponse = {
    CanRemove?: boolean;
    DetachKeys?: string;
    ID?: string;
    Running?: boolean;
    ExitCode?: number;
    ProcessConfig?: ProcessConfig;
    OpenStdin?: boolean;
    OpenStderr?: boolean;
    OpenStdout?: boolean;
    ContainerID?: string;
    /**
     * The system process ID for the exec process.
     */
    Pid?: number;
};

export type VolumeListData = {
    /**
     * JSON encoded value of the filters (a `map[string][]string`) to
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
     */
    filters?: string;
};

export type VolumeListResponse2 = VolumeListResponse;

export type VolumeCreateData = {
    /**
     * Volume configuration
     */
    volumeConfig: VolumeCreateOptions;
};

export type VolumeCreateResponse = Volume;

export type VolumeInspectData = {
    /**
     * Volume name or ID
     */
    name: string;
};

export type VolumeInspectResponse = Volume;

export type VolumeUpdateData = {
    /**
     * The spec of the volume to update. Currently, only Availability may
     * change. All other fields must remain unchanged.
     *
     */
    body?: {
        Spec?: ClusterVolumeSpec;
    };
    /**
     * The name or ID of the volume
     */
    name: string;
    /**
     * The version number of the volume being updated. This is required to
     * avoid conflicting writes. Found in the volume's `ClusterVolume`
     * field.
     *
     */
    version: number;
};

export type VolumeUpdateResponse = unknown;

export type VolumeDeleteData = {
    /**
     * Force the removal of the volume
     */
    force?: boolean;
    /**
     * Volume name or ID
     */
    name: string;
};

export type VolumeDeleteResponse = void;

export type VolumePruneData = {
    /**
     * Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
     * - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.
     *
     */
    filters?: string;
};

export type VolumePruneResponse = {
    /**
     * Volumes that were deleted
     */
    VolumesDeleted?: Array<(string)>;
    /**
     * Disk space reclaimed in bytes
     */
    SpaceReclaimed?: number;
};

export type NetworkListData = {
    /**
     * JSON encoded value of the filters (a `map[string][]string`) to process
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
     */
    filters?: string;
};

export type NetworkListResponse = Array<Network>;

export type NetworkInspectData = {
    /**
     * Network ID or name
     */
    id: string;
    /**
     * Filter the network by scope (swarm, global, or local)
     */
    scope?: string;
    /**
     * Detailed inspect output for troubleshooting
     */
    verbose?: boolean;
};

export type NetworkInspectResponse = Network;

export type NetworkDeleteData = {
    /**
     * Network ID or name
     */
    id: string;
};

export type NetworkDeleteResponse = void;

export type NetworkCreateData = {
    /**
     * Network configuration
     */
    networkConfig: {
        /**
         * The network's name.
         */
        Name: string;
        /**
         * Deprecated: CheckDuplicate is now always enabled.
         *
         */
        CheckDuplicate?: boolean;
        /**
         * Name of the network driver plugin to use.
         */
        Driver?: string;
        /**
         * Restrict external access to the network.
         */
        Internal?: boolean;
        /**
         * Globally scoped network is manually attachable by regular
         * containers from workers in swarm mode.
         *
         */
        Attachable?: boolean;
        /**
         * Ingress network is the network which provides the routing-mesh
         * in swarm mode.
         *
         */
        Ingress?: boolean;
        /**
         * Optional custom IP scheme for the network.
         */
        IPAM?: IPAM;
        /**
         * Enable IPv6 on the network.
         */
        EnableIPv6?: boolean;
        /**
         * Network specific options to be used by the drivers.
         */
        Options?: {
            [key: string]: (string);
        };
        /**
         * User-defined key/value metadata.
         */
        Labels?: {
            [key: string]: (string);
        };
    };
};

export type NetworkCreateResponse = {
    /**
     * The ID of the created network.
     */
    Id?: string;
    Warning?: string;
};

export type NetworkConnectData = {
    container: {
        /**
         * The ID or name of the container to connect to the network.
         */
        Container?: string;
        EndpointConfig?: EndpointSettings;
    };
    /**
     * Network ID or name
     */
    id: string;
};

export type NetworkConnectResponse = unknown;

export type NetworkDisconnectData = {
    container: {
        /**
         * The ID or name of the container to disconnect from the network.
         *
         */
        Container?: string;
        /**
         * Force the container to disconnect from the network.
         *
         */
        Force?: boolean;
    };
    /**
     * Network ID or name
     */
    id: string;
};

export type NetworkDisconnectResponse = unknown;

export type NetworkPruneData = {
    /**
     * Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
     * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
     *
     */
    filters?: string;
};

export type NetworkPruneResponse = {
    /**
     * Networks that were deleted
     */
    NetworksDeleted?: Array<(string)>;
};

export type PluginListData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the plugin list.
     *
     * Available filters:
     *
     * - `capability=<capability name>`
     * - `enable=<true>|<false>`
     *
     */
    filters?: string;
};

export type PluginListResponse = Array<Plugin>;

export type GetPluginPrivilegesData = {
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    remote: string;
};

export type GetPluginPrivilegesResponse = Array<PluginPrivilege>;

export type PluginPullData = {
    body?: Array<PluginPrivilege>;
    /**
     * Local name for the pulled plugin.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     */
    name?: string;
    /**
     * Remote reference for plugin to install.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     */
    remote: string;
    /**
     * A base64url-encoded auth configuration to use when pulling a plugin
     * from a registry.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth?: string;
};

export type PluginPullResponse = void;

export type PluginInspectData = {
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
};

export type PluginInspectResponse = Plugin;

export type PluginDeleteData = {
    /**
     * Disable the plugin before removing. This may result in issues if the
     * plugin is in use by a container.
     *
     */
    force?: boolean;
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
};

export type PluginDeleteResponse = Plugin;

export type PluginEnableData = {
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
    /**
     * Set the HTTP client timeout (in seconds)
     */
    timeout?: number;
};

export type PluginEnableResponse = unknown;

export type PluginDisableData = {
    /**
     * Force disable a plugin even if still in use.
     *
     */
    force?: boolean;
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
};

export type PluginDisableResponse = unknown;

export type PluginUpgradeData = {
    body?: Array<PluginPrivilege>;
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
    /**
     * Remote reference to upgrade to.
     *
     * The `:latest` tag is optional, and is used as the default if omitted.
     *
     */
    remote: string;
    /**
     * A base64url-encoded auth configuration to use when pulling a plugin
     * from a registry.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth?: string;
};

export type PluginUpgradeResponse = void;

export type PluginCreateData = {
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
    /**
     * Path to tar containing plugin rootfs and manifest
     */
    tarContext?: (Blob | File);
};

export type PluginCreateResponse = void;

export type PluginPushData = {
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
};

export type PluginPushResponse = unknown;

export type PluginSetData = {
    body?: Array<(string)>;
    /**
     * The name of the plugin. The `:latest` tag is optional, and is the
     * default if omitted.
     *
     */
    name: string;
};

export type PluginSetResponse = void;

export type NodeListData = {
    /**
     * Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).
     *
     * Available filters:
     * - `id=<node id>`
     * - `label=<engine label>`
     * - `membership=`(`accepted`|`pending`)`
     * - `name=<node name>`
     * - `node.label=<node label>`
     * - `role=`(`manager`|`worker`)`
     *
     */
    filters?: string;
};

export type NodeListResponse = Array<Node>;

export type NodeInspectData = {
    /**
     * The ID or name of the node
     */
    id: string;
};

export type NodeInspectResponse = Node;

export type NodeDeleteData = {
    /**
     * Force remove a node from the swarm
     */
    force?: boolean;
    /**
     * The ID or name of the node
     */
    id: string;
};

export type NodeDeleteResponse = unknown;

export type NodeUpdateData = {
    body?: NodeSpec;
    /**
     * The ID of the node
     */
    id: string;
    /**
     * The version number of the node object being updated. This is required
     * to avoid conflicting writes.
     *
     */
    version: number;
};

export type NodeUpdateResponse = unknown;

export type SwarmInspectResponse = Swarm;

export type SwarmInitData = {
    body: {
        /**
         * Listen address used for inter-manager communication, as well
         * as determining the networking interface used for the VXLAN
         * Tunnel Endpoint (VTEP). This can either be an address/port
         * combination in the form `192.168.1.1:4567`, or an interface
         * followed by a port number, like `eth0:4567`. If the port number
         * is omitted, the default swarm listening port is used.
         *
         */
        ListenAddr?: string;
        /**
         * Externally reachable address advertised to other nodes. This
         * can either be an address/port combination in the form
         * `192.168.1.1:4567`, or an interface followed by a port number,
         * like `eth0:4567`. If the port number is omitted, the port
         * number from the listen address is used. If `AdvertiseAddr` is
         * not specified, it will be automatically detected when possible.
         *
         */
        AdvertiseAddr?: string;
        /**
         * Address or interface to use for data path traffic (format:
         * `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
         * like `eth0`. If `DataPathAddr` is unspecified, the same address
         * as `AdvertiseAddr` is used.
         *
         * The `DataPathAddr` specifies the address that global scope
         * network drivers will publish towards other  nodes in order to
         * reach the containers running on this node. Using this parameter
         * it is possible to separate the container data traffic from the
         * management traffic of the cluster.
         *
         */
        DataPathAddr?: string;
        /**
         * DataPathPort specifies the data path port number for data traffic.
         * Acceptable port range is 1024 to 49151.
         * if no port is set or is set to 0, default port 4789 will be used.
         *
         */
        DataPathPort?: number;
        /**
         * Default Address Pool specifies default subnet pools for global
         * scope networks.
         *
         */
        DefaultAddrPool?: Array<(string)>;
        /**
         * Force creation of a new swarm.
         */
        ForceNewCluster?: boolean;
        /**
         * SubnetSize specifies the subnet size of the networks created
         * from the default subnet pool.
         *
         */
        SubnetSize?: number;
        Spec?: SwarmSpec;
    };
};

export type SwarmInitResponse = string;

export type SwarmJoinData = {
    body: {
        /**
         * Listen address used for inter-manager communication if the node
         * gets promoted to manager, as well as determining the networking
         * interface used for the VXLAN Tunnel Endpoint (VTEP).
         *
         */
        ListenAddr?: string;
        /**
         * Externally reachable address advertised to other nodes. This
         * can either be an address/port combination in the form
         * `192.168.1.1:4567`, or an interface followed by a port number,
         * like `eth0:4567`. If the port number is omitted, the port
         * number from the listen address is used. If `AdvertiseAddr` is
         * not specified, it will be automatically detected when possible.
         *
         */
        AdvertiseAddr?: string;
        /**
         * Address or interface to use for data path traffic (format:
         * `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
         * like `eth0`. If `DataPathAddr` is unspecified, the same address
         * as `AdvertiseAddr` is used.
         *
         * The `DataPathAddr` specifies the address that global scope
         * network drivers will publish towards other nodes in order to
         * reach the containers running on this node. Using this parameter
         * it is possible to separate the container data traffic from the
         * management traffic of the cluster.
         *
         */
        DataPathAddr?: string;
        /**
         * Addresses of manager nodes already participating in the swarm.
         *
         */
        RemoteAddrs?: Array<(string)>;
        /**
         * Secret token for joining this swarm.
         */
        JoinToken?: string;
    };
};

export type SwarmJoinResponse = unknown;

export type SwarmLeaveData = {
    /**
     * Force leave swarm, even if this is the last manager or that it will
     * break the cluster.
     *
     */
    force?: boolean;
};

export type SwarmLeaveResponse = unknown;

export type SwarmUpdateData = {
    body: SwarmSpec;
    /**
     * Rotate the manager join token.
     */
    rotateManagerToken?: boolean;
    /**
     * Rotate the manager unlock key.
     */
    rotateManagerUnlockKey?: boolean;
    /**
     * Rotate the worker join token.
     */
    rotateWorkerToken?: boolean;
    /**
     * The version number of the swarm object being updated. This is
     * required to avoid conflicting writes.
     *
     */
    version: number;
};

export type SwarmUpdateResponse = unknown;

export type SwarmUnlockkeyResponse = {
    /**
     * The swarm's unlock key.
     */
    UnlockKey?: string;
};

export type SwarmUnlockData = {
    body: {
        /**
         * The swarm's unlock key.
         */
        UnlockKey?: string;
    };
};

export type SwarmUnlockResponse = unknown;

export type ServiceListData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the services list.
     *
     * Available filters:
     *
     * - `id=<service id>`
     * - `label=<service label>`
     * - `mode=["replicated"|"global"]`
     * - `name=<service name>`
     *
     */
    filters?: string;
    /**
     * Include service status, with count of running and desired tasks.
     *
     */
    status?: boolean;
};

export type ServiceListResponse = Array<Service>;

export type ServiceCreateData = {
    body: ServiceSpec;
    /**
     * A base64url-encoded auth configuration for pulling from private
     * registries.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth?: string;
};

export type ServiceCreateResponse2 = ServiceCreateResponse;

export type ServiceInspectData = {
    /**
     * ID or name of service.
     */
    id: string;
    /**
     * Fill empty fields with default values.
     */
    insertDefaults?: boolean;
};

export type ServiceInspectResponse = Service;

export type ServiceDeleteData = {
    /**
     * ID or name of service.
     */
    id: string;
};

export type ServiceDeleteResponse = unknown;

export type ServiceUpdateData = {
    body: ServiceSpec;
    /**
     * ID or name of service.
     */
    id: string;
    /**
     * If the `X-Registry-Auth` header is not specified, this parameter
     * indicates where to find registry authorization credentials.
     *
     */
    registryAuthFrom?: 'spec' | 'previous-spec';
    /**
     * Set to this parameter to `previous` to cause a server-side rollback
     * to the previous service spec. The supplied spec will be ignored in
     * this case.
     *
     */
    rollback?: string;
    /**
     * The version number of the service object being updated. This is
     * required to avoid conflicting writes.
     * This version number should be the value as currently set on the
     * service *before* the update. You can find the current version by
     * calling `GET /services/{id}`
     *
     */
    version: number;
    /**
     * A base64url-encoded auth configuration for pulling from private
     * registries.
     *
     * Refer to the [authentication section](#section/Authentication) for
     * details.
     *
     */
    xRegistryAuth?: string;
};

export type ServiceUpdateResponse2 = ServiceUpdateResponse;

export type ServiceLogsData = {
    /**
     * Show service context and extra details provided to logs.
     */
    details?: boolean;
    /**
     * Keep connection after returning logs.
     */
    follow?: boolean;
    /**
     * ID or name of the service
     */
    id: string;
    /**
     * Only return logs since this time, as a UNIX timestamp
     */
    since?: number;
    /**
     * Return logs from `stderr`
     */
    stderr?: boolean;
    /**
     * Return logs from `stdout`
     */
    stdout?: boolean;
    /**
     * Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     */
    tail?: string;
    /**
     * Add timestamps to every log line
     */
    timestamps?: boolean;
};

export type ServiceLogsResponse = (Blob | File);

export type TaskListData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
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
     */
    filters?: string;
};

export type TaskListResponse = Array<Task>;

export type TaskInspectData = {
    /**
     * ID of the task
     */
    id: string;
};

export type TaskInspectResponse = Task;

export type TaskLogsData = {
    /**
     * Show task context and extra details provided to logs.
     */
    details?: boolean;
    /**
     * Keep connection after returning logs.
     */
    follow?: boolean;
    /**
     * ID of the task
     */
    id: string;
    /**
     * Only return logs since this time, as a UNIX timestamp
     */
    since?: number;
    /**
     * Return logs from `stderr`
     */
    stderr?: boolean;
    /**
     * Return logs from `stdout`
     */
    stdout?: boolean;
    /**
     * Only return this number of log lines from the end of the logs.
     * Specify as an integer or `all` to output all log lines.
     *
     */
    tail?: string;
    /**
     * Add timestamps to every log line
     */
    timestamps?: boolean;
};

export type TaskLogsResponse = (Blob | File);

export type SecretListData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the secrets list.
     *
     * Available filters:
     *
     * - `id=<secret id>`
     * - `label=<key> or label=<key>=value`
     * - `name=<secret name>`
     * - `names=<secret name>`
     *
     */
    filters?: string;
};

export type SecretListResponse = Array<Secret>;

export type SecretCreateData = {
    body?: SecretSpec;
};

export type SecretCreateResponse = IdResponse;

export type SecretInspectData = {
    /**
     * ID of the secret
     */
    id: string;
};

export type SecretInspectResponse = Secret;

export type SecretDeleteData = {
    /**
     * ID of the secret
     */
    id: string;
};

export type SecretDeleteResponse = void;

export type SecretUpdateData = {
    /**
     * The spec of the secret to update. Currently, only the Labels field
     * can be updated. All other fields must remain unchanged from the
     * [SecretInspect endpoint](#operation/SecretInspect) response values.
     *
     */
    body?: SecretSpec;
    /**
     * The ID or name of the secret
     */
    id: string;
    /**
     * The version number of the secret object being updated. This is
     * required to avoid conflicting writes.
     *
     */
    version: number;
};

export type SecretUpdateResponse = unknown;

export type ConfigListData = {
    /**
     * A JSON encoded value of the filters (a `map[string][]string`) to
     * process on the configs list.
     *
     * Available filters:
     *
     * - `id=<config id>`
     * - `label=<key> or label=<key>=value`
     * - `name=<config name>`
     * - `names=<config name>`
     *
     */
    filters?: string;
};

export type ConfigListResponse = Array<Config>;

export type ConfigCreateData = {
    body?: ConfigSpec;
};

export type ConfigCreateResponse = IdResponse;

export type ConfigInspectData = {
    /**
     * ID of the config
     */
    id: string;
};

export type ConfigInspectResponse = Config;

export type ConfigDeleteData = {
    /**
     * ID of the config
     */
    id: string;
};

export type ConfigDeleteResponse = void;

export type ConfigUpdateData = {
    /**
     * The spec of the config to update. Currently, only the Labels field
     * can be updated. All other fields must remain unchanged from the
     * [ConfigInspect endpoint](#operation/ConfigInspect) response values.
     *
     */
    body?: ConfigSpec;
    /**
     * The ID or name of the config
     */
    id: string;
    /**
     * The version number of the config object being updated. This is
     * required to avoid conflicting writes.
     *
     */
    version: number;
};

export type ConfigUpdateResponse = unknown;

export type DistributionInspectData = {
    /**
     * Image name or id
     */
    name: string;
};

export type DistributionInspectResponse = DistributionInspect;

export type $OpenApiTs = {
    '/containers/json': {
        get: {
            req: ContainerListData;
            res: {
                /**
                 * no error
                 */
                200: Array<ContainerSummary>;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/create': {
        post: {
            req: ContainerCreateData;
            res: {
                /**
                 * Container created successfully
                 */
                201: ContainerCreateResponse;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such image
                 */
                404: ErrorResponse;
                /**
                 * conflict
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/json': {
        get: {
            req: ContainerInspectData;
            res: {
                /**
                 * no error
                 */
                200: {
                    /**
                     * The ID of the container
                     */
                    Id?: string;
                    /**
                     * The time the container was created
                     */
                    Created?: string;
                    /**
                     * The path to the command being run
                     */
                    Path?: string;
                    /**
                     * The arguments to the command being run
                     */
                    Args?: Array<(string)>;
                    State?: ContainerState;
                    /**
                     * The container's image ID
                     */
                    Image?: string;
                    ResolvConfPath?: string;
                    HostnamePath?: string;
                    HostsPath?: string;
                    LogPath?: string;
                    Name?: string;
                    RestartCount?: number;
                    Driver?: string;
                    Platform?: string;
                    MountLabel?: string;
                    ProcessLabel?: string;
                    AppArmorProfile?: string;
                    /**
                     * IDs of exec instances that are running in the container.
                     */
                    ExecIDs?: Array<(string)> | null;
                    HostConfig?: HostConfig;
                    GraphDriver?: GraphDriverData;
                    /**
                     * The size of files that have been created or changed by this
                     * container.
                     *
                     */
                    SizeRw?: number;
                    /**
                     * The total size of all the files in this container.
                     */
                    SizeRootFs?: number;
                    Mounts?: Array<MountPoint>;
                    Config?: ContainerConfig;
                    NetworkSettings?: NetworkSettings;
                };
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/top': {
        get: {
            req: ContainerTopData;
            res: {
                /**
                 * no error
                 */
                200: {
                    /**
                     * The ps column titles
                     */
                    Titles?: Array<(string)>;
                    /**
                     * Each process running in the container, where each is process
                     * is an array of values corresponding to the titles.
                     *
                     */
                    Processes?: Array<Array<(string)>>;
                };
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/logs': {
        get: {
            req: ContainerLogsData;
            res: {
                /**
                 * logs returned as a stream in response body.
                 * For the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach).
                 * Note that unlike the attach endpoint, the logs endpoint does not
                 * upgrade the connection and does not set Content-Type.
                 *
                 */
                200: (Blob | File);
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/changes': {
        get: {
            req: ContainerChangesData;
            res: {
                /**
                 * The list of changes
                 */
                200: Array<FilesystemChange>;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/export': {
        get: {
            req: ContainerExportData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/stats': {
        get: {
            req: ContainerStatsData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/resize': {
        post: {
            req: ContainerResizeData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * cannot resize container
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/start': {
        post: {
            req: ContainerStartData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * container already started
                 */
                304: unknown;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/stop': {
        post: {
            req: ContainerStopData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * container already stopped
                 */
                304: unknown;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/restart': {
        post: {
            req: ContainerRestartData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/kill': {
        post: {
            req: ContainerKillData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * container is not running
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/update': {
        post: {
            req: ContainerUpdateData;
            res: {
                /**
                 * The container has been updated.
                 */
                200: {
                    Warnings?: Array<(string)>;
                };
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/rename': {
        post: {
            req: ContainerRenameData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * name already in use
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/pause': {
        post: {
            req: ContainerPauseData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/unpause': {
        post: {
            req: ContainerUnpauseData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/attach': {
        post: {
            req: ContainerAttachData;
            res: {
                /**
                 * no error, no upgrade header found
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/attach/ws': {
        get: {
            req: ContainerAttachWebsocketData;
            res: {
                /**
                 * no error, no upgrade header found
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/wait': {
        post: {
            req: ContainerWaitData;
            res: {
                /**
                 * The container has exit.
                 */
                200: ContainerWaitResponse;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}': {
        delete: {
            req: ContainerDeleteData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * conflict
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/archive': {
        head: {
            req: ContainerArchiveInfoData;
            res: {
                /**
                 * no error
                 */
                200: string;
                /**
                 * Bad parameter
                 */
                400: ErrorResponse;
                /**
                 * Container or path does not exist
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
        get: {
            req: ContainerArchiveData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * Bad parameter
                 */
                400: ErrorResponse;
                /**
                 * Container or path does not exist
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
        put: {
            req: PutContainerArchiveData;
            res: {
                /**
                 * The content was extracted successfully
                 */
                200: unknown;
                /**
                 * Bad parameter
                 */
                400: ErrorResponse;
                /**
                 * Permission denied, the volume or container rootfs is marked as read-only.
                 */
                403: ErrorResponse;
                /**
                 * No such container or path does not exist inside the container
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/prune': {
        post: {
            req: ContainerPruneData;
            res: {
                /**
                 * No error
                 */
                200: {
                    /**
                     * Container IDs that were deleted
                     */
                    ContainersDeleted?: Array<(string)>;
                    /**
                     * Disk space reclaimed in bytes
                     */
                    SpaceReclaimed?: number;
                };
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/json': {
        get: {
            req: ImageListData;
            res: {
                /**
                 * Summary image data for the images matching the query
                 */
                200: Array<ImageSummary>;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/build': {
        post: {
            req: ImageBuildData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * Bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/build/prune': {
        post: {
            req: BuildPruneData;
            res: {
                /**
                 * No error
                 */
                200: {
                    CachesDeleted?: Array<(string)>;
                    /**
                     * Disk space reclaimed in bytes
                     */
                    SpaceReclaimed?: number;
                };
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/create': {
        post: {
            req: ImageCreateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * repository does not exist or no read access
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}/json': {
        get: {
            req: ImageInspectData;
            res: {
                /**
                 * No error
                 */
                200: ImageInspect;
                /**
                 * No such image
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}/history': {
        get: {
            req: ImageHistoryData;
            res: {
                /**
                 * List of image layers
                 */
                200: Array<{
                    Id: string;
                    Created: number;
                    CreatedBy: string;
                    Tags: Array<(string)>;
                    Size: number;
                    Comment: string;
                }>;
                /**
                 * No such image
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}/push': {
        post: {
            req: ImagePushData;
            res: {
                /**
                 * No error
                 */
                200: unknown;
                /**
                 * No such image
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}/tag': {
        post: {
            req: ImageTagData;
            res: {
                /**
                 * No error
                 */
                201: unknown;
                /**
                 * Bad parameter
                 */
                400: ErrorResponse;
                /**
                 * No such image
                 */
                404: ErrorResponse;
                /**
                 * Conflict
                 */
                409: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}': {
        delete: {
            req: ImageDeleteData;
            res: {
                /**
                 * The image was deleted successfully
                 */
                200: Array<ImageDeleteResponseItem>;
                /**
                 * No such image
                 */
                404: ErrorResponse;
                /**
                 * Conflict
                 */
                409: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/search': {
        get: {
            req: ImageSearchData;
            res: {
                /**
                 * No error
                 */
                200: Array<{
                    description?: string;
                    is_official?: boolean;
                    /**
                     * Whether this repository has automated builds enabled.
                     *
                     * <p><br /></p>
                     *
                     * > **Deprecated**: This field is deprecated and will always be "false".
                     *
                     */
                    is_automated?: boolean;
                    name?: string;
                    star_count?: number;
                }>;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/prune': {
        post: {
            req: ImagePruneData;
            res: {
                /**
                 * No error
                 */
                200: {
                    /**
                     * Images that were deleted
                     */
                    ImagesDeleted?: Array<ImageDeleteResponseItem>;
                    /**
                     * Disk space reclaimed in bytes
                     */
                    SpaceReclaimed?: number;
                };
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/commit': {
        post: {
            req: ImageCommitData;
            res: {
                /**
                 * no error
                 */
                201: IdResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/{name}/get': {
        get: {
            req: ImageGetData;
            res: {
                /**
                 * no error
                 */
                200: (Blob | File);
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/get': {
        get: {
            req: ImageGetAllData;
            res: {
                /**
                 * no error
                 */
                200: (Blob | File);
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/images/load': {
        post: {
            req: ImageLoadData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/auth': {
        post: {
            req: SystemAuthData;
            res: {
                /**
                 * An identity token was generated successfully.
                 */
                200: {
                    /**
                     * The status of the authentication
                     */
                    Status: string;
                    /**
                     * An opaque token used to authenticate a user after a successful login
                     */
                    IdentityToken?: string;
                };
                /**
                 * No error
                 */
                204: void;
                /**
                 * Auth error
                 */
                401: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/info': {
        get: {
            res: {
                /**
                 * No error
                 */
                200: SystemInfo;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/version': {
        get: {
            res: {
                /**
                 * no error
                 */
                200: SystemVersion;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/_ping': {
        get: {
            res: {
                /**
                 * no error
                 */
                200: string;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
        head: {
            res: {
                /**
                 * no error
                 */
                200: string;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/events': {
        get: {
            req: SystemEventsData;
            res: {
                /**
                 * no error
                 */
                200: EventMessage;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/system/df': {
        get: {
            req: SystemDataUsageData;
            res: {
                /**
                 * no error
                 */
                200: {
                    LayersSize?: number;
                    Images?: Array<ImageSummary>;
                    Containers?: Array<ContainerSummary>;
                    Volumes?: Array<Volume>;
                    BuildCache?: Array<BuildCache>;
                };
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/containers/{id}/exec': {
        post: {
            req: ContainerExecData;
            res: {
                /**
                 * no error
                 */
                201: IdResponse;
                /**
                 * no such container
                 */
                404: ErrorResponse;
                /**
                 * container is paused
                 */
                409: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/exec/{id}/start': {
        post: {
            req: ExecStartData;
            res: {
                /**
                 * No error
                 */
                200: unknown;
                /**
                 * No such exec instance
                 */
                404: ErrorResponse;
                /**
                 * Container is stopped or paused
                 */
                409: ErrorResponse;
            };
        };
    };
    '/exec/{id}/resize': {
        post: {
            req: ExecResizeData;
            res: {
                /**
                 * No error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * No such exec instance
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/exec/{id}/json': {
        get: {
            req: ExecInspectData;
            res: {
                /**
                 * No error
                 */
                200: {
                    CanRemove?: boolean;
                    DetachKeys?: string;
                    ID?: string;
                    Running?: boolean;
                    ExitCode?: number;
                    ProcessConfig?: ProcessConfig;
                    OpenStdin?: boolean;
                    OpenStderr?: boolean;
                    OpenStdout?: boolean;
                    ContainerID?: string;
                    /**
                     * The system process ID for the exec process.
                     */
                    Pid?: number;
                };
                /**
                 * No such exec instance
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/volumes': {
        get: {
            req: VolumeListData;
            res: {
                /**
                 * Summary volume data that matches the query
                 */
                200: VolumeListResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/volumes/create': {
        post: {
            req: VolumeCreateData;
            res: {
                /**
                 * The volume was created successfully
                 */
                201: Volume;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/volumes/{name}': {
        get: {
            req: VolumeInspectData;
            res: {
                /**
                 * No error
                 */
                200: Volume;
                /**
                 * No such volume
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
        put: {
            req: VolumeUpdateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such volume
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
        delete: {
            req: VolumeDeleteData;
            res: {
                /**
                 * The volume was removed
                 */
                204: void;
                /**
                 * No such volume or volume driver
                 */
                404: ErrorResponse;
                /**
                 * Volume is in use and cannot be removed
                 */
                409: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/volumes/prune': {
        post: {
            req: VolumePruneData;
            res: {
                /**
                 * No error
                 */
                200: {
                    /**
                     * Volumes that were deleted
                     */
                    VolumesDeleted?: Array<(string)>;
                    /**
                     * Disk space reclaimed in bytes
                     */
                    SpaceReclaimed?: number;
                };
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks': {
        get: {
            req: NetworkListData;
            res: {
                /**
                 * No error
                 */
                200: Array<Network>;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks/{id}': {
        get: {
            req: NetworkInspectData;
            res: {
                /**
                 * No error
                 */
                200: Network;
                /**
                 * Network not found
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
        delete: {
            req: NetworkDeleteData;
            res: {
                /**
                 * No error
                 */
                204: void;
                /**
                 * operation not supported for pre-defined networks
                 */
                403: ErrorResponse;
                /**
                 * no such network
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks/create': {
        post: {
            req: NetworkCreateData;
            res: {
                /**
                 * No error
                 */
                201: {
                    /**
                     * The ID of the created network.
                     */
                    Id?: string;
                    Warning?: string;
                };
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * Forbidden operation. This happens when trying to create a network named after a pre-defined network,
                 * or when trying to create an overlay network on a daemon which is not part of a Swarm cluster.
                 *
                 */
                403: ErrorResponse;
                /**
                 * plugin not found
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks/{id}/connect': {
        post: {
            req: NetworkConnectData;
            res: {
                /**
                 * No error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * Operation forbidden
                 */
                403: ErrorResponse;
                /**
                 * Network or container not found
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks/{id}/disconnect': {
        post: {
            req: NetworkDisconnectData;
            res: {
                /**
                 * No error
                 */
                200: unknown;
                /**
                 * Operation not supported for swarm scoped networks
                 */
                403: ErrorResponse;
                /**
                 * Network or container not found
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/networks/prune': {
        post: {
            req: NetworkPruneData;
            res: {
                /**
                 * No error
                 */
                200: {
                    /**
                     * Networks that were deleted
                     */
                    NetworksDeleted?: Array<(string)>;
                };
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins': {
        get: {
            req: PluginListData;
            res: {
                /**
                 * No error
                 */
                200: Array<Plugin>;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/privileges': {
        get: {
            req: GetPluginPrivilegesData;
            res: {
                /**
                 * no error
                 */
                200: Array<PluginPrivilege>;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/pull': {
        post: {
            req: PluginPullData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/json': {
        get: {
            req: PluginInspectData;
            res: {
                /**
                 * no error
                 */
                200: Plugin;
                /**
                 * plugin is not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}': {
        delete: {
            req: PluginDeleteData;
            res: {
                /**
                 * no error
                 */
                200: Plugin;
                /**
                 * plugin is not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/enable': {
        post: {
            req: PluginEnableData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * plugin is not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/disable': {
        post: {
            req: PluginDisableData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * plugin is not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/upgrade': {
        post: {
            req: PluginUpgradeData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * plugin not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/create': {
        post: {
            req: PluginCreateData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/push': {
        post: {
            req: PluginPushData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * plugin not installed
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/plugins/{name}/set': {
        post: {
            req: PluginSetData;
            res: {
                /**
                 * No error
                 */
                204: void;
                /**
                 * Plugin not installed
                 */
                404: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/nodes': {
        get: {
            req: NodeListData;
            res: {
                /**
                 * no error
                 */
                200: Array<Node>;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/nodes/{id}': {
        get: {
            req: NodeInspectData;
            res: {
                /**
                 * no error
                 */
                200: Node;
                /**
                 * no such node
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
        delete: {
            req: NodeDeleteData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * no such node
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/nodes/{id}/update': {
        post: {
            req: NodeUpdateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such node
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm': {
        get: {
            res: {
                /**
                 * no error
                 */
                200: Swarm;
                /**
                 * no such swarm
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/init': {
        post: {
            req: SwarmInitData;
            res: {
                /**
                 * no error
                 */
                200: string;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is already part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/join': {
        post: {
            req: SwarmJoinData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is already part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/leave': {
        post: {
            req: SwarmLeaveData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/update': {
        post: {
            req: SwarmUpdateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/unlockkey': {
        get: {
            res: {
                /**
                 * no error
                 */
                200: {
                    /**
                     * The swarm's unlock key.
                     */
                    UnlockKey?: string;
                };
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/swarm/unlock': {
        post: {
            req: SwarmUnlockData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/services': {
        get: {
            req: ServiceListData;
            res: {
                /**
                 * no error
                 */
                200: Array<Service>;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/services/create': {
        post: {
            req: ServiceCreateData;
            res: {
                /**
                 * no error
                 */
                201: ServiceCreateResponse;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * network is not eligible for services
                 */
                403: ErrorResponse;
                /**
                 * name conflicts with an existing service
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/services/{id}': {
        get: {
            req: ServiceInspectData;
            res: {
                /**
                 * no error
                 */
                200: Service;
                /**
                 * no such service
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
        delete: {
            req: ServiceDeleteData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * no such service
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/services/{id}/update': {
        post: {
            req: ServiceUpdateData;
            res: {
                /**
                 * no error
                 */
                200: ServiceUpdateResponse;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such service
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/services/{id}/logs': {
        get: {
            req: ServiceLogsData;
            res: {
                /**
                 * logs returned as a stream in response body
                 */
                200: (Blob | File);
                /**
                 * no such service
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/tasks': {
        get: {
            req: TaskListData;
            res: {
                /**
                 * no error
                 */
                200: Array<Task>;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/tasks/{id}': {
        get: {
            req: TaskInspectData;
            res: {
                /**
                 * no error
                 */
                200: Task;
                /**
                 * no such task
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/tasks/{id}/logs': {
        get: {
            req: TaskLogsData;
            res: {
                /**
                 * logs returned as a stream in response body
                 */
                200: (Blob | File);
                /**
                 * no such task
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/secrets': {
        get: {
            req: SecretListData;
            res: {
                /**
                 * no error
                 */
                200: Array<Secret>;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/secrets/create': {
        post: {
            req: SecretCreateData;
            res: {
                /**
                 * no error
                 */
                201: IdResponse;
                /**
                 * name conflicts with an existing object
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/secrets/{id}': {
        get: {
            req: SecretInspectData;
            res: {
                /**
                 * no error
                 */
                200: Secret;
                /**
                 * secret not found
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
        delete: {
            req: SecretDeleteData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * secret not found
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/secrets/{id}/update': {
        post: {
            req: SecretUpdateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such secret
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/configs': {
        get: {
            req: ConfigListData;
            res: {
                /**
                 * no error
                 */
                200: Array<Config>;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/configs/create': {
        post: {
            req: ConfigCreateData;
            res: {
                /**
                 * no error
                 */
                201: IdResponse;
                /**
                 * name conflicts with an existing object
                 */
                409: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/configs/{id}': {
        get: {
            req: ConfigInspectData;
            res: {
                /**
                 * no error
                 */
                200: Config;
                /**
                 * config not found
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
        delete: {
            req: ConfigDeleteData;
            res: {
                /**
                 * no error
                 */
                204: void;
                /**
                 * config not found
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/configs/{id}/update': {
        post: {
            req: ConfigUpdateData;
            res: {
                /**
                 * no error
                 */
                200: unknown;
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * no such config
                 */
                404: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
                /**
                 * node is not part of a swarm
                 */
                503: ErrorResponse;
            };
        };
    };
    '/distribution/{name}/json': {
        get: {
            req: DistributionInspectData;
            res: {
                /**
                 * descriptor and platform information
                 */
                200: DistributionInspect;
                /**
                 * Failed authentication or no image found
                 */
                401: ErrorResponse;
                /**
                 * Server error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/session': {
        post: {
            res: {
                /**
                 * bad parameter
                 */
                400: ErrorResponse;
                /**
                 * server error
                 */
                500: ErrorResponse;
            };
        };
    };
};