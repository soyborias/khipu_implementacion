import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(__dirname, '../../.env') });

export const SERVER_CONFIG = {
    port: process.env.PORT || 3000,
    host: 'localhost'
};