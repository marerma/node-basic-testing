// Uncomment the code below and write your tests
import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  getBankAccount,
} from '.';

jest.unmock('lodash');
import lodashLib from 'lodash';

let account: BankAccount;

beforeEach(() => {
  account = getBankAccount(1000);
  jest.clearAllMocks();
});

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(account).toBeInstanceOf(BankAccount);
    expect(account).toStrictEqual(new BankAccount(1000));
    expect(account.getBalance()).toEqual(new BankAccount(1000).getBalance());
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(15000)).toThrow(
      new InsufficientFundsError(account.getBalance()),
    );
  });

  test('should throw error when transferring more than balance', () => {
    const secondAccount = new BankAccount(100);
    expect(() => account.transfer(1500, secondAccount)).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(100, account)).toThrow();
  });

  test('should deposit money', () => {
    const depositSum = 100;
    const newBalance = account.getBalance() + depositSum;
    account.deposit(depositSum);
    expect(account.getBalance()).toEqual(newBalance);
  });

  test('should withdraw money', () => {
    const withdrawSum = 100;
    const newBalance = account.getBalance() - withdrawSum;
    account.withdraw(withdrawSum);
    expect(account.getBalance()).toEqual(newBalance);
  });

  test('should transfer money', () => {
    const secondAccount = new BankAccount(100);
    const secondBalance = secondAccount.getBalance();
    const tranferSum = 150;
    account.transfer(tranferSum, secondAccount);
    expect(secondAccount.getBalance()).toEqual(secondBalance + tranferSum);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    lodashLib.random = jest.fn(() => 1);
    const balance = await account.fetchBalance();
    expect(balance).toEqual(expect.any(Number));
  });

  test('should set new balance if fetchBalance returned number', async () => {
    lodashLib.random = jest.fn(() => 10);
    await account.synchronizeBalance();
    expect(account.getBalance()).toEqual(10);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    lodashLib.random = jest.fn(() => 0);
    expect(async () => await account.synchronizeBalance()).rejects.toThrow(
      new SynchronizationFailedError(),
    );
  });
});
