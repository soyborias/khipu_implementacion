import { KHIPU_CONFIG } from '../integrations/khipu/config';
import { KhipuClient } from '../integrations/khipu/client';

interface PaymentResponse {
  payment_id: string;
  payment_url: string;
  simplified_transfer_url: string;
  transfer_url: string;
  app_url: string;
  ready_for_terminal: boolean;
  status?: string;
  status_detail?: string;
  [key: string]: any; // Added index signature
}

async function testPaymentCreation() {
  console.log('💳 Test de Creación de Pago Khipu (Versión Corregida)');
  console.log('==================================================\n');

  try {
    const khipuClient = new KhipuClient({
      apiKey: KHIPU_CONFIG.API_KEY,
      receiverId: KHIPU_CONFIG.RECEIVER_ID
    });
    
    // Configuración óptima basada en pruebas exitosas
    const paymentData = {
      subject: 'Pago de prueba - Configuración Validada',
      currency: 'CLP',
      amount: '1000', // Cambiado a string
      transaction_id: `TEST-${Date.now()}`,
      bank_id: 'transbank',
      payer_email: 'test@example.com',
      return_url: KHIPU_CONFIG.RETURN_URL || 'https://example.com/success',
      cancel_url: KHIPU_CONFIG.CANCEL_URL || 'https://example.com/cancel',
      notify_url: KHIPU_CONFIG.NOTIFY_URL || 'https://example.com/webhook',
      notify_api_version: '3.0', // Versión actualizada a 3.0
      expires_date: new Date(Date.now() + 86400000).toISOString()
    };

    // Configuración de headers para usar JSON
    const payment = await khipuClient.createPayment(paymentData, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '3.0'
      }
    }) as PaymentResponse;
    
    console.log('\n✅ Pago creado exitosamente!');
    console.log('==========================');
    console.log('ID:', payment.payment_id);
    console.log('Estado:', payment.status || 'pending');
    console.log('URL de pago:', payment.payment_url);

    // Validación mejorada
    const requiredFields = ['payment_id', 'payment_url', 'status'];
    const isValid = requiredFields.every(field => payment[field]);
    console.log('\nValidación:', isValid ? '✅ OK' : '❌ Falló');

  } catch (error: any) {
    console.error('\n❌ Error en la creación del pago:');
    
    // Análisis detallado del error
    if (error.isAxiosError) {
      console.error('URL:', error.config?.url);
      console.error('Método:', error.config?.method);
      console.error('Headers:', error.config?.headers);
      console.error('Data enviada:', error.config?.data);
      
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Respuesta:', error.response.data);
      }
    } else {
      console.error('Error:', error.message);
    }
    
    process.exit(1);
  }
}

testPaymentCreation();