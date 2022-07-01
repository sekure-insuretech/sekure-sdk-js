/* 
import { GetProductById } from "./InsuranceOS/GetProductById"
import { GetProducts } from "./InsuranceOS/GetProducts"
import { GetProductStage } from "./InsuranceOS/GetProductStage";
import { GetEstimateBySessionId } from "./InsuranceOS/GetEstimateBySessionId";
*/

import { GetProductLotByName } from "./InsuranceOS/GetProductLotByName";



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

GetProductLotByName('ground_test_pets')
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "GetProductLotByName('ground_test_pets')" ) )