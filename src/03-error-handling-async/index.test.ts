// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue('lemon')).resolves.toBe('lemon');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'bla-bla';
    expect(() => throwError(message)).toThrow(new Error(message));
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultMsg = 'Oops!';
    expect(() => throwError()).toThrow(new Error(defaultMsg));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});
