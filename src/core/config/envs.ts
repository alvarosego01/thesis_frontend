import * as joi from 'joi';

enum NodeEnv {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production'
}

interface EnvVars_I {
    VITE_API_URL: string;
    VITE_NODE_ENV: NodeEnv;
}

const envsSchema = joi.object({
    VITE_NODE_ENV: joi.string().valid(NodeEnv.DEVELOPMENT, NodeEnv.STAGING, NodeEnv.PRODUCTION).required(),
    VITE_API_URL: joi.string().required()
}).unknown(true);

const {
    error,
    value
} = envsSchema.validate({
    ...import.meta.env
});



if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars_I = value;

export const envs = {
    api_url: envVars.VITE_API_URL,
    nodeEnv: envVars.VITE_NODE_ENV
};
