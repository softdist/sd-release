export const $Port = {
    type: 'object',
    description: 'An open port on a container',
    required: ['PrivatePort', 'Type'],
    properties: {
        IP: {
            type: 'string',
            format: 'ip-address',
            description: "Host IP address that the container's port is mapped to"
        },
        PrivatePort: {
            type: 'integer',
            format: 'uint16',
            'x-nullable': false,
            description: 'Port on the container'
        },
        PublicPort: {
            type: 'integer',
            format: 'uint16',
            description: 'Port exposed on the host'
        },
        Type: {
            type: 'string',
            'x-nullable': false,
            enum: ['tcp', 'udp', 'sctp']
        }
    },
    example: {
        PrivatePort: 8080,
        PublicPort: 80,
        Type: 'tcp'
    }
} as const;

export const $MountPoint = {
    type: 'object',
    description: `MountPoint represents a mount point configuration inside the container.
This is used for reporting the mountpoints in use by a container.
`,
    properties: {
        Type: {
            description: `The mount type:

- \`bind\` a mount of a file or directory from the host into the container.
- \`volume\` a docker volume with the given \`Name\`.
- \`tmpfs\` a \`tmpfs\`.
- \`npipe\` a named pipe from the host into the container.
- \`cluster\` a Swarm cluster volume
`,
            type: 'string',
            enum: ['bind', 'volume', 'tmpfs', 'npipe', 'cluster'],
            example: 'volume'
        },
        Name: {
            description: `Name is the name reference to the underlying data defined by \`Source\`
e.g., the volume name.
`,
            type: 'string',
            example: 'myvolume'
        },
        Source: {
            description: `Source location of the mount.

For volumes, this contains the storage location of the volume (within
\`/var/lib/docker/volumes/\`). For bind-mounts, and \`npipe\`, this contains
the source (host) part of the bind-mount. For \`tmpfs\` mount points, this
field is empty.
`,
            type: 'string',
            example: '/var/lib/docker/volumes/myvolume/_data'
        },
        Destination: {
            description: `Destination is the path relative to the container root (\`/\`) where
the \`Source\` is mounted inside the container.
`,
            type: 'string',
            example: '/usr/share/nginx/html/'
        },
        Driver: {
            description: `Driver is the volume driver used to create the volume (if it is a volume).
`,
            type: 'string',
            example: 'local'
        },
        Mode: {
            description: `Mode is a comma separated list of options supplied by the user when
creating the bind/volume mount.

The default is platform-specific (\`"z"\` on Linux, empty on Windows).
`,
            type: 'string',
            example: 'z'
        },
        RW: {
            description: `Whether the mount is mounted writable (read-write).
`,
            type: 'boolean',
            example: true
        },
        Propagation: {
            description: `Propagation describes how mounts are propagated from the host into the
mount point, and vice-versa. Refer to the [Linux kernel documentation](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt)
for details. This field is not used on Windows.
`,
            type: 'string',
            example: ''
        }
    }
} as const;

export const $DeviceMapping = {
    type: 'object',
    description: 'A device mapping between the host and container',
    properties: {
        PathOnHost: {
            type: 'string'
        },
        PathInContainer: {
            type: 'string'
        },
        CgroupPermissions: {
            type: 'string'
        }
    },
    example: {
        PathOnHost: '/dev/deviceName',
        PathInContainer: '/dev/deviceName',
        CgroupPermissions: 'mrw'
    }
} as const;

export const $DeviceRequest = {
    type: 'object',
    description: 'A request for devices to be sent to device drivers',
    properties: {
        Driver: {
            type: 'string',
            example: 'nvidia'
        },
        Count: {
            type: 'integer',
            example: -1
        },
        DeviceIDs: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['0', '1', 'GPU-fef8089b-4820-abfc-e83e-94318197576e']
        },
        Capabilities: {
            description: `A list of capabilities; an OR list of AND lists of capabilities.
`,
            type: 'array',
            items: {
                type: 'array',
                items: {
                    type: 'string'
                }
            },
            example: [['gpu', 'nvidia', 'compute']]
        },
        Options: {
            description: `Driver-specific options, specified as a key/value pairs. These options
are passed directly to the driver.
`,
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $ThrottleDevice = {
    type: 'object',
    properties: {
        Path: {
            description: 'Device path',
            type: 'string'
        },
        Rate: {
            description: 'Rate',
            type: 'integer',
            format: 'int64',
            minimum: 0
        }
    }
} as const;

export const $Mount = {
    type: 'object',
    properties: {
        Target: {
            description: 'Container path.',
            type: 'string'
        },
        Source: {
            description: 'Mount source (e.g. a volume name, a host path).',
            type: 'string'
        },
        Type: {
            description: `The mount type. Available types:

- \`bind\` Mounts a file or directory from the host into the container. Must exist prior to creating the container.
- \`volume\` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.
- \`tmpfs\` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
- \`npipe\` Mounts a named pipe from the host into the container. Must exist prior to creating the container.
- \`cluster\` a Swarm cluster volume
`,
            type: 'string',
            enum: ['bind', 'volume', 'tmpfs', 'npipe', 'cluster']
        },
        ReadOnly: {
            description: 'Whether the mount should be read-only.',
            type: 'boolean'
        },
        Consistency: {
            description: 'The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.',
            type: 'string'
        },
        BindOptions: {
            description: 'Optional configuration for the `bind` type.',
            type: 'object',
            properties: {
                Propagation: {
                    description: 'A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.',
                    type: 'string',
                    enum: ['private', 'rprivate', 'shared', 'rshared', 'slave', 'rslave']
                },
                NonRecursive: {
                    description: 'Disable recursive bind mount.',
                    type: 'boolean',
                    default: false
                },
                CreateMountpoint: {
                    description: 'Create mount point on host if missing',
                    type: 'boolean',
                    default: false
                },
                ReadOnlyNonRecursive: {
                    description: `Make the mount non-recursively read-only, but still leave the mount recursive
(unless NonRecursive is set to \`true\` in conjunction).

Addded in v1.44, before that version all read-only mounts were
non-recursive by default. To match the previous behaviour this
will default to \`true\` for clients on versions prior to v1.44.
`,
                    type: 'boolean',
                    default: false
                },
                ReadOnlyForceRecursive: {
                    description: 'Raise an error if the mount cannot be made recursively read-only.',
                    type: 'boolean',
                    default: false
                }
            }
        },
        VolumeOptions: {
            description: 'Optional configuration for the `volume` type.',
            type: 'object',
            properties: {
                NoCopy: {
                    description: 'Populate volume with data from the target.',
                    type: 'boolean',
                    default: false
                },
                Labels: {
                    description: 'User-defined key/value metadata.',
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                },
                DriverConfig: {
                    description: 'Map of driver specific options',
                    type: 'object',
                    properties: {
                        Name: {
                            description: 'Name of the driver to use to create the volume.',
                            type: 'string'
                        },
                        Options: {
                            description: 'key/value map of driver specific options.',
                            type: 'object',
                            additionalProperties: {
                                type: 'string'
                            }
                        }
                    }
                },
                Subpath: {
                    description: 'Source path inside the volume. Must be relative without any back traversals.',
                    type: 'string',
                    example: 'dir-inside-volume/subdirectory'
                }
            }
        },
        TmpfsOptions: {
            description: 'Optional configuration for the `tmpfs` type.',
            type: 'object',
            properties: {
                SizeBytes: {
                    description: 'The size for the tmpfs mount in bytes.',
                    type: 'integer',
                    format: 'int64'
                },
                Mode: {
                    description: 'The permission mode for the tmpfs mount in an integer.',
                    type: 'integer'
                }
            }
        }
    }
} as const;

export const $RestartPolicy = {
    description: `The behavior to apply when the container exits. The default is not to
restart.

An ever increasing delay (double the previous delay, starting at 100ms) is
added before each restart to prevent flooding the server.
`,
    type: 'object',
    properties: {
        Name: {
            type: 'string',
            description: `- Empty string means not to restart
- \`no\` Do not automatically restart
- \`always\` Always restart
- \`unless-stopped\` Restart always except when the user has manually stopped the container
- \`on-failure\` Restart only when the container exit code is non-zero
`,
            enum: ['', 'no', 'always', 'unless-stopped', 'on-failure']
        },
        MaximumRetryCount: {
            type: 'integer',
            description: `If \`on-failure\` is used, the number of times to retry before giving up.
`
        }
    }
} as const;

export const $Resources = {
    description: "A container's resources (cgroups config, ulimits, etc)",
    type: 'object',
    properties: {
        CpuShares: {
            description: `An integer value representing this container's relative CPU weight
versus other containers.
`,
            type: 'integer'
        },
        Memory: {
            description: 'Memory limit in bytes.',
            type: 'integer',
            format: 'int64',
            default: 0
        },
        CgroupParent: {
            description: `Path to \`cgroups\` under which the container's \`cgroup\` is created. If
the path is not absolute, the path is considered to be relative to the
\`cgroups\` path of the init process. Cgroups are created if they do not
already exist.
`,
            type: 'string'
        },
        BlkioWeight: {
            description: 'Block IO weight (relative weight).',
            type: 'integer',
            minimum: 0,
            maximum: 1000
        },
        BlkioWeightDevice: {
            description: `Block IO weight (relative device weight) in the form:

\`\`\`
[{"Path": "device_path", "Weight": weight}]
\`\`\`
`,
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    Path: {
                        type: 'string'
                    },
                    Weight: {
                        type: 'integer',
                        minimum: 0
                    }
                }
            }
        },
        BlkioDeviceReadBps: {
            description: `Limit read rate (bytes per second) from a device, in the form:

\`\`\`
[{"Path": "device_path", "Rate": rate}]
\`\`\`
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/ThrottleDevice'
            }
        },
        BlkioDeviceWriteBps: {
            description: `Limit write rate (bytes per second) to a device, in the form:

\`\`\`
[{"Path": "device_path", "Rate": rate}]
\`\`\`
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/ThrottleDevice'
            }
        },
        BlkioDeviceReadIOps: {
            description: `Limit read rate (IO per second) from a device, in the form:

\`\`\`
[{"Path": "device_path", "Rate": rate}]
\`\`\`
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/ThrottleDevice'
            }
        },
        BlkioDeviceWriteIOps: {
            description: `Limit write rate (IO per second) to a device, in the form:

\`\`\`
[{"Path": "device_path", "Rate": rate}]
\`\`\`
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/ThrottleDevice'
            }
        },
        CpuPeriod: {
            description: 'The length of a CPU period in microseconds.',
            type: 'integer',
            format: 'int64'
        },
        CpuQuota: {
            description: `Microseconds of CPU time that the container can get in a CPU period.
`,
            type: 'integer',
            format: 'int64'
        },
        CpuRealtimePeriod: {
            description: `The length of a CPU real-time period in microseconds. Set to 0 to
allocate no time allocated to real-time tasks.
`,
            type: 'integer',
            format: 'int64'
        },
        CpuRealtimeRuntime: {
            description: `The length of a CPU real-time runtime in microseconds. Set to 0 to
allocate no time allocated to real-time tasks.
`,
            type: 'integer',
            format: 'int64'
        },
        CpusetCpus: {
            description: `CPUs in which to allow execution (e.g., \`0-3\`, \`0,1\`).
`,
            type: 'string',
            example: '0-3'
        },
        CpusetMems: {
            description: `Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only
effective on NUMA systems.
`,
            type: 'string'
        },
        Devices: {
            description: 'A list of devices to add to the container.',
            type: 'array',
            items: {
                '$ref': '#/definitions/DeviceMapping'
            }
        },
        DeviceCgroupRules: {
            description: 'a list of cgroup rules to apply to the container',
            type: 'array',
            items: {
                type: 'string',
                example: 'c 13:* rwm'
            }
        },
        DeviceRequests: {
            description: `A list of requests for devices to be sent to device drivers.
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/DeviceRequest'
            }
        },
        KernelMemoryTCP: {
            description: `Hard limit for kernel TCP buffer memory (in bytes). Depending on the
OCI runtime in use, this option may be ignored. It is no longer supported
by the default (runc) runtime.

This field is omitted when empty.
`,
            type: 'integer',
            format: 'int64'
        },
        MemoryReservation: {
            description: 'Memory soft limit in bytes.',
            type: 'integer',
            format: 'int64'
        },
        MemorySwap: {
            description: `Total memory limit (memory + swap). Set as \`-1\` to enable unlimited
swap.
`,
            type: 'integer',
            format: 'int64'
        },
        MemorySwappiness: {
            description: `Tune a container's memory swappiness behavior. Accepts an integer
between 0 and 100.
`,
            type: 'integer',
            format: 'int64',
            minimum: 0,
            maximum: 100
        },
        NanoCpus: {
            description: 'CPU quota in units of 10<sup>-9</sup> CPUs.',
            type: 'integer',
            format: 'int64'
        },
        OomKillDisable: {
            description: 'Disable OOM Killer for the container.',
            type: 'boolean'
        },
        Init: {
            description: `Run an init inside the container that forwards signals and reaps
processes. This field is omitted if empty, and the default (as
configured on the daemon) is used.
`,
            type: 'boolean',
            'x-nullable': true
        },
        PidsLimit: {
            description: `Tune a container's PIDs limit. Set \`0\` or \`-1\` for unlimited, or \`null\`
to not change.
`,
            type: 'integer',
            format: 'int64',
            'x-nullable': true
        },
        Ulimits: {
            description: `A list of resource limits to set in the container. For example:

\`\`\`
{"Name": "nofile", "Soft": 1024, "Hard": 2048}
\`\`\`
`,
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    Name: {
                        description: 'Name of ulimit',
                        type: 'string'
                    },
                    Soft: {
                        description: 'Soft limit',
                        type: 'integer'
                    },
                    Hard: {
                        description: 'Hard limit',
                        type: 'integer'
                    }
                }
            }
        },
        CpuCount: {
            description: `The number of usable CPUs (Windows only).

On Windows Server containers, the processor resource controls are
mutually exclusive. The order of precedence is \`CPUCount\` first, then
\`CPUShares\`, and \`CPUPercent\` last.
`,
            type: 'integer',
            format: 'int64'
        },
        CpuPercent: {
            description: `The usable percentage of the available CPUs (Windows only).

On Windows Server containers, the processor resource controls are
mutually exclusive. The order of precedence is \`CPUCount\` first, then
\`CPUShares\`, and \`CPUPercent\` last.
`,
            type: 'integer',
            format: 'int64'
        },
        IOMaximumIOps: {
            description: 'Maximum IOps for the container system drive (Windows only)',
            type: 'integer',
            format: 'int64'
        },
        IOMaximumBandwidth: {
            description: `Maximum IO in bytes per second for the container system drive
(Windows only).
`,
            type: 'integer',
            format: 'int64'
        }
    }
} as const;

export const $Limit = {
    description: `An object describing a limit on resources which can be requested by a task.
`,
    type: 'object',
    properties: {
        NanoCPUs: {
            type: 'integer',
            format: 'int64',
            example: 4000000000
        },
        MemoryBytes: {
            type: 'integer',
            format: 'int64',
            example: 8272408576
        },
        Pids: {
            description: `Limits the maximum number of PIDs in the container. Set \`0\` for unlimited.
`,
            type: 'integer',
            format: 'int64',
            default: 0,
            example: 100
        }
    }
} as const;

export const $ResourceObject = {
    description: `An object describing the resources which can be advertised by a node and
requested by a task.
`,
    type: 'object',
    properties: {
        NanoCPUs: {
            type: 'integer',
            format: 'int64',
            example: 4000000000
        },
        MemoryBytes: {
            type: 'integer',
            format: 'int64',
            example: 8272408576
        },
        GenericResources: {
            '$ref': '#/definitions/GenericResources'
        }
    }
} as const;

export const $GenericResources = {
    description: `User-defined resources can be either Integer resources (e.g, \`SSD=3\`) or
String resources (e.g, \`GPU=UUID1\`).
`,
    type: 'array',
    items: {
        type: 'object',
        properties: {
            NamedResourceSpec: {
                type: 'object',
                properties: {
                    Kind: {
                        type: 'string'
                    },
                    Value: {
                        type: 'string'
                    }
                }
            },
            DiscreteResourceSpec: {
                type: 'object',
                properties: {
                    Kind: {
                        type: 'string'
                    },
                    Value: {
                        type: 'integer',
                        format: 'int64'
                    }
                }
            }
        }
    },
    example: [
        {
            DiscreteResourceSpec: {
                Kind: 'SSD',
                Value: 3
            }
        },
        {
            NamedResourceSpec: {
                Kind: 'GPU',
                Value: 'UUID1'
            }
        },
        {
            NamedResourceSpec: {
                Kind: 'GPU',
                Value: 'UUID2'
            }
        }
    ]
} as const;

