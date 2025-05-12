# PaymentPostPaymentRefunds

Reembolsa total o parcialmente el monto de un pago. Esta operación solo se puede realizar en los comercios que recauden en cuenta Khipu y antes de la rendición de los fondos correspondientes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | El monto a devolver. Sin separador de miles y usando \&#39;.\&#39; como separador de decimales. Hasta 4 lugares decimales, dependiendo de la moneda. Si se omite el reembolso se hará por el total del monto del pago. | [optional] [default to undefined]

## Example

```typescript
import { PaymentPostPaymentRefunds } from './api';

const instance: PaymentPostPaymentRefunds = {
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
