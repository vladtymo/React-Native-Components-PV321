import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'sqlite',
    driver: 'expo',
    schema: './store/schema.ts',
    out: './drizzle',
});
