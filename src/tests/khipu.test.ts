import { KHIPU_CONFIG } from '../integrations/khipu/config';
import { KhipuClient } from '../integrations/khipu/client';

interface Bank {
  bank_id: string;
  name: string;
  message?: string;
  min_amount: string;  // Changed to string as API returns it as string
  type: string;
  parent?: string;
  logo_url?: string;
}

async function testBanks() {
  console.log('🏦 Test de Bancos Khipu');
  console.log('=====================\n');

  try {
    const khipuClient = new KhipuClient({
      apiKey: KHIPU_CONFIG.API_KEY,
      receiverId: KHIPU_CONFIG.RECEIVER_ID
    });
    
    console.log('Test: Obtener lista de bancos');
    const banks = await khipuClient.getBanks();
    
    console.log('\nRespuesta:', {
      totalBancos: banks.length,
      bancos: banks.map(bank => ({
        id: bank.bank_id,
        nombre: bank.name,
        tipo: bank.type,
        montoMinimo: bank.min_amount,
        mensaje: bank.message || 'Sin mensaje'
      }))
    });

    // Validaciones del formato
    const primerBanco = banks[0];
    if (primerBanco) {
      console.log('\nValidación de formato del primer banco:');
      console.log('- bank_id:', typeof primerBanco.bank_id === 'string' ? '✅' : '❌');
      console.log('- name:', typeof primerBanco.name === 'string' ? '✅' : '❌');
      console.log('- type:', typeof primerBanco.type === 'string' ? '✅' : '❌');
      console.log('- min_amount:', typeof primerBanco.min_amount === 'string' ? '✅' : '❌');
      console.log('- message:', typeof primerBanco.message === 'string' ? '✅' : '❌');
    }

    console.log('\n✅ Test completado exitosamente');

  } catch (error: any) {
    console.error('\n❌ Error en el test:', {
      mensaje: error.message,
      detalles: error.response?.data,
      estado: error.response?.status,
      url: error.config?.url
    });
    process.exit(1);
  }
}

// Ejecutar pruebas
testBanks();

async function testKhipuConnection() {
  console.log('Iniciando prueba de conexión con Khipu...\n');

  try {
    // 1. Verificar configuración
    console.log('1. Verificando configuración:');
    console.log('- API URL:', KHIPU_CONFIG.API_URL);
    console.log('- API Key existe:', !!KHIPU_CONFIG.API_KEY);
    console.log('- API Key:', `${KHIPU_CONFIG.API_KEY?.substring(0, 8)}...`);

    // 2. Verificar headers
    console.log('\n2. Verificando headers de autenticación:');
    const headers = {
      'x-api-key': KHIPU_CONFIG.API_KEY
    };
    console.log('Headers configurados:', headers);

    // 3. Probar conexión
    console.log('\n3. Probando conexión a la API:');
    const khipuClient = new KhipuClient({
      apiKey: KHIPU_CONFIG.API_KEY,
      receiverId: KHIPU_CONFIG.RECEIVER_ID
    });
    
    console.log('- Obteniendo lista de bancos...');
    const banks = await khipuClient.getBanks() as Bank[];
    
    console.log('- Conexión exitosa! ✅');
    console.log('- Bancos disponibles:', banks.length);
    
    if (banks.length > 0) {
      console.log('\nPrimeros 3 bancos:');
      banks.slice(0, 3).forEach((bank: Bank) => {
        console.log(`- ${bank.name} (ID: ${bank.bank_id})`);
        console.log(`  Tipo: ${bank.type}`);
        if (bank.message) console.log(`  Mensaje: ${bank.message}`);
      });
    }

  } catch (error: any) {
    console.error('\n❌ Error en la prueba:');
    if (error.response) {
      console.error('Detalles del error:', {
        status: error.response.status,
        mensaje: error.response.data,
        url: error.config?.url,
        headers: error.config?.headers
      });
    } else {
      console.error('Error de conexión:', error.message);
    }
    process.exit(1);
  }
}

// Ejecutar prueba
console.log('🏦 Test de Integración Khipu');
console.log('==========================\n');
testKhipuConnection();