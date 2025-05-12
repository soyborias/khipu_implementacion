import { KHIPU_CONFIG } from '../integrations/khipu/config';
import { KhipuClient } from '../integrations/khipu/client';

describe('Khipu Payment Integration', () => {
  let client: KhipuClient;

  beforeEach(() => {
    client = new KhipuClient();
  });

  it('should list banks successfully', async () => {
    const banks = await client.getBanks();
    expect(banks.length).toBeGreaterThan(0);
    expect(banks[0]).toHaveProperty('bank_id');
    expect(banks[0]).toHaveProperty('name');
  });

  it('should create payment successfully', async () => {
    const paymentRequest = {
      subject: 'Pago de prueba automatizado',
      currency: 'CLP',
      amount: '1000',
      transaction_id: `test-${Date.now()}`,
      return_url: KHIPU_CONFIG.RETURN_URL || 'https://example.com/return',
      cancel_url: KHIPU_CONFIG.CANCEL_URL || 'https://example.com/cancel',
      notify_url: KHIPU_CONFIG.NOTIFY_URL || 'https://example.com/notify',
      payer_email: 'test@example.com',
      notify_api_version: '3.0'
    };

    const payment = await client.createPayment(paymentRequest);
    expect(payment).toHaveProperty('payment_id');
    expect(payment).toHaveProperty('payment_url');
  });
  
  it('should get payment details by ID', async () => {
    // Primero creamos un pago
    const paymentRequest = {
      subject: 'Pago de prueba para consulta',
      currency: 'CLP',
      amount: '1000',
      transaction_id: `test-query-${Date.now()}`,
      return_url: KHIPU_CONFIG.RETURN_URL || 'https://example.com/return',
      cancel_url: KHIPU_CONFIG.CANCEL_URL || 'https://example.com/cancel',
      notify_url: KHIPU_CONFIG.NOTIFY_URL || 'https://example.com/notify',
      payer_email: 'test@example.com',
      notify_api_version: '3.0'
    };

    const payment = await client.createPayment(paymentRequest);
    
    // Luego consultamos sus detalles
    const paymentDetails = await client.getPaymentById(payment.payment_id);
    
    expect(paymentDetails).toHaveProperty('payment_id');
    expect(paymentDetails.payment_id).toBe(payment.payment_id);
    expect(paymentDetails).toHaveProperty('subject');
    expect(paymentDetails).toHaveProperty('amount');
  });
});

// Función de prueba manual (útil para depuración)
async function manualPaymentTest() {
  console.log('💰 Test de Pagos Khipu');
  console.log('===================\n');

  try {
    const khipuClient = new KhipuClient();
    
    // Test 1: Crear un pago
    console.log('Test 1: Crear pago');
    const paymentRequest = {
      subject: 'Pago de prueba automatizado',
      currency: 'CLP',
      amount: '1000',
      transaction_id: `test-${Date.now()}`,
      return_url: KHIPU_CONFIG.RETURN_URL || 'http://localhost:3000/payment/success',
      cancel_url: KHIPU_CONFIG.CANCEL_URL || 'http://localhost:3000/payment/cancel',
      notify_url: KHIPU_CONFIG.NOTIFY_URL || 'http://localhost:3000/api/khipu/webhook',
      payer_email: 'test@example.com',
      notify_api_version: '3.0'
    };

    console.log('\nCreando pago con datos:', paymentRequest);

    const payment = await khipuClient.createPayment(paymentRequest);
    
    console.log('\nPago creado exitosamente:', {
      payment_id: payment.payment_id,
      status: payment.status,
      status_detail: payment.status_detail,
      payment_url: payment.payment_url,
      simplified_transfer_url: payment.simplified_transfer_url,
      transfer_url: payment.transfer_url,
      app_url: payment.app_url
    });

    // Test 2: Obtener detalles del pago
    console.log('\nTest 2: Obtener detalles del pago');
    const paymentDetails = await khipuClient.getPaymentById(payment.payment_id);
    
    console.log('Detalles del pago:', {
      id: paymentDetails.payment_id,
      estado: paymentDetails.status,
      detalle: paymentDetails.status_detail,
      monto: paymentDetails.amount,
      moneda: paymentDetails.currency,
      banco: paymentDetails.bank_id,
      fechaConciliacion: paymentDetails.conciliation_date
    });

    // Test adicional: Validar que la URL de pago es accesible
    console.log('\nTest 3: Validar URL de pago');
    if (payment.payment_url && payment.payment_url.startsWith('http')) {
      console.log('✅ URL de pago válida:', payment.payment_url);
      console.log('Abre esta URL en tu navegador para completar el pago de prueba');
    } else {
      console.error('❌ URL de pago inválida');
    }

    console.log('\n✅ Tests completados exitosamente');

  } catch (error: any) {
    console.error('\n❌ Error en los tests:', {
      mensaje: error.message,
      detalles: error.response?.data,
      estado: error.response?.status,
      config: error.config
    });
    process.exit(1);
  }
}

// Descomentar para ejecutar la prueba manual
//manualPaymentTest();