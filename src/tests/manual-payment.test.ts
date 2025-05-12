import * as crypto from 'crypto';

// Define types for the function parameters
interface PaymentPayload {
  subject: string;
  currency: string;
  amount: number;
  notify_api_version: string;
  // Add other properties that might be in the payload
}

/**
 * Generates a signature for Khipu API requests
 * @param receiverId - The receiver ID for the Khipu account
 * @param apiKey - The API key for the Khipu account
 * @param payload - The payment request payload
 * @returns The generated signature
 */
function generateSignature(
  receiverId: string,
  apiKey: string, 
  payload: PaymentPayload | Record<string, any>
): string {
  // Convert payload to a string if it's an object
  const payloadString = typeof payload === 'string' 
    ? payload 
    : JSON.stringify(payload);
  
  // Create an HMAC using SHA-256 with the API key
  const hmac = crypto.createHmac('sha256', apiKey);
  
  // Update with receiver ID and payload
  hmac.update(receiverId);
  hmac.update(payloadString);
  
  // Return the signature as a hexadecimal string
  return hmac.digest('hex');
}

/**
 * Creates a payment request to Khipu API
 */
async function createPayment(): Promise<void> {
  const apiKey = '13a6ac94-ad14-4c46-8328-8ffedd8a17ab';
  const receiverId = '497987';
  
  const payload: PaymentPayload = {
    subject: "Prueba Diagnóstico",
    currency: "CLP",
    amount: 1000,
    notify_api_version: "3.0"
  };
  
  const signature = generateSignature(receiverId, apiKey, payload);
  
  try {
    const response = await fetch('https://payment-api.khipu.com/v3/payments', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'x-receiver-id': receiverId,
        'x-signature': signature,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Payment created successfully:', data);
  } catch (error) {
    console.error('Error creating payment:', error);
  }
}

// You can call the function to test it
createPayment().catch(console.error);