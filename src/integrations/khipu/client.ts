import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { KHIPU_CONFIG } from './config';

interface Bank {
  bank_id: string;
  name: string;
  message?: string;
  min_amount: string;  // Cambiado a string ya que la API lo devuelve como string
  type: string;
  parent?: string;
  logo_url?: string;
}

interface BankResponse {
  banks: Bank[];
}

interface CreatePaymentRequest {
  amount: string;          // Monto del cobro, usando '.' como separador decimal
  currency: string;        // Código ISO-4217: CLP, CLF, ARS, PEN, MXN, USD, EUR, BOB, COP
  subject: string;         // Motivo del cobro (máx 255 caracteres)
  bank_id?: string;        // Identificador del banco (máx 5 caracteres)
  return_url: string;      // URL de retorno (máx 1024 caracteres)
  cancel_url: string;      // URL de cancelación (máx 1024 caracteres)
  notify_url?: string;     // URL para webhook (máx 1024 caracteres)
  transaction_id?: string; // ID propio de la transacción (máx 255 caracteres)
  custom?: string;         // Información personalizada (máx 1073741824 caracteres)
  body?: string;          // Descripción del cobro (máx 5120 caracteres)
  picture_url?: string;    // URL de imagen del producto (máx 1024 caracteres)
  notify_api_version?: string; // Versión de API de notificaciones
  expires_date?: string;   // Fecha máxima para el pago (ISO-8601)
  send_email?: boolean;    // Si se debe enviar email al pagador
  payer_name?: string;     // Nombre del pagador (requerido si send_email es true)
  payer_email?: string;    // Email del pagador (requerido si send_email es true)
  send_reminders?: boolean; // Si se deben enviar recordatorios
  responsible_user_email?: string; // Email del responsable del cobro
  fixed_payer_personal_identifier?: string; // RUT o identificador personal
  integrator_fee?: string; // Comisión para el integrador
  collect_account_uuid?: string; // UUID de la cuenta de cobro
  confirm_timeout_date?: string; // Fecha de rendición (ISO-8601)
  mandatory_payment_method?: string; // Método de pago obligatorio
  psp_client_merchant_name?: string; // Nombre del comercio para PSP
}

interface PaymentResponse {
  payment_id: string;
  payment_url: string;
  simplified_transfer_url: string;
  transfer_url: string;
  app_url: string;
  ready_for_terminal: boolean;
  // Los siguientes campos son opcionales ya que no siempre se devuelven
  notification_token?: string;
  receiver_id?: number;
  conciliation_date?: string;
  subject?: string;
  amount?: number;
  currency?: string;
  status?: string;
  status_detail?: string;
  body?: string;
  picture_url?: string;
  receipt_url?: string;
  return_url?: string;
  cancel_url?: string;
  notify_url?: string;
  notify_api_version?: string;
  expires_date?: string;
  bank?: string;
  bank_id?: string;
  payer_name?: string;
  payer_email?: string;
  personal_identifier?: string;
  bank_account_number?: string;
  out_of_date_conciliation?: boolean;
  transaction_id?: string;
  custom?: string;
  responsible_user_email?: string;
  send_reminders?: boolean;
  send_email?: boolean;
  payment_method?: string;
  funds_source?: string;
  discount?: number;
  third_party_authorization_details?: string;
  attachment_urls?: string[];
}

interface KhipuClientConfig {
  baseURL?: string;
  timeout?: number;
  apiKey: string;
  receiverId: string;
}

export class KhipuClient {
  private axios: AxiosInstance;

  constructor(config: KhipuClientConfig) {
    this.axios = axios.create({
      baseURL: config.baseURL || KHIPU_CONFIG.API_URL,
      timeout: config.timeout || 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': config.apiKey,
        'x-receiver-id': config.receiverId
      }
    });
  }

  async getBanks(): Promise<Bank[]> {
    try {
      const response = await this.axios.get<BankResponse>(KHIPU_CONFIG.ENDPOINTS.BANKS, {
        validateStatus: (status) => status < 500
      });

      if (response.status !== 200) {
        throw new Error(`API returned status ${response.status}: ${JSON.stringify(response.data)}`);
      }

      if (!response.data?.banks) {
        throw new Error('La respuesta de la API no tiene el formato esperado');
      }

      return response.data.banks;
    } catch (error: any) {
      console.error('Error obteniendo bancos:', {
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url,
        headers: error.config?.headers
      });
      throw error;
    }
  }

  async getPaymentById(paymentId: string): Promise<PaymentResponse> {
    try {
      const endpoint = KHIPU_CONFIG.ENDPOINTS.PAYMENT_STATUS.replace(':id', paymentId);
      const response = await this.axios.get<PaymentResponse>(endpoint, {
        validateStatus: (status) => status < 500
      });

      if (response.status !== 200) {
        throw new Error(`API returned status ${response.status}: ${JSON.stringify(response.data)}`);
      }

      return response.data;
    } catch (error: any) {
      console.error('Error obteniendo detalles del pago:', {
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url
      });
      throw error;
    }
  }

  async createPayment(data: CreatePaymentRequest, options?: AxiosRequestConfig): Promise<PaymentResponse> {
    try {
      const response = await this.axios.post<PaymentResponse>('/payments', data, {
        ...options,
        headers: {
          ...options?.headers
        }
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Error en Khipu API: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }
}