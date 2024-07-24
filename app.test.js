const romanNumbers = require('./app');

test('check that 1 equals I', () => {
    expect(romanNumbers(1)).toBe('I');
  });


test('check that 2 equals II', () => {
    expect(romanNumbers(1)).toBe('II');
 });