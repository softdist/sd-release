import {
    ConfigService,
    ContainerService,
    ExecService,
    ImageService,
    NetworkService,
    NodeService,
    PluginService,
    SecretService,
    ServiceService,
    SwarmService,
    SystemService,
    TaskService,
    VolumeService,
  } from './lib/services.ts';
  import { DockerClient, type RegistryAuthentication } from './client/docker.ts';

  export default class Docker {
    containers: ContainerService;
    images: ImageService;
    services: ServiceService;
    system: SystemService;
    exec: ExecService;
    volume: VolumeService;
    network: NetworkService;
    plugin: PluginService;
    node: NodeService;
    swarm: SwarmService;
    task: TaskService;
    secret: SecretService;
    config: ConfigService;

    constructor(connectSetting: string | Deno.ConnectOptions, auth: RegistryAuthentication | null = null) {
      const client = new DockerClient(connectSetting, auth);
      this.containers = new ContainerService(client);
      this.images = new ImageService(client);
      this.services = new ServiceService(client);
      this.system = new SystemService(client);
      this.exec = new ExecService(client);
      this.volume = new VolumeService(client);
      this.network = new NetworkService(client);
      this.plugin = new PluginService(client);
      this.node = new NodeService(client);
      this.swarm = new SwarmService(client);
      this.task = new TaskService(client);
      this.secret = new SecretService(client);
      this.config = new ConfigService(client);
    }
  }

  export type { Docker, RegistryAuthentication };
  export type * from './lib/types.ts';
