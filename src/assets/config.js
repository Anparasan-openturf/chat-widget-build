const Joi = require("joi");

const envVarsSchema = Joi.object()
  .keys({
    REACT_APP_ENV: Joi.string()
      .valid("production", "development", "demo", "test")
      .default("production"),
    REACT_APP_API_URL: Joi.string().description(
      "backend server url different for each customer"
    ),
    REACT_APP_API_CHAT_URL: Joi.string().description(
      "backend websocket url different for each customer"
    ),
    REACT_APP_DOMAIN_NAME: Joi.string().default("Fexo-Dev"),
    REACT_APP_BASE_NAME: Joi.string().default("/"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  api: {
    url:
      envVars.NODE_ENV === "production"
        ? envVars.REACT_APP_API_URL
        : envVars.REACT_APP_API_URL,
    websocket:
      envVars.NODE_ENV === "production"
        ? envVars.REACT_APP_API_CHAT_URL
        : envVars.REACT_APP_API_CHAT_URL,
  },
  domain: {
    name: envVars.REACT_APP_DOMAIN_NAME,
  },
  baseName: envVars.REACT_APP_BASE_NAME,
};
