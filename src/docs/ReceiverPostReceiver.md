# ReceiverPostReceiver

Crear una nueva cuenta de cobro asociada a un integrador. Necesita datos de la cuenta de usuario asociada, datos de facturación y datos de contacto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_first_name** | **string** | Nombre de pila del administrador de la cuenta de cobro a crear. | [default to undefined]
**admin_last_name** | **string** | Apellido del administrador de la cuenta de cobro a crear. | [default to undefined]
**admin_email** | **string** | Correo electrónico del administrador de la cuenta de cobro a crear. | [default to undefined]
**country_code** | **string** | Código alfanumérico de dos caracteres ISO 3166-1 del país de la cuenta de cobro a crear. | [default to undefined]
**business_identifier** | **string** | Identificador tributario del cobrador asociado a la cuenta de cobro a crear. | [default to undefined]
**business_category** | **string** | Categoría tributaria o rubro tributario del cobrador asociado a la cuenta de cobro a crear. | [default to undefined]
**business_name** | **string** | Nombre tributario del cobrador asociado a la cuenta de cobro a crear. | [default to undefined]
**business_phone** | **string** | Teléfono del cobrador asociado a la cuenta de cobro a crear. | [default to undefined]
**business_address_line_1** | **string** | Dirección del cobrador de la cuenta de cobro a crear. | [default to undefined]
**business_address_line_2** | **string** | Segunda línea de la dirección del cobrador de la cuenta de cobro a crear. | [default to undefined]
**business_address_line_3** | **string** | Tercera línea de la dirección del cobrador de la cuenta de cobro a crear. | [default to undefined]
**contact_full_name** | **string** | Nombre del contacto del cobrador. | [default to undefined]
**contact_job_title** | **string** | Cargo del contacto del cobrador. | [default to undefined]
**contact_email** | **string** | Correo electrónico del contacto del cobrador. | [default to undefined]
**contact_phone** | **string** | Teléfono del contacto del cobrador. | [default to undefined]
**bank_account_bank_id** | **string** | Identificador del banco. | [optional] [default to undefined]
**bank_account_type** | **string** | Tipo de cuenta. Es obligatorio si se utiliza el modelo alternativo de integrador de confianza. | [optional] [default to undefined]
**bank_account_identifier** | **string** | Identificador personal del dueño de la cuenta de banco. | [optional] [default to undefined]
**bank_account_name** | **string** | Nombre de la cuenta de banco. | [optional] [default to undefined]
**bank_account_number** | **string** | Número de la cuenta en el banco. | [optional] [default to undefined]
**notify_url** | **string** | URL por omisión para el webservice donde se notificará el pago. | [optional] [default to undefined]
**rendition_url** | **string** | URL para el webservice donde se notificará la rendición. | [optional] [default to undefined]

## Example

```typescript
import { ReceiverPostReceiver } from './api';

const instance: ReceiverPostReceiver = {
    admin_first_name,
    admin_last_name,
    admin_email,
    country_code,
    business_identifier,
    business_category,
    business_name,
    business_phone,
    business_address_line_1,
    business_address_line_2,
    business_address_line_3,
    contact_full_name,
    contact_job_title,
    contact_email,
    contact_phone,
    bank_account_bank_id,
    bank_account_type,
    bank_account_identifier,
    bank_account_name,
    bank_account_number,
    notify_url,
    rendition_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
