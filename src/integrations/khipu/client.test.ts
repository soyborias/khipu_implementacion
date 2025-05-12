import { KhipuClient } from './client';
import axios from 'axios';
import { KHIPU_CONFIG } from './config';
import { AxiosError } from 'axios';

jest.mock('axios');

// Agregar al inicio del archivo
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
// o alternativamente configurar un archivo jest.d.ts

describe('KhipuClient', () => {
  let client: KhipuClient;

  beforeEach(() => {
    client = new KhipuClient();
    jest.clearAllMocks();
  });

  describe('createPayment', () => {
    it('debería crear un pago correctamente', async () => {
      const mockResponse = {
        payment_id: 'test123',
        payment_url: 'https://khipu.com/pay/test123',
        simplified_transfer_url: 'https://khipu.com/st/test123',
        ready_for_terminal: false
      };

      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
        status: 200,
        data: mockResponse,
        statusText: 'OK',
        headers: {},
        config: {} as any
      });

      const paymentData = {
        amount: '1000',
        currency: 'CLP',
        subject: 'Pago de prueba',
        return_url: 'https://example.com/return',
        cancel_url: 'https://example.com/cancel',
        notify_url: 'https://example.com/webhook',
        transaction_id: 'txn123'
      };

      const result = await client.createPayment(paymentData);

      expect(axios.post).toHaveBeenCalledWith(
        `${KHIPU_CONFIG.API_URL}${KHIPU_CONFIG.ENDPOINTS.PAYMENTS}`,
        expect.stringContaining('amount=1000'),
        expect.objectContaining({
          headers: {
            'x-api-key': KHIPU_CONFIG.API_KEY,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
      );

      expect(result).toEqual(mockResponse);
    });

    it('debería lanzar error si faltan campos obligatorios', async () => {
      await expect(client.createPayment({
        amount: '1000',
        currency: 'CLP',
        subject: 'Pago incompleto'
      } as any)).rejects.toThrow('Los campos return_url y cancel_url son obligatorios');
    });

    it('debería manejar errores de la API', async () => {
      const error = {
        response: {
          status: 400,
          data: { message: 'Invalid request' },
          statusText: 'Bad Request',
          headers: {},
          config: {} as any
        }
      };
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(error);

      await expect(client.createPayment({
        amount: '1000',
        currency: 'CLP',
        subject: 'Pago con error',
        return_url: 'https://example.com/return',
        cancel_url: 'https://example.com/cancel'
      })).rejects.toThrow();
    });
  });
});