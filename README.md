# Integración con Khipu API
# By Roberto Martinez @soyBorias

Este proyecto implementa la integración con la API de Khipu para procesar pagos en línea. Incluye un servidor Express para manejar webhooks y pruebas automatizadas para verificar la funcionalidad.

## Tabla de Contenidos
1. [Requisitos](#requisitos)
2. [Configuración](#configuración)
3. [Ejecución del Servidor](#ejecución-del-servidor)
4. [Pruebas](#pruebas)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contribución](#contribución)
7. [Licencia](#licencia)
8. [Soporte](#soporte)

## Requisitos
- Node.js (v16 o superior)
- TypeScript
- Credenciales de Khipu (API Key y Receiver ID)

## Configuración
1. Clona el repositorio:
bash
git clone https://github.com/soyborias/khipu_implementacion/tree/master
cd khipu-integration

2. Instala las dependencias:

bash
Run
npm install

3. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto
Agrega tus credenciales de Khipu:
KHIPU_API_KEY=tu_api_key
KHIPU_RECEIVER_ID=tu_receiver_id

4. Ejecución del Servidor
Para iniciar el servidor de desarrollo:

bash
Run
npm run dev
El servidor estará disponible en http://localhost:3000

5. Ejecución de Pruebas
El proyecto incluye dos tipos de pruebas:

5.1 Prueba Automatizada (Khipu.test.ts):

bash
Run
npm test

5.2 Prueba Manual (manual-payment.test.ts):

bash
Run
npx ts-node src/tests/manual-payment.test.ts

6. Estructura del Proyecto

src/
├── integrations/
│── khipu/          # Módulo de integración con Khipu
├── server.ts       # Servidor principal
└── tests/          # Pruebas automatizadas y manuales

7. Contribución
Crea una nueva rama:

bash
Run
git checkout -b feature/nueva-funcionalidad

8. Realiza tus cambios y haz commit:

bash
Run
git add .git commit -m "Descripción de los cambios"

9. Sube los cambios y crea un Pull Request

10. Licencia
Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.

11. Soporte
Para problemas o preguntas, abre un issue en el repositorio o contacta al equipo de desarrollo.
