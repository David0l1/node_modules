import { Logger as __Logger } from "@aws-sdk/types";
import { SSOClientConfig } from "./SSOClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: SSOClientConfig) => {
    apiVersion: string;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: __Logger | undefined;
    }) => import("@aws-sdk/types").EndpointV2;
    logger: __Logger;
    serviceId: string;
    urlParser: import("@aws-sdk/types").UrlParser;
};
