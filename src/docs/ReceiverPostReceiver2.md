# ReceiverPostReceiver2

Objeto para respuesta de creación de cuenta de cobro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_id** | **string** | Identificador único de la cuenta de cobro. | [default to undefined]
**secret** | **string** | Llave secreta de la cuenta de cobro, se usa para firmar todas las peticiones. | [default to undefined]

## Example

```typescript
import { ReceiverPostReceiver2 } from './api';

const instance: ReceiverPostReceiver2 = {
    receiver_id,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
