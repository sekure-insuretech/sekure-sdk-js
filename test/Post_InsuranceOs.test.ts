import sekure from '../src';

const ios: sekure = new sekure('https://api.sekure.com.co/OSStage', 'ec151c0d3e6648f88b4a65fc3a0b1ab1');

const product = {"Result":"OK"} ;
const resp = {data: product};

test('It should bring a successful quote', async () => {
    const myMock = jest.fn();
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

    myMock.mockResolvedValue(resp);
    return await ios.Quote(request).then(data => expect(data).toEqual(product));
  });
  