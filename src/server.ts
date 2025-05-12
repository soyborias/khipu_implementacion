import express from 'express';
import { KHIPU_CONFIG } from './integrations/khipu/config';
import crypto from 'crypto';

const app = express();

// ======================
// 1. Configuración Inicial
// ======================
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Middleware CORS corregido - usando el middleware directamente
app.use(function(
  req: any, 
  res: any, 
  next: any
) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-khipu-signature');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  return next();
});

// Endpoint POST corregido
app.post('/api/khipu/webhook', function(
  req: any, 
  res: any
) {
  return (async function() {
    try {
      // 1. Validar cabecera de firma
      if (!req.headers['x-khipu-signature']) {
        logNotification('Falta cabecera de firma');
        return res.status(401).json({ error: 'Firma no proporcionada' });
      }

    // 2. Validar estructura básica del body
    if (!req.body || typeof req.body !== 'object') {
      logNotification('Body inválido recibido', { body: req.body });
      return res.status(400).json({ error: 'Cuerpo de solicitud inválido' });
    }

    const notification = req.body as Partial<KhipuNotification>;

    // 3. Validar campos obligatorios
    const requiredFields: Array<keyof KhipuNotification> = [
      'notification_token',
      'api_version',
      'notification_id',
      'notification_signature',
      'payment_id',
      'status'
    ];

    const missingFields = requiredFields.filter(field => !notification[field]);
    if (missingFields.length > 0) {
      logNotification('Campos faltantes en notificación', {
        missingFields,
        received: notification
      });
      return res.status(400).json({ 
        error: 'Notificación incompleta',
        missing_fields: missingFields
      });
    }

    // 4. Validar firma HMAC
    const fullNotification = notification as KhipuNotification;
    if (!validateKhipuNotification(fullNotification, KHIPU_CONFIG.TEST_SECRET)) {
      logNotification('Firma de notificación inválida', {
        receivedSignature: fullNotification.notification_signature
      });
      return res.status(401).json({ error: 'Firma inválida' });
    }

    // 5. Procesar la notificación
    logNotification('Notificación recibida', {
      payment_id: fullNotification.payment_id,
      status: fullNotification.status,
      amount: fullNotification.amount
    });

    // Aquí implementarías la lógica de negocio:
    // - Actualizar base de datos
    // - Enviar confirmación por email
    // - etc.

    // 6. Responder a Khipu
    return res.status(200).json({ 
      success: true,
      payment_id: fullNotification.payment_id
    });
  } catch (error) {
    logNotification('Error procesando notificación', { 
      error: error instanceof Error ? error.message : String(error)
    });
      return res.status(500).json({ 
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  })();
});

// ======================
// 5. Endpoints Adicionales
// ======================
app.get('/payment/status/:id', function(
  req: any, 
  res: any
) {
  try {
    res.json({ 
      payment_id: req.params.id,
      status: 'pending',
      last_checked: new Date().toISOString()
    });
  } catch (error) {
    logNotification('Error en consulta de estado', { error });
    res.status(500).json({ error: 'Error al consultar estado' });
  }
});

// ======================
// 6. Inicialización del Servidor
// ======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`
  🚀 Servidor Khipu iniciado
  ==========================
  Puerto: ${PORT}
  Webhook: ${KHIPU_CONFIG.NOTIFY_URL}
  Entorno: ${process.env.NODE_ENV || 'development'}
  `);
});


// Add this function definition
function logNotification(message: string, metadata?: object) {
  console.log(`[${new Date().toISOString()}] ${message}`, metadata || '');
}


interface KhipuNotification {
  notification_token: string;
  api_version: string;
  notification_id: string;
  notification_signature: string;
  payment_id: string;
  status: string;
  amount?: string;
  payer_email?: string;
  conciliation_date?: string;
  custom?: string;
  transaction_id?: string;
  bank_id?: string;
  currency?: string;
  subject?: string;
}


function validateKhipuNotification(notification: KhipuNotification, secret: string): boolean {
  const { notification_token, api_version, notification_id } = notification;
  
  // Create the message to sign
  const message = `${notification_token}${api_version}${notification_id}`;
  
  // Create HMAC signature
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');
    
  // Compare signatures
  return hmac === notification.notification_signature;
}