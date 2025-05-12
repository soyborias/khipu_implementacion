# PaymentPostPayment2

Crea un pago en Khipu y obtiene las URLs para redirección al usuario para que complete el pago.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** | Identificador único del pago, es una cadena alfanumérica de 12 caracteres. Como este identificador es único, se puede usar, por ejemplo, para evitar procesar una notificación repetida. (Khipu espera un código 200 al notificar un pago, si esto no ocurre se reintenta hasta por dos días). | [default to undefined]
**payment_url** | **string** | URL principal del pago, si el usuario no ha elegido previamente un método de pago se le muestran las opciones. | [default to undefined]
**simplified_transfer_url** | **string** | URL de pago simplificado. | [default to undefined]
**transfer_url** | **string** | URL de pago normal. | [default to undefined]
**app_url** | **string** | URL para invocar el pago desde un dispositivo móvil usando la APP de Khipu. | [default to undefined]
**ready_for_terminal** | **boolean** | Es &#x60;true&#x60; si el pago ya cuenta con todos los datos necesarios para abrir directamente la aplicación de pagos Khipu. | [default to undefined]

## Example

```typescript
import { PaymentPostPayment2 } from './api';

const instance: PaymentPostPayment2 = {
    payment_id,
    payment_url,
    simplified_transfer_url,
    transfer_url,
    app_url,
    ready_for_terminal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
