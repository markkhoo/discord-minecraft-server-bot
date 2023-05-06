import 'dotenv/config';
import { cleanEnv, makeValidator, num } from 'envalid'

const notEmptyString = makeValidator(x => {
  if (typeof x !== 'string' || x.length === 0) {
    throw new Error('Expected non-empty string')
  }
  return x
});

const validateSuperRoles = makeValidator(x => {
  if (typeof x !== 'string' || x.length === 0) {
    throw new Error('Expected non-empty string')
  }
  return x.split(',');
});

export default cleanEnv(process.env, {
  DISCORD_TOKEN: notEmptyString(),
  RCON_HOST:  notEmptyString(),
  RCON_PASS: notEmptyString(),
  RCON_PORT: num({ default: 25575 }),
  SUPER_ROLE_IDS: validateSuperRoles({ default: [] }),
});