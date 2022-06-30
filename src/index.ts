import { GetProductById } from "./InsuranceOS/GetProductById"
import { GetProducts } from "./InsuranceOS/GetProducts"

//https://bobbyhadz.com/blog/typescript-http-request-axios


GetProducts()
  .then( resp => console.log( resp ) )
  .catch( error => console.log( error ) )
  .finally( () => console.log( `Fin del producto ${138}` ) )

GetProductById(138)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( `Fin del producto ${138}` ) )

