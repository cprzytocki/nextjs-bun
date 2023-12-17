import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required.');
}

export default {
    schema: './src/libs/drizzle/schema.ts',
    out: './src/libs/drizzle/migrations',
    driver: 'mysql2',
    dbCredentials: {
        uri: process.env.DATABASE_URL,
    },
} satisfies Config;