import { GetProducts } from "./InsuranceOS";

GetProducts()
  .then( resp => console.log( resp ) )
  .catch( error => console.log( error ) )
  .finally( () => console.log( `Fin del producto ${138}` ) )