export const $HealthConfig = {
    description: 'A test to perform to check that the container is healthy.',
    type: 'object',
    properties: {
        Test: {
            description: `The test to perform. Possible values are:

- \`[]\` inherit healthcheck from image or parent image
- \`["NONE"]\` disable healthcheck
- \`["CMD", args...]\` exec arguments directly
- \`["CMD-SHELL", command]\` run command with system's default shell
`,
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Interval: {
            description: `The time to wait between checks in nanoseconds. It should be 0 or at
least 1000000 (1 ms). 0 means inherit.
`,
            type: 'integer',
            format: 'int64'
        },
        Timeout: {
            description: `The time to wait before considering the check to have hung. It should
be 0 or at least 1000000 (1 ms). 0 means inherit.
`,
            type: 'integer',
            format: 'int64'
        },
        Retries: {
            description: `The number of consecutive failures needed to consider a container as
unhealthy. 0 means inherit.
`,
            type: 'integer'
        },
        StartPeriod: {
            description: `Start period for the container to initialize before starting
health-retries countdown in nanoseconds. It should be 0 or at least
1000000 (1 ms). 0 means inherit.
`,
            type: 'integer',
            format: 'int64'
        },
        StartInterval: {
            description: `The time to wait between checks in nanoseconds during the start period.
It should be 0 or at least 1000000 (1 ms). 0 means inherit.
`,
            type: 'integer',
            format: 'int64'
        }
    }
} as const;

export const $Health = {
    description: `Health stores information about the container's healthcheck results.
`,
    type: 'object',
    'x-nullable': true,
    properties: {
        Status: {
            description: `Status is one of \`none\`, \`starting\`, \`healthy\` or \`unhealthy\`

- "none"      Indicates there is no healthcheck
- "starting"  Starting indicates that the container is not yet ready
- "healthy"   Healthy indicates that the container is running correctly
- "unhealthy" Unhealthy indicates that the container has a problem
`,
            type: 'string',
            enum: ['none', 'starting', 'healthy', 'unhealthy'],
            example: 'healthy'
        },
        FailingStreak: {
            description: 'FailingStreak is the number of consecutive failures',
            type: 'integer',
            example: 0
        },
        Log: {
            type: 'array',
            description: `Log contains the last few results (oldest first)
`,
            items: {
                '$ref': '#/definitions/HealthcheckResult'
            }
        }
    }
} as const;

export const $HealthcheckResult = {
    description: `HealthcheckResult stores information about a single run of a healthcheck probe
`,
    type: 'object',
    'x-nullable': true,
    properties: {
        Start: {
            description: `Date and time at which this check started in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'date-time',
            example: '2020-01-04T10:44:24.496525531Z'
        },
        End: {
            description: `Date and time at which this check ended in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2020-01-04T10:45:21.364524523Z'
        },
        ExitCode: {
            description: `ExitCode meanings:

- \`0\` healthy
- \`1\` unhealthy
- \`2\` reserved (considered unhealthy)
- other values: error running probe
`,
            type: 'integer',
            example: 0
        },
        Output: {
            description: 'Output from last check',
            type: 'string'
        }
    }
} as const;

export const $HostConfig = {
    description: 'Container configuration that depends on the host we are running on',
    allOf: [
        {
            '$ref': '#/definitions/Resources'
        },
        {
            type: 'object',
            properties: {
                Binds: {
                    type: 'array',
                    description: `A list of volume bindings for this container. Each volume binding
is a string in one of these forms:

- \`host-src:container-dest[:options]\` to bind-mount a host path
  into the container. Both \`host-src\`, and \`container-dest\` must
  be an _absolute_ path.
- \`volume-name:container-dest[:options]\` to bind-mount a volume
  managed by a volume driver into the container. \`container-dest\`
  must be an _absolute_ path.

\`options\` is an optional, comma-delimited list of:

- \`nocopy\` disables automatic copying of data from the container
  path to the volume. The \`nocopy\` flag only applies to named volumes.
- \`[ro|rw]\` mounts a volume read-only or read-write, respectively.
  If omitted or set to \`rw\`, volumes are mounted read-write.
- \`[z|Z]\` applies SELinux labels to allow or deny multiple containers
  to read and write to the same volume.
    - \`z\`: a _shared_ content label is applied to the content. This
      label indicates that multiple containers can share the volume
      content, for both reading and writing.
    - \`Z\`: a _private unshared_ label is applied to the content.
      This label indicates that only the current container can use
      a private volume. Labeling systems such as SELinux require
      proper labels to be placed on volume content that is mounted
      into a container. Without a label, the security system can
      prevent a container's processes from using the content. By
      default, the labels set by the host operating system are not
      modified.
- \`[[r]shared|[r]slave|[r]private]\` specifies mount
  [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).
  This only applies to bind-mounted volumes, not internal volumes
  or named volumes. Mount propagation requires the source mount
  point (the location where the source directory is mounted in the
  host operating system) to have the correct propagation properties.
  For shared volumes, the source mount point must be set to \`shared\`.
  For slave volumes, the mount must be set to either \`shared\` or
  \`slave\`.
`,
                    items: {
                        type: 'string'
                    }
                },
                ContainerIDFile: {
                    type: 'string',
                    description: 'Path to a file where the container ID is written'
                },
                LogConfig: {
                    type: 'object',
                    description: 'The logging configuration for this container',
                    properties: {
                        Type: {
                            type: 'string',
                            enum: ['json-file', 'syslog', 'journald', 'gelf', 'fluentd', 'awslogs', 'splunk', 'etwlogs', 'none']
                        },
                        Config: {
                            type: 'object',
                            additionalProperties: {
                                type: 'string'
                            }
                        }
                    }
                },
                NetworkMode: {
                    type: 'string',
                    description: `Network mode to use for this container. Supported standard values
are: \`bridge\`, \`host\`, \`none\`, and \`container:<name|id>\`. Any
other value is taken as a custom network's name to which this
container should connect to.
`
                },
                PortBindings: {
                    '$ref': '#/definitions/PortMap'
                },
                RestartPolicy: {
                    '$ref': '#/definitions/RestartPolicy'
                },
                AutoRemove: {
                    type: 'boolean',
                    description: `Automatically remove the container when the container's process
exits. This has no effect if \`RestartPolicy\` is set.
`
                },
                VolumeDriver: {
                    type: 'string',
                    description: 'Driver that this container uses to mount volumes.'
                },
                VolumesFrom: {
                    type: 'array',
                    description: `A list of volumes to inherit from another container, specified in
the form \`<container name>[:<ro|rw>]\`.
`,
                    items: {
                        type: 'string'
                    }
                },
                Mounts: {
                    description: `Specification for mounts to be added to the container.
`,
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/Mount'
                    }
                },
                ConsoleSize: {
                    type: 'array',
                    description: `Initial console size, as an \`[height, width]\` array.
`,
                    'x-nullable': true,
                    minItems: 2,
                    maxItems: 2,
                    items: {
                        type: 'integer',
                        minimum: 0
                    }
                },
                Annotations: {
                    type: 'object',
                    description: `Arbitrary non-identifying metadata attached to container and
provided to the runtime when the container is started.
`,
                    additionalProperties: {
                        type: 'string'
                    }
                },
                CapAdd: {
                    type: 'array',
                    description: `A list of kernel capabilities to add to the container. Conflicts
with option 'Capabilities'.
`,
                    items: {
                        type: 'string'
                    }
                },
                CapDrop: {
                    type: 'array',
                    description: `A list of kernel capabilities to drop from the container. Conflicts
with option 'Capabilities'.
`,
                    items: {
                        type: 'string'
                    }
                },
                CgroupnsMode: {
                    type: 'string',
                    enum: ['private', 'host'],
                    description: `cgroup namespace mode for the container. Possible values are:

- \`"private"\`: the container runs in its own private cgroup namespace
- \`"host"\`: use the host system's cgroup namespace

If not specified, the daemon default is used, which can either be \`"private"\`
or \`"host"\`, depending on daemon version, kernel support and configuration.
`
                },
                Dns: {
                    type: 'array',
                    description: 'A list of DNS servers for the container to use.',
                    items: {
                        type: 'string'
                    }
                },
                DnsOptions: {
                    type: 'array',
                    description: 'A list of DNS options.',
                    items: {
                        type: 'string'
                    }
                },
                DnsSearch: {
                    type: 'array',
                    description: 'A list of DNS search domains.',
                    items: {
                        type: 'string'
                    }
                },
                ExtraHosts: {
                    type: 'array',
                    description: `A list of hostnames/IP mappings to add to the container's \`/etc/hosts\`
file. Specified in the form \`["hostname:IP"]\`.
`,
                    items: {
                        type: 'string'
                    }
                },
                GroupAdd: {
                    type: 'array',
                    description: `A list of additional groups that the container process will run as.
`,
                    items: {
                        type: 'string'
                    }
                },
                IpcMode: {
                    type: 'string',
                    description: `IPC sharing mode for the container. Possible values are:

- \`"none"\`: own private IPC namespace, with /dev/shm not mounted
- \`"private"\`: own private IPC namespace
- \`"shareable"\`: own private IPC namespace, with a possibility to share it with other containers
- \`"container:<name|id>"\`: join another (shareable) container's IPC namespace
- \`"host"\`: use the host system's IPC namespace

If not specified, daemon default is used, which can either be \`"private"\`
or \`"shareable"\`, depending on daemon version and configuration.
`
                },
                Cgroup: {
                    type: 'string',
                    description: 'Cgroup to use for the container.'
                },
                Links: {
                    type: 'array',
                    description: `A list of links for the container in the form \`container_name:alias\`.
`,
                    items: {
                        type: 'string'
                    }
                },
                OomScoreAdj: {
                    type: 'integer',
                    description: `An integer value containing the score given to the container in
order to tune OOM killer preferences.
`,
                    example: 500
                },
                PidMode: {
                    type: 'string',
                    description: `Set the PID (Process) Namespace mode for the container. It can be
either:

- \`"container:<name|id>"\`: joins another container's PID namespace
- \`"host"\`: use the host's PID namespace inside the container
`
                },
                Privileged: {
                    type: 'boolean',
                    description: 'Gives the container full access to the host.'
                },
                PublishAllPorts: {
                    type: 'boolean',
                    description: `Allocates an ephemeral host port for all of a container's
exposed ports.

Ports are de-allocated when the container stops and allocated when
the container starts. The allocated port might be changed when
restarting the container.

The port is selected from the ephemeral port range that depends on
the kernel. For example, on Linux the range is defined by
\`/proc/sys/net/ipv4/ip_local_port_range\`.
`
                },
                ReadonlyRootfs: {
                    type: 'boolean',
                    description: "Mount the container's root filesystem as read only."
                },
                SecurityOpt: {
                    type: 'array',
                    description: `A list of string values to customize labels for MLS systems, such
as SELinux.
`,
                    items: {
                        type: 'string'
                    }
                },
                StorageOpt: {
                    type: 'object',
                    description: `Storage driver options for this container, in the form \`{"size": "120G"}\`.
`,
                    additionalProperties: {
                        type: 'string'
                    }
                },
                Tmpfs: {
                    type: 'object',
                    description: `A map of container directories which should be replaced by tmpfs
mounts, and their corresponding mount options. For example:

\`\`\`
{ "/run": "rw,noexec,nosuid,size=65536k" }
\`\`\`
`,
                    additionalProperties: {
                        type: 'string'
                    }
                },
                UTSMode: {
                    type: 'string',
                    description: 'UTS namespace to use for the container.'
                },
                UsernsMode: {
                    type: 'string',
                    description: `Sets the usernamespace mode for the container when usernamespace
remapping option is enabled.
`
                },
                ShmSize: {
                    type: 'integer',
                    format: 'int64',
                    description: `Size of \`/dev/shm\` in bytes. If omitted, the system uses 64MB.
`,
                    minimum: 0
                },
                Sysctls: {
                    type: 'object',
                    description: `A list of kernel parameters (sysctls) to set in the container.
For example:

\`\`\`
{"net.ipv4.ip_forward": "1"}
\`\`\`
`,
                    additionalProperties: {
                        type: 'string'
                    }
                },
                Runtime: {
                    type: 'string',
                    description: 'Runtime to use with this container.'
                },
                Isolation: {
                    type: 'string',
                    description: `Isolation technology of the container. (Windows only)
`,
                    enum: ['default', 'process', 'hyperv']
                },
                MaskedPaths: {
                    type: 'array',
                    description: `The list of paths to be masked inside the container (this overrides
the default set of paths).
`,
                    items: {
                        type: 'string'
                    }
                },
                ReadonlyPaths: {
                    type: 'array',
                    description: `The list of paths to be set as read-only inside the container
(this overrides the default set of paths).
`,
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    ]
} as const;

export const $ContainerConfig = {
    description: `Configuration for a container that is portable between hosts.

When used as \`ContainerConfig\` field in an image, \`ContainerConfig\` is an
optional field containing the configuration of the container that was last
committed when creating the image.

Previous versions of Docker builder used this field to store build cache,
and it is not in active use anymore.
`,
    type: 'object',
    properties: {
        Hostname: {
            description: `The hostname to use for the container, as a valid RFC 1123 hostname.
`,
            type: 'string',
            example: '439f4e91bd1d'
        },
        Domainname: {
            description: `The domain name to use for the container.
`,
            type: 'string'
        },
        User: {
            description: 'The user that commands are run as inside the container.',
            type: 'string'
        },
        AttachStdin: {
            description: 'Whether to attach to `stdin`.',
            type: 'boolean',
            default: false
        },
        AttachStdout: {
            description: 'Whether to attach to `stdout`.',
            type: 'boolean',
            default: true
        },
        AttachStderr: {
            description: 'Whether to attach to `stderr`.',
            type: 'boolean',
            default: true
        },
        ExposedPorts: {
            description: `An object mapping ports to an empty object in the form:

\`{"<port>/<tcp|udp|sctp>": {}}\`
`,
            type: 'object',
            'x-nullable': true,
            additionalProperties: {
                type: 'object',
                enum: [
                    {}
                ],
                default: {}
            },
            example: {
                '80/tcp': {},
                '443/tcp': {}
            }
        },
        Tty: {
            description: `Attach standard streams to a TTY, including \`stdin\` if it is not closed.
`,
            type: 'boolean',
            default: false
        },
        OpenStdin: {
            description: 'Open `stdin`',
            type: 'boolean',
            default: false
        },
        StdinOnce: {
            description: 'Close `stdin` after one attached client disconnects',
            type: 'boolean',
            default: false
        },
        Env: {
            description: `A list of environment variables to set inside the container in the
form \`["VAR=value", ...]\`. A variable without \`=\` is removed from the
environment, rather than to have an empty value.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin']
        },
        Cmd: {
            description: `Command to run specified as a string or an array of strings.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['/bin/sh']
        },
        Healthcheck: {
            '$ref': '#/definitions/HealthConfig'
        },
        ArgsEscaped: {
            description: 'Command is already escaped (Windows only)',
            type: 'boolean',
            default: false,
            example: false,
            'x-nullable': true
        },
        Image: {
            description: `The name (or reference) of the image to use when creating the container,
or which was used when the container was created.
`,
            type: 'string',
            example: 'example-image:1.0'
        },
        Volumes: {
            description: `An object mapping mount point paths inside the container to empty
objects.
`,
            type: 'object',
            additionalProperties: {
                type: 'object',
                enum: [
                    {}
                ],
                default: {}
            }
        },
        WorkingDir: {
            description: 'The working directory for commands to run in.',
            type: 'string',
            example: '/public/'
        },
        Entrypoint: {
            description: `The entry point for the container as a string or an array of strings.

If the array consists of exactly one empty string (\`[""]\`) then the
entry point is reset to system default (i.e., the entry point used by
docker when there is no \`ENTRYPOINT\` instruction in the \`Dockerfile\`).
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: []
        },
        NetworkDisabled: {
            description: 'Disable networking for the container.',
            type: 'boolean',
            'x-nullable': true
        },
        MacAddress: {
            description: `MAC address of the container.

Deprecated: this field is deprecated in API v1.44 and up. Use EndpointSettings.MacAddress instead.
`,
            type: 'string',
            'x-nullable': true
        },
        OnBuild: {
            description: `\`ONBUILD\` metadata that were defined in the image's \`Dockerfile\`.
`,
            type: 'array',
            'x-nullable': true,
            items: {
                type: 'string'
            },
            example: []
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        StopSignal: {
            description: `Signal to stop a container as a string or unsigned integer.
`,
            type: 'string',
            example: 'SIGTERM',
            'x-nullable': true
        },
        StopTimeout: {
            description: 'Timeout to stop a container in seconds.',
            type: 'integer',
            default: 10,
            'x-nullable': true
        },
        Shell: {
            description: `Shell for when \`RUN\`, \`CMD\`, and \`ENTRYPOINT\` uses a shell.
`,
            type: 'array',
            'x-nullable': true,
            items: {
                type: 'string'
            },
            example: ['/bin/sh', '-c']
        }
    }
} as const;

export const $NetworkingConfig = {
    description: `NetworkingConfig represents the container's networking configuration for
each of its interfaces.
It is used for the networking configs specified in the \`docker create\`
and \`docker network connect\` commands.
`,
    type: 'object',
    properties: {
        EndpointsConfig: {
            description: `A mapping of network name to endpoint configuration for that network.
The endpoint configuration can be left empty to connect to that
network with no particular endpoint configuration.
`,
            type: 'object',
            additionalProperties: {
                '$ref': '#/definitions/EndpointSettings'
            }
        }
    },
    example: {
        EndpointsConfig: {
            isolated_nw: {
                IPAMConfig: {
                    IPv4Address: '172.20.30.33',
                    IPv6Address: '2001:db8:abcd::3033',
                    LinkLocalIPs: ['169.254.34.68', 'fe80::3468']
                },
                MacAddress: '02:42:ac:12:05:02',
                Links: ['container_1', 'container_2'],
                Aliases: ['server_x', 'server_y']
            },
            database_nw: {}
        }
    }
} as const;

export const $NetworkSettings = {
    description: 'NetworkSettings exposes the network settings in the API',
    type: 'object',
    properties: {
        Bridge: {
            description: `Name of the default bridge interface when dockerd's --bridge flag is set.
`,
            type: 'string',
            example: 'docker0'
        },
        SandboxID: {
            description: "SandboxID uniquely represents a container's network stack.",
            type: 'string',
            example: '9d12daf2c33f5959c8bf90aa513e4f65b561738661003029ec84830cd503a0c3'
        },
        HairpinMode: {
            description: `Indicates if hairpin NAT should be enabled on the virtual interface.

Deprecated: This field is never set and will be removed in a future release.
`,
            type: 'boolean',
            example: false
        },
        LinkLocalIPv6Address: {
            description: `IPv6 unicast address using the link-local prefix.

Deprecated: This field is never set and will be removed in a future release.
`,
            type: 'string',
            example: ''
        },
        LinkLocalIPv6PrefixLen: {
            description: `Prefix length of the IPv6 unicast address.

Deprecated: This field is never set and will be removed in a future release.
`,
            type: 'integer',
            example: ''
        },
        Ports: {
            '$ref': '#/definitions/PortMap'
        },
        SandboxKey: {
            description: 'SandboxKey is the full path of the netns handle',
            type: 'string',
            example: '/var/run/docker/netns/8ab54b426c38'
        },
        SecondaryIPAddresses: {
            description: 'Deprecated: This field is never set and will be removed in a future release.',
            type: 'array',
            items: {
                '$ref': '#/definitions/Address'
            },
            'x-nullable': true
        },
        SecondaryIPv6Addresses: {
            description: 'Deprecated: This field is never set and will be removed in a future release.',
            type: 'array',
            items: {
                '$ref': '#/definitions/Address'
            },
            'x-nullable': true
        },
        EndpointID: {
            description: `EndpointID uniquely represents a service endpoint in a Sandbox.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: 'b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b'
        },
        Gateway: {
            description: `Gateway address for the default "bridge" network.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: '172.17.0.1'
        },
        GlobalIPv6Address: {
            description: `Global IPv6 address for the default "bridge" network.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: '2001:db8::5689'
        },
        GlobalIPv6PrefixLen: {
            description: `Mask length of the global IPv6 address.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'integer',
            example: 64
        },
        IPAddress: {
            description: `IPv4 address for the default "bridge" network.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: '172.17.0.4'
        },
        IPPrefixLen: {
            description: `Mask length of the IPv4 address.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'integer',
            example: 16
        },
        IPv6Gateway: {
            description: `IPv6 gateway address for this network.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: '2001:db8:2::100'
        },
        MacAddress: {
            description: `MAC address for the container on the default "bridge" network.

<p><br /></p>

> **Deprecated**: This field is only propagated when attached to the
> default "bridge" network. Use the information from the "bridge"
> network inside the \`Networks\` map instead, which contains the same
> information. This field was deprecated in Docker 1.9 and is scheduled
> to be removed in Docker 17.12.0
`,
            type: 'string',
            example: '02:42:ac:11:00:04'
        },
        Networks: {
            description: `Information about all networks that the container is connected to.
`,
            type: 'object',
            additionalProperties: {
                '$ref': '#/definitions/EndpointSettings'
            }
        }
    }
} as const;

export const $Address = {
    description: 'Address represents an IPv4 or IPv6 IP address.',
    type: 'object',
    properties: {
        Addr: {
            description: 'IP address.',
            type: 'string'
        },
        PrefixLen: {
            description: 'Mask length of the IP address.',
            type: 'integer'
        }
    }
} as const;

export const $PortMap = {
    description: `PortMap describes the mapping of container ports to host ports, using the
container's port-number and protocol as key in the format \`<port>/<protocol>\`,
for example, \`80/udp\`.

If a container's port is mapped for multiple protocols, separate entries
are added to the mapping table.
`,
    type: 'object',
    additionalProperties: {
        type: 'array',
        'x-nullable': true,
        items: {
            '$ref': '#/definitions/PortBinding'
        }
    },
    example: {
        '443/tcp': [
            {
                HostIp: '127.0.0.1',
                HostPort: '4443'
            }
        ],
        '80/tcp': [
            {
                HostIp: '0.0.0.0',
                HostPort: '80'
            },
            {
                HostIp: '0.0.0.0',
                HostPort: '8080'
            }
        ],
        '80/udp': [
            {
                HostIp: '0.0.0.0',
                HostPort: '80'
            }
        ],
        '53/udp': [
            {
                HostIp: '0.0.0.0',
                HostPort: '53'
            }
        ],
        '2377/tcp': null
    }
} as const;

export const $PortBinding = {
    description: `PortBinding represents a binding between a host IP address and a host
port.
`,
    type: 'object',
    properties: {
        HostIp: {
            description: "Host IP address that the container's port is mapped to.",
            type: 'string',
            example: '127.0.0.1'
        },
        HostPort: {
            description: "Host port number that the container's port is mapped to.",
            type: 'string',
            example: '4443'
        }
    }
} as const;

export const $GraphDriverData = {
    description: `Information about the storage driver used to store the container's and
image's filesystem.
`,
    type: 'object',
    required: ['Name', 'Data'],
    properties: {
        Name: {
            description: 'Name of the storage driver.',
            type: 'string',
            'x-nullable': false,
            example: 'overlay2'
        },
        Data: {
            description: `Low-level storage metadata, provided as key/value pairs.

This information is driver-specific, and depends on the storage-driver
in use, and should be used for informational purposes only.
`,
            type: 'object',
            'x-nullable': false,
            additionalProperties: {
                type: 'string'
            },
            example: {
                MergedDir: '/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/merged',
                UpperDir: '/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/diff',
                WorkDir: '/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/work'
            }
        }
    }
} as const;

export const $FilesystemChange = {
    description: `Change in the container's filesystem.
`,
    type: 'object',
    required: ['Path', 'Kind'],
    properties: {
        Path: {
            description: `Path to file or directory that has changed.
`,
            type: 'string',
            'x-nullable': false
        },
        Kind: {
            '$ref': '#/definitions/ChangeType'
        }
    }
} as const;

export const $ChangeType = {
    description: `Kind of change

Can be one of:

- \`0\`: Modified ("C")
- \`1\`: Added ("A")
- \`2\`: Deleted ("D")
`,
    type: 'integer',
    format: 'uint8',
    enum: [0, 1, 2],
    'x-nullable': false
} as const;

export const $ImageInspect = {
    description: `Information about an image in the local image cache.
`,
    type: 'object',
    properties: {
        Id: {
            description: `ID is the content-addressable ID of an image.

This identifier is a content-addressable digest calculated from the
image's configuration (which includes the digests of layers used by
the image).

Note that this digest differs from the \`RepoDigests\` below, which
holds digests of image manifests that reference the image.
`,
            type: 'string',
            'x-nullable': false,
            example: 'sha256:ec3f0931a6e6b6855d76b2d7b0be30e81860baccd891b2e243280bf1cd8ad710'
        },
        RepoTags: {
            description: `List of image names/tags in the local image cache that reference this
image.

Multiple image tags can refer to the same image, and this list may be
empty if no tags reference the image, in which case the image is
"untagged", in which case it can still be referenced by its ID.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['example:1.0', 'example:latest', 'example:stable', 'internal.registry.example.com:5000/example:1.0']
        },
        RepoDigests: {
            description: `List of content-addressable digests of locally available image manifests
that the image is referenced from. Multiple manifests can refer to the
same image.

These digests are usually only available if the image was either pulled
from a registry, or if the image was pushed to a registry, which is when
the manifest is generated and its digest calculated.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['example@sha256:afcc7f1ac1b49db317a7196c902e61c6c3c4607d63599ee1a82d702d249a0ccb', 'internal.registry.example.com:5000/example@sha256:b69959407d21e8a062e0416bf13405bb2b71ed7a84dde4158ebafacfa06f5578']
        },
        Parent: {
            description: `ID of the parent image.

Depending on how the image was created, this field may be empty and
is only set for images that were built/created locally. This field
is empty if the image was pulled from an image registry.
`,
            type: 'string',
            'x-nullable': false,
            example: ''
        },
        Comment: {
            description: `Optional message that was set when committing or importing the image.
`,
            type: 'string',
            'x-nullable': false,
            example: ''
        },
        Created: {
            description: `Date and time at which the image was created, formatted in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.

This information is only available if present in the image,
and omitted otherwise.
`,
            type: 'string',
            format: 'dateTime',
            'x-nullable': true,
            example: '2022-02-04T21:20:12.497794809Z'
        },
        Container: {
            description: `The ID of the container that was used to create the image.

Depending on how the image was created, this field may be empty.

**Deprecated**: this field is kept for backward compatibility, but
will be removed in API v1.45.
`,
            type: 'string',
            example: '65974bc86f1770ae4bff79f651ebdbce166ae9aada632ee3fa9af3a264911735'
        },
        ContainerConfig: {
            description: `**Deprecated**: this field is kept for backward compatibility, but
will be removed in API v1.45.
`,
            '$ref': '#/definitions/ContainerConfig'
        },
        DockerVersion: {
            description: `The version of Docker that was used to build the image.

Depending on how the image was created, this field may be empty.
`,
            type: 'string',
            'x-nullable': false,
            example: '20.10.7'
        },
        Author: {
            description: `Name of the author that was specified when committing the image, or as
specified through MAINTAINER (deprecated) in the Dockerfile.
`,
            type: 'string',
            'x-nullable': false,
            example: ''
        },
        Config: {
            '$ref': '#/definitions/ContainerConfig'
        },
        Architecture: {
            description: `Hardware CPU architecture that the image runs on.
`,
            type: 'string',
            'x-nullable': false,
            example: 'arm'
        },
        Variant: {
            description: `CPU architecture variant (presently ARM-only).
`,
            type: 'string',
            'x-nullable': true,
            example: 'v7'
        },
        Os: {
            description: `Operating System the image is built to run on.
`,
            type: 'string',
            'x-nullable': false,
            example: 'linux'
        },
        OsVersion: {
            description: `Operating System version the image is built to run on (especially
for Windows).
`,
            type: 'string',
            example: '',
            'x-nullable': true
        },
        Size: {
            description: `Total size of the image including all layers it is composed of.
`,
            type: 'integer',
            format: 'int64',
            'x-nullable': false,
            example: 1239828
        },
        VirtualSize: {
            description: `Total size of the image including all layers it is composed of.

Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
`,
            type: 'integer',
            format: 'int64',
            example: 1239828
        },
        GraphDriver: {
            '$ref': '#/definitions/GraphDriverData'
        },
        RootFS: {
            description: `Information about the image's RootFS, including the layer IDs.
`,
            type: 'object',
            required: ['Type'],
            properties: {
                Type: {
                    type: 'string',
                    'x-nullable': false,
                    example: 'layers'
                },
                Layers: {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    example: ['sha256:1834950e52ce4d5a88a1bbd131c537f4d0e56d10ff0dd69e66be3b7dfa9df7e6', 'sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef']
                }
            }
        },
        Metadata: {
            description: `Additional metadata of the image in the local cache. This information
is local to the daemon, and not part of the image itself.
`,
            type: 'object',
            properties: {
                LastTagTime: {
                    description: `Date and time at which the image was last tagged in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.

This information is only available if the image was tagged locally,
and omitted otherwise.
`,
                    type: 'string',
                    format: 'dateTime',
                    example: '2022-02-28T14:40:02.623929178Z',
                    'x-nullable': true
                }
            }
        }
    }
} as const;

export const $ImageSummary = {
    type: 'object',
    'x-go-name': 'Summary',
    required: ['Id', 'ParentId', 'RepoTags', 'RepoDigests', 'Created', 'Size', 'SharedSize', 'Labels', 'Containers'],
    properties: {
        Id: {
            description: `ID is the content-addressable ID of an image.

This identifier is a content-addressable digest calculated from the
image's configuration (which includes the digests of layers used by
the image).

Note that this digest differs from the \`RepoDigests\` below, which
holds digests of image manifests that reference the image.
`,
            type: 'string',
            'x-nullable': false,
            example: 'sha256:ec3f0931a6e6b6855d76b2d7b0be30e81860baccd891b2e243280bf1cd8ad710'
        },
        ParentId: {
            description: `ID of the parent image.

Depending on how the image was created, this field may be empty and
is only set for images that were built/created locally. This field
is empty if the image was pulled from an image registry.
`,
            type: 'string',
            'x-nullable': false,
            example: ''
        },
        RepoTags: {
            description: `List of image names/tags in the local image cache that reference this
image.

Multiple image tags can refer to the same image, and this list may be
empty if no tags reference the image, in which case the image is
"untagged", in which case it can still be referenced by its ID.
`,
            type: 'array',
            'x-nullable': false,
            items: {
                type: 'string'
            },
            example: ['example:1.0', 'example:latest', 'example:stable', 'internal.registry.example.com:5000/example:1.0']
        },
        RepoDigests: {
            description: `List of content-addressable digests of locally available image manifests
that the image is referenced from. Multiple manifests can refer to the
same image.

These digests are usually only available if the image was either pulled
from a registry, or if the image was pushed to a registry, which is when
the manifest is generated and its digest calculated.
`,
            type: 'array',
            'x-nullable': false,
            items: {
                type: 'string'
            },
            example: ['example@sha256:afcc7f1ac1b49db317a7196c902e61c6c3c4607d63599ee1a82d702d249a0ccb', 'internal.registry.example.com:5000/example@sha256:b69959407d21e8a062e0416bf13405bb2b71ed7a84dde4158ebafacfa06f5578']
        },
        Created: {
            description: `Date and time at which the image was created as a Unix timestamp
(number of seconds sinds EPOCH).
`,
            type: 'integer',
            'x-nullable': false,
            example: '1644009612'
        },
        Size: {
            description: `Total size of the image including all layers it is composed of.
`,
            type: 'integer',
            format: 'int64',
            'x-nullable': false,
            example: 172064416
        },
        SharedSize: {
            description: `Total size of image layers that are shared between this image and other
images.

This size is not calculated by default. \`-1\` indicates that the value
has not been set / calculated.
`,
            type: 'integer',
            format: 'int64',
            'x-nullable': false,
            example: 1239828
        },
        VirtualSize: {
            description: `Total size of the image including all layers it is composed of.

Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.`,
            type: 'integer',
            format: 'int64',
            example: 172064416
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            'x-nullable': false,
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        Containers: {
            description: `Number of containers using this image. Includes both stopped and running
containers.

This size is not calculated by default, and depends on which API endpoint
is used. \`-1\` indicates that the value has not been set / calculated.
`,
            'x-nullable': false,
            type: 'integer',
            example: 2
        }
    }
} as const;

export const $AuthConfig = {
    type: 'object',
    properties: {
        username: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        serveraddress: {
            type: 'string'
        }
    },
    example: {
        username: 'hannibal',
        password: 'xxxx',
        serveraddress: 'https://index.docker.io/v1/'
    }
} as const;

export const $ProcessConfig = {
    type: 'object',
    properties: {
        privileged: {
            type: 'boolean'
        },
        user: {
            type: 'string'
        },
        tty: {
            type: 'boolean'
        },
        entrypoint: {
            type: 'string'
        },
        arguments: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const $Volume = {
    type: 'object',
    required: ['Name', 'Driver', 'Mountpoint', 'Labels', 'Scope', 'Options'],
    properties: {
        Name: {
            type: 'string',
            description: 'Name of the volume.',
            'x-nullable': false,
            example: 'tardis'
        },
        Driver: {
            type: 'string',
            description: 'Name of the volume driver used by the volume.',
            'x-nullable': false,
            example: 'custom'
        },
        Mountpoint: {
            type: 'string',
            description: 'Mount path of the volume on the host.',
            'x-nullable': false,
            example: '/var/lib/docker/volumes/tardis'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime',
            description: 'Date/Time the volume was created.',
            example: '2016-06-07T20:31:11.853781916Z'
        },
        Status: {
            type: 'object',
            description: `Low-level details about the volume, provided by the volume driver.
Details are returned as a map with key/value pairs:
\`{"key":"value","key2":"value2"}\`.

The \`Status\` field is optional, and is omitted if the volume driver
does not support this feature.
`,
            additionalProperties: {
                type: 'object'
            },
            example: {
                hello: 'world'
            }
        },
        Labels: {
            type: 'object',
            description: 'User-defined key/value metadata.',
            'x-nullable': false,
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        Scope: {
            type: 'string',
            description: `The level at which the volume exists. Either \`global\` for cluster-wide,
or \`local\` for machine level.
`,
            default: 'local',
            'x-nullable': false,
            enum: ['local', 'global'],
            example: 'local'
        },
        ClusterVolume: {
            '$ref': '#/definitions/ClusterVolume'
        },
        Options: {
            type: 'object',
            description: `The driver specific options used when creating the volume.
`,
            additionalProperties: {
                type: 'string'
            },
            example: {
                device: 'tmpfs',
                o: 'size=100m,uid=1000',
                type: 'tmpfs'
            }
        },
        UsageData: {
            type: 'object',
            'x-nullable': true,
            'x-go-name': 'UsageData',
            required: ['Size', 'RefCount'],
            description: `Usage details about the volume. This information is used by the
\`GET /system/df\` endpoint, and omitted in other endpoints.
`,
            properties: {
                Size: {
                    type: 'integer',
                    format: 'int64',
                    default: -1,
                    description: `Amount of disk space used by the volume (in bytes). This information
is only available for volumes created with the \`"local"\` volume
driver. For volumes created with other volume drivers, this field
is set to \`-1\` ("not available")
`,
                    'x-nullable': false
                },
                RefCount: {
                    type: 'integer',
                    format: 'int64',
                    default: -1,
                    description: `The number of containers referencing this volume. This field
is set to \`-1\` if the reference-count is not available.
`,
                    'x-nullable': false
                }
            }
        }
    }
} as const;

export const $VolumeCreateOptions = {
    description: 'Volume configuration',
    type: 'object',
    title: 'VolumeConfig',
    'x-go-name': 'CreateOptions',
    properties: {
        Name: {
            description: `The new volume's name. If not specified, Docker generates a name.
`,
            type: 'string',
            'x-nullable': false,
            example: 'tardis'
        },
        Driver: {
            description: 'Name of the volume driver to use.',
            type: 'string',
            default: 'local',
            'x-nullable': false,
            example: 'custom'
        },
        DriverOpts: {
            description: `A mapping of driver options and values. These options are
passed directly to the driver and are driver specific.
`,
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                device: 'tmpfs',
                o: 'size=100m,uid=1000',
                type: 'tmpfs'
            }
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        ClusterVolumeSpec: {
            '$ref': '#/definitions/ClusterVolumeSpec'
        }
    }
} as const;

export const $VolumeListResponse = {
    type: 'object',
    title: 'VolumeListResponse',
    'x-go-name': 'ListResponse',
    description: 'Volume list response',
    properties: {
        Volumes: {
            type: 'array',
            description: 'List of volumes',
            items: {
                '$ref': '#/definitions/Volume'
            }
        },
        Warnings: {
            type: 'array',
            description: `Warnings that occurred when fetching the list of volumes.
`,
            items: {
                type: 'string'
            },
            example: []
        }
    }
} as const;

export const $Network = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        Id: {
            type: 'string'
        },
        Created: {
            type: 'string',
            format: 'dateTime'
        },
        Scope: {
            type: 'string'
        },
        Driver: {
            type: 'string'
        },
        EnableIPv6: {
            type: 'boolean'
        },
        IPAM: {
            '$ref': '#/definitions/IPAM'
        },
        Internal: {
            type: 'boolean'
        },
        Attachable: {
            type: 'boolean'
        },
        Ingress: {
            type: 'boolean'
        },
        Containers: {
            type: 'object',
            additionalProperties: {
                '$ref': '#/definitions/NetworkContainer'
            }
        },
        Options: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        Labels: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    },
    example: {
        Name: 'net01',
        Id: '7d86d31b1478e7cca9ebed7e73aa0fdeec46c5ca29497431d3007d2d9e15ed99',
        Created: '2016-10-19T04:33:30.360899459Z',
        Scope: 'local',
        Driver: 'bridge',
        EnableIPv6: false,
        IPAM: {
            Driver: 'default',
            Config: [
                {
                    Subnet: '172.19.0.0/16',
                    Gateway: '172.19.0.1'
                }
            ],
            Options: {
                foo: 'bar'
            }
        },
        Internal: false,
        Attachable: false,
        Ingress: false,
        Containers: {
            '19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c': {
                Name: 'test',
                EndpointID: '628cadb8bcb92de107b2a1e516cbffe463e321f548feb37697cce00ad694f21a',
                MacAddress: '02:42:ac:13:00:02',
                IPv4Address: '172.19.0.2/16',
                IPv6Address: ''
            }
        },
        Options: {
            'com.docker.network.bridge.default_bridge': 'true',
            'com.docker.network.bridge.enable_icc': 'true',
            'com.docker.network.bridge.enable_ip_masquerade': 'true',
            'com.docker.network.bridge.host_binding_ipv4': '0.0.0.0',
            'com.docker.network.bridge.name': 'docker0',
            'com.docker.network.driver.mtu': '1500'
        },
        Labels: {
            'com.example.some-label': 'some-value',
            'com.example.some-other-label': 'some-other-value'
        }
    }
} as const;

export const $IPAM = {
    type: 'object',
    properties: {
        Driver: {
            description: 'Name of the IPAM driver to use.',
            type: 'string',
            default: 'default'
        },
        Config: {
            description: `List of IPAM configuration options, specified as a map:

\`\`\`
{"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}
\`\`\`
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/IPAMConfig'
            }
        },
        Options: {
            description: 'Driver-specific options, specified as a map.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $IPAMConfig = {
    type: 'object',
    properties: {
        Subnet: {
            type: 'string'
        },
        IPRange: {
            type: 'string'
        },
        Gateway: {
            type: 'string'
        },
        AuxiliaryAddresses: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $NetworkContainer = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        EndpointID: {
            type: 'string'
        },
        MacAddress: {
            type: 'string'
        },
        IPv4Address: {
            type: 'string'
        },
        IPv6Address: {
            type: 'string'
        }
    }
} as const;

export const $BuildInfo = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        stream: {
            type: 'string'
        },
        error: {
            type: 'string'
        },
        errorDetail: {
            '$ref': '#/definitions/ErrorDetail'
        },
        status: {
            type: 'string'
        },
        progress: {
            type: 'string'
        },
        progressDetail: {
            '$ref': '#/definitions/ProgressDetail'
        },
        aux: {
            '$ref': '#/definitions/ImageID'
        }
    }
} as const;

export const $BuildCache = {
    type: 'object',
    description: `BuildCache contains information about a build cache record.
`,
    properties: {
        ID: {
            type: 'string',
            description: `Unique ID of the build cache record.
`,
            example: 'ndlpt0hhvkqcdfkputsk4cq9c'
        },
        Parent: {
            description: `ID of the parent build cache record.

> **Deprecated**: This field is deprecated, and omitted if empty.
`,
            type: 'string',
            'x-nullable': true,
            example: ''
        },
        Parents: {
            description: `List of parent build cache record IDs.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            'x-nullable': true,
            example: ['hw53o5aio51xtltp5xjp8v7fx']
        },
        Type: {
            type: 'string',
            description: `Cache record type.
`,
            example: 'regular',
            enum: ['internal', 'frontend', 'source.local', 'source.git.checkout', 'exec.cachemount', 'regular']
        },
        Description: {
            type: 'string',
            description: `Description of the build-step that produced the build cache.
`,
            example: `mount / from exec /bin/sh -c echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache`
        },
        InUse: {
            type: 'boolean',
            description: `Indicates if the build cache is in use.
`,
            example: false
        },
        Shared: {
            type: 'boolean',
            description: `Indicates if the build cache is shared.
`,
            example: true
        },
        Size: {
            description: `Amount of disk space used by the build cache (in bytes).
`,
            type: 'integer',
            example: 51
        },
        CreatedAt: {
            description: `Date and time at which the build cache was created in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2016-08-18T10:44:24.496525531Z'
        },
        LastUsedAt: {
            description: `Date and time at which the build cache was last used in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            'x-nullable': true,
            example: '2017-08-09T07:09:37.632105588Z'
        },
        UsageCount: {
            type: 'integer',
            example: 26
        }
    }
} as const;

export const $ImageID = {
    type: 'object',
    description: 'Image ID or Digest',
    properties: {
        ID: {
            type: 'string'
        }
    },
    example: {
        ID: 'sha256:85f05633ddc1c50679be2b16a0479ab6f7637f8884e0cfe0f4d20e1ebb3d6e7c'
    }
} as const;

export const $CreateImageInfo = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        error: {
            type: 'string'
        },
        errorDetail: {
            '$ref': '#/definitions/ErrorDetail'
        },
        status: {
            type: 'string'
        },
        progress: {
            type: 'string'
        },
        progressDetail: {
            '$ref': '#/definitions/ProgressDetail'
        }
    }
} as const;

export const $PushImageInfo = {
    type: 'object',
    properties: {
        error: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        progress: {
            type: 'string'
        },
        progressDetail: {
            '$ref': '#/definitions/ProgressDetail'
        }
    }
} as const;

export const $ErrorDetail = {
    type: 'object',
    properties: {
        code: {
            type: 'integer'
        },
        message: {
            type: 'string'
        }
    }
} as const;

export const $ProgressDetail = {
    type: 'object',
    properties: {
        current: {
            type: 'integer'
        },
        total: {
            type: 'integer'
        }
    }
} as const;

export const $ErrorResponse = {
    description: 'Represents an error.',
    type: 'object',
    required: ['message'],
    properties: {
        message: {
            description: 'The error message.',
            type: 'string',
            'x-nullable': false
        }
    },
    example: {
        message: 'Something went wrong.'
    }
} as const;

export const $IdResponse = {
    description: 'Response to an API call that returns just an Id',
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            description: 'The id of the newly created object.',
            type: 'string',
            'x-nullable': false
        }
    }
} as const;

export const $EndpointSettings = {
    description: 'Configuration for a network endpoint.',
    type: 'object',
    properties: {
        IPAMConfig: {
            '$ref': '#/definitions/EndpointIPAMConfig'
        },
        Links: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['container_1', 'container_2']
        },
        MacAddress: {
            description: `MAC address for the endpoint on this network. The network driver might ignore this parameter.
`,
            type: 'string',
            example: '02:42:ac:11:00:04'
        },
        Aliases: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['server_x', 'server_y']
        },
        NetworkID: {
            description: `Unique ID of the network.
`,
            type: 'string',
            example: '08754567f1f40222263eab4102e1c733ae697e8e354aa9cd6e18d7402835292a'
        },
        EndpointID: {
            description: `Unique ID for the service endpoint in a Sandbox.
`,
            type: 'string',
            example: 'b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b'
        },
        Gateway: {
            description: `Gateway address for this network.
`,
            type: 'string',
            example: '172.17.0.1'
        },
        IPAddress: {
            description: `IPv4 address.
`,
            type: 'string',
            example: '172.17.0.4'
        },
        IPPrefixLen: {
            description: `Mask length of the IPv4 address.
`,
            type: 'integer',
            example: 16
        },
        IPv6Gateway: {
            description: `IPv6 gateway address.
`,
            type: 'string',
            example: '2001:db8:2::100'
        },
        GlobalIPv6Address: {
            description: `Global IPv6 address.
`,
            type: 'string',
            example: '2001:db8::5689'
        },
        GlobalIPv6PrefixLen: {
            description: `Mask length of the global IPv6 address.
`,
            type: 'integer',
            format: 'int64',
            example: 64
        },
        DriverOpts: {
            description: `DriverOpts is a mapping of driver options and values. These options
are passed directly to the driver and are driver specific.
`,
            type: 'object',
            'x-nullable': true,
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        DNSNames: {
            description: `List of all DNS names an endpoint has on a specific network. This
list is based on the container name, network aliases, container short
ID, and hostname.

These DNS names are non-fully qualified but can contain several dots.
You can get fully qualified DNS names by appending \`.<network-name>\`.
For instance, if container name is \`my.ctr\` and the network is named
\`testnet\`, \`DNSNames\` will contain \`my.ctr\` and the FQDN will be
\`my.ctr.testnet\`.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['foobar', 'server_x', 'server_y', 'my.ctr']
        }
    }
} as const;

export const $EndpointIPAMConfig = {
    description: `EndpointIPAMConfig represents an endpoint's IPAM configuration.
`,
    type: 'object',
    'x-nullable': true,
    properties: {
        IPv4Address: {
            type: 'string',
            example: '172.20.30.33'
        },
        IPv6Address: {
            type: 'string',
            example: '2001:db8:abcd::3033'
        },
        LinkLocalIPs: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['169.254.34.68', 'fe80::3468']
        }
    }
} as const;

export const $PluginMount = {
    type: 'object',
    'x-nullable': false,
    required: ['Name', 'Description', 'Settable', 'Source', 'Destination', 'Type', 'Options'],
    properties: {
        Name: {
            type: 'string',
            'x-nullable': false,
            example: 'some-mount'
        },
        Description: {
            type: 'string',
            'x-nullable': false,
            example: "This is a mount that's used by the plugin."
        },
        Settable: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Source: {
            type: 'string',
            example: '/var/lib/docker/plugins/'
        },
        Destination: {
            type: 'string',
            'x-nullable': false,
            example: '/mnt/state'
        },
        Type: {
            type: 'string',
            'x-nullable': false,
            example: 'bind'
        },
        Options: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['rbind', 'rw']
        }
    }
} as const;

export const $PluginDevice = {
    type: 'object',
    required: ['Name', 'Description', 'Settable', 'Path'],
    'x-nullable': false,
    properties: {
        Name: {
            type: 'string',
            'x-nullable': false
        },
        Description: {
            type: 'string',
            'x-nullable': false
        },
        Settable: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Path: {
            type: 'string',
            example: '/dev/fuse'
        }
    }
} as const;

export const $PluginEnv = {
    type: 'object',
    'x-nullable': false,
    required: ['Name', 'Description', 'Settable', 'Value'],
    properties: {
        Name: {
            'x-nullable': false,
            type: 'string'
        },
        Description: {
            'x-nullable': false,
            type: 'string'
        },
        Settable: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Value: {
            type: 'string'
        }
    }
} as const;

export const $PluginInterfaceType = {
    type: 'object',
    'x-nullable': false,
    required: ['Prefix', 'Capability', 'Version'],
    properties: {
        Prefix: {
            type: 'string',
            'x-nullable': false
        },
        Capability: {
            type: 'string',
            'x-nullable': false
        },
        Version: {
            type: 'string',
            'x-nullable': false
        }
    }
} as const;

export const $PluginPrivilege = {
    description: `Describes a permission the user has to accept upon installing
the plugin.
`,
    type: 'object',
    'x-go-name': 'PluginPrivilege',
    properties: {
        Name: {
            type: 'string',
            example: 'network'
        },
        Description: {
            type: 'string'
        },
        Value: {
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['host']
        }
    }
} as const;

export const $Plugin = {
    description: 'A plugin for the Engine API',
    type: 'object',
    required: ['Settings', 'Enabled', 'Config', 'Name'],
    properties: {
        Id: {
            type: 'string',
            example: '5724e2c8652da337ab2eedd19fc6fc0ec908e4bd907c7421bf6a8dfc70c4c078'
        },
        Name: {
            type: 'string',
            'x-nullable': false,
            example: 'tiborvass/sample-volume-plugin'
        },
        Enabled: {
            description: 'True if the plugin is running. False if the plugin is not running, only installed.',
            type: 'boolean',
            'x-nullable': false,
            example: true
        },
        Settings: {
            description: 'Settings that can be modified by users.',
            type: 'object',
            'x-nullable': false,
            required: ['Args', 'Devices', 'Env', 'Mounts'],
            properties: {
                Mounts: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/PluginMount'
                    }
                },
                Env: {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    example: ['DEBUG=0']
                },
                Args: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                Devices: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/PluginDevice'
                    }
                }
            }
        },
        PluginReference: {
            description: 'plugin remote reference used to push/pull the plugin',
            type: 'string',
            'x-nullable': false,
            example: 'localhost:5000/tiborvass/sample-volume-plugin:latest'
        },
        Config: {
            description: 'The config of a plugin.',
            type: 'object',
            'x-nullable': false,
            required: ['Description', 'Documentation', 'Interface', 'Entrypoint', 'WorkDir', 'Network', 'Linux', 'PidHost', 'PropagatedMount', 'IpcHost', 'Mounts', 'Env', 'Args'],
            properties: {
                DockerVersion: {
                    description: 'Docker Version used to create the plugin',
                    type: 'string',
                    'x-nullable': false,
                    example: '17.06.0-ce'
                },
                Description: {
                    type: 'string',
                    'x-nullable': false,
                    example: 'A sample volume plugin for Docker'
                },
                Documentation: {
                    type: 'string',
                    'x-nullable': false,
                    example: 'https://docs.docker.com/engine/extend/plugins/'
                },
                Interface: {
                    description: 'The interface between Docker and the plugin',
                    'x-nullable': false,
                    type: 'object',
                    required: ['Types', 'Socket'],
                    properties: {
                        Types: {
                            type: 'array',
                            items: {
                                '$ref': '#/definitions/PluginInterfaceType'
                            },
                            example: ['docker.volumedriver/1.0']
                        },
                        Socket: {
                            type: 'string',
                            'x-nullable': false,
                            example: 'plugins.sock'
                        },
                        ProtocolScheme: {
                            type: 'string',
                            example: 'some.protocol/v1.0',
                            description: 'Protocol to use for clients connecting to the plugin.',
                            enum: ['', 'moby.plugins.http/v1']
                        }
                    }
                },
                Entrypoint: {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    example: ['/usr/bin/sample-volume-plugin', '/data']
                },
                WorkDir: {
                    type: 'string',
                    'x-nullable': false,
                    example: '/bin/'
                },
                User: {
                    type: 'object',
                    'x-nullable': false,
                    properties: {
                        UID: {
                            type: 'integer',
                            format: 'uint32',
                            example: 1000
                        },
                        GID: {
                            type: 'integer',
                            format: 'uint32',
                            example: 1000
                        }
                    }
                },
                Network: {
                    type: 'object',
                    'x-nullable': false,
                    required: ['Type'],
                    properties: {
                        Type: {
                            'x-nullable': false,
                            type: 'string',
                            example: 'host'
                        }
                    }
                },
                Linux: {
                    type: 'object',
                    'x-nullable': false,
                    required: ['Capabilities', 'AllowAllDevices', 'Devices'],
                    properties: {
                        Capabilities: {
                            type: 'array',
                            items: {
                                type: 'string'
                            },
                            example: ['CAP_SYS_ADMIN', 'CAP_SYSLOG']
                        },
                        AllowAllDevices: {
                            type: 'boolean',
                            'x-nullable': false,
                            example: false
                        },
                        Devices: {
                            type: 'array',
                            items: {
                                '$ref': '#/definitions/PluginDevice'
                            }
                        }
                    }
                },
                PropagatedMount: {
                    type: 'string',
                    'x-nullable': false,
                    example: '/mnt/volumes'
                },
                IpcHost: {
                    type: 'boolean',
                    'x-nullable': false,
                    example: false
                },
                PidHost: {
                    type: 'boolean',
                    'x-nullable': false,
                    example: false
                },
                Mounts: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/PluginMount'
                    }
                },
                Env: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/PluginEnv'
                    },
                    example: [
                        {
                            Name: 'DEBUG',
                            Description: 'If set, prints debug messages',
                            Settable: null,
                            Value: '0'
                        }
                    ]
                },
                Args: {
                    type: 'object',
                    'x-nullable': false,
                    required: ['Name', 'Description', 'Settable', 'Value'],
                    properties: {
                        Name: {
                            'x-nullable': false,
                            type: 'string',
                            example: 'args'
                        },
                        Description: {
                            'x-nullable': false,
                            type: 'string',
                            example: 'command line arguments'
                        },
                        Settable: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        Value: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                },
                rootfs: {
                    type: 'object',
                    properties: {
                        type: {
                            type: 'string',
                            example: 'layers'
                        },
                        diff_ids: {
                            type: 'array',
                            items: {
                                type: 'string'
                            },
                            example: ['sha256:675532206fbf3030b8458f88d6e26d4eb1577688a25efec97154c94e8b6b4887', 'sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8']
                        }
                    }
                }
            }
        }
    }
} as const;

export const $ObjectVersion = {
    description: `The version number of the object such as node, service, etc. This is needed
to avoid conflicting writes. The client must send the version number along
with the modified specification when updating these objects.

This approach ensures safe concurrency and determinism in that the change
on the object may not be applied if the version number has changed from the
last read. In other words, if two update requests specify the same base
version, only one of the requests can succeed. As a result, two separate
update requests that happen at the same time will not unintentionally
overwrite each other.
`,
    type: 'object',
    properties: {
        Index: {
            type: 'integer',
            format: 'uint64',
            example: 373531
        }
    }
} as const;

export const $NodeSpec = {
    type: 'object',
    properties: {
        Name: {
            description: 'Name for the node.',
            type: 'string',
            example: 'my-node'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        Role: {
            description: 'Role of the node.',
            type: 'string',
            enum: ['worker', 'manager'],
            example: 'manager'
        },
        Availability: {
            description: 'Availability of the node.',
            type: 'string',
            enum: ['active', 'pause', 'drain'],
            example: 'active'
        }
    },
    example: {
        Availability: 'active',
        Name: 'node-name',
        Role: 'manager',
        Labels: {
            foo: 'bar'
        }
    }
} as const;

export const $Node = {
    type: 'object',
    properties: {
        ID: {
            type: 'string',
            example: '24ifsmvkjbyhk'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            description: `Date and time at which the node was added to the swarm in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2016-08-18T10:44:24.496525531Z'
        },
        UpdatedAt: {
            description: `Date and time at which the node was last updated in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2017-08-09T07:09:37.632105588Z'
        },
        Spec: {
            '$ref': '#/definitions/NodeSpec'
        },
        Description: {
            '$ref': '#/definitions/NodeDescription'
        },
        Status: {
            '$ref': '#/definitions/NodeStatus'
        },
        ManagerStatus: {
            '$ref': '#/definitions/ManagerStatus'
        }
    }
} as const;

export const $NodeDescription = {
    description: `NodeDescription encapsulates the properties of the Node as reported by the
agent.
`,
    type: 'object',
    properties: {
        Hostname: {
            type: 'string',
            example: 'bf3067039e47'
        },
        Platform: {
            '$ref': '#/definitions/Platform'
        },
        Resources: {
            '$ref': '#/definitions/ResourceObject'
        },
        Engine: {
            '$ref': '#/definitions/EngineDescription'
        },
        TLSInfo: {
            '$ref': '#/definitions/TLSInfo'
        }
    }
} as const;

export const $Platform = {
    description: `Platform represents the platform (Arch/OS).
`,
    type: 'object',
    properties: {
        Architecture: {
            description: `Architecture represents the hardware architecture (for example,
\`x86_64\`).
`,
            type: 'string',
            example: 'x86_64'
        },
        OS: {
            description: `OS represents the Operating System (for example, \`linux\` or \`windows\`).
`,
            type: 'string',
            example: 'linux'
        }
    }
} as const;

export const $EngineDescription = {
    description: 'EngineDescription provides information about an engine.',
    type: 'object',
    properties: {
        EngineVersion: {
            type: 'string',
            example: '17.06.0'
        },
        Labels: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                foo: 'bar'
            }
        },
        Plugins: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    Type: {
                        type: 'string'
                    },
                    Name: {
                        type: 'string'
                    }
                }
            },
            example: [
                {
                    Type: 'Log',
                    Name: 'awslogs'
                },
                {
                    Type: 'Log',
                    Name: 'fluentd'
                },
                {
                    Type: 'Log',
                    Name: 'gcplogs'
                },
                {
                    Type: 'Log',
                    Name: 'gelf'
                },
                {
                    Type: 'Log',
                    Name: 'journald'
                },
                {
                    Type: 'Log',
                    Name: 'json-file'
                },
                {
                    Type: 'Log',
                    Name: 'splunk'
                },
                {
                    Type: 'Log',
                    Name: 'syslog'
                },
                {
                    Type: 'Network',
                    Name: 'bridge'
                },
                {
                    Type: 'Network',
                    Name: 'host'
                },
                {
                    Type: 'Network',
                    Name: 'ipvlan'
                },
                {
                    Type: 'Network',
                    Name: 'macvlan'
                },
                {
                    Type: 'Network',
                    Name: 'null'
                },
                {
                    Type: 'Network',
                    Name: 'overlay'
                },
                {
                    Type: 'Volume',
                    Name: 'local'
                },
                {
                    Type: 'Volume',
                    Name: 'localhost:5000/vieux/sshfs:latest'
                },
                {
                    Type: 'Volume',
                    Name: 'vieux/sshfs:latest'
                }
            ]
        }
    }
} as const;

