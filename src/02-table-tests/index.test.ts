// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 12, b: 2, action: Action.Divide, expected: 6 },
  { a: 22, b: 11, action: Action.Divide, expected: 2 },
  { a: 33, b: 33, action: Action.Divide, expected: 1 },
  { a: 12, b: 2, action: Action.Multiply, expected: 24 },
  { a: -22, b: 10, action: Action.Multiply, expected: -220 },
  { a: 0, b: 33, action: Action.Multiply, expected: 0 },
  { a: 12, b: 2, action: Action.Subtract, expected: 10 },
  { a: -22, b: 10, action: Action.Subtract, expected: -32 },
  { a: 0, b: 33, action: Action.Subtract, expected: -33 },
  { a: 12, b: 2, action: Action.Exponentiate, expected: 144 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 33, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 33, b: 0, action: 'notValidAction', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return valid results',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
