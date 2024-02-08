// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
const url = 'example/url';
const mockedResponse = {
  house: 'black',
  gardern: 'green',
};

beforeEach(() => {
  axios.create = jest.fn(() => axios as unknown as jest.Mocked<typeof axios>);
  axios.get = jest.fn().mockResolvedValue({ data: mockedResponse });
});

jest.mock('lodash', () => {
  const originalModule = jest.requireActual<typeof import('lodash')>('lodash');

  return {
    __esModule: true,
    ...originalModule,
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi(url);
    expect(axios.create).toHaveBeenLastCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi(url);
    expect(axios.get).toHaveBeenLastCalledWith(url);
  });

  test('should return response data', async () => {
    const res = await throttledGetDataFromApi(url);
    expect(res).toStrictEqual(mockedResponse);
  });
});
