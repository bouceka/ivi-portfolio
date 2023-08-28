import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './app/_db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      process.env.DRIZZLE_CONFIG || ''
  },
  strict: false,
} satisfies Config;


