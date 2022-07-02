
import { GetProductById } from "./InsuranceOS/GetProductById"
/* 
import { Quote } from "./InsuranceOS/Quote";
import { ExecutableProduct } from "./Types/ExecutableProduct";
import { GetProducts } from "./InsuranceOS/GetProducts"
import { GetProductStage } from "./InsuranceOS/GetProductStage";
import { GetEstimateBySessionId } from "./InsuranceOS/GetEstimateBySessionId";
import { GetProductLotByName } from "./InsuranceOS/GetProductLotByName";
import { Confirm } from "./InsuranceOS/Confirm";
import { Emit } from "./InsuranceOS/Emit";
import { QuoteLot } from "./InsuranceOS/QuoteLot";
import { ExecutatbleProductLot } from "./Types/ExecutatbleProductLot";
*/







//https://bobbyhadz.com/blog/typescript-http-request-axios


/* GetProducts()
  .then( resp => console.log( resp ) )
  .catch( error => console.log( error ) )
  .finally( () => console.log( `Fin GetProduct` ) ) */

GetProductById(138)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( `Fin GetProductById(138)` ) )

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
.finally( () => console.log( "Confirm(request, sessionId)" ) ) */

/* const sessionId = 'c6a51a72-6782-4719-7877-08da5b812142';
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

Emit(request, sessionId)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "Emit(request, sessionId)" ) ) */

/* const request : ExecutatbleProductLot = {
  BatchDetail : {
    Name : 'Test_ground_Exequias_Individual',
    PolicyTypeName : 'Asistencias'
  },
  Parameters : [
    {
      Name:                      'Fecha de nacimiento',
      InputParameterId:          328,
      InputParameterType:        'Text',
      inputParameterValue:       '1991-10-10',
      InputParameterDescription: 'Fecha de nacimiento del tomador, la edad máximo es de 70 años y el formato de fecha correcto es AÑO-MES-DÍA',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
    {
      Name:                      'Periodo de vigencia',
      InputParameterId:          329,
      InputParameterType:        'Text',
      inputParameterValue:       '1',
      InputParameterDescription: 'Se debe de enviar los valores. 1 = Si es semestral, 2 = Si es anual',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
    {
      Name:                      'Ciudad',
      InputParameterId:          351,
      InputParameterType:        'Text',
      inputParameterValue:       'Santa Fe de Antioquia',
      InputParameterDescription: 'Ciudad del tomador',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
    {
      Name:                      'Dirección',
      InputParameterId:          352,
      InputParameterType:        'Text',
      inputParameterValue:       'xxxxxx',
      InputParameterDescription: 'Dirección del Tomador',
      InputParameterRequired:    'true',
      ShowApi:                   true,
      InputParameterSchemaList:  []
    },
  ]
};

console.log(request);
console.log('Aquí empieza a cotizar el lote');

QuoteLot(request)
.then( resp => console.log( resp ) )
.catch( error => console.log( error ) )
.finally( () => console.log( "QuoteLot(request)" ) ) */