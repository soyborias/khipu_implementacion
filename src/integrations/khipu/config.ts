import { config } from 'dotenv';

// Load environment variables
config();

if (!process.env.KHIPU_API_KEY || !process.env.KHIPU_SECRET) {
  throw new Error('Missing required Khipu environment variables');
}

export const KHIPU_CONFIG = {
  API_URL: 'https://payment-api.khipu.com/v3',
  API_KEY: process.env.KHIPU_API_KEY,
  TEST_SECRET: process.env.KHIPU_SECRET,
  RECEIVER_ID: process.env.KHIPU_RECEIVER_ID || '', // Añadido RECEIVER_ID
  RETURN_URL: process.env.KHIPU_RETURN_URL,
  CANCEL_URL: process.env.KHIPU_CANCEL_URL,
  NOTIFY_URL: process.env.KHIPU_NOTIFY_URL,
  ENDPOINTS: {
    PAYMENTS: '/payments',
    PAYMENT_STATUS: '/payments/:id',
    BANKS: '/banks'
  }
};