# PredictGetPredict

Predicción acerca del resultado de un pago, si podrá o no funcionar. Información adicional como máximo posible de transferir a un nuevo destinatario.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **string** | El resultado de la predicción. | [default to undefined]
**max_amount** | **number** | El monto máximo posible para transferir. | [default to undefined]
**cool_down_date** | **string** | Fecha de término para la restricción de monto en formato ISO-8601 | [default to undefined]
**new_destinatary_max_amount** | **number** | Monto máximo para transferir a un nuevo destinatario. | [default to undefined]

## Example

```typescript
import { PredictGetPredict } from './api';

const instance: PredictGetPredict = {
    result,
    max_amount,
    cool_down_date,
    new_destinatary_max_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
