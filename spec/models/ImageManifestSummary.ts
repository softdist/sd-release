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

import { ImageManifestSummaryAttestationData } from '../models/ImageManifestSummaryAttestationData';
import { ImageManifestSummaryImageData } from '../models/ImageManifestSummaryImageData';
import { ImageManifestSummarySize } from '../models/ImageManifestSummarySize';
import { OCIDescriptor } from '../models/OCIDescriptor';
import { HttpFile } from '../http/http';

/**
* ImageManifestSummary represents a summary of an image manifest. 
*/
export class ImageManifestSummary {
    /**
    * ID is the content-addressable ID of an image and is the same as the digest of the image manifest. 
    */
    'ID': string;
    'descriptor': OCIDescriptor;
    /**
    * Indicates whether all the child content (image config, layers) is fully available locally.
    */
    'available': boolean;
    'size': ImageManifestSummarySize;
    /**
    * The kind of the manifest.  kind         | description -------------|----------------------------------------------------------- image        | Image manifest that can be used to start a container. attestation  | Attestation manifest produced by the Buildkit builder for a specific image manifest. 
    */
    'kind': ImageManifestSummaryKindEnum;
    'imageData'?: ImageManifestSummaryImageData | null;
    'attestationData'?: ImageManifestSummaryAttestationData | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string",
            "format": ""
        },
        {
            "name": "descriptor",
            "baseName": "Descriptor",
            "type": "OCIDescriptor",
            "format": ""
        },
        {
            "name": "available",
            "baseName": "Available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "ImageManifestSummarySize",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "Kind",
            "type": "ImageManifestSummaryKindEnum",
            "format": ""
        },
        {
            "name": "imageData",
            "baseName": "ImageData",
            "type": "ImageManifestSummaryImageData",
            "format": ""
        },
        {
            "name": "attestationData",
            "baseName": "AttestationData",
            "type": "ImageManifestSummaryAttestationData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImageManifestSummary.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ImageManifestSummaryKindEnum {
    Image = 'image',
    Attestation = 'attestation',
    Unknown = 'unknown'
}