export const $TLSInfo = {
    description: `Information about the issuer of leaf TLS certificates and the trusted root
CA certificate.
`,
    type: 'object',
    properties: {
        TrustRoot: {
            description: `The root CA certificate(s) that are used to validate leaf TLS
certificates.
`,
            type: 'string'
        },
        CertIssuerSubject: {
            description: 'The base64-url-safe-encoded raw subject bytes of the issuer.',
            type: 'string'
        },
        CertIssuerPublicKey: {
            description: `The base64-url-safe-encoded raw public key bytes of the issuer.
`,
            type: 'string'
        }
    },
    example: {
        TrustRoot: `-----BEGIN CERTIFICATE-----
MIIBajCCARCgAwIBAgIUbYqrLSOSQHoxD8CwG6Bi2PJi9c8wCgYIKoZIzj0EAwIw
EzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwNDI0MjE0MzAwWhcNMzcwNDE5MjE0
MzAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH
A0IABJk/VyMPYdaqDXJb/VXh5n/1Yuv7iNrxV3Qb3l06XD46seovcDWs3IZNV1lf
3Skyr0ofcchipoiHkXBODojJydSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB
Af8EBTADAQH/MB0GA1UdDgQWBBRUXxuRcnFjDfR/RIAUQab8ZV/n4jAKBggqhkjO
PQQDAgNIADBFAiAy+JTe6Uc3KyLCMiqGl2GyWGQqQDEcO3/YG36x7om65AIhAJvz
pxv6zFeVEkAEEkqIYi0omA9+CjanB/6Bz4n1uw8H
-----END CERTIFICATE-----
`,
        CertIssuerSubject: 'MBMxETAPBgNVBAMTCHN3YXJtLWNh',
        CertIssuerPublicKey: 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmT9XIw9h1qoNclv9VeHmf/Vi6/uI2vFXdBveXTpcPjqx6i9wNazchk1XWV/dKTKvSh9xyGKmiIeRcE4OiMnJ1A=='
    }
} as const;

