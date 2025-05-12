# DefaultApi

All URIs are relative to *https://payment-api.khipu.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deletePaymentById**](#deletepaymentbyid) | **DELETE** /v3/payments/{id} | Delete payment by Id|
|[**getBanks**](#getbanks) | **GET** /v3/banks | Get banks|
|[**getMerchantPaymentMethodsById**](#getmerchantpaymentmethodsbyid) | **GET** /v3/merchants/{id}/paymentMethods | Get payment methods|
|[**getPaymentById**](#getpaymentbyid) | **GET** /v3/payments/{id} | Get payment by Id|
|[**getPredict**](#getpredict) | **GET** /v3/predict | Get payment prediction|
|[**postPayment**](#postpayment) | **POST** /v3/payments | Create payment|
|[**postPaymentConfirmById**](#postpaymentconfirmbyid) | **POST** /v3/payments/{id}/confirm | Confirm payment by Id|
|[**postPaymentRefundsById**](#postpaymentrefundsbyid) | **POST** /v3/payments/{id}/refunds | Refund payment by Id|
|[**postReceiver**](#postreceiver) | **POST** /v3/receivers | Post receiver|

# **deletePaymentById**
> Success deletePaymentById()

Borrar un pago. Solo se pueden borrar pagos que estén pendientes de pagar. Esta operación no puede deshacerse.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Identificador del pago (default to undefined)

const { status, data } = await apiInstance.deletePaymentById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identificador del pago | defaults to undefined|


### Return type

**Success**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBanks**
> BankGetBanks getBanks()

Este método obtiene la lista de bancos que se pueden utilizar para pagar en esta cuenta de cobro.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getBanks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BankGetBanks**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con el conjunto de bancos disponibles. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMerchantPaymentMethodsById**
> MerchantGetPaymentMethods getMerchantPaymentMethodsById()

Obtiene el listado de medios de pago disponible para una cuenta de cobrador.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //Identificador de la cuenta de cobro (default to undefined)

const { status, data } = await apiInstance.getMerchantPaymentMethodsById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Identificador de la cuenta de cobro | defaults to undefined|


### Return type

**MerchantGetPaymentMethods**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con la variedad de métodos de pago disponibles. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentById**
> PaymentGetPayment getPaymentById()

Información completa del pago. Datos con los que fue creado y el estado actual del pago.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Identificador del pago (default to undefined)

const { status, data } = await apiInstance.getPaymentById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identificador del pago | defaults to undefined|


### Return type

**PaymentGetPayment**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con la información de pago. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPredict**
> PredictGetPredict getPredict()

Predicción acerca del resultado de un pago, si podrá o no funcionar. Información adicional como máximo posible de transferir a un nuevo destinatario.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let payerEmail: string; //Correo electrónico del pagador (default to undefined)
let bankId: string; //Identificador del banco de origen (default to undefined)
let amount: string; //Monto del pago (default to undefined)
let currency: string; //Moneda en formato ISO-4217 (default to undefined)

const { status, data } = await apiInstance.getPredict(
    payerEmail,
    bankId,
    amount,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payerEmail** | [**string**] | Correo electrónico del pagador | defaults to undefined|
| **bankId** | [**string**] | Identificador del banco de origen | defaults to undefined|
| **amount** | [**string**] | Monto del pago | defaults to undefined|
| **currency** | [**string**] | Moneda en formato ISO-4217 | defaults to undefined|


### Return type

**PredictGetPredict**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con la predicción junto con información adiciónal. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPayment**
> PaymentPostPayment2 postPayment()

Crea un pago en Khipu y obtiene las URLs para redirección al usuario para que complete el pago.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PaymentPostPayment
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let paymentPostPayment: PaymentPostPayment; // (optional)

const { status, data } = await apiInstance.postPayment(
    paymentPostPayment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentPostPayment** | **PaymentPostPayment**|  | |


### Return type

**PaymentPostPayment2**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con la información del pago creado. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPaymentConfirmById**
> Success postPaymentConfirmById()

**Advertencia: Esta función sólo está disponible para los clientes que la hayan contratado de forma independiente. Para utilizarla, póngase en contacto con nosotros en soporte@khipu.com**<br><br> Confirmar el pago. Al confirmar el pago, este será rendido al día hábil siguiente. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Identificador del pago (default to undefined)

const { status, data } = await apiInstance.postPaymentConfirmById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identificador del pago | defaults to undefined|


### Return type

**Success**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPaymentRefundsById**
> Success postPaymentRefundsById()

Reembolsa total o parcialmente el monto de un pago. Esta operación solo se puede realizar en los comercios que recauden en cuenta Khipu y antes de la rendición de los fondos correspondientes.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PaymentPostPaymentRefunds
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Identificador del pago (default to undefined)
let paymentPostPaymentRefunds: PaymentPostPaymentRefunds; // (optional)

const { status, data } = await apiInstance.postPaymentRefundsById(
    id,
    paymentPostPaymentRefunds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentPostPaymentRefunds** | **PaymentPostPaymentRefunds**|  | |
| **id** | [**string**] | Identificador del pago | defaults to undefined|


### Return type

**Success**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReceiver**
> ReceiverPostReceiver2 postReceiver()

**Advertencia: Esta función sólo está disponible para los clientes que la hayan contratado de forma independiente. Para utilizarla, póngase en contacto con nosotros en soporte@khipu.com**<br><br> Crear una nueva cuenta de cobro asociada a un integrador. Necesita datos de la cuenta de usuario asociada, datos de facturación y datos de contacto. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ReceiverPostReceiver
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let receiverPostReceiver: ReceiverPostReceiver; // (optional)

const { status, data } = await apiInstance.postReceiver(
    receiverPostReceiver
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiverPostReceiver** | **ReceiverPostReceiver**|  | |


### Return type

**ReceiverPostReceiver2**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operación exitosa. Devuelve un objeto JSON con el identificador y secreto de la nueva cuenta de cobro. |  -  |
|**400** | Bad request - Solicitud mal formada |  -  |
|**401** | Unauthorized - Credenciales no válidas o faltantes |  -  |
|**403** | Forbidden - Cliente no tiene privilegios |  -  |
|**404** | Not found - Recurso no disponible |  -  |
|**500** | Internal server error - Servidor no pudo completar la solicitud |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

