/* 
import { GetProductById } from "./InsuranceOS/GetProductById"
import { GetProducts } from "./InsuranceOS/GetProducts"
import { GetProductStage } from "./InsuranceOS/GetProductStage";
import { GetEstimateBySessionId } from "./InsuranceOS/GetEstimateBySessionId";
import { GetProductLotByName } from "./InsuranceOS/GetProductLotByName";
*/

import { Quote } from "./InsuranceOS/Quote";
import { ExecutableProduct } from "./Types/ExecutableProduct";




//https://bobbyhadz.com/blog/typescript-http-request-axios


/* GetProducts()
  .then( resp => console.log( resp ) )
  .catch( error => console.log( error ) )
  .finally( () => console.log( `Fin GetProduct` ) ) */

/* GetProductById(138)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( `Fin GetProductById(138)` ) ) */

/* GetProductStage('42bd068a-71df-4dcc-d4ec-08da2c5db10e')
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "GetProductStage('42bd068a-71df-4dcc-d4ec-08da2c5db10e')" ) ) */

/* GetEstimateBySessionId('42bd068a-71df-4dcc-d4ec-08da2c5db10e')
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "GetEstimateBySessionId('42bd068a-71df-4dcc-d4ec-08da2c5db10e')" ) ) */

/* GetProductLotByName('ground_test_pets')
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "GetProductLotByName('ground_test_pets')" ) ) */


const request : ExecutableProduct = {
  ProductDetail : {
      ProductId : 138,
      ProductName : 'Asistencia Bolso Protegido',
      PolicyTypeName : 'Asistencias',
      InsuranceCompanyName : 'Andi Asistencia',
      ProductCover : ''
  },
  PolicyHolder : {
      firstName : 'Jhonatan',
      secondName : 'Alejandro',
      lastName : 'Muñoz',
      secondLastName : 'Serna',
      birthdate : new Date,
      address : 'xxxxx',
      identificationType : '1',
      identificationNumber : '123456',
      maritalStatus : '1',
      email : 'jhonatan@sekure.com.co',
      phoneNumber : '3112225588'
  },
  Parameters : []
};

console.log(request);
console.log('Aquí empieza a cotizar');

Quote(request)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "Quote(request)" ) )