export const $NodeStatus = {
    description: `NodeStatus represents the status of a node.

It provides the current status of the node, as seen by the manager.
`,
    type: 'object',
    properties: {
        State: {
            '$ref': '#/definitions/NodeState'
        },
        Message: {
            type: 'string',
            example: ''
        },
        Addr: {
            description: 'IP address of the node.',
            type: 'string',
            example: '172.17.0.2'
        }
    }
} as const;

export const $NodeState = {
    description: 'NodeState represents the state of a node.',
    type: 'string',
    enum: ['unknown', 'down', 'ready', 'disconnected'],
    example: 'ready'
} as const;

export const $ManagerStatus = {
    description: `ManagerStatus represents the status of a manager.

It provides the current status of a node's manager component, if the node
is a manager.
`,
    'x-nullable': true,
    type: 'object',
    properties: {
        Leader: {
            type: 'boolean',
            default: false,
            example: true
        },
        Reachability: {
            '$ref': '#/definitions/Reachability'
        },
        Addr: {
            description: `The IP address and port at which the manager is reachable.
`,
            type: 'string',
            example: '10.0.0.46:2377'
        }
    }
} as const;

export const $Reachability = {
    description: 'Reachability represents the reachability of a node.',
    type: 'string',
    enum: ['unknown', 'unreachable', 'reachable'],
    example: 'reachable'
} as const;

export const $SwarmSpec = {
    description: 'User modifiable swarm configuration.',
    type: 'object',
    properties: {
        Name: {
            description: 'Name of the swarm.',
            type: 'string',
            example: 'default'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.corp.type': 'production',
                'com.example.corp.department': 'engineering'
            }
        },
        Orchestration: {
            description: 'Orchestration configuration.',
            type: 'object',
            'x-nullable': true,
            properties: {
                TaskHistoryRetentionLimit: {
                    description: `The number of historic tasks to keep per instance or node. If
negative, never remove completed or failed tasks.
`,
                    type: 'integer',
                    format: 'int64',
                    example: 10
                }
            }
        },
        Raft: {
            description: 'Raft configuration.',
            type: 'object',
            properties: {
                SnapshotInterval: {
                    description: 'The number of log entries between snapshots.',
                    type: 'integer',
                    format: 'uint64',
                    example: 10000
                },
                KeepOldSnapshots: {
                    description: `The number of snapshots to keep beyond the current snapshot.
`,
                    type: 'integer',
                    format: 'uint64'
                },
                LogEntriesForSlowFollowers: {
                    description: `The number of log entries to keep around to sync up slow followers
after a snapshot is created.
`,
                    type: 'integer',
                    format: 'uint64',
                    example: 500
                },
                ElectionTick: {
                    description: `The number of ticks that a follower will wait for a message from
the leader before becoming a candidate and starting an election.
\`ElectionTick\` must be greater than \`HeartbeatTick\`.

A tick currently defaults to one second, so these translate
directly to seconds currently, but this is NOT guaranteed.
`,
                    type: 'integer',
                    example: 3
                },
                HeartbeatTick: {
                    description: `The number of ticks between heartbeats. Every HeartbeatTick ticks,
the leader will send a heartbeat to the followers.

A tick currently defaults to one second, so these translate
directly to seconds currently, but this is NOT guaranteed.
`,
                    type: 'integer',
                    example: 1
                }
            }
        },
        Dispatcher: {
            description: 'Dispatcher configuration.',
            type: 'object',
            'x-nullable': true,
            properties: {
                HeartbeatPeriod: {
                    description: `The delay for an agent to send a heartbeat to the dispatcher.
`,
                    type: 'integer',
                    format: 'int64',
                    example: 5000000000
                }
            }
        },
        CAConfig: {
            description: 'CA configuration.',
            type: 'object',
            'x-nullable': true,
            properties: {
                NodeCertExpiry: {
                    description: 'The duration node certificates are issued for.',
                    type: 'integer',
                    format: 'int64',
                    example: 7776000000000000
                },
                ExternalCAs: {
                    description: `Configuration for forwarding signing requests to an external
certificate authority.
`,
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            Protocol: {
                                description: `Protocol for communication with the external CA (currently
only \`cfssl\` is supported).
`,
                                type: 'string',
                                enum: ['cfssl'],
                                default: 'cfssl'
                            },
                            URL: {
                                description: `URL where certificate signing requests should be sent.
`,
                                type: 'string'
                            },
                            Options: {
                                description: `An object with key/value pairs that are interpreted as
protocol-specific options for the external CA driver.
`,
                                type: 'object',
                                additionalProperties: {
                                    type: 'string'
                                }
                            },
                            CACert: {
                                description: `The root CA certificate (in PEM format) this external CA uses
to issue TLS certificates (assumed to be to the current swarm
root CA certificate if not provided).
`,
                                type: 'string'
                            }
                        }
                    }
                },
                SigningCACert: {
                    description: `The desired signing CA certificate for all swarm node TLS leaf
certificates, in PEM format.
`,
                    type: 'string'
                },
                SigningCAKey: {
                    description: `The desired signing CA key for all swarm node TLS leaf certificates,
in PEM format.
`,
                    type: 'string'
                },
                ForceRotate: {
                    description: `An integer whose purpose is to force swarm to generate a new
signing CA certificate and key, if none have been specified in
\`SigningCACert\` and \`SigningCAKey\`
`,
                    format: 'uint64',
                    type: 'integer'
                }
            }
        },
        EncryptionConfig: {
            description: 'Parameters related to encryption-at-rest.',
            type: 'object',
            properties: {
                AutoLockManagers: {
                    description: `If set, generate a key and use it to lock data stored on the
managers.
`,
                    type: 'boolean',
                    example: false
                }
            }
        },
        TaskDefaults: {
            description: 'Defaults for creating tasks in this cluster.',
            type: 'object',
            properties: {
                LogDriver: {
                    description: `The log driver to use for tasks created in the orchestrator if
unspecified by a service.

Updating this value only affects new tasks. Existing tasks continue
to use their previously configured log driver until recreated.
`,
                    type: 'object',
                    properties: {
                        Name: {
                            description: `The log driver to use as a default for new tasks.
`,
                            type: 'string',
                            example: 'json-file'
                        },
                        Options: {
                            description: `Driver-specific options for the selectd log driver, specified
as key/value pairs.
`,
                            type: 'object',
                            additionalProperties: {
                                type: 'string'
                            },
                            example: {
                                'max-file': '10',
                                'max-size': '100m'
                            }
                        }
                    }
                }
            }
        }
    }
} as const;

export const $ClusterInfo = {
    description: `ClusterInfo represents information about the swarm as is returned by the
"/info" endpoint. Join-tokens are not included.
`,
    'x-nullable': true,
    type: 'object',
    properties: {
        ID: {
            description: 'The ID of the swarm.',
            type: 'string',
            example: 'abajmipo7b4xz5ip2nrla6b11'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            description: `Date and time at which the swarm was initialised in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2016-08-18T10:44:24.496525531Z'
        },
        UpdatedAt: {
            description: `Date and time at which the swarm was last updated in
[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
`,
            type: 'string',
            format: 'dateTime',
            example: '2017-08-09T07:09:37.632105588Z'
        },
        Spec: {
            '$ref': '#/definitions/SwarmSpec'
        },
        TLSInfo: {
            '$ref': '#/definitions/TLSInfo'
        },
        RootRotationInProgress: {
            description: `Whether there is currently a root CA rotation in progress for the swarm
`,
            type: 'boolean',
            example: false
        },
        DataPathPort: {
            description: `DataPathPort specifies the data path port number for data traffic.
Acceptable port range is 1024 to 49151.
If no port is set or is set to 0, the default port (4789) is used.
`,
            type: 'integer',
            format: 'uint32',
            default: 4789,
            example: 4789
        },
        DefaultAddrPool: {
            description: `Default Address Pool specifies default subnet pools for global scope
networks.
`,
            type: 'array',
            items: {
                type: 'string',
                format: 'CIDR',
                example: ['10.10.0.0/16', '20.20.0.0/16']
            }
        },
        SubnetSize: {
            description: `SubnetSize specifies the subnet size of the networks created from the
default subnet pool.
`,
            type: 'integer',
            format: 'uint32',
            maximum: 29,
            default: 24,
            example: 24
        }
    }
} as const;

export const $JoinTokens = {
    description: `JoinTokens contains the tokens workers and managers need to join the swarm.
`,
    type: 'object',
    properties: {
        Worker: {
            description: `The token workers can use to join the swarm.
`,
            type: 'string',
            example: 'SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-1awxwuwd3z9j1z3puu7rcgdbx'
        },
        Manager: {
            description: `The token managers can use to join the swarm.
`,
            type: 'string',
            example: 'SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-7p73s1dx5in4tatdymyhg9hu2'
        }
    }
} as const;

export const $Swarm = {
    type: 'object',
    allOf: [
        {
            '$ref': '#/definitions/ClusterInfo'
        },
        {
            type: 'object',
            properties: {
                JoinTokens: {
                    '$ref': '#/definitions/JoinTokens'
                }
            }
        }
    ]
} as const;

export const $TaskSpec = {
    description: 'User modifiable task configuration.',
    type: 'object',
    properties: {
        PluginSpec: {
            type: 'object',
            description: `Plugin spec for the service.  *(Experimental release only.)*

<p><br /></p>

> **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
> mutually exclusive. PluginSpec is only used when the Runtime field
> is set to \`plugin\`. NetworkAttachmentSpec is used when the Runtime
> field is set to \`attachment\`.
`,
            properties: {
                Name: {
                    description: "The name or 'alias' to use for the plugin.",
                    type: 'string'
                },
                Remote: {
                    description: 'The plugin image reference to use.',
                    type: 'string'
                },
                Disabled: {
                    description: 'Disable the plugin once scheduled.',
                    type: 'boolean'
                },
                PluginPrivilege: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/PluginPrivilege'
                    }
                }
            }
        },
        ContainerSpec: {
            type: 'object',
            description: `Container spec for the service.

<p><br /></p>

> **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
> mutually exclusive. PluginSpec is only used when the Runtime field
> is set to \`plugin\`. NetworkAttachmentSpec is used when the Runtime
> field is set to \`attachment\`.
`,
            properties: {
                Image: {
                    description: 'The image name to use for the container',
                    type: 'string'
                },
                Labels: {
                    description: 'User-defined key/value data.',
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                },
                Command: {
                    description: 'The command to be run in the image.',
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                Args: {
                    description: 'Arguments to the command.',
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                Hostname: {
                    description: `The hostname to use for the container, as a valid
[RFC 1123](https://tools.ietf.org/html/rfc1123) hostname.
`,
                    type: 'string'
                },
                Env: {
                    description: `A list of environment variables in the form \`VAR=value\`.
`,
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                Dir: {
                    description: 'The working directory for commands to run in.',
                    type: 'string'
                },
                User: {
                    description: 'The user inside the container.',
                    type: 'string'
                },
                Groups: {
                    type: 'array',
                    description: `A list of additional groups that the container process will run as.
`,
                    items: {
                        type: 'string'
                    }
                },
                Privileges: {
                    type: 'object',
                    description: 'Security options for the container',
                    properties: {
                        CredentialSpec: {
                            type: 'object',
                            description: 'CredentialSpec for managed service account (Windows only)',
                            properties: {
                                Config: {
                                    type: 'string',
                                    example: '0bt9dmxjvjiqermk6xrop3ekq',
                                    description: `Load credential spec from a Swarm Config with the given ID.
The specified config must also be present in the Configs
field with the Runtime property set.

<p><br /></p>


> **Note**: \`CredentialSpec.File\`, \`CredentialSpec.Registry\`,
> and \`CredentialSpec.Config\` are mutually exclusive.
`
                                },
                                File: {
                                    type: 'string',
                                    example: 'spec.json',
                                    description: `Load credential spec from this file. The file is read by
the daemon, and must be present in the \`CredentialSpecs\`
subdirectory in the docker data directory, which defaults
to \`C:\ProgramData\Docker\` on Windows.

For example, specifying \`spec.json\` loads
\`C:\ProgramData\Docker\CredentialSpecs\spec.json\`.

<p><br /></p>

> **Note**: \`CredentialSpec.File\`, \`CredentialSpec.Registry\`,
> and \`CredentialSpec.Config\` are mutually exclusive.
`
                                },
                                Registry: {
                                    type: 'string',
                                    description: `Load credential spec from this value in the Windows
registry. The specified registry value must be located in:

\`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Containers\CredentialSpecs\`

<p><br /></p>


> **Note**: \`CredentialSpec.File\`, \`CredentialSpec.Registry\`,
> and \`CredentialSpec.Config\` are mutually exclusive.
`
                                }
                            }
                        },
                        SELinuxContext: {
                            type: 'object',
                            description: 'SELinux labels of the container',
                            properties: {
                                Disable: {
                                    type: 'boolean',
                                    description: 'Disable SELinux'
                                },
                                User: {
                                    type: 'string',
                                    description: 'SELinux user label'
                                },
                                Role: {
                                    type: 'string',
                                    description: 'SELinux role label'
                                },
                                Type: {
                                    type: 'string',
                                    description: 'SELinux type label'
                                },
                                Level: {
                                    type: 'string',
                                    description: 'SELinux level label'
                                }
                            }
                        },
                        Seccomp: {
                            type: 'object',
                            description: 'Options for configuring seccomp on the container',
                            properties: {
                                Mode: {
                                    type: 'string',
                                    enum: ['default', 'unconfined', 'custom']
                                },
                                Profile: {
                                    description: 'The custom seccomp profile as a json object',
                                    type: 'string'
                                }
                            }
                        },
                        AppArmor: {
                            type: 'object',
                            description: 'Options for configuring AppArmor on the container',
                            properties: {
                                Mode: {
                                    type: 'string',
                                    enum: ['default', 'disabled']
                                }
                            }
                        },
                        NoNewPrivileges: {
                            type: 'boolean',
                            description: 'Configuration of the no_new_privs bit in the container'
                        }
                    }
                },
                TTY: {
                    description: 'Whether a pseudo-TTY should be allocated.',
                    type: 'boolean'
                },
                OpenStdin: {
                    description: 'Open `stdin`',
                    type: 'boolean'
                },
                ReadOnly: {
                    description: "Mount the container's root filesystem as read only.",
                    type: 'boolean'
                },
                Mounts: {
                    description: `Specification for mounts to be added to containers created as part
of the service.
`,
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/Mount'
                    }
                },
                StopSignal: {
                    description: 'Signal to stop the container.',
                    type: 'string'
                },
                StopGracePeriod: {
                    description: `Amount of time to wait for the container to terminate before
forcefully killing it.
`,
                    type: 'integer',
                    format: 'int64'
                },
                HealthCheck: {
                    '$ref': '#/definitions/HealthConfig'
                },
                Hosts: {
                    type: 'array',
                    description: `A list of hostname/IP mappings to add to the container's \`hosts\`
file. The format of extra hosts is specified in the
[hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)
man page:

    IP_address canonical_hostname [aliases...]
`,
                    items: {
                        type: 'string'
                    }
                },
                DNSConfig: {
                    description: `Specification for DNS related configurations in resolver configuration
file (\`resolv.conf\`).
`,
                    type: 'object',
                    properties: {
                        Nameservers: {
                            description: 'The IP addresses of the name servers.',
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        Search: {
                            description: 'A search list for host-name lookup.',
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        Options: {
                            description: `A list of internal resolver variables to be modified (e.g.,
\`debug\`, \`ndots:3\`, etc.).
`,
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                },
                Secrets: {
                    description: `Secrets contains references to zero or more secrets that will be
exposed to the service.
`,
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            File: {
                                description: `File represents a specific target that is backed by a file.
`,
                                type: 'object',
                                properties: {
                                    Name: {
                                        description: `Name represents the final filename in the filesystem.
`,
                                        type: 'string'
                                    },
                                    UID: {
                                        description: 'UID represents the file UID.',
                                        type: 'string'
                                    },
                                    GID: {
                                        description: 'GID represents the file GID.',
                                        type: 'string'
                                    },
                                    Mode: {
                                        description: 'Mode represents the FileMode of the file.',
                                        type: 'integer',
                                        format: 'uint32'
                                    }
                                }
                            },
                            SecretID: {
                                description: `SecretID represents the ID of the specific secret that we're
referencing.
`,
                                type: 'string'
                            },
                            SecretName: {
                                description: `SecretName is the name of the secret that this references,
but this is just provided for lookup/display purposes. The
secret in the reference will be identified by its ID.
`,
                                type: 'string'
                            }
                        }
                    }
                },
                Configs: {
                    description: `Configs contains references to zero or more configs that will be
exposed to the service.
`,
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            File: {
                                description: `File represents a specific target that is backed by a file.

<p><br /><p>

> **Note**: \`Configs.File\` and \`Configs.Runtime\` are mutually exclusive
`,
                                type: 'object',
                                properties: {
                                    Name: {
                                        description: `Name represents the final filename in the filesystem.
`,
                                        type: 'string'
                                    },
                                    UID: {
                                        description: 'UID represents the file UID.',
                                        type: 'string'
                                    },
                                    GID: {
                                        description: 'GID represents the file GID.',
                                        type: 'string'
                                    },
                                    Mode: {
                                        description: 'Mode represents the FileMode of the file.',
                                        type: 'integer',
                                        format: 'uint32'
                                    }
                                }
                            },
                            Runtime: {
                                description: `Runtime represents a target that is not mounted into the
container but is used by the task

<p><br /><p>

> **Note**: \`Configs.File\` and \`Configs.Runtime\` are mutually
> exclusive
`,
                                type: 'object'
                            },
                            ConfigID: {
                                description: `ConfigID represents the ID of the specific config that we're
referencing.
`,
                                type: 'string'
                            },
                            ConfigName: {
                                description: `ConfigName is the name of the config that this references,
but this is just provided for lookup/display purposes. The
config in the reference will be identified by its ID.
`,
                                type: 'string'
                            }
                        }
                    }
                },
                Isolation: {
                    type: 'string',
                    description: `Isolation technology of the containers running the service.
(Windows only)
`,
                    enum: ['default', 'process', 'hyperv']
                },
                Init: {
                    description: `Run an init inside the container that forwards signals and reaps
processes. This field is omitted if empty, and the default (as
configured on the daemon) is used.
`,
                    type: 'boolean',
                    'x-nullable': true
                },
                Sysctls: {
                    description: `Set kernel namedspaced parameters (sysctls) in the container.
The Sysctls option on services accepts the same sysctls as the
are supported on containers. Note that while the same sysctls are
supported, no guarantees or checks are made about their
suitability for a clustered environment, and it's up to the user
to determine whether a given sysctl will work properly in a
Service.
`,
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                },
                CapabilityAdd: {
                    type: 'array',
                    description: `A list of kernel capabilities to add to the default set
for the container.
`,
                    items: {
                        type: 'string'
                    },
                    example: ['CAP_NET_RAW', 'CAP_SYS_ADMIN', 'CAP_SYS_CHROOT', 'CAP_SYSLOG']
                },
                CapabilityDrop: {
                    type: 'array',
                    description: `A list of kernel capabilities to drop from the default set
for the container.
`,
                    items: {
                        type: 'string'
                    },
                    example: ['CAP_NET_RAW']
                },
                Ulimits: {
                    description: `A list of resource limits to set in the container. For example: \`{"Name": "nofile", "Soft": 1024, "Hard": 2048}\`"
`,
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            Name: {
                                description: 'Name of ulimit',
                                type: 'string'
                            },
                            Soft: {
                                description: 'Soft limit',
                                type: 'integer'
                            },
                            Hard: {
                                description: 'Hard limit',
                                type: 'integer'
                            }
                        }
                    }
                }
            }
        },
        NetworkAttachmentSpec: {
            description: `Read-only spec type for non-swarm containers attached to swarm overlay
networks.

<p><br /></p>

> **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
> mutually exclusive. PluginSpec is only used when the Runtime field
> is set to \`plugin\`. NetworkAttachmentSpec is used when the Runtime
> field is set to \`attachment\`.
`,
            type: 'object',
            properties: {
                ContainerID: {
                    description: 'ID of the container represented by this task',
                    type: 'string'
                }
            }
        },
        Resources: {
            description: `Resource requirements which apply to each individual container created
as part of the service.
`,
            type: 'object',
            properties: {
                Limits: {
                    description: 'Define resources limits.',
                    '$ref': '#/definitions/Limit'
                },
                Reservations: {
                    description: 'Define resources reservation.',
                    '$ref': '#/definitions/ResourceObject'
                }
            }
        },
        RestartPolicy: {
            description: `Specification for the restart policy which applies to containers
created as part of this service.
`,
            type: 'object',
            properties: {
                Condition: {
                    description: 'Condition for restart.',
                    type: 'string',
                    enum: ['none', 'on-failure', 'any']
                },
                Delay: {
                    description: 'Delay between restart attempts.',
                    type: 'integer',
                    format: 'int64'
                },
                MaxAttempts: {
                    description: `Maximum attempts to restart a given container before giving up
(default value is 0, which is ignored).
`,
                    type: 'integer',
                    format: 'int64',
                    default: 0
                },
                Window: {
                    description: `Windows is the time window used to evaluate the restart policy
(default value is 0, which is unbounded).
`,
                    type: 'integer',
                    format: 'int64',
                    default: 0
                }
            }
        },
        Placement: {
            type: 'object',
            properties: {
                Constraints: {
                    description: `An array of constraint expressions to limit the set of nodes where
a task can be scheduled. Constraint expressions can either use a
_match_ (\`==\`) or _exclude_ (\`!=\`) rule. Multiple constraints find
nodes that satisfy every expression (AND match). Constraints can
match node or Docker Engine labels as follows:

node attribute       | matches                        | example
---------------------|--------------------------------|-----------------------------------------------
\`node.id\`            | Node ID                        | \`node.id==2ivku8v2gvtg4\`
\`node.hostname\`      | Node hostname                  | \`node.hostname!=node-2\`
\`node.role\`          | Node role (\`manager\`/\`worker\`) | \`node.role==manager\`
\`node.platform.os\`   | Node operating system          | \`node.platform.os==windows\`
\`node.platform.arch\` | Node architecture              | \`node.platform.arch==x86_64\`
\`node.labels\`        | User-defined node labels       | \`node.labels.security==high\`
\`engine.labels\`      | Docker Engine's labels         | \`engine.labels.operatingsystem==ubuntu-14.04\`

\`engine.labels\` apply to Docker Engine labels like operating system,
drivers, etc. Swarm administrators add \`node.labels\` for operational
purposes by using the [\`node update endpoint\`](#operation/NodeUpdate).
`,
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    example: ['node.hostname!=node3.corp.example.com', 'node.role!=manager', 'node.labels.type==production', 'node.platform.os==linux', 'node.platform.arch==x86_64']
                },
                Preferences: {
                    description: `Preferences provide a way to make the scheduler aware of factors
such as topology. They are provided in order from highest to
lowest precedence.
`,
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            Spread: {
                                type: 'object',
                                properties: {
                                    SpreadDescriptor: {
                                        description: `label descriptor, such as \`engine.labels.az\`.
`,
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    },
                    example: [
                        {
                            Spread: {
                                SpreadDescriptor: 'node.labels.datacenter'
                            }
                        },
                        {
                            Spread: {
                                SpreadDescriptor: 'node.labels.rack'
                            }
                        }
                    ]
                },
                MaxReplicas: {
                    description: `Maximum number of replicas for per node (default value is 0, which
is unlimited)
`,
                    type: 'integer',
                    format: 'int64',
                    default: 0
                },
                Platforms: {
                    description: `Platforms stores all the platforms that the service's image can
run on. This field is used in the platform filter for scheduling.
If empty, then the platform filter is off, meaning there are no
scheduling restrictions.
`,
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/Platform'
                    }
                }
            }
        },
        ForceUpdate: {
            description: `A counter that triggers an update even if no relevant parameters have
been changed.
`,
            type: 'integer'
        },
        Runtime: {
            description: `Runtime is the type of runtime specified for the task executor.
`,
            type: 'string'
        },
        Networks: {
            description: 'Specifies which networks the service should attach to.',
            type: 'array',
            items: {
                '$ref': '#/definitions/NetworkAttachmentConfig'
            }
        },
        LogDriver: {
            description: `Specifies the log driver to use for tasks created from this spec. If
not present, the default one for the swarm will be used, finally
falling back to the engine default if not specified.
`,
            type: 'object',
            properties: {
                Name: {
                    type: 'string'
                },
                Options: {
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                }
            }
        }
    }
} as const;

