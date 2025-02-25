/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.47) is used. For example, calling `/info` is the same as calling `/v1.47/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * OpenAPI spec version: 1.47
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Describes the platform which the image in the manifest runs on, as defined in the [OCI Image Index Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/image-index.md). 
*/
export class OCIPlatform {
    /**
    * The CPU architecture, for example `amd64` or `ppc64`. 
    */
    'architecture'?: string;
    /**
    * The operating system, for example `linux` or `windows`. 
    */
    'os'?: string;
    /**
    * Optional field specifying the operating system version, for example on Windows `10.0.19041.1165`. 
    */
    'osVersion'?: string;
    /**
    * Optional field specifying an array of strings, each listing a required OS feature (for example on Windows `win32k`). 
    */
    'osFeatures'?: Array<string>;
    /**
    * Optional field specifying a variant of the CPU, for example `v7` to specify ARMv7 when architecture is `arm`. 
    */
    'variant'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "architecture",
            "baseName": "architecture",
            "type": "string",
            "format": ""
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "string",
            "format": ""
        },
        {
            "name": "osVersion",
            "baseName": "os.version",
            "type": "string",
            "format": ""
        },
        {
            "name": "osFeatures",
            "baseName": "os.features",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "variant",
            "baseName": "variant",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OCIPlatform.attributeTypeMap;
    }

    public constructor() {
    }
}
