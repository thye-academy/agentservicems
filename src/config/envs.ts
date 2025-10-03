import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  OPENAI_API_KEY?: string;
}
const envsSchema = joi
  .object({
    OPENAI_API_KEY: joi.string().optional(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  openAIApiKey: envVars.OPENAI_API_KEY,
};
