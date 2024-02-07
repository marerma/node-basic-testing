// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 6, action: Action.Add });
    expect(result).toEqual(11);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 6, action: Action.Subtract });
    expect(result).toEqual(9);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 6, action: Action.Multiply });
    expect(result).toEqual(30);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 5, action: Action.Divide });
    expect(result).toEqual(3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(25);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 2, action: '=' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '5', b: 'test', action: Action.Add });
    expect(result).toBeNull();
  });
});