export const $TaskState = {
    type: 'string',
    enum: ['new', 'allocated', 'pending', 'assigned', 'accepted', 'preparing', 'ready', 'starting', 'running', 'complete', 'shutdown', 'failed', 'rejected', 'remove', 'orphaned']
} as const;

export const $ContainerStatus = {
    type: 'object',
    description: 'represents the status of a container.',
    properties: {
        ContainerID: {
            type: 'string'
        },
        PID: {
            type: 'integer'
        },
        ExitCode: {
            type: 'integer'
        }
    }
} as const;

export const $PortStatus = {
    type: 'object',
    description: "represents the port status of a task's host ports whose service has published host ports",
    properties: {
        Ports: {
            type: 'array',
            items: {
                '$ref': '#/definitions/EndpointPortConfig'
            }
        }
    }
} as const;

export const $TaskStatus = {
    type: 'object',
    description: 'represents the status of a task.',
    properties: {
        Timestamp: {
            type: 'string',
            format: 'dateTime'
        },
        State: {
            '$ref': '#/definitions/TaskState'
        },
        Message: {
            type: 'string'
        },
        Err: {
            type: 'string'
        },
        ContainerStatus: {
            '$ref': '#/definitions/ContainerStatus'
        },
        PortStatus: {
            '$ref': '#/definitions/PortStatus'
        }
    }
} as const;

