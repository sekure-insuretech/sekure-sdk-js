export default {
  get: jest.fn(() => Promise.resolve({ data: { Result: 'OK' } })),
  post: jest.fn(() => Promise.resolve({ data: { Result: 'OK' } })),
};
