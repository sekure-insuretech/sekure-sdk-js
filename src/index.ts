/* 
import { GetProductById } from "./InsuranceOS/GetProductById"
import { GetProducts } from "./InsuranceOS/GetProducts"
import { GetProductStage } from "./InsuranceOS/GetProductStage";
import { GetEstimateBySessionId } from "./InsuranceOS/GetEstimateBySessionId";
import { GetProductLotByName } from "./InsuranceOS/GetProductLotByName";
import { Confirm } from "./InsuranceOS/Confirm";
import { Quote } from "./InsuranceOS/Quote";
*/

import { ExecutableProduct } from "./Types/ExecutableProduct";
import { Emit } from "./InsuranceOS/Emit";





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


/* const request : ExecutableProduct = {
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
.finally( () => console.log( "Quote(request)" ) ) */


/* const sessionId = '993f1c03-a6e1-4271-7f98-08da5b789611';
const request : ExecutableProduct = {
  ProductDetail : {
      ProductId : 31,
      ProductName : 'Asistencia Telemedicina',
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

Confirm(request, sessionId)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "Quote(request)" ) ) */

const sessionId = 'c6a51a72-6782-4719-7877-08da5b812142';
const request : ExecutableProduct = {
  ProductDetail : {
      ProductId :             100,
      ProductName :           'Exequias Individual',
      PolicyTypeName :        'Plan Exequial',
      InsuranceCompanyName :  'Prever',
      ProductCover :          ''
  },
  PolicyHolder : {
      firstName :             'Jhonatan',
      secondName :            'Alejandro',
      lastName :              'Muñoz',
      secondLastName :        'Serna',
      birthdate :             new Date,
      address :               'xxxxx',
      identificationType :    '1',
      identificationNumber :  '123456',
      maritalStatus :         '1',
      email :                 'jhonatan@sekure.com.co',
      phoneNumber :           '3112225588'
  },
  Parameters : [
    {
      Name:                      'Lead Name',
      InputParameterId:          330,
      InputParameterType:        'Text',
      inputParameterValue:       'Sekure',
      InputParameterDescription: 'En este campo va el nombre del tomador de la póliza',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
    {
      Name:                      'Email',
      InputParameterId:          331,
      InputParameterType:        'Text',
      inputParameterValue:       'contacto@sekure.com.co',
      InputParameterDescription: 'Email del tomador',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
    {
      Name:                      'NameClient',
      InputParameterId:          332,
      InputParameterType:        'Text',
      inputParameterValue:       'sekure',
      InputParameterDescription: 'Nombre del cliente, usuario del API',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    }
  ]
};

console.log(request);

Emit(request, sessionId)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "Quote(request)" ) )

