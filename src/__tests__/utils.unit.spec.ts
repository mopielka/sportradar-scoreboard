import { generateId } from '../utils';

describe('module utils', () => {
  describe('function generateId', () => {
    it('generates a 10-character string value', () => {
      expect(generateId().length).toBe(10);
    });

    // Note: this is just a simple test example for a simple random-generating function.
    // It's not deterministic, as the function itself neither does guarantee that the values will always be unique.
    //
    // For the sake of this simple project the test should be enough.
    // In real life when there's a huge number of objects, I would use an external library to generate unique IDs.
    it('generates unique values when using consecutively', () => {
      const values = Array.from({ length: 10 }, generateId);

      expect(values.every((value, index, array) => array.indexOf(value) === index)).toBe(true);
    });
  });
});
