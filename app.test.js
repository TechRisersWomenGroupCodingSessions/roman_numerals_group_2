const romanNumbers = require('./app');

test('check that 1 equals I', () => {
    expect(romanNumbers(1)).toBe('I');
  });