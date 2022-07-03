import InsuranceOS from '../src';

const ios = new InsuranceOS('https://api.sekure.com.co/OSStage', 'ec151c0d3e6648f88b4a65fc3a0b1ab1');

describe('Insurance', () => {
    it('Test method sum', () => {
      expect(ios.Sum(2,3)).toEqual(5);
    });
  });
  