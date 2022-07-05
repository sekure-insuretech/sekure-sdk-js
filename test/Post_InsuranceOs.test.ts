import sekure from '../src';

const ios: sekure = new sekure('https://api.sekure.com.co/OSStage', 'ec151c0d3e6648f88b4a65fc3a0b1ab1');

const request = {
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

const requestLot = {
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

const requestPay = {
  PaymentGatewayName: 'xxxx',
  ProductName: 'asistencias',
  TransactionSkrId: 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695',
  ClientSkrId: 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695',
  Request: []
};

const product = {"Result":"OK"};
const resp = {data: product};

test('It should bring a successful quote', async () => {
    const myMock = jest.fn();

    myMock.mockResolvedValue(resp);
    return await ios.Quote(request).then(data => expect(data).toEqual(product));
});

test('It should bring a successful confirm', async () => {
    const myMock = jest.fn();

    myMock.mockResolvedValue( resp );
    return await ios.Confirm ( request, 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695' ).then(data => expect(data).toEqual(product));
});

test('It should bring a successful emit', async () => {
    const myMock = jest.fn();

    myMock.mockResolvedValue( resp );
    return await ios.Emit ( request, 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695' ).then(data => expect(data).toEqual(product));
});

test('It should bring a successful quote by lot', async () => {
    const myMock = jest.fn();

    myMock.mockResolvedValue(resp);
    return await ios.QuoteLot (requestLot).then(data => expect(data).toEqual(product));
});

test('It should bring a successful confirm by lot', async () => {
  const myMock = jest.fn();

  myMock.mockResolvedValue(resp);
  return await ios.ConfirmLot (requestLot, 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695').then(data => expect(data).toEqual(product));
});

test('It should bring a successful emit by lot', async () => {
  const myMock = jest.fn();

  myMock.mockResolvedValue(resp);
  return await ios.EmitLot(requestLot, 'fc78fa74-8b7a-4a6b-9044-45ec5e15e695').then(data => expect(data).toEqual(product));
});

test('It should bring a successful payment', async () => {
  const myMock = jest.fn();

  myMock.mockResolvedValue(resp);
  return await ios.GetPaymentStatus(requestPay).then(data => expect(data).toEqual(product));
});

test('It should bring a successful payment status', async () => {
  const myMock = jest.fn();

  myMock.mockResolvedValue(resp);
  return await ios.Pay(requestPay).then(data => expect(data).toEqual(product));
});

test('It should bring a successful askSekure', async () => {
  const myMock = jest.fn();
  const requestAskSekure: any = { data: {"Result":"OK"} }
  myMock.mockResolvedValue(resp);
  return await ios.AskSekure(requestAskSekure, 30, 'test').then(data => expect(data).toEqual(product));
});