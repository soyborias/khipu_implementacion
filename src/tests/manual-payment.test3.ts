import { KHIPU_CONFIG } from '../integrations/khipu/config';
import { KhipuClient } from '../integrations/khipu/client';
import axios from 'axios';

interface PaymentResponse {
  payment_id: string;
  payment_url: string;
  simplified_transfer_url: string;
  transfer_url: string;
  app_url: string;
  ready_for_terminal: boolean;
  status?: string;
  status_detail?: string;
  [key: string]: any; // Firma de índice para propiedades adicionales
}

async function testPaymentCreation() {
  console.log('💳 Test de Creación de Pago Khipu (Versión 3)');
  console.log('==========================================\n');

  try {
    // Inicializar cliente con credenciales correctas
    const khipuClient = new KhipuClient({
      apiKey: KHIPU_CONFIG.API_KEY,
      receiverId: KHIPU_CONFIG.RECEIVER_ID
    });
    
    // Datos del pago optimizados según pruebas exitosas
    const paymentData = {
      subject: 'Pago de prueba v3',
      currency: 'CLP',
      amount: '1000',
      transaction_id: `TEST-${Date.now()}`,
      return_url: KHIPU_CONFIG.RETURN_URL || 'http://localhost:3000/payment/success',
      cancel_url: KHIPU_CONFIG.CANCEL_URL || 'http://localhost:3000/payment/cancel',
      notify_url: KHIPU_CONFIG.NOTIFY_URL || 'http://localhost:3000/api/khipu/webhook',
      payer_email: 'test@example.com',
      notify_api_version: '3.0',
      expires_date: new Date(Date.now() + 24*60*60*1000).toISOString()
    };

    console.log('Creando pago con los siguientes datos:');
    console.log(JSON.stringify(paymentData, null, 2));

    // Realizar la solicitud de creación de pago
    const payment = await khipuClient.createPayment(paymentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('\n✅ Pago creado exitosamente!');
    console.log('==========================');
    console.log('ID:', payment.payment_id);
    console.log('Estado:', payment.status || 'pending');
    console.log('URL de pago:', payment.payment_url);
    console.log('URL simplificada:', payment.simplified_transfer_url);
    console.log('URL para app:', payment.app_url);

    // Obtener detalles del pago creado
    console.log('\nObteniendo detalles del pago...');
    const paymentDetails = await khipuClient.getPaymentById(payment.payment_id);
    
    console.log('\nDetalles del pago:');
    console.log('- ID:', paymentDetails.payment_id);
    console.log('- Estado:', paymentDetails.status);
    console.log('- Monto:', paymentDetails.amount, paymentDetails.currency);
    console.log('- Asunto:', paymentDetails.subject);
    
    // Mostrar URL para completar el pago
    console.log('\n🔗 Para completar el pago, abre esta URL en tu navegador:');
    console.log(payment.payment_url);

  } catch (error: any) {
    console.error('\n❌ Error en la creación del pago:');
    
    if (axios.isAxiosError(error)) {
      console.error('Error en Khipu API:', error.message);
      
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Datos:', error.response.data);
      }
      
      if (error.config) {
        console.error('\nDetalles de la solicitud:');
        console.error('URL:', error.config.url);
        console.error('Método:', error.config.method);
        console.error('Headers:', JSON.stringify(error.config.headers, null, 2));
        console.error('Data:', error.config.data);
      }
    } else {
      console.error('Error:', error.message);
    }
    
    process.exit(1);
  }
}

// Ejecutar el test
testPaymentCreation();