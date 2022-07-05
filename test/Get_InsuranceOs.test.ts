import sekure from '../src';

const ios: sekure = new sekure('https://api.sekure.com.co/OSStage', 'ec151c0d3e6648f88b4a65fc3a0b1ab1');

const product = {"Result":"OK"} ;
const resp = {data: product};

test('It should bring a successful discovery', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetProductById(0).then(data => expect(data).toEqual(product));
});


test('It should bring all the products successfully', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetProducts().then(data => expect(data).toEqual(product));
});

test('It should bring the estimate by the sessionId', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetEstimateBySessionId('fc78fa74-8b7a-4a6b-9044-45ec5e15e695').then(data => expect(data).toEqual(product));
});

test('It should bring a quote for the sessionId', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetQuoteBySessionId('fc78fa74-8b7a-4a6b-9044-45ec5e15e695').then(data => expect(data).toEqual(product));
});

test('It should bring a stage for the sessionId', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetProductStage('fc78fa74-8b7a-4a6b-9044-45ec5e15e695').then(data => expect(data).toEqual(product));
});

test('It should bring a batch discovery through the name', async () => {
  const myMock = jest.fn();
  myMock.mockResolvedValue(resp);
  return await ios.GetProductLotByName('ground_test_pets').then(data => expect(data).toEqual(product));
});