import * as crypto from 'crypto';

export class KhipuAuthService {
  generateAuthHeaders(receiverId: string, secret: string, method: string, url: string, params: Record<string, any> = {}) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const nonce = crypto.randomBytes(16).toString('hex');
    
    // Create concatenated string
    const concatenated = `${method}&${url}&${timestamp}&${nonce}`;
    
    // Add parameters if they exist
    const sortedParams = Object.keys(params)
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&');
    
    const message = sortedParams 
      ? `${concatenated}&${sortedParams}`
      : concatenated;

    // Generate HMAC
    const hmac = crypto
      .createHmac('sha256', secret)
      .update(message)
      .digest('hex');

    return {
      'Authorization': `${receiverId}:${hmac}`,
      'X-Khipu-Timestamp': timestamp,
      'X-Khipu-Nonce': nonce
    };
  }
}