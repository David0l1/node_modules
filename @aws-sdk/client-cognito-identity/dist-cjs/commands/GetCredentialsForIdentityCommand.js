"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCredentialsForIdentityCommand = void 0;
const middleware_endpoint_1 = require("@aws-sdk/middleware-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
class GetCredentialsForIdentityCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, GetCredentialsForIdentityCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "GetCredentialsForIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetCredentialsForIdentityInputFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetCredentialsForIdentityResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_json1_1_1.serializeAws_json1_1GetCredentialsForIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_json1_1_1.deserializeAws_json1_1GetCredentialsForIdentityCommand)(output, context);
    }
}
exports.GetCredentialsForIdentityCommand = GetCredentialsForIdentityCommand;
