# PaymentPostPayment

Crea un pago en Khipu y obtiene las URLs para redirección al usuario para que complete el pago.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | El monto del cobro. Sin separador de miles y usando \&#39;.\&#39; como separador de decimales. Hasta 4 lugares decimales, dependiendo de la moneda. | [default to undefined]
**currency** | **string** | El código de moneda en formato ISO-4217. | [default to undefined]
**subject** | **string** | Motivo. | [default to undefined]
**transaction_id** | **string** | Identificador propio de la transacción. Ej: número de factura u orden de compra. | [optional] [default to undefined]
**custom** | **string** | Parámetro para enviar información personalizada de la transacción. Ej: documento XML con el detalle del carro de compra. | [optional] [default to undefined]
**body** | **string** | Descripción del cobro. | [optional] [default to undefined]
**bank_id** | **string** | Identificador del banco para usar en el pago. | [optional] [default to undefined]
**return_url** | **string** | La dirección URL a donde enviar al cliente mientras el pago está siendo verificado. | [optional] [default to undefined]
**cancel_url** | **string** | La dirección URL a donde enviar al cliente si decide no hacer hacer la transacción. | [optional] [default to undefined]
**picture_url** | **string** | Una dirección URL de una foto de tu producto o servicio. | [optional] [default to undefined]
**notify_url** | **string** | La dirección del web-service que utilizará khipu para notificar cuando el pago esté conciliado. | [optional] [default to undefined]
**contract_url** | **string** | La dirección URL del archivo PDF con el contrato a firmar mediante este pago. El cobrador debe estar habilitado para este servicio y el campo &#x60;fixed_payer_personal_identifier&#x60; es obligatorio. | [optional] [default to undefined]
**notify_api_version** | **string** | Versión de la API de notificaciones para recibir avisos por web-service. | [optional] [default to undefined]
**expires_date** | **string** | Fecha máxima para ejecutar el pago (en formato ISO-8601). El cliente podrá realizar varios intentos de pago hasta dicha fecha. Cada intento tiene un plazo individual de 3 horas para su ejecución. | [optional] [default to undefined]
**send_email** | **boolean** | Si es &#x60;true&#x60;, se enviará una solicitud de cobro al correo especificado en &#x60;payer_email&#x60;. | [optional] [default to undefined]
**payer_name** | **string** | Nombre del pagador. Es obligatorio cuando &#x60;send_email&#x60; es &#x60;true&#x60;. | [optional] [default to undefined]
**payer_email** | **string** | Correo del pagador. Es obligatorio cuando &#x60;send_email&#x60; es &#x60;true&#x60;. | [optional] [default to undefined]
**send_reminders** | **boolean** | Si es &#x60;true&#x60;, se enviarán recordatorios de cobro. | [optional] [default to undefined]
**responsible_user_email** | **string** | Correo electrónico del responsable de este cobro, debe corresponder a un usuario Khipu con permisos para cobrar usando esta cuenta de cobro. | [optional] [default to undefined]
**fixed_payer_personal_identifier** | **string** | Identificador personal. Si se especifica, solo podrá ser pagado usando ese identificador. | [optional] [default to undefined]
**integrator_fee** | **string** | Comisión para el integrador. Sólo es válido si la cuenta de cobro tiene una cuenta de integrador asociada. | [optional] [default to undefined]
**collect_account_uuid** | **string** | Para cuentas de cobro con más cuenta propia. Permite elegir la cuenta donde debe ocurrir la transferencia. | [optional] [default to undefined]
**confirm_timeout_date** | **string** | Fecha de rendición del cobro. Es también la fecha final para poder reembolsar el cobro. Formato ISO-8601. | [optional] [default to undefined]
**mandatory_payment_method** | **string** | El cobro sólo se podrá pagar utilizando el medio de pago especificado. Los posibles valores para este campo se encuentran en el campo &#x60;id&#x60; de la respuesta del endpoint &#x60;/api/3.0/merchants/paymentMethods&#x60;. | [optional] [default to undefined]
**psp_client_merchant_name** | **string** | Nombre del comercio final para quien un proveedor de servicios de pago procesa un pago. Requerido para transacciones de clientes PSP; no aplicable para otros. En caso de tratarse de un PSP de PSP, estos deben ingresarse separados por \&#39;-&gt;\&#39;. | [optional] [default to undefined]

## Example

```typescript
import { PaymentPostPayment } from './api';

const instance: PaymentPostPayment = {
    amount,
    currency,
    subject,
    transaction_id,
    custom,
    body,
    bank_id,
    return_url,
    cancel_url,
    picture_url,
    notify_url,
    contract_url,
    notify_api_version,
    expires_date,
    send_email,
    payer_name,
    payer_email,
    send_reminders,
    responsible_user_email,
    fixed_payer_personal_identifier,
    integrator_fee,
    collect_account_uuid,
    confirm_timeout_date,
    mandatory_payment_method,
    psp_client_merchant_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
