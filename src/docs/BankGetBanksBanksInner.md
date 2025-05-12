# BankGetBanksBanksInner

Datos de banco.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_id** | **string** | Identificador del banco. | [default to undefined]
**name** | **string** | Nombre del banco. | [default to undefined]
**message** | **string** | Mensaje con particularidades del banco. | [default to undefined]
**min_amount** | **number** | Monto mínimo que acepta el banco en un pago. | [default to undefined]
**type** | **string** | Tipo de banco. | [default to undefined]
**parent** | **string** | Identificador del banco padre (si un banco tiene banca personas y empresas, el primero será el padre del segundo). | [default to undefined]
**logo_url** | **string** | URL del logo del banco. | [optional] [default to undefined]

## Example

```typescript
import { BankGetBanksBanksInner } from './api';

const instance: BankGetBanksBanksInner = {
    bank_id,
    name,
    message,
    min_amount,
    type,
    parent,
    logo_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
