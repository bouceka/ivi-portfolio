import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './app/_db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      'postgres://default:pLTqjCGEl10M@ep-cold-block-18769482-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require',
  },
  strict: false,
} satisfies Config;


