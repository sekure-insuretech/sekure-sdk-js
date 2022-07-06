# library sekure-sdk-js

library sekure-sdk-js es una libreria en Javascripts en donde podrás utilizar todos nuestros productos y servicios en framework de javascripts de una forma más facil.

## Configuración de la libreria

Debe importar la libreria.

```
import Sekure from 'sekure-sdk-js';
```

Una vez instalada debemos de llamar a su constructor

```bash
const ios = new Sekure('UrlInsuranceOS', 'KeySubscriptionInsuranceOS');
```
### UrlInsuranceOS: 
Es la url de los siguientes ambientes
>  - Pre-producción:  https://api.sekure.com.co/ospreprod/
>  - Producción:      https://api.sekure.com.co/os/

### KeySubscriptionInsuranceOS: 
Es la suscripción que debe de tener el cliente para utilizar el sdk de sekure, sin una suscripción no es posible utilizar los servicios de sekure

## Descubrimiento del producto
El descubrimiento es la configuración del producto, se utiliza el método `await ios.GetProductById(productId)` que recibe como parametro el productId

Con el descubrimiento se identifica cuales son los input parameter que se requiere para cotizar, confirmar y emitir

```
  useEffect(() => {
    
    const productDiscovery = async () => 
    {
      const getProductById = await ios.GetProductById(138)
      console.log(getProductById);
    }
    productDiscovery();

  }, []);
```
- productId: Es el id del producto a cotizar

 ### Cotización
 Para la cotización se utiliza el método `await ios.Quote(request)` que recibe como parametro un type del SDK **ExecutableProduct** si trabajas typescripts

- request: Cuerpo de la petición, esta información se obtiene en el descubrimiento

```
  const request = {
    ProductDetail: {
      ProductId: 100,
      ProductName: 'ProductName',
      PolicyTypeName: 'PolicyTypeName',
      InsuranceCompanyName: 'InsuranceCompanyName'
    },
    Parameters: [...]
  }

  useEffect(() => {
    
    const productQuote = async () => 
    {
      const quote = await ios.Quote(request)
      console.log(quote);
    }
    productQuote();

  }, [...]);
```

### Confirmar
 Para la confirmación se utiliza el método `await ios.Confirm(request, sessionId)` que recibe como parametro un type del SDK **ExecutableProduct** si trabajas typescripts y un string

- request: Cuerpo de la petición, esta información se obtiene en el descubrimiento
- sessionId: Es el sessionId del producto a cotizar
  
```
  const request = {
    ProductDetail: {
      ProductId: 100,
      ProductName: 'ProductName',
      PolicyTypeName: 'PolicyTypeName',
      InsuranceCompanyName: 'InsuranceCompanyName'
    },
    Parameters: [...]
  }

  useEffect(() => {
    
    const productConfirm = async () => 
    {
      const confirm = await ios.Confirm(request)
      console.log(confirm);
    }
    productQuote();

  }, []);
```

 ### Emitir
 Para la confirmación se utiliza el método `await ios.Emit(request, sessionId)` que recibe como parametro un type del SDK **ExecutableProduct** si trabajas typescripts y un string

- request: Cuerpo de la petición, esta información se obtiene en el descubrimiento
- sessionId: Es el sessionId del producto a cotizar
  
```
  const request = {
    ProductDetail: {
      ProductId: 100,
      ProductName: 'ProductName',
      PolicyTypeName: 'PolicyTypeName',
      InsuranceCompanyName: 'InsuranceCompanyName'
    },
    Parameters: [...]
  }

  useEffect(() => {
    
    const productEmit = async () => 
    {
      const Emit = await ios.Emit(request)
      console.log(confirm);
    }
    productEmit();

  }, []);
```