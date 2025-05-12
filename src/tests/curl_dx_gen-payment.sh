curl -X POST 'https://payment-api.khipu.com/v3/payments' \
-H 'x-api-key: 13a6ac94-ad14-4c46-8328-8ffedd8a17ab' \
-H 'x-receiver-id: 497987' \
-H 'x-signature: GENERATED_SIGNATURE' \
-H 'Content-Type: application/json' \
-d '{
  "subject": "Prueba Diagnóstico",
  "currency": "CLP",
  "amount": 1000,
  "notify_api_version": "3.0"
}'