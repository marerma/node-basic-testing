// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

const values1 = ['one', 'two'];
const resList = {
  value: 'one',
  next: { value: 'two', next: { value: null, next: null } },
};

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(values1)).toStrictEqual(resList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(['three'])).toMatchSnapshot(
      "{ value: 'three', next: { value: null, next: null } }",
    );
  });
});