export const $Task = {
    type: 'object',
    properties: {
        ID: {
            description: 'The ID of the task.',
            type: 'string'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        UpdatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        Name: {
            description: 'Name of the task.',
            type: 'string'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        Spec: {
            '$ref': '#/definitions/TaskSpec'
        },
        ServiceID: {
            description: 'The ID of the service this task is part of.',
            type: 'string'
        },
        Slot: {
            type: 'integer'
        },
        NodeID: {
            description: 'The ID of the node that this task is on.',
            type: 'string'
        },
        AssignedGenericResources: {
            '$ref': '#/definitions/GenericResources'
        },
        Status: {
            '$ref': '#/definitions/TaskStatus'
        },
        DesiredState: {
            '$ref': '#/definitions/TaskState'
        },
        JobIteration: {
            description: `If the Service this Task belongs to is a job-mode service, contains
the JobIteration of the Service this Task was created for. Absent if
the Task was created for a Replicated or Global Service.
`,
            '$ref': '#/definitions/ObjectVersion'
        }
    },
    example: {
        ID: '0kzzo1i0y4jz6027t0k7aezc7',
        Version: {
            Index: 71
        },
        CreatedAt: '2016-06-07T21:07:31.171892745Z',
        UpdatedAt: '2016-06-07T21:07:31.376370513Z',
        Spec: {
            ContainerSpec: {
                Image: 'redis'
            },
            Resources: {
                Limits: {},
                Reservations: {}
            },
            RestartPolicy: {
                Condition: 'any',
                MaxAttempts: 0
            },
            Placement: {}
        },
        ServiceID: '9mnpnzenvg8p8tdbtq4wvbkcz',
        Slot: 1,
        NodeID: '60gvrl6tm78dmak4yl7srz94v',
        Status: {
            Timestamp: '2016-06-07T21:07:31.290032978Z',
            State: 'running',
            Message: 'started',
            ContainerStatus: {
                ContainerID: 'e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035',
                PID: 677
            }
        },
        DesiredState: 'running',
        NetworksAttachments: [
            {
                Network: {
                    ID: '4qvuz4ko70xaltuqbt8956gd1',
                    Version: {
                        Index: 18
                    },
                    CreatedAt: '2016-06-07T20:31:11.912919752Z',
                    UpdatedAt: '2016-06-07T21:07:29.955277358Z',
                    Spec: {
                        Name: 'ingress',
                        Labels: {
                            'com.docker.swarm.internal': 'true'
                        },
                        DriverConfiguration: {},
                        IPAMOptions: {
                            Driver: {},
                            Configs: [
                                {
                                    Subnet: '10.255.0.0/16',
                                    Gateway: '10.255.0.1'
                                }
                            ]
                        }
                    },
                    DriverState: {
                        Name: 'overlay',
                        Options: {
                            'com.docker.network.driver.overlay.vxlanid_list': '256'
                        }
                    },
                    IPAMOptions: {
                        Driver: {
                            Name: 'default'
                        },
                        Configs: [
                            {
                                Subnet: '10.255.0.0/16',
                                Gateway: '10.255.0.1'
                            }
                        ]
                    }
                },
                Addresses: ['10.255.0.10/16']
            }
        ],
        AssignedGenericResources: [
            {
                DiscreteResourceSpec: {
                    Kind: 'SSD',
                    Value: 3
                }
            },
            {
                NamedResourceSpec: {
                    Kind: 'GPU',
                    Value: 'UUID1'
                }
            },
            {
                NamedResourceSpec: {
                    Kind: 'GPU',
                    Value: 'UUID2'
                }
            }
        ]
    }
} as const;

export const $ServiceSpec = {
    description: 'User modifiable configuration for a service.',
    type: 'object',
    properties: {
        Name: {
            description: 'Name of the service.',
            type: 'string'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        TaskTemplate: {
            '$ref': '#/definitions/TaskSpec'
        },
        Mode: {
            description: 'Scheduling mode for the service.',
            type: 'object',
            properties: {
                Replicated: {
                    type: 'object',
                    properties: {
                        Replicas: {
                            type: 'integer',
                            format: 'int64'
                        }
                    }
                },
                Global: {
                    type: 'object'
                },
                ReplicatedJob: {
                    description: `The mode used for services with a finite number of tasks that run
to a completed state.
`,
                    type: 'object',
                    properties: {
                        MaxConcurrent: {
                            description: `The maximum number of replicas to run simultaneously.
`,
                            type: 'integer',
                            format: 'int64',
                            default: 1
                        },
                        TotalCompletions: {
                            description: `The total number of replicas desired to reach the Completed
state. If unset, will default to the value of \`MaxConcurrent\`
`,
                            type: 'integer',
                            format: 'int64'
                        }
                    }
                },
                GlobalJob: {
                    description: `The mode used for services which run a task to the completed state
on each valid node.
`,
                    type: 'object'
                }
            }
        },
        UpdateConfig: {
            description: 'Specification for the update strategy of the service.',
            type: 'object',
            properties: {
                Parallelism: {
                    description: `Maximum number of tasks to be updated in one iteration (0 means
unlimited parallelism).
`,
                    type: 'integer',
                    format: 'int64'
                },
                Delay: {
                    description: 'Amount of time between updates, in nanoseconds.',
                    type: 'integer',
                    format: 'int64'
                },
                FailureAction: {
                    description: `Action to take if an updated task fails to run, or stops running
during the update.
`,
                    type: 'string',
                    enum: ['continue', 'pause', 'rollback']
                },
                Monitor: {
                    description: `Amount of time to monitor each updated task for failures, in
nanoseconds.
`,
                    type: 'integer',
                    format: 'int64'
                },
                MaxFailureRatio: {
                    description: `The fraction of tasks that may fail during an update before the
failure action is invoked, specified as a floating point number
between 0 and 1.
`,
                    type: 'number',
                    default: 0
                },
                Order: {
                    description: `The order of operations when rolling out an updated task. Either
the old task is shut down before the new task is started, or the
new task is started before the old task is shut down.
`,
                    type: 'string',
                    enum: ['stop-first', 'start-first']
                }
            }
        },
        RollbackConfig: {
            description: 'Specification for the rollback strategy of the service.',
            type: 'object',
            properties: {
                Parallelism: {
                    description: `Maximum number of tasks to be rolled back in one iteration (0 means
unlimited parallelism).
`,
                    type: 'integer',
                    format: 'int64'
                },
                Delay: {
                    description: `Amount of time between rollback iterations, in nanoseconds.
`,
                    type: 'integer',
                    format: 'int64'
                },
                FailureAction: {
                    description: `Action to take if an rolled back task fails to run, or stops
running during the rollback.
`,
                    type: 'string',
                    enum: ['continue', 'pause']
                },
                Monitor: {
                    description: `Amount of time to monitor each rolled back task for failures, in
nanoseconds.
`,
                    type: 'integer',
                    format: 'int64'
                },
                MaxFailureRatio: {
                    description: `The fraction of tasks that may fail during a rollback before the
failure action is invoked, specified as a floating point number
between 0 and 1.
`,
                    type: 'number',
                    default: 0
                },
                Order: {
                    description: `The order of operations when rolling back a task. Either the old
task is shut down before the new task is started, or the new task
is started before the old task is shut down.
`,
                    type: 'string',
                    enum: ['stop-first', 'start-first']
                }
            }
        },
        Networks: {
            description: `Specifies which networks the service should attach to.

Deprecated: This field is deprecated since v1.44. The Networks field in TaskSpec should be used instead.
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/NetworkAttachmentConfig'
            }
        },
        EndpointSpec: {
            '$ref': '#/definitions/EndpointSpec'
        }
    }
} as const;

export const $EndpointPortConfig = {
    type: 'object',
    properties: {
        Name: {
            type: 'string'
        },
        Protocol: {
            type: 'string',
            enum: ['tcp', 'udp', 'sctp']
        },
        TargetPort: {
            description: 'The port inside the container.',
            type: 'integer'
        },
        PublishedPort: {
            description: 'The port on the swarm hosts.',
            type: 'integer'
        },
        PublishMode: {
            description: `The mode in which port is published.

<p><br /></p>

- "ingress" makes the target port accessible on every node,
  regardless of whether there is a task for the service running on
  that node or not.
- "host" bypasses the routing mesh and publish the port directly on
  the swarm node where that service is running.
`,
            type: 'string',
            enum: ['ingress', 'host'],
            default: 'ingress',
            example: 'ingress'
        }
    }
} as const;

export const $EndpointSpec = {
    description: 'Properties that can be configured to access and load balance a service.',
    type: 'object',
    properties: {
        Mode: {
            description: `The mode of resolution to use for internal load balancing between tasks.
`,
            type: 'string',
            enum: ['vip', 'dnsrr'],
            default: 'vip'
        },
        Ports: {
            description: `List of exposed ports that this service is accessible on from the
outside. Ports can only be provided if \`vip\` resolution mode is used.
`,
            type: 'array',
            items: {
                '$ref': '#/definitions/EndpointPortConfig'
            }
        }
    }
} as const;

export const $Service = {
    type: 'object',
    properties: {
        ID: {
            type: 'string'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        UpdatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        Spec: {
            '$ref': '#/definitions/ServiceSpec'
        },
        Endpoint: {
            type: 'object',
            properties: {
                Spec: {
                    '$ref': '#/definitions/EndpointSpec'
                },
                Ports: {
                    type: 'array',
                    items: {
                        '$ref': '#/definitions/EndpointPortConfig'
                    }
                },
                VirtualIPs: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            NetworkID: {
                                type: 'string'
                            },
                            Addr: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        },
        UpdateStatus: {
            description: 'The status of a service update.',
            type: 'object',
            properties: {
                State: {
                    type: 'string',
                    enum: ['updating', 'paused', 'completed']
                },
                StartedAt: {
                    type: 'string',
                    format: 'dateTime'
                },
                CompletedAt: {
                    type: 'string',
                    format: 'dateTime'
                },
                Message: {
                    type: 'string'
                }
            }
        },
        ServiceStatus: {
            description: `The status of the service's tasks. Provided only when requested as
part of a ServiceList operation.
`,
            type: 'object',
            properties: {
                RunningTasks: {
                    description: `The number of tasks for the service currently in the Running state.
`,
                    type: 'integer',
                    format: 'uint64',
                    example: 7
                },
                DesiredTasks: {
                    description: `The number of tasks for the service desired to be running.
For replicated services, this is the replica count from the
service spec. For global services, this is computed by taking
count of all tasks for the service with a Desired State other
than Shutdown.
`,
                    type: 'integer',
                    format: 'uint64',
                    example: 10
                },
                CompletedTasks: {
                    description: `The number of tasks for a job that are in the Completed state.
This field must be cross-referenced with the service type, as the
value of 0 may mean the service is not in a job mode, or it may
mean the job-mode service has no tasks yet Completed.
`,
                    type: 'integer',
                    format: 'uint64'
                }
            }
        },
        JobStatus: {
            description: `The status of the service when it is in one of ReplicatedJob or
GlobalJob modes. Absent on Replicated and Global mode services. The
JobIteration is an ObjectVersion, but unlike the Service's version,
does not need to be sent with an update request.
`,
            type: 'object',
            properties: {
                JobIteration: {
                    description: `JobIteration is a value increased each time a Job is executed,
successfully or otherwise. "Executed", in this case, means the
job as a whole has been started, not that an individual Task has
been launched. A job is "Executed" when its ServiceSpec is
updated. JobIteration can be used to disambiguate Tasks belonging
to different executions of a job.  Though JobIteration will
increase with each subsequent execution, it may not necessarily
increase by 1, and so JobIteration should not be used to
`,
                    '$ref': '#/definitions/ObjectVersion'
                },
                LastExecution: {
                    description: `The last time, as observed by the server, that this job was
started.
`,
                    type: 'string',
                    format: 'dateTime'
                }
            }
        }
    },
    example: {
        ID: '9mnpnzenvg8p8tdbtq4wvbkcz',
        Version: {
            Index: 19
        },
        CreatedAt: '2016-06-07T21:05:51.880065305Z',
        UpdatedAt: '2016-06-07T21:07:29.962229872Z',
        Spec: {
            Name: 'hopeful_cori',
            TaskTemplate: {
                ContainerSpec: {
                    Image: 'redis'
                },
                Resources: {
                    Limits: {},
                    Reservations: {}
                },
                RestartPolicy: {
                    Condition: 'any',
                    MaxAttempts: 0
                },
                Placement: {},
                ForceUpdate: 0
            },
            Mode: {
                Replicated: {
                    Replicas: 1
                }
            },
            UpdateConfig: {
                Parallelism: 1,
                Delay: 1000000000,
                FailureAction: 'pause',
                Monitor: 15000000000,
                MaxFailureRatio: 0.15
            },
            RollbackConfig: {
                Parallelism: 1,
                Delay: 1000000000,
                FailureAction: 'pause',
                Monitor: 15000000000,
                MaxFailureRatio: 0.15
            },
            EndpointSpec: {
                Mode: 'vip',
                Ports: [
                    {
                        Protocol: 'tcp',
                        TargetPort: 6379,
                        PublishedPort: 30001
                    }
                ]
            }
        },
        Endpoint: {
            Spec: {
                Mode: 'vip',
                Ports: [
                    {
                        Protocol: 'tcp',
                        TargetPort: 6379,
                        PublishedPort: 30001
                    }
                ]
            },
            Ports: [
                {
                    Protocol: 'tcp',
                    TargetPort: 6379,
                    PublishedPort: 30001
                }
            ],
            VirtualIPs: [
                {
                    NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
                    Addr: '10.255.0.2/16'
                },
                {
                    NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
                    Addr: '10.255.0.3/16'
                }
            ]
        }
    }
} as const;

export const $ImageDeleteResponseItem = {
    type: 'object',
    'x-go-name': 'DeleteResponse',
    properties: {
        Untagged: {
            description: 'The image ID of an image that was untagged',
            type: 'string'
        },
        Deleted: {
            description: 'The image ID of an image that was deleted',
            type: 'string'
        }
    }
} as const;

export const $ServiceCreateResponse = {
    type: 'object',
    description: `contains the information returned to a client on the
creation of a new service.
`,
    properties: {
        ID: {
            description: 'The ID of the created service.',
            type: 'string',
            'x-nullable': false,
            example: 'ak7w3gjqoa3kuz8xcpnyy0pvl'
        },
        Warnings: {
            description: `Optional warning message.

FIXME(thaJeztah): this should have "omitempty" in the generated type.
`,
            type: 'array',
            'x-nullable': true,
            items: {
                type: 'string'
            },
            example: ['unable to pin image doesnotexist:latest to digest: image library/doesnotexist:latest not found']
        }
    }
} as const;

export const $ServiceUpdateResponse = {
    type: 'object',
    properties: {
        Warnings: {
            description: 'Optional warning messages',
            type: 'array',
            items: {
                type: 'string'
            }
        }
    },
    example: {
        Warnings: ['unable to pin image doesnotexist:latest to digest: image library/doesnotexist:latest not found']
    }
} as const;

export const $ContainerSummary = {
    type: 'object',
    properties: {
        Id: {
            description: 'The ID of this container',
            type: 'string',
            'x-go-name': 'ID'
        },
        Names: {
            description: 'The names that this container has been given',
            type: 'array',
            items: {
                type: 'string'
            }
        },
        Image: {
            description: 'The name of the image used when creating this container',
            type: 'string'
        },
        ImageID: {
            description: 'The ID of the image that this container was created from',
            type: 'string'
        },
        Command: {
            description: 'Command to run when starting the container',
            type: 'string'
        },
        Created: {
            description: 'When the container was created',
            type: 'integer',
            format: 'int64'
        },
        Ports: {
            description: 'The ports exposed by this container',
            type: 'array',
            items: {
                '$ref': '#/definitions/Port'
            }
        },
        SizeRw: {
            description: 'The size of files that have been created or changed by this container',
            type: 'integer',
            format: 'int64'
        },
        SizeRootFs: {
            description: 'The total size of all the files in this container',
            type: 'integer',
            format: 'int64'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        State: {
            description: 'The state of this container (e.g. `Exited`)',
            type: 'string'
        },
        Status: {
            description: 'Additional human-readable status of this container (e.g. `Exit 0`)',
            type: 'string'
        },
        HostConfig: {
            type: 'object',
            properties: {
                NetworkMode: {
                    type: 'string'
                }
            }
        },
        NetworkSettings: {
            description: "A summary of the container's network settings",
            type: 'object',
            properties: {
                Networks: {
                    type: 'object',
                    additionalProperties: {
                        '$ref': '#/definitions/EndpointSettings'
                    }
                }
            }
        },
        Mounts: {
            type: 'array',
            items: {
                '$ref': '#/definitions/MountPoint'
            }
        }
    }
} as const;

export const $Driver = {
    description: 'Driver represents a driver (network, logging, secrets).',
    type: 'object',
    required: ['Name'],
    properties: {
        Name: {
            description: 'Name of the driver.',
            type: 'string',
            'x-nullable': false,
            example: 'some-driver'
        },
        Options: {
            description: 'Key/value map of driver-specific options.',
            type: 'object',
            'x-nullable': false,
            additionalProperties: {
                type: 'string'
            },
            example: {
                OptionA: 'value for driver-specific option A',
                OptionB: 'value for driver-specific option B'
            }
        }
    }
} as const;

export const $SecretSpec = {
    type: 'object',
    properties: {
        Name: {
            description: 'User-defined name of the secret.',
            type: 'string'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-value',
                'com.example.some-other-label': 'some-other-value'
            }
        },
        Data: {
            description: `Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
data to store as secret.

This field is only used to _create_ a secret, and is not returned by
other endpoints.
`,
            type: 'string',
            example: ''
        },
        Driver: {
            description: `Name of the secrets driver used to fetch the secret's value from an
external secret store.
`,
            '$ref': '#/definitions/Driver'
        },
        Templating: {
            description: `Templating driver, if applicable

Templating controls whether and how to evaluate the config payload as
a template. If no driver is set, no templating is used.
`,
            '$ref': '#/definitions/Driver'
        }
    }
} as const;

export const $Secret = {
    type: 'object',
    properties: {
        ID: {
            type: 'string',
            example: 'blt1owaxmitz71s9v5zh81zun'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime',
            example: '2017-07-20T13:55:28.678958722Z'
        },
        UpdatedAt: {
            type: 'string',
            format: 'dateTime',
            example: '2017-07-20T13:55:28.678958722Z'
        },
        Spec: {
            '$ref': '#/definitions/SecretSpec'
        }
    }
} as const;

export const $ConfigSpec = {
    type: 'object',
    properties: {
        Name: {
            description: 'User-defined name of the config.',
            type: 'string'
        },
        Labels: {
            description: 'User-defined key/value metadata.',
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        Data: {
            description: `Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
config data.
`,
            type: 'string'
        },
        Templating: {
            description: `Templating driver, if applicable

Templating controls whether and how to evaluate the config payload as
a template. If no driver is set, no templating is used.
`,
            '$ref': '#/definitions/Driver'
        }
    }
} as const;

export const $Config = {
    type: 'object',
    properties: {
        ID: {
            type: 'string'
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        UpdatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        Spec: {
            '$ref': '#/definitions/ConfigSpec'
        }
    }
} as const;

export const $ContainerState = {
    description: `ContainerState stores container's running state. It's part of ContainerJSONBase
and will be returned by the "inspect" command.
`,
    type: 'object',
    'x-nullable': true,
    properties: {
        Status: {
            description: `String representation of the container state. Can be one of "created",
"running", "paused", "restarting", "removing", "exited", or "dead".
`,
            type: 'string',
            enum: ['created', 'running', 'paused', 'restarting', 'removing', 'exited', 'dead'],
            example: 'running'
        },
        Running: {
            description: `Whether this container is running.

Note that a running container can be _paused_. The \`Running\` and \`Paused\`
booleans are not mutually exclusive:

When pausing a container (on Linux), the freezer cgroup is used to suspend
all processes in the container. Freezing the process requires the process to
be running. As a result, paused containers are both \`Running\` _and_ \`Paused\`.

Use the \`Status\` field instead to determine if a container's state is "running".
`,
            type: 'boolean',
            example: true
        },
        Paused: {
            description: 'Whether this container is paused.',
            type: 'boolean',
            example: false
        },
        Restarting: {
            description: 'Whether this container is restarting.',
            type: 'boolean',
            example: false
        },
        OOMKilled: {
            description: `Whether a process within this container has been killed because it ran
out of memory since the container was last started.
`,
            type: 'boolean',
            example: false
        },
        Dead: {
            type: 'boolean',
            example: false
        },
        Pid: {
            description: 'The process ID of this container',
            type: 'integer',
            example: 1234
        },
        ExitCode: {
            description: 'The last exit code of this container',
            type: 'integer',
            example: 0
        },
        Error: {
            type: 'string'
        },
        StartedAt: {
            description: 'The time when this container was last started.',
            type: 'string',
            example: '2020-01-06T09:06:59.461876391Z'
        },
        FinishedAt: {
            description: 'The time when this container last exited.',
            type: 'string',
            example: '2020-01-06T09:07:59.461876391Z'
        },
        Health: {
            '$ref': '#/definitions/Health'
        }
    }
} as const;

export const $ContainerCreateResponse = {
    description: 'OK response to ContainerCreate operation',
    type: 'object',
    title: 'ContainerCreateResponse',
    'x-go-name': 'CreateResponse',
    required: ['Id', 'Warnings'],
    properties: {
        Id: {
            description: 'The ID of the created container',
            type: 'string',
            'x-nullable': false,
            example: 'ede54ee1afda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c743'
        },
        Warnings: {
            description: 'Warnings encountered when creating the container',
            type: 'array',
            'x-nullable': false,
            items: {
                type: 'string'
            },
            example: []
        }
    }
} as const;

export const $ContainerWaitResponse = {
    description: 'OK response to ContainerWait operation',
    type: 'object',
    'x-go-name': 'WaitResponse',
    title: 'ContainerWaitResponse',
    required: ['StatusCode'],
    properties: {
        StatusCode: {
            description: 'Exit code of the container',
            type: 'integer',
            format: 'int64',
            'x-nullable': false
        },
        Error: {
            '$ref': '#/definitions/ContainerWaitExitError'
        }
    }
} as const;

export const $ContainerWaitExitError = {
    description: 'container waiting error, if any',
    type: 'object',
    'x-go-name': 'WaitExitError',
    properties: {
        Message: {
            description: 'Details of an error',
            type: 'string'
        }
    }
} as const;

export const $SystemVersion = {
    type: 'object',
    description: `Response of Engine API: GET "/version"
`,
    properties: {
        Platform: {
            type: 'object',
            required: ['Name'],
            properties: {
                Name: {
                    type: 'string'
                }
            }
        },
        Components: {
            type: 'array',
            description: `Information about system components
`,
            items: {
                type: 'object',
                'x-go-name': 'ComponentVersion',
                required: ['Name', 'Version'],
                properties: {
                    Name: {
                        description: `Name of the component
`,
                        type: 'string',
                        example: 'Engine'
                    },
                    Version: {
                        description: `Version of the component
`,
                        type: 'string',
                        'x-nullable': false,
                        example: '19.03.12'
                    },
                    Details: {
                        description: `Key/value pairs of strings with additional information about the
component. These values are intended for informational purposes
only, and their content is not defined, and not part of the API
specification.

These messages can be printed by the client as information to the user.
`,
                        type: 'object',
                        'x-nullable': true
                    }
                }
            }
        },
        Version: {
            description: 'The version of the daemon',
            type: 'string',
            example: '19.03.12'
        },
        ApiVersion: {
            description: `The default (and highest) API version that is supported by the daemon
`,
            type: 'string',
            example: '1.40'
        },
        MinAPIVersion: {
            description: `The minimum API version that is supported by the daemon
`,
            type: 'string',
            example: '1.12'
        },
        GitCommit: {
            description: `The Git commit of the source code that was used to build the daemon
`,
            type: 'string',
            example: '48a66213fe'
        },
        GoVersion: {
            description: `The version Go used to compile the daemon, and the version of the Go
runtime in use.
`,
            type: 'string',
            example: 'go1.13.14'
        },
        Os: {
            description: `The operating system that the daemon is running on ("linux" or "windows")
`,
            type: 'string',
            example: 'linux'
        },
        Arch: {
            description: `The architecture that the daemon is running on
`,
            type: 'string',
            example: 'amd64'
        },
        KernelVersion: {
            description: `The kernel version (\`uname -r\`) that the daemon is running on.

This field is omitted when empty.
`,
            type: 'string',
            example: '4.19.76-linuxkit'
        },
        Experimental: {
            description: `Indicates if the daemon is started with experimental features enabled.

This field is omitted when empty / false.
`,
            type: 'boolean',
            example: true
        },
        BuildTime: {
            description: `The date and time that the daemon was compiled.
`,
            type: 'string',
            example: '2020-06-22T15:49:27.000000000+00:00'
        }
    }
} as const;

export const $SystemInfo = {
    type: 'object',
    properties: {
        ID: {
            description: `Unique identifier of the daemon.

<p><br /></p>

> **Note**: The format of the ID itself is not part of the API, and
> should not be considered stable.
`,
            type: 'string',
            example: '7TRN:IPZB:QYBB:VPBQ:UMPP:KARE:6ZNR:XE6T:7EWV:PKF4:ZOJD:TPYS'
        },
        Containers: {
            description: 'Total number of containers on the host.',
            type: 'integer',
            example: 14
        },
        ContainersRunning: {
            description: `Number of containers with status \`"running"\`.
`,
            type: 'integer',
            example: 3
        },
        ContainersPaused: {
            description: `Number of containers with status \`"paused"\`.
`,
            type: 'integer',
            example: 1
        },
        ContainersStopped: {
            description: `Number of containers with status \`"stopped"\`.
`,
            type: 'integer',
            example: 10
        },
        Images: {
            description: `Total number of images on the host.

Both _tagged_ and _untagged_ (dangling) images are counted.
`,
            type: 'integer',
            example: 508
        },
        Driver: {
            description: 'Name of the storage driver in use.',
            type: 'string',
            example: 'overlay2'
        },
        DriverStatus: {
            description: `Information specific to the storage driver, provided as
"label" / "value" pairs.

This information is provided by the storage driver, and formatted
in a way consistent with the output of \`docker info\` on the command
line.

<p><br /></p>

> **Note**: The information returned in this field, including the
> formatting of values and labels, should not be considered stable,
> and may change without notice.
`,
            type: 'array',
            items: {
                type: 'array',
                items: {
                    type: 'string'
                }
            },
            example: [['Backing Filesystem', 'extfs'], ['Supports d_type', 'true'], ['Native Overlay Diff', 'true']]
        },
        DockerRootDir: {
            description: `Root directory of persistent Docker state.

Defaults to \`/var/lib/docker\` on Linux, and \`C:\ProgramData\docker\`
on Windows.
`,
            type: 'string',
            example: '/var/lib/docker'
        },
        Plugins: {
            '$ref': '#/definitions/PluginsInfo'
        },
        MemoryLimit: {
            description: 'Indicates if the host has memory limit support enabled.',
            type: 'boolean',
            example: true
        },
        SwapLimit: {
            description: 'Indicates if the host has memory swap limit support enabled.',
            type: 'boolean',
            example: true
        },
        KernelMemoryTCP: {
            description: `Indicates if the host has kernel memory TCP limit support enabled. This
field is omitted if not supported.

Kernel memory TCP limits are not supported when using cgroups v2, which
does not support the corresponding \`memory.kmem.tcp.limit_in_bytes\` cgroup.
`,
            type: 'boolean',
            example: true
        },
        CpuCfsPeriod: {
            description: `Indicates if CPU CFS(Completely Fair Scheduler) period is supported by
the host.
`,
            type: 'boolean',
            example: true
        },
        CpuCfsQuota: {
            description: `Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by
the host.
`,
            type: 'boolean',
            example: true
        },
        CPUShares: {
            description: `Indicates if CPU Shares limiting is supported by the host.
`,
            type: 'boolean',
            example: true
        },
        CPUSet: {
            description: `Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.

See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)
`,
            type: 'boolean',
            example: true
        },
        PidsLimit: {
            description: 'Indicates if the host kernel has PID limit support enabled.',
            type: 'boolean',
            example: true
        },
        OomKillDisable: {
            description: 'Indicates if OOM killer disable is supported on the host.',
            type: 'boolean'
        },
        IPv4Forwarding: {
            description: 'Indicates IPv4 forwarding is enabled.',
            type: 'boolean',
            example: true
        },
        BridgeNfIptables: {
            description: 'Indicates if `bridge-nf-call-iptables` is available on the host.',
            type: 'boolean',
            example: true
        },
        BridgeNfIp6tables: {
            description: 'Indicates if `bridge-nf-call-ip6tables` is available on the host.',
            type: 'boolean',
            example: true
        },
        Debug: {
            description: `Indicates if the daemon is running in debug-mode / with debug-level
logging enabled.
`,
            type: 'boolean',
            example: true
        },
        NFd: {
            description: `The total number of file Descriptors in use by the daemon process.

This information is only returned if debug-mode is enabled.
`,
            type: 'integer',
            example: 64
        },
        NGoroutines: {
            description: `The  number of goroutines that currently exist.

This information is only returned if debug-mode is enabled.
`,
            type: 'integer',
            example: 174
        },
        SystemTime: {
            description: `Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
format with nano-seconds.
`,
            type: 'string',
            example: '2017-08-08T20:28:29.06202363Z'
        },
        LoggingDriver: {
            description: `The logging driver to use as a default for new containers.
`,
            type: 'string'
        },
        CgroupDriver: {
            description: `The driver to use for managing cgroups.
`,
            type: 'string',
            enum: ['cgroupfs', 'systemd', 'none'],
            default: 'cgroupfs',
            example: 'cgroupfs'
        },
        CgroupVersion: {
            description: `The version of the cgroup.
`,
            type: 'string',
            enum: ['1', '2'],
            default: '1',
            example: '1'
        },
        NEventsListener: {
            description: 'Number of event listeners subscribed.',
            type: 'integer',
            example: 30
        },
        KernelVersion: {
            description: `Kernel version of the host.

On Linux, this information obtained from \`uname\`. On Windows this
information is queried from the <kbd>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\</kbd>
registry value, for example _"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)"_.
`,
            type: 'string',
            example: '4.9.38-moby'
        },
        OperatingSystem: {
            description: `Name of the host's operating system, for example: "Ubuntu 16.04.2 LTS"
or "Windows Server 2016 Datacenter"
`,
            type: 'string',
            example: 'Alpine Linux v3.5'
        },
        OSVersion: {
            description: `Version of the host's operating system

<p><br /></p>

> **Note**: The information returned in this field, including its
> very existence, and the formatting of values, should not be considered
> stable, and may change without notice.
`,
            type: 'string',
            example: '16.04'
        },
        OSType: {
            description: `Generic type of the operating system of the host, as returned by the
Go runtime (\`GOOS\`).

Currently returned values are "linux" and "windows". A full list of
possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
`,
            type: 'string',
            example: 'linux'
        },
        Architecture: {
            description: `Hardware architecture of the host, as returned by the Go runtime
(\`GOARCH\`).

A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
`,
            type: 'string',
            example: 'x86_64'
        },
        NCPU: {
            description: `The number of logical CPUs usable by the daemon.

The number of available CPUs is checked by querying the operating
system when the daemon starts. Changes to operating system CPU
allocation after the daemon is started are not reflected.
`,
            type: 'integer',
            example: 4
        },
        MemTotal: {
            description: `Total amount of physical memory available on the host, in bytes.
`,
            type: 'integer',
            format: 'int64',
            example: 2095882240
        },
        IndexServerAddress: {
            description: `Address / URL of the index server that is used for image search,
and as a default for user authentication for Docker Hub and Docker Cloud.
`,
            default: 'https://index.docker.io/v1/',
            type: 'string',
            example: 'https://index.docker.io/v1/'
        },
        RegistryConfig: {
            '$ref': '#/definitions/RegistryServiceConfig'
        },
        GenericResources: {
            '$ref': '#/definitions/GenericResources'
        },
        HttpProxy: {
            description: `HTTP-proxy configured for the daemon. This value is obtained from the
[\`HTTP_PROXY\`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
are masked in the API response.

Containers do not automatically inherit this configuration.
`,
            type: 'string',
            example: 'http://xxxxx:xxxxx@proxy.corp.example.com:8080'
        },
        HttpsProxy: {
            description: `HTTPS-proxy configured for the daemon. This value is obtained from the
[\`HTTPS_PROXY\`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
are masked in the API response.

Containers do not automatically inherit this configuration.
`,
            type: 'string',
            example: 'https://xxxxx:xxxxx@proxy.corp.example.com:4443'
        },
        NoProxy: {
            description: `Comma-separated list of domain extensions for which no proxy should be
used. This value is obtained from the [\`NO_PROXY\`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)
environment variable.

Containers do not automatically inherit this configuration.
`,
            type: 'string',
            example: '*.local, 169.254/16'
        },
        Name: {
            description: 'Hostname of the host.',
            type: 'string',
            example: 'node5.corp.example.com'
        },
        Labels: {
            description: `User-defined labels (key/value metadata) as set on the daemon.

<p><br /></p>

> **Note**: When part of a Swarm, nodes can both have _daemon_ labels,
> set through the daemon configuration, and _node_ labels, set from a
> manager node in the Swarm. Node labels are not included in this
> field. Node labels can be retrieved using the \`/nodes/(id)\` endpoint
> on a manager node in the Swarm.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['storage=ssd', 'production']
        },
        ExperimentalBuild: {
            description: `Indicates if experimental features are enabled on the daemon.
`,
            type: 'boolean',
            example: true
        },
        ServerVersion: {
            description: `Version string of the daemon.
`,
            type: 'string',
            example: '24.0.2'
        },
        Runtimes: {
            description: `List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
runtimes configured on the daemon. Keys hold the "name" used to
reference the runtime.

The Docker daemon relies on an OCI compliant runtime (invoked via the
\`containerd\` daemon) as its interface to the Linux kernel namespaces,
cgroups, and SELinux.

The default runtime is \`runc\`, and automatically configured. Additional
runtimes can be configured by the user and will be listed here.
`,
            type: 'object',
            additionalProperties: {
                '$ref': '#/definitions/Runtime'
            },
            default: {
                runc: {
                    path: 'runc'
                }
            },
            example: {
                runc: {
                    path: 'runc'
                },
                'runc-master': {
                    path: '/go/bin/runc'
                },
                custom: {
                    path: '/usr/local/bin/my-oci-runtime',
                    runtimeArgs: ['--debug', '--systemd-cgroup=false']
                }
            }
        },
        DefaultRuntime: {
            description: `Name of the default OCI runtime that is used when starting containers.

The default can be overridden per-container at create time.
`,
            type: 'string',
            default: 'runc',
            example: 'runc'
        },
        Swarm: {
            '$ref': '#/definitions/SwarmInfo'
        },
        LiveRestoreEnabled: {
            description: `Indicates if live restore is enabled.

If enabled, containers are kept running when the daemon is shutdown
or upon daemon start if running containers are detected.
`,
            type: 'boolean',
            default: false,
            example: false
        },
        Isolation: {
            description: `Represents the isolation technology to use as a default for containers.
The supported values are platform-specific.

If no isolation value is specified on daemon start, on Windows client,
the default is \`hyperv\`, and on Windows server, the default is \`process\`.

This option is currently not used on other platforms.
`,
            default: 'default',
            type: 'string',
            enum: ['default', 'hyperv', 'process']
        },
        InitBinary: {
            description: `Name and, optional, path of the \`docker-init\` binary.

If the path is omitted, the daemon searches the host's \`$PATH\` for the
binary and uses the first result.
`,
            type: 'string',
            example: 'docker-init'
        },
        ContainerdCommit: {
            '$ref': '#/definitions/Commit'
        },
        RuncCommit: {
            '$ref': '#/definitions/Commit'
        },
        InitCommit: {
            '$ref': '#/definitions/Commit'
        },
        SecurityOptions: {
            description: `List of security features that are enabled on the daemon, such as
apparmor, seccomp, SELinux, user-namespaces (userns), rootless and
no-new-privileges.

Additional configuration options for each security feature may
be present, and are included as a comma-separated list of key/value
pairs.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['name=apparmor', 'name=seccomp,profile=default', 'name=selinux', 'name=userns', 'name=rootless']
        },
        ProductLicense: {
            description: `Reports a summary of the product license on the daemon.

If a commercial license has been applied to the daemon, information
such as number of nodes, and expiration are included.
`,
            type: 'string',
            example: 'Community Engine'
        },
        DefaultAddressPools: {
            description: `List of custom default address pools for local networks, which can be
specified in the daemon.json file or dockerd option.

Example: a Base "10.10.0.0/16" with Size 24 will define the set of 256
10.10.[0-255].0/24 address pools.
`,
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    Base: {
                        description: 'The network address in CIDR format',
                        type: 'string',
                        example: '10.10.0.0/16'
                    },
                    Size: {
                        description: 'The network pool size',
                        type: 'integer',
                        example: '24'
                    }
                }
            }
        },
        Warnings: {
            description: `List of warnings / informational messages about missing features, or
issues related to the daemon configuration.

These messages can be printed by the client as information to the user.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['WARNING: No memory limit support', 'WARNING: bridge-nf-call-iptables is disabled', 'WARNING: bridge-nf-call-ip6tables is disabled']
        },
        CDISpecDirs: {
            description: `List of directories where (Container Device Interface) CDI
specifications are located.

These specifications define vendor-specific modifications to an OCI
runtime specification for a container being created.

An empty list indicates that CDI device injection is disabled.

Note that since using CDI device injection requires the daemon to have
experimental enabled. For non-experimental daemons an empty list will
always be returned.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['/etc/cdi', '/var/run/cdi']
        }
    }
} as const;

export const $PluginsInfo = {
    description: `Available plugins per type.

<p><br /></p>

> **Note**: Only unmanaged (V1) plugins are included in this list.
> V1 plugins are "lazily" loaded, and are not returned in this list
> if there is no resource using the plugin.
`,
    type: 'object',
    properties: {
        Volume: {
            description: 'Names of available volume-drivers, and network-driver plugins.',
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['local']
        },
        Network: {
            description: 'Names of available network-drivers, and network-driver plugins.',
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['bridge', 'host', 'ipvlan', 'macvlan', 'null', 'overlay']
        },
        Authorization: {
            description: 'Names of available authorization plugins.',
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['img-authz-plugin', 'hbm']
        },
        Log: {
            description: 'Names of available logging-drivers, and logging-driver plugins.',
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['awslogs', 'fluentd', 'gcplogs', 'gelf', 'journald', 'json-file', 'splunk', 'syslog']
        }
    }
} as const;

export const $RegistryServiceConfig = {
    description: `RegistryServiceConfig stores daemon registry services configuration.
`,
    type: 'object',
    'x-nullable': true,
    properties: {
        AllowNondistributableArtifactsCIDRs: {
            description: `List of IP ranges to which nondistributable artifacts can be pushed,
using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).

Some images (for example, Windows base images) contain artifacts
whose distribution is restricted by license. When these images are
pushed to a registry, restricted artifacts are not included.

This configuration override this behavior, and enables the daemon to
push nondistributable artifacts to all registries whose resolved IP
address is within the subnet described by the CIDR syntax.

This option is useful when pushing images containing
nondistributable artifacts to a registry on an air-gapped network so
hosts on that network can pull the images without connecting to
another server.

> **Warning**: Nondistributable artifacts typically have restrictions
> on how and where they can be distributed and shared. Only use this
> feature to push artifacts to private registries and ensure that you
> are in compliance with any terms that cover redistributing
> nondistributable artifacts.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['::1/128', '127.0.0.0/8']
        },
        AllowNondistributableArtifactsHostnames: {
            description: `List of registry hostnames to which nondistributable artifacts can be
pushed, using the format \`<hostname>[:<port>]\` or \`<IP address>[:<port>]\`.

Some images (for example, Windows base images) contain artifacts
whose distribution is restricted by license. When these images are
pushed to a registry, restricted artifacts are not included.

This configuration override this behavior for the specified
registries.

This option is useful when pushing images containing
nondistributable artifacts to a registry on an air-gapped network so
hosts on that network can pull the images without connecting to
another server.

> **Warning**: Nondistributable artifacts typically have restrictions
> on how and where they can be distributed and shared. Only use this
> feature to push artifacts to private registries and ensure that you
> are in compliance with any terms that cover redistributing
> nondistributable artifacts.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['registry.internal.corp.example.com:3000', '[2001:db8:a0b:12f0::1]:443']
        },
        InsecureRegistryCIDRs: {
            description: `List of IP ranges of insecure registries, using the CIDR syntax
([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries
accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates
from unknown CAs) communication.

By default, local registries (\`127.0.0.0/8\`) are configured as
insecure. All other registries are secure. Communicating with an
insecure registry is not possible if the daemon assumes that registry
is secure.

This configuration override this behavior, insecure communication with
registries whose resolved IP address is within the subnet described by
the CIDR syntax.

Registries can also be marked insecure by hostname. Those registries
are listed under \`IndexConfigs\` and have their \`Secure\` field set to
\`false\`.

> **Warning**: Using this option can be useful when running a local
> registry, but introduces security vulnerabilities. This option
> should therefore ONLY be used for testing purposes. For increased
> security, users should add their CA to their system's list of trusted
> CAs instead of enabling this option.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['::1/128', '127.0.0.0/8']
        },
        IndexConfigs: {
            type: 'object',
            additionalProperties: {
                '$ref': '#/definitions/IndexInfo'
            },
            example: {
                '127.0.0.1:5000': {
                    Name: '127.0.0.1:5000',
                    Mirrors: [],
                    Secure: false,
                    Official: false
                },
                '[2001:db8:a0b:12f0::1]:80': {
                    Name: '[2001:db8:a0b:12f0::1]:80',
                    Mirrors: [],
                    Secure: false,
                    Official: false
                },
                'docker.io': {
                    Name: 'docker.io',
                    Mirrors: ['https://hub-mirror.corp.example.com:5000/'],
                    Secure: true,
                    Official: true
                },
                'registry.internal.corp.example.com:3000': {
                    Name: 'registry.internal.corp.example.com:3000',
                    Mirrors: [],
                    Secure: false,
                    Official: false
                }
            }
        },
        Mirrors: {
            description: `List of registry URLs that act as a mirror for the official
(\`docker.io\`) registry.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['https://hub-mirror.corp.example.com:5000/', 'https://[2001:db8:a0b:12f0::1]/']
        }
    }
} as const;

export const $IndexInfo = {
    description: 'IndexInfo contains information about a registry.',
    type: 'object',
    'x-nullable': true,
    properties: {
        Name: {
            description: `Name of the registry, such as "docker.io".
`,
            type: 'string',
            example: 'docker.io'
        },
        Mirrors: {
            description: `List of mirrors, expressed as URIs.
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['https://hub-mirror.corp.example.com:5000/', 'https://registry-2.docker.io/', 'https://registry-3.docker.io/']
        },
        Secure: {
            description: `Indicates if the registry is part of the list of insecure
registries.

If \`false\`, the registry is insecure. Insecure registries accept
un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from
unknown CAs) communication.

> **Warning**: Insecure registries can be useful when running a local
> registry. However, because its use creates security vulnerabilities
> it should ONLY be enabled for testing purposes. For increased
> security, users should add their CA to their system's list of
> trusted CAs instead of enabling this option.
`,
            type: 'boolean',
            example: true
        },
        Official: {
            description: `Indicates whether this is an official registry (i.e., Docker Hub / docker.io)
`,
            type: 'boolean',
            example: true
        }
    }
} as const;

export const $Runtime = {
    description: `Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)
runtime.

The runtime is invoked by the daemon via the \`containerd\` daemon. OCI
runtimes act as an interface to the Linux kernel namespaces, cgroups,
and SELinux.
`,
    type: 'object',
    properties: {
        path: {
            description: `Name and, optional, path, of the OCI executable binary.

If the path is omitted, the daemon searches the host's \`$PATH\` for the
binary and uses the first result.
`,
            type: 'string',
            example: '/usr/local/bin/my-oci-runtime'
        },
        runtimeArgs: {
            description: `List of command-line arguments to pass to the runtime when invoked.
`,
            type: 'array',
            'x-nullable': true,
            items: {
                type: 'string'
            },
            example: ['--debug', '--systemd-cgroup=false']
        },
        status: {
            description: `Information specific to the runtime.

While this API specification does not define data provided by runtimes,
the following well-known properties may be provided by runtimes:

\`org.opencontainers.runtime-spec.features\`: features structure as defined
in the [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/main/features.md),
in a JSON string representation.

<p><br /></p>

> **Note**: The information returned in this field, including the
> formatting of values and labels, should not be considered stable,
> and may change without notice.
`,
            type: 'object',
            'x-nullable': true,
            additionalProperties: {
                type: 'string'
            },
            example: {
                'org.opencontainers.runtime-spec.features': '{"ociVersionMin":"1.0.0","ociVersionMax":"1.1.0","...":"..."}'
            }
        }
    }
} as const;

export const $Commit = {
    description: `Commit holds the Git-commit (SHA1) that a binary was built from, as
reported in the version-string of external tools, such as \`containerd\`,
or \`runC\`.
`,
    type: 'object',
    properties: {
        ID: {
            description: 'Actual commit ID of external tool.',
            type: 'string',
            example: 'cfb82a876ecc11b5ca0977d1733adbe58599088a'
        },
        Expected: {
            description: `Commit ID of external tool expected by dockerd as set at build time.
`,
            type: 'string',
            example: '2d41c047c83e09a6d61d464906feb2a2f3c52aa4'
        }
    }
} as const;

export const $SwarmInfo = {
    description: `Represents generic information about swarm.
`,
    type: 'object',
    properties: {
        NodeID: {
            description: 'Unique identifier of for this node in the swarm.',
            type: 'string',
            default: '',
            example: 'k67qz4598weg5unwwffg6z1m1'
        },
        NodeAddr: {
            description: `IP address at which this node can be reached by other nodes in the
swarm.
`,
            type: 'string',
            default: '',
            example: '10.0.0.46'
        },
        LocalNodeState: {
            '$ref': '#/definitions/LocalNodeState'
        },
        ControlAvailable: {
            type: 'boolean',
            default: false,
            example: true
        },
        Error: {
            type: 'string',
            default: ''
        },
        RemoteManagers: {
            description: `List of ID's and addresses of other managers in the swarm.
`,
            type: 'array',
            default: null,
            'x-nullable': true,
            items: {
                '$ref': '#/definitions/PeerNode'
            },
            example: [
                {
                    NodeID: '71izy0goik036k48jg985xnds',
                    Addr: '10.0.0.158:2377'
                },
                {
                    NodeID: '79y6h1o4gv8n120drcprv5nmc',
                    Addr: '10.0.0.159:2377'
                },
                {
                    NodeID: 'k67qz4598weg5unwwffg6z1m1',
                    Addr: '10.0.0.46:2377'
                }
            ]
        },
        Nodes: {
            description: 'Total number of nodes in the swarm.',
            type: 'integer',
            'x-nullable': true,
            example: 4
        },
        Managers: {
            description: 'Total number of managers in the swarm.',
            type: 'integer',
            'x-nullable': true,
            example: 3
        },
        Cluster: {
            '$ref': '#/definitions/ClusterInfo'
        }
    }
} as const;

export const $LocalNodeState = {
    description: 'Current local status of this node.',
    type: 'string',
    default: '',
    enum: ['', 'inactive', 'pending', 'active', 'error', 'locked'],
    example: 'active'
} as const;

export const $PeerNode = {
    description: 'Represents a peer-node in the swarm',
    type: 'object',
    properties: {
        NodeID: {
            description: 'Unique identifier of for this node in the swarm.',
            type: 'string'
        },
        Addr: {
            description: `IP address and ports at which this node can be reached.
`,
            type: 'string'
        }
    }
} as const;

export const $NetworkAttachmentConfig = {
    description: `Specifies how a service should be attached to a particular network.
`,
    type: 'object',
    properties: {
        Target: {
            description: `The target network for attachment. Must be a network name or ID.
`,
            type: 'string'
        },
        Aliases: {
            description: `Discoverable alternate names for the service on this network.
`,
            type: 'array',
            items: {
                type: 'string'
            }
        },
        DriverOpts: {
            description: `Driver attachment options for the network target.
`,
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const $EventActor = {
    description: `Actor describes something that generates events, like a container, network,
or a volume.
`,
    type: 'object',
    properties: {
        ID: {
            description: 'The ID of the object emitting the event',
            type: 'string',
            example: 'ede54ee1afda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c743'
        },
        Attributes: {
            description: `Various key/value attributes of the object, depending on its type.
`,
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            example: {
                'com.example.some-label': 'some-label-value',
                image: 'alpine:latest',
                name: 'my-container'
            }
        }
    }
} as const;

export const $EventMessage = {
    description: `EventMessage represents the information an event contains.
`,
    type: 'object',
    title: 'SystemEventsResponse',
    properties: {
        Type: {
            description: 'The type of object emitting the event',
            type: 'string',
            enum: ['builder', 'config', 'container', 'daemon', 'image', 'network', 'node', 'plugin', 'secret', 'service', 'volume'],
            example: 'container'
        },
        Action: {
            description: 'The type of event',
            type: 'string',
            example: 'create'
        },
        Actor: {
            '$ref': '#/definitions/EventActor'
        },
        scope: {
            description: `Scope of the event. Engine events are \`local\` scope. Cluster (Swarm)
events are \`swarm\` scope.
`,
            type: 'string',
            enum: ['local', 'swarm']
        },
        time: {
            description: 'Timestamp of event',
            type: 'integer',
            format: 'int64',
            example: 1629574695
        },
        timeNano: {
            description: 'Timestamp of event, with nanosecond accuracy',
            type: 'integer',
            format: 'int64',
            example: 1629574695515050000
        }
    }
} as const;

export const $OCIDescriptor = {
    type: 'object',
    'x-go-name': 'Descriptor',
    description: `A descriptor struct containing digest, media type, and size, as defined in
the [OCI Content Descriptors Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/descriptor.md).
`,
    properties: {
        mediaType: {
            description: `The media type of the object this schema refers to.
`,
            type: 'string',
            example: 'application/vnd.docker.distribution.manifest.v2+json'
        },
        digest: {
            description: `The digest of the targeted content.
`,
            type: 'string',
            example: 'sha256:c0537ff6a5218ef531ece93d4984efc99bbf3f7497c0a7726c88e2bb7584dc96'
        },
        size: {
            description: `The size in bytes of the blob.
`,
            type: 'integer',
            format: 'int64',
            example: 3987495
        }
    }
} as const;

export const $OCIPlatform = {
    type: 'object',
    'x-go-name': 'Platform',
    description: `Describes the platform which the image in the manifest runs on, as defined
in the [OCI Image Index Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/image-index.md).
`,
    properties: {
        architecture: {
            description: `The CPU architecture, for example \`amd64\` or \`ppc64\`.
`,
            type: 'string',
            example: 'arm'
        },
        os: {
            description: `The operating system, for example \`linux\` or \`windows\`.
`,
            type: 'string',
            example: 'windows'
        },
        'os.version': {
            description: `Optional field specifying the operating system version, for example on
Windows \`10.0.19041.1165\`.
`,
            type: 'string',
            example: '10.0.19041.1165'
        },
        'os.features': {
            description: `Optional field specifying an array of strings, each listing a required
OS feature (for example on Windows \`win32k\`).
`,
            type: 'array',
            items: {
                type: 'string'
            },
            example: ['win32k']
        },
        variant: {
            description: `Optional field specifying a variant of the CPU, for example \`v7\` to
specify ARMv7 when architecture is \`arm\`.
`,
            type: 'string',
            example: 'v7'
        }
    }
} as const;

export const $DistributionInspect = {
    type: 'object',
    'x-go-name': 'DistributionInspect',
    title: 'DistributionInspectResponse',
    required: ['Descriptor', 'Platforms'],
    description: `Describes the result obtained from contacting the registry to retrieve
image metadata.
`,
    properties: {
        Descriptor: {
            '$ref': '#/definitions/OCIDescriptor'
        },
        Platforms: {
            type: 'array',
            description: `An array containing all platforms supported by the image.
`,
            items: {
                '$ref': '#/definitions/OCIPlatform'
            }
        }
    }
} as const;

export const $ClusterVolume = {
    type: 'object',
    description: `Options and information specific to, and only present on, Swarm CSI
cluster volumes.
`,
    properties: {
        ID: {
            type: 'string',
            description: `The Swarm ID of this volume. Because cluster volumes are Swarm
objects, they have an ID, unlike non-cluster volumes. This ID can
be used to refer to the Volume instead of the name.
`
        },
        Version: {
            '$ref': '#/definitions/ObjectVersion'
        },
        CreatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        UpdatedAt: {
            type: 'string',
            format: 'dateTime'
        },
        Spec: {
            '$ref': '#/definitions/ClusterVolumeSpec'
        },
        Info: {
            type: 'object',
            description: `Information about the global status of the volume.
`,
            properties: {
                CapacityBytes: {
                    type: 'integer',
                    format: 'int64',
                    description: `The capacity of the volume in bytes. A value of 0 indicates that
the capacity is unknown.
`
                },
                VolumeContext: {
                    type: 'object',
                    description: `A map of strings to strings returned from the storage plugin when
the volume is created.
`,
                    additionalProperties: {
                        type: 'string'
                    }
                },
                VolumeID: {
                    type: 'string',
                    description: `The ID of the volume as returned by the CSI storage plugin. This
is distinct from the volume's ID as provided by Docker. This ID
is never used by the user when communicating with Docker to refer
to this volume. If the ID is blank, then the Volume has not been
successfully created in the plugin yet.
`
                },
                AccessibleTopology: {
                    type: 'array',
                    description: `The topology this volume is actually accessible from.
`,
                    items: {
                        '$ref': '#/definitions/Topology'
                    }
                }
            }
        },
        PublishStatus: {
            type: 'array',
            description: `The status of the volume as it pertains to its publishing and use on
specific nodes
`,
            items: {
                type: 'object',
                properties: {
                    NodeID: {
                        type: 'string',
                        description: `The ID of the Swarm node the volume is published on.
`
                    },
                    State: {
                        type: 'string',
                        description: `The published state of the volume.
* \`pending-publish\` The volume should be published to this node, but the call to the controller plugin to do so has not yet been successfully completed.
* \`published\` The volume is published successfully to the node.
* \`pending-node-unpublish\` The volume should be unpublished from the node, and the manager is awaiting confirmation from the worker that it has done so.
* \`pending-controller-unpublish\` The volume is successfully unpublished from the node, but has not yet been successfully unpublished on the controller.
`,
                        enum: ['pending-publish', 'published', 'pending-node-unpublish', 'pending-controller-unpublish']
                    },
                    PublishContext: {
                        type: 'object',
                        description: `A map of strings to strings returned by the CSI controller
plugin when a volume is published.
`,
                        additionalProperties: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    }
} as const;

export const $ClusterVolumeSpec = {
    type: 'object',
    description: `Cluster-specific options used to create the volume.
`,
    properties: {
        Group: {
            type: 'string',
            description: `Group defines the volume group of this volume. Volumes belonging to
the same group can be referred to by group name when creating
Services.  Referring to a volume by group instructs Swarm to treat
volumes in that group interchangeably for the purpose of scheduling.
Volumes with an empty string for a group technically all belong to
the same, emptystring group.
`
        },
        AccessMode: {
            type: 'object',
            description: `Defines how the volume is used by tasks.
`,
            properties: {
                Scope: {
                    type: 'string',
                    description: `The set of nodes this volume can be used on at one time.
- \`single\` The volume may only be scheduled to one node at a time.
- \`multi\` the volume may be scheduled to any supported number of nodes at a time.
`,
                    default: 'single',
                    enum: ['single', 'multi'],
                    'x-nullable': false
                },
                Sharing: {
                    type: 'string',
                    description: `The number and way that different tasks can use this volume
at one time.
- \`none\` The volume may only be used by one task at a time.
- \`readonly\` The volume may be used by any number of tasks, but they all must mount the volume as readonly
- \`onewriter\` The volume may be used by any number of tasks, but only one may mount it as read/write.
- \`all\` The volume may have any number of readers and writers.
`,
                    default: 'none',
                    enum: ['none', 'readonly', 'onewriter', 'all'],
                    'x-nullable': false
                },
                MountVolume: {
                    type: 'object',
                    description: `Options for using this volume as a Mount-type volume.

    Either MountVolume or BlockVolume, but not both, must be
    present.
  properties:
    FsType:
      type: "string"
      description: |
        Specifies the filesystem type for the mount volume.
        Optional.
    MountFlags:
      type: "array"
      description: |
        Flags to pass when mounting the volume. Optional.
      items:
        type: "string"
BlockVolume:
  type: "object"
  description: |
    Options for using this volume as a Block-type volume.
    Intentionally empty.
`
                },
                Secrets: {
                    type: 'array',
                    description: `Swarm Secrets that are passed to the CSI storage plugin when
operating on this volume.
`,
                    items: {
                        type: 'object',
                        description: `One cluster volume secret entry. Defines a key-value pair that
is passed to the plugin.
`,
                        properties: {
                            Key: {
                                type: 'string',
                                description: `Key is the name of the key of the key-value pair passed to
the plugin.
`
                            },
                            Secret: {
                                type: 'string',
                                description: `Secret is the swarm Secret object from which to read data.
This can be a Secret name or ID. The Secret data is
retrieved by swarm and used as the value of the key-value
pair passed to the plugin.
`
                            }
                        }
                    }
                },
                AccessibilityRequirements: {
                    type: 'object',
                    description: `Requirements for the accessible topology of the volume. These
fields are optional. For an in-depth description of what these
fields mean, see the CSI specification.
`,
                    properties: {
                        Requisite: {
                            type: 'array',
                            description: `A list of required topologies, at least one of which the
volume must be accessible from.
`,
                            items: {
                                '$ref': '#/definitions/Topology'
                            }
                        },
                        Preferred: {
                            type: 'array',
                            description: `A list of topologies that the volume should attempt to be
provisioned in.
`,
                            items: {
                                '$ref': '#/definitions/Topology'
                            }
                        }
                    }
                },
                CapacityRange: {
                    type: 'object',
                    description: `The desired capacity that the volume should be created with. If
empty, the plugin will decide the capacity.
`,
                    properties: {
                        RequiredBytes: {
                            type: 'integer',
                            format: 'int64',
                            description: `The volume must be at least this big. The value of 0
indicates an unspecified minimum
`
                        },
                        LimitBytes: {
                            type: 'integer',
                            format: 'int64',
                            description: `The volume must not be bigger than this. The value of 0
indicates an unspecified maximum.
`
                        }
                    }
                },
                Availability: {
                    type: 'string',
                    description: `The availability of the volume for use in tasks.
- \`active\` The volume is fully available for scheduling on the cluster
- \`pause\` No new workloads should use the volume, but existing workloads are not stopped.
- \`drain\` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
`,
                    default: 'active',
                    'x-nullable': false,
                    enum: ['active', 'pause', 'drain']
                }
            }
        }
    }
} as const;

export const $Topology = {
    description: `A map of topological domains to topological segments. For in depth
details, see documentation for the Topology object in the CSI
specification.
`,
    type: 'object',
    additionalProperties: {
        type: 'string'
    }
} as const;
