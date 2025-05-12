# PaymentGetPayment

Información completa del pago. Datos con los que fue creado y el estado actual del pago.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** | Identificador único del pago, es una cadena alfanumérica de 12 caracteres. Como este identificador es único, se puede usar, por ejemplo, para evitar procesar una notificación repetida. (Khipu espera un código 200 al notificar un pago, si esto no ocurre se reintenta hasta por dos días). | [default to undefined]
**payment_url** | **string** | URL principal del pago, si el usuario no ha elegido previamente un método de pago se le muestran las opciones. | [default to undefined]
**simplified_transfer_url** | **string** | URL de pago simplificado. | [default to undefined]
**transfer_url** | **string** | URL de pago normal. | [default to undefined]
**app_url** | **string** | URL para invocar el pago desde un dispositivo móvil usando la APP de Khipu. | [default to undefined]
**ready_for_terminal** | **boolean** | Es &#x60;true&#x60; si el pago ya cuenta con todos los datos necesarios para abrir directamente la aplicación de pagos Khipu. | [default to undefined]
**notification_token** | **string** | Cadena de caracteres alfanuméricos que identifican unicamente al pago, es el identificador que el servidor de Khipu enviará al servidor del comercio cuando notifique que un pago está conciliado. | [default to undefined]
**receiver_id** | **number** | Identificador único de una cuenta de cobro. | [default to undefined]
**conciliation_date** | **string** | Fecha y hora de conciliación del pago. Formato ISO-8601. | [default to undefined]
**subject** | **string** | Motivo del pago. | [default to undefined]
**amount** | **number** | El monto del cobro. | [default to undefined]
**currency** | **string** | El código de moneda en formato ISO-4217. | [default to undefined]
**status** | **string** | Estado del pago, puede ser &#x60;pending&#x60; (el pagador aún no comienza a pagar), &#x60;verifying&#x60; (se está verificando el pago) o &#x60;done&#x60;, cuando el pago ya está confirmado. | [default to undefined]
**status_detail** | **string** | Detalle del estado del pago: &#x60;pending&#x60; (el pagador aún no comienza a pagar), &#x60;normal&#x60; (el pago fue verificado y fue cancelado por algún medio de pago estándar), &#x60;marked-paid-by-receiver&#x60; (el cobrador marcó el cobro como pagado por otro medio), &#x60;rejected-by-payer&#x60; (el pagador declaró que no pagará), &#x60;marked-as-abuse&#x60; (el pagador declaró que no pagará y que el cobro fue no solicitado), y &#x60;reversed&#x60; (el pago fue anulado por el comercio, el dinero fue devuelto al pagador). | [default to undefined]
**body** | **string** | Detalle del cobro. | [default to undefined]
**picture_url** | **string** | URL con imagen del cobro. | [default to undefined]
**receipt_url** | **string** | URL del comprobante de pago. | [default to undefined]
**return_url** | **string** | URL donde se redirige al pagador luego que termina el pago. | [default to undefined]
**cancel_url** | **string** | URL donde se redirige al pagador luego de que desiste hacer el pago. | [default to undefined]
**notify_url** | **string** | URL del webservice donde se notificará el pago. | [default to undefined]
**notify_api_version** | **string** | Versión de la API de notificación. | [default to undefined]
**expires_date** | **string** | Fecha máxima para ejecutar el pago (en formato ISO-8601). El cliente podrá realizar varios intentos de pago hasta dicha fecha. Cada intento tiene un plazo individual de 3 horas para su ejecución. | [default to undefined]
**attachment_urls** | **Array&lt;string&gt;** | Arreglo de URLs de archivos adjuntos al pago. | [default to undefined]
**bank** | **string** | Nombre del banco seleccionado por el pagador. | [default to undefined]
**bank_id** | **string** | Identificador del banco seleccionado por el pagador. | [default to undefined]
**payer_name** | **string** | Nombre del pagador. | [default to undefined]
**payer_email** | **string** | Correo electrónico del pagador. | [default to undefined]
**personal_identifier** | **string** | Identificador personal del pagador. | [default to undefined]
**bank_account_number** | **string** | Número de cuenta bancaria del pagador. | [default to undefined]
**out_of_date_conciliation** | **boolean** | Es &#x60;true&#x60; si la conciliación del pago fue hecha luego de la fecha de expiración. | [default to undefined]
**transaction_id** | **string** | Identificador del pago asignado por el cobrador. | [default to undefined]
**custom** | **string** | Campo genérico que asigna el cobrador al momento de hacer el pago. | [default to undefined]
**responsible_user_email** | **string** | Correo electrónico de la persona responsable del pago. | [default to undefined]
**send_reminders** | **boolean** | Es &#x60;true&#x60; cuando este es un cobro por correo electrónico y Khipu enviará recordatorios. | [default to undefined]
**send_email** | **boolean** | Es &#x60;true&#x60; cuando Khipu enviará el cobro por correo electrónico. | [default to undefined]
**payment_method** | **string** | Método de pago usado por el pagador, puede ser &#x60;regular_transfer&#x60; (transferencia normal) o &#x60;simplified_transfer&#x60; (transferencia simplificada). | [default to undefined]
**funds_source** | **string** | Origen de fondos usado por el pagador, puede ser &#x60;debit&#x60; para pago con débito, &#x60;prepaid&#x60; para pago con prepago, &#x60;credit&#x60; para pago con crédito, o vacío en el caso de que se haya pagado mediante transferencia bancaria. | [default to undefined]
**discount** | **number** | Monto a descontar del valor pagado. | [optional] [default to undefined]
**third_party_authorization_details** | **string** | Ignorar este campo. | [optional] [default to undefined]

## Example

```typescript
import { PaymentGetPayment } from './api';

const instance: PaymentGetPayment = {
    payment_id,
    payment_url,
    simplified_transfer_url,
    transfer_url,
    app_url,
    ready_for_terminal,
    notification_token,
    receiver_id,
    conciliation_date,
    subject,
    amount,
    currency,
    status,
    status_detail,
    body,
    picture_url,
    receipt_url,
    return_url,
    cancel_url,
    notify_url,
    notify_api_version,
    expires_date,
    attachment_urls,
    bank,
    bank_id,
    payer_name,
    payer_email,
    personal_identifier,
    bank_account_number,
    out_of_date_conciliation,
    transaction_id,
    custom,
    responsible_user_email,
    send_reminders,
    send_email,
    payment_method,
    funds_source,
    discount,
    third_party_authorization_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
