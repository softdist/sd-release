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

import { Address } from '../models/Address';
import { EndpointSettings } from '../models/EndpointSettings';
import { PortBinding } from '../models/PortBinding';
import { HttpFile } from '../http/http';

/**
* NetworkSettings exposes the network settings in the API
*/
export class NetworkSettings {
    /**
    * Name of the default bridge interface when dockerd\'s --bridge flag is set. 
    */
    'bridge'?: string;
    /**
    * SandboxID uniquely represents a container\'s network stack.
    */
    'sandboxID'?: string;
    /**
    * Indicates if hairpin NAT should be enabled on the virtual interface.  Deprecated: This field is never set and will be removed in a future release. 
    */
    'hairpinMode'?: boolean;
    /**
    * IPv6 unicast address using the link-local prefix.  Deprecated: This field is never set and will be removed in a future release. 
    */
    'linkLocalIPv6Address'?: string;
    /**
    * Prefix length of the IPv6 unicast address.  Deprecated: This field is never set and will be removed in a future release. 
    */
    'linkLocalIPv6PrefixLen'?: number;
    /**
    * PortMap describes the mapping of container ports to host ports, using the container\'s port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container\'s port is mapped for multiple protocols, separate entries are added to the mapping table. 
    */
    'ports'?: { [key: string]: Array<PortBinding> | null; };
    /**
    * SandboxKey is the full path of the netns handle
    */
    'sandboxKey'?: string;
    /**
    * Deprecated: This field is never set and will be removed in a future release.
    */
    'secondaryIPAddresses'?: Array<Address> | null;
    /**
    * Deprecated: This field is never set and will be removed in a future release.
    */
    'secondaryIPv6Addresses'?: Array<Address> | null;
    /**
    * EndpointID uniquely represents a service endpoint in a Sandbox.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'endpointID'?: string;
    /**
    * Gateway address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'gateway'?: string;
    /**
    * Global IPv6 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'globalIPv6Address'?: string;
    /**
    * Mask length of the global IPv6 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'globalIPv6PrefixLen'?: number;
    /**
    * IPv4 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'iPAddress'?: string;
    /**
    * Mask length of the IPv4 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'iPPrefixLen'?: number;
    /**
    * IPv6 gateway address for this network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'iPv6Gateway'?: string;
    /**
    * MAC address for the container on the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
    */
    'macAddress'?: string;
    /**
    * Information about all networks that the container is connected to. 
    */
    'networks'?: { [key: string]: EndpointSettings; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bridge",
            "baseName": "Bridge",
            "type": "string",
            "format": ""
        },
        {
            "name": "sandboxID",
            "baseName": "SandboxID",
            "type": "string",
            "format": ""
        },
        {
            "name": "hairpinMode",
            "baseName": "HairpinMode",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "linkLocalIPv6Address",
            "baseName": "LinkLocalIPv6Address",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkLocalIPv6PrefixLen",
            "baseName": "LinkLocalIPv6PrefixLen",
            "type": "number",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "Ports",
            "type": "{ [key: string]: Array<PortBinding> | null; }",
            "format": ""
        },
        {
            "name": "sandboxKey",
            "baseName": "SandboxKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryIPAddresses",
            "baseName": "SecondaryIPAddresses",
            "type": "Array<Address>",
            "format": ""
        },
        {
            "name": "secondaryIPv6Addresses",
            "baseName": "SecondaryIPv6Addresses",
            "type": "Array<Address>",
            "format": ""
        },
        {
            "name": "endpointID",
            "baseName": "EndpointID",
            "type": "string",
            "format": ""
        },
        {
            "name": "gateway",
            "baseName": "Gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "globalIPv6Address",
            "baseName": "GlobalIPv6Address",
            "type": "string",
            "format": ""
        },
        {
            "name": "globalIPv6PrefixLen",
            "baseName": "GlobalIPv6PrefixLen",
            "type": "number",
            "format": ""
        },
        {
            "name": "iPAddress",
            "baseName": "IPAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "iPPrefixLen",
            "baseName": "IPPrefixLen",
            "type": "number",
            "format": ""
        },
        {
            "name": "iPv6Gateway",
            "baseName": "IPv6Gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "networks",
            "baseName": "Networks",
            "type": "{ [key: string]: EndpointSettings; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetworkSettings.attributeTypeMap;
    }

    public constructor() {
    }
}
