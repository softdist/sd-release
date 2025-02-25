# .ImageApi

All URIs are relative to *http://localhost/v1.47*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildPrune**](ImageApi.md#buildPrune) | **POST** /build/prune | Delete builder cache
[**imageBuild**](ImageApi.md#imageBuild) | **POST** /build | Build an image
[**imageCommit**](ImageApi.md#imageCommit) | **POST** /commit | Create a new image from a container
[**imageCreate**](ImageApi.md#imageCreate) | **POST** /images/create | Create an image
[**imageDelete**](ImageApi.md#imageDelete) | **DELETE** /images/{name} | Remove an image
[**imageGet**](ImageApi.md#imageGet) | **GET** /images/{name}/get | Export an image
[**imageGetAll**](ImageApi.md#imageGetAll) | **GET** /images/get | Export several images
[**imageHistory**](ImageApi.md#imageHistory) | **GET** /images/{name}/history | Get the history of an image
[**imageInspect**](ImageApi.md#imageInspect) | **GET** /images/{name}/json | Inspect an image
[**imageList**](ImageApi.md#imageList) | **GET** /images/json | List Images
[**imageLoad**](ImageApi.md#imageLoad) | **POST** /images/load | Import images
[**imagePrune**](ImageApi.md#imagePrune) | **POST** /images/prune | Delete unused images
[**imagePush**](ImageApi.md#imagePush) | **POST** /images/{name}/push | Push an image
[**imageSearch**](ImageApi.md#imageSearch) | **GET** /images/search | Search images
[**imageTag**](ImageApi.md#imageTag) | **POST** /images/{name}/tag | Tag an image


# **buildPrune**
> BuildPruneResponse buildPrune()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiBuildPruneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiBuildPruneRequest = {
    // Amount of disk space in bytes to keep for cache (optional)
  keepStorage: 1,
    // Remove all types of build cache (optional)
  all: true,
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects.  Available filters:  - `until=<timestamp>` remove cache older than `<timestamp>`. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon\'s local time. - `id=<id>` - `parent=<id>` - `type=<string>` - `description=<string>` - `inuse` - `shared` - `private`  (optional)
  filters: "filters_example",
};

const data = await apiInstance.buildPrune(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keepStorage** | [**number**] | Amount of disk space in bytes to keep for cache | (optional) defaults to undefined
 **all** | [**boolean**] | Remove all types of build cache | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the list of build cache objects.  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; remove cache older than &#x60;&lt;timestamp&gt;&#x60;. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon\&#39;s local time. - &#x60;id&#x3D;&lt;id&gt;&#x60; - &#x60;parent&#x3D;&lt;id&gt;&#x60; - &#x60;type&#x3D;&lt;string&gt;&#x60; - &#x60;description&#x3D;&lt;string&gt;&#x60; - &#x60;inuse&#x60; - &#x60;shared&#x60; - &#x60;private&#x60;  | (optional) defaults to undefined


### Return type

**BuildPruneResponse**

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

# **imageBuild**
> void imageBuild()

Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive\'s root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageBuildRequest = {
    // Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`. (optional)
  dockerfile: "Dockerfile",
    // A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters. (optional)
  t: "t_example",
    // Extra hosts to add to /etc/hosts (optional)
  extrahosts: "extrahosts_example",
    // A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball. (optional)
  remote: "remote_example",
    // Suppress verbose build output. (optional)
  q: false,
    // Do not use the cache when building the image. (optional)
  nocache: false,
    // JSON array of images used for build cache resolution. (optional)
  cachefrom: "cachefrom_example",
    // Attempt to pull the image even if an older image exists locally. (optional)
  pull: "pull_example",
    // Remove intermediate containers after a successful build. (optional)
  rm: true,
    // Always remove intermediate containers, even upon failure. (optional)
  forcerm: false,
    // Set memory limit for build. (optional)
  memory: 1,
    // Total memory (memory + swap). Set as `-1` to disable swap. (optional)
  memswap: 1,
    // CPU shares (relative weight). (optional)
  cpushares: 1,
    // CPUs in which to allow execution (e.g., `0-3`, `0,1`). (optional)
  cpusetcpus: "cpusetcpus_example",
    // The length of a CPU period in microseconds. (optional)
  cpuperiod: 1,
    // Microseconds of CPU time that the container can get in a CPU period. (optional)
  cpuquota: 1,
    // JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.  For example, the build arg `FOO=bar` would become `{\"FOO\":\"bar\"}` in JSON. This would result in the query parameter `buildargs={\"FOO\":\"bar\"}`. Note that `{\"FOO\":\"bar\"}` should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)  (optional)
  buildargs: "buildargs_example",
    // Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB. (optional)
  shmsize: 1,
    // Squash the resulting images layers into a single layer. *(Experimental release only.)* (optional)
  squash: true,
    // Arbitrary key/value labels to set on the image, as a JSON map of string pairs. (optional)
  labels: "labels_example",
    // Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network\'s name or ID to which this container should connect to.  (optional)
  networkmode: "networkmode_example",
  
  contentType: "application/x-tar",
    // This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   \"docker.example.com\": {     \"username\": \"janedoe\",     \"password\": \"hunter2\"   },   \"https://index.docker.io/v1/\": {     \"username\": \"mobydock\",     \"password\": \"conta1n3rize14\"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.  (optional)
  xRegistryConfig: "X-Registry-Config_example",
    // Platform in the format os[/arch[/variant]] (optional)
  platform: "platform_example",
    // Target build stage (optional)
  target: "target_example",
    // BuildKit output configuration (optional)
  outputs: "outputs_example",
    // Version of the builder backend to use.  - `1` is the first generation classic (deprecated) builder in the Docker daemon (default) - `2` is [BuildKit](https://github.com/moby/buildkit)  (optional)
  version: "1",
    // A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. (optional)
  inputStream: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.imageBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputStream** | **HttpFile**| A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. |
 **dockerfile** | [**string**] | Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if &#x60;remote&#x60; is specified and points to an external &#x60;Dockerfile&#x60;. | (optional) defaults to 'Dockerfile'
 **t** | [**string**] | A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default &#x60;latest&#x60; value is assumed. You can provide several &#x60;t&#x60; parameters. | (optional) defaults to undefined
 **extrahosts** | [**string**] | Extra hosts to add to /etc/hosts | (optional) defaults to undefined
 **remote** | [**string**] | A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called &#x60;Dockerfile&#x60; and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the &#x60;dockerfile&#x60; parameter is also specified, there must be a file with the corresponding path inside the tarball. | (optional) defaults to undefined
 **q** | [**boolean**] | Suppress verbose build output. | (optional) defaults to false
 **nocache** | [**boolean**] | Do not use the cache when building the image. | (optional) defaults to false
 **cachefrom** | [**string**] | JSON array of images used for build cache resolution. | (optional) defaults to undefined
 **pull** | [**string**] | Attempt to pull the image even if an older image exists locally. | (optional) defaults to undefined
 **rm** | [**boolean**] | Remove intermediate containers after a successful build. | (optional) defaults to true
 **forcerm** | [**boolean**] | Always remove intermediate containers, even upon failure. | (optional) defaults to false
 **memory** | [**number**] | Set memory limit for build. | (optional) defaults to undefined
 **memswap** | [**number**] | Total memory (memory + swap). Set as &#x60;-1&#x60; to disable swap. | (optional) defaults to undefined
 **cpushares** | [**number**] | CPU shares (relative weight). | (optional) defaults to undefined
 **cpusetcpus** | [**string**] | CPUs in which to allow execution (e.g., &#x60;0-3&#x60;, &#x60;0,1&#x60;). | (optional) defaults to undefined
 **cpuperiod** | [**number**] | The length of a CPU period in microseconds. | (optional) defaults to undefined
 **cpuquota** | [**number**] | Microseconds of CPU time that the container can get in a CPU period. | (optional) defaults to undefined
 **buildargs** | [**string**] | JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the &#x60;Dockerfile&#x60; RUN instruction, or for variable expansion in other &#x60;Dockerfile&#x60; instructions. This is not meant for passing secret values.  For example, the build arg &#x60;FOO&#x3D;bar&#x60; would become &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; in JSON. This would result in the query parameter &#x60;buildargs&#x3D;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60;. Note that &#x60;{\&quot;FOO\&quot;:\&quot;bar\&quot;}&#x60; should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)  | (optional) defaults to undefined
 **shmsize** | [**number**] | Size of &#x60;/dev/shm&#x60; in bytes. The size must be greater than 0. If omitted the system uses 64MB. | (optional) defaults to undefined
 **squash** | [**boolean**] | Squash the resulting images layers into a single layer. *(Experimental release only.)* | (optional) defaults to undefined
 **labels** | [**string**] | Arbitrary key/value labels to set on the image, as a JSON map of string pairs. | (optional) defaults to undefined
 **networkmode** | [**string**] | Sets the networking mode for the run commands during build. Supported standard values are: &#x60;bridge&#x60;, &#x60;host&#x60;, &#x60;none&#x60;, and &#x60;container:&lt;name|id&gt;&#x60;. Any other value is taken as a custom network\&#39;s name or ID to which this container should connect to.  | (optional) defaults to undefined
 **contentType** | [**&#39;application/x-tar&#39;**]**Array<&#39;application/x-tar&#39;>** |  | (optional) defaults to 'application/x-tar'
 **xRegistryConfig** | [**string**] | This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  &#x60;&#x60;&#x60; {   \&quot;docker.example.com\&quot;: {     \&quot;username\&quot;: \&quot;janedoe\&quot;,     \&quot;password\&quot;: \&quot;hunter2\&quot;   },   \&quot;https://index.docker.io/v1/\&quot;: {     \&quot;username\&quot;: \&quot;mobydock\&quot;,     \&quot;password\&quot;: \&quot;conta1n3rize14\&quot;   } } &#x60;&#x60;&#x60;  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a &#x60;https://&#x60; prefix and a &#x60;/v1/&#x60; suffix even though Docker will prefer to use the v2 registry API.  | (optional) defaults to undefined
 **platform** | [**string**] | Platform in the format os[/arch[/variant]] | (optional) defaults to undefined
 **target** | [**string**] | Target build stage | (optional) defaults to undefined
 **outputs** | [**string**] | BuildKit output configuration | (optional) defaults to undefined
 **version** | [**&#39;1&#39; | &#39;2&#39;**]**Array<&#39;1&#39; &#124; &#39;2&#39;>** | Version of the builder backend to use.  - &#x60;1&#x60; is the first generation classic (deprecated) builder in the Docker daemon (default) - &#x60;2&#x60; is [BuildKit](https://github.com/moby/buildkit)  | (optional) defaults to '1'


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | Bad parameter |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageCommit**
> IdResponse imageCommit()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageCommitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageCommitRequest = {
    // The ID or name of the container to commit (optional)
  container: "container_example",
    // Repository name for the created image (optional)
  repo: "repo_example",
    // Tag name for the create image (optional)
  tag: "tag_example",
    // Commit message (optional)
  comment: "comment_example",
    // Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`) (optional)
  author: "author_example",
    // Whether to pause the container before committing (optional)
  pause: true,
    // `Dockerfile` instructions to apply while committing (optional)
  changes: "changes_example",
    // The container configuration (optional)
  containerConfig: {
    hostname: "439f4e91bd1d",
    domainname: "domainname_example",
    user: "user_example",
    attachStdin: false,
    attachStdout: true,
    attachStderr: true,
    exposedPorts: {
      "key": {},
    },
    tty: false,
    openStdin: false,
    stdinOnce: false,
    env: [PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin],
    cmd: [/bin/sh],
    healthcheck: {
      test: [
        "test_example",
      ],
      interval: 1,
      timeout: 1,
      retries: 1,
      startPeriod: 1,
      startInterval: 1,
    },
    argsEscaped: false,
    image: "example-image:1.0",
    volumes: {
      "key": {},
    },
    workingDir: "/public/",
    entrypoint: [],
    networkDisabled: true,
    macAddress: "macAddress_example",
    onBuild: [],
    labels: {
      "key": "key_example",
    },
    stopSignal: "SIGTERM",
    stopTimeout: 1,
    shell: [/bin/sh, -c],
  },
};

const data = await apiInstance.imageCommit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **containerConfig** | **ContainerConfig**| The container configuration |
 **container** | [**string**] | The ID or name of the container to commit | (optional) defaults to undefined
 **repo** | [**string**] | Repository name for the created image | (optional) defaults to undefined
 **tag** | [**string**] | Tag name for the create image | (optional) defaults to undefined
 **comment** | [**string**] | Commit message | (optional) defaults to undefined
 **author** | [**string**] | Author of the image (e.g., &#x60;John Hannibal Smith &lt;hannibal@a-team.com&gt;&#x60;) | (optional) defaults to undefined
 **pause** | [**boolean**] | Whether to pause the container before committing | (optional) defaults to true
 **changes** | [**string**] | &#x60;Dockerfile&#x60; instructions to apply while committing | (optional) defaults to undefined


### Return type

**IdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | no error |  -  |
**404** | no such container |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageCreate**
> void imageCreate()

Pull or import an image.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageCreateRequest = {
    // Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. (optional)
  fromImage: "fromImage_example",
    // Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image. (optional)
  fromSrc: "fromSrc_example",
    // Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. (optional)
  repo: "repo_example",
    // Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. (optional)
  tag: "tag_example",
    // Set commit message for imported image. (optional)
  message: "message_example",
    // A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
  xRegistryAuth: "X-Registry-Auth_example",
    // Apply `Dockerfile` instructions to the image that is created, for example: `changes=ENV DEBUG=true`. Note that `ENV DEBUG=true` should be URI component encoded.  Supported `Dockerfile` instructions: `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`  (optional)
  changes: [
    "changes_example",
  ],
    // Platform in the format os[/arch[/variant]].  When used in combination with the `fromImage` option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host\'s native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host\'s native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the `fromSrc` option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host\'s native OS and Architecture are used for the imported image.  (optional)
  platform: "platform_example",
    // Image content if the value `-` has been specified in fromSrc query parameter (optional)
  inputImage: "inputImage_example",
};

const data = await apiInstance.imageCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputImage** | **string**| Image content if the value &#x60;-&#x60; has been specified in fromSrc query parameter |
 **fromImage** | [**string**] | Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. | (optional) defaults to undefined
 **fromSrc** | [**string**] | Source to import. The value may be a URL from which the image can be retrieved or &#x60;-&#x60; to read the image from the request body. This parameter may only be used when importing an image. | (optional) defaults to undefined
 **repo** | [**string**] | Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. | (optional) defaults to undefined
 **tag** | [**string**] | Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. | (optional) defaults to undefined
 **message** | [**string**] | Set commit message for imported image. | (optional) defaults to undefined
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  | (optional) defaults to undefined
 **changes** | **Array&lt;string&gt;** | Apply &#x60;Dockerfile&#x60; instructions to the image that is created, for example: &#x60;changes&#x3D;ENV DEBUG&#x3D;true&#x60;. Note that &#x60;ENV DEBUG&#x3D;true&#x60; should be URI component encoded.  Supported &#x60;Dockerfile&#x60; instructions: &#x60;CMD&#x60;|&#x60;ENTRYPOINT&#x60;|&#x60;ENV&#x60;|&#x60;EXPOSE&#x60;|&#x60;ONBUILD&#x60;|&#x60;USER&#x60;|&#x60;VOLUME&#x60;|&#x60;WORKDIR&#x60;  | (optional) defaults to undefined
 **platform** | [**string**] | Platform in the format os[/arch[/variant]].  When used in combination with the &#x60;fromImage&#x60; option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host\&#39;s native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host\&#39;s native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the &#x60;fromSrc&#x60; option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host\&#39;s native OS and Architecture are used for the imported image.  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain, application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | repository does not exist or no read access |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageDelete**
> Array<ImageDeleteResponseItem> imageDelete()

Remove an image, along with any untagged parent images that were referenced by that image.  Images can\'t be removed if they have descendant images, are being used by a running container or are being used by a build. 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageDeleteRequest = {
    // Image name or ID
  name: "name_example",
    // Remove the image even if it is being used by stopped containers or has other tags (optional)
  force: false,
    // Do not delete untagged parent images (optional)
  noprune: false,
};

const data = await apiInstance.imageDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or ID | defaults to undefined
 **force** | [**boolean**] | Remove the image even if it is being used by stopped containers or has other tags | (optional) defaults to false
 **noprune** | [**boolean**] | Do not delete untagged parent images | (optional) defaults to false


### Return type

**Array<ImageDeleteResponseItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The image was deleted successfully |  -  |
**404** | No such image |  -  |
**409** | Conflict |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageGet**
> HttpFile imageGet()

Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageGetRequest = {
    // Image name or ID
  name: "name_example",
};

const data = await apiInstance.imageGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or ID | defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-tar


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageGetAll**
> HttpFile imageGetAll()

Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the \'repositories\' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageGetAllRequest = {
    // Image names to filter by (optional)
  names: [
    "names_example",
  ],
};

const data = await apiInstance.imageGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | **Array&lt;string&gt;** | Image names to filter by | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-tar


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageHistory**
> Array<HistoryResponseItem> imageHistory()

Return parent layers of an image.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageHistoryRequest = {
    // Image name or ID
  name: "name_example",
};

const data = await apiInstance.imageHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or ID | defaults to undefined


### Return type

**Array<HistoryResponseItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of image layers |  -  |
**404** | No such image |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageInspect**
> ImageInspect imageInspect()

Return low-level information about an image.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageInspectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageInspectRequest = {
    // Image name or id
  name: "name_example",
};

const data = await apiInstance.imageInspect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or id | defaults to undefined


### Return type

**ImageInspect**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No error |  -  |
**404** | No such image |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageList**
> Array<ImageSummary> imageList()

Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageListRequest = {
    // Show all images. Only images from a final layer (no children) are shown by default. (optional)
  all: false,
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.  Available filters:  - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `until=<timestamp>`  (optional)
  filters: "filters_example",
    // Compute and show shared size as a `SharedSize` field on each image. (optional)
  sharedSize: false,
    // Show digest information as a `RepoDigests` field on each image. (optional)
  digests: false,
    // Include `Manifests` in the image summary. (optional)
  manifests: false,
};

const data = await apiInstance.imageList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Show all images. Only images from a final layer (no children) are shown by default. | (optional) defaults to false
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list.  Available filters:  - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;until&#x3D;&lt;timestamp&gt;&#x60;  | (optional) defaults to undefined
 **sharedSize** | [**boolean**] | Compute and show shared size as a &#x60;SharedSize&#x60; field on each image. | (optional) defaults to false
 **digests** | [**boolean**] | Show digest information as a &#x60;RepoDigests&#x60; field on each image. | (optional) defaults to false
 **manifests** | [**boolean**] | Include &#x60;Manifests&#x60; in the image summary. | (optional) defaults to false


### Return type

**Array<ImageSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary image data for the images matching the query |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageLoad**
> void imageLoad()

Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageLoadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageLoadRequest = {
    // Suppress progress details during load. (optional)
  quiet: false,
    // Tar archive containing images (optional)
  imagesTarball: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.imageLoad(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagesTarball** | **HttpFile**| Tar archive containing images |
 **quiet** | [**boolean**] | Suppress progress details during load. | (optional) defaults to false


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePrune**
> ImagePruneResponse imagePrune()


### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImagePruneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImagePruneRequest = {
    // Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), prune only    unused *and* untagged images. When set to `false`    (or `0`), all unused images are pruned. - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.imagePrune(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:  - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only    unused *and* untagged images. When set to &#x60;false&#x60;    (or &#x60;0&#x60;), all unused images are pruned. - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**ImagePruneResponse**

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

# **imagePush**
> void imagePush()

Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImagePushRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImagePushRequest = {
    // Name of the image to push. For example, `registry.example.com/myimage`. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, `registry.example.com/myimage:latest` is considered equivalent to `registry.example.com/myimage`.  Use the `tag` parameter to specify the tag to push. 
  name: "name_example",
    // A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
  xRegistryAuth: "X-Registry-Auth_example",
    // Tag of the image to push. For example, `latest`. If no tag is provided, all tags of the given image that are present in the local image store are pushed.  (optional)
  tag: "tag_example",
    // JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: `{\"os\": \"linux\", \"architecture\": \"arm\", \"variant\": \"v5\"}`  (optional)
  platform: "platform_example",
};

const data = await apiInstance.imagePush(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of the image to push. For example, &#x60;registry.example.com/myimage&#x60;. The image must be present in the local image store with the same name.  The name should be provided without tag; if a tag is provided, it is ignored. For example, &#x60;registry.example.com/myimage:latest&#x60; is considered equivalent to &#x60;registry.example.com/myimage&#x60;.  Use the &#x60;tag&#x60; parameter to specify the tag to push.  | defaults to undefined
 **xRegistryAuth** | [**string**] | A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  | defaults to undefined
 **tag** | [**string**] | Tag of the image to push. For example, &#x60;latest&#x60;. If no tag is provided, all tags of the given image that are present in the local image store are pushed.  | (optional) defaults to undefined
 **platform** | [**string**] | JSON-encoded OCI platform to select the platform-variant to push. If not provided, all available variants will attempt to be pushed.  If the daemon provides a multi-platform image store, this selects the platform-variant to push to the registry. If the image is a single-platform image, or if the multi-platform image does not provide a variant matching the given platform, an error is returned.  Example: &#x60;{\&quot;os\&quot;: \&quot;linux\&quot;, \&quot;architecture\&quot;: \&quot;arm\&quot;, \&quot;variant\&quot;: \&quot;v5\&quot;}&#x60;  | (optional) defaults to undefined


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
**200** | No error |  -  |
**404** | No such image |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageSearch**
> Array<ImageSearchResponseItem> imageSearch()

Search for an image on Docker Hub.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageSearchRequest = {
    // Term to search
  term: "term_example",
    // Maximum number of results to return (optional)
  limit: 1,
    // A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:  - `is-official=(true|false)` - `stars=<number>` Matches images that has at least \'number\' stars.  (optional)
  filters: "filters_example",
};

const data = await apiInstance.imageSearch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | [**string**] | Term to search | defaults to undefined
 **limit** | [**number**] | Maximum number of results to return | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters:  - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least \&#39;number\&#39; stars.  | (optional) defaults to undefined


### Return type

**Array<ImageSearchResponseItem>**

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

# **imageTag**
> void imageTag()

Tag an image so that it becomes part of a repository.

### Example


```typescript
import { createConfiguration, ImageApi } from '';
import type { ImageApiImageTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImageApi(configuration);

const request: ImageApiImageTagRequest = {
    // Image name or ID to tag.
  name: "name_example",
    // The repository to tag in. For example, `someuser/someimage`. (optional)
  repo: "repo_example",
    // The name of the new tag. (optional)
  tag: "tag_example",
};

const data = await apiInstance.imageTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Image name or ID to tag. | defaults to undefined
 **repo** | [**string**] | The repository to tag in. For example, &#x60;someuser/someimage&#x60;. | (optional) defaults to undefined
 **tag** | [**string**] | The name of the new tag. | (optional) defaults to undefined


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
**201** | No error |  -  |
**400** | Bad parameter |  -  |
**404** | No such image |  -  |
**409** | Conflict |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


