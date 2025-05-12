curl -X POST http://localhost:3000/api/khipu/webhook \
-H "Content-Type: application/json" \
-d '{
  "notification_token": "test_token",
  "api_version": "1.3",
  "notification_id": "test_123",
  "notification_signature": "'$(echo -n "test_token1.3test_123" | openssl sha256 -hmac "TU_SECRET" | cut -d" " -f2)'",
  "payment_id": "tcqu03trxmkc",
  "status": "done",
  "amount": "1000.00",
  "payer_email": "test@example.com"
}'