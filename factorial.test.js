const factorial = require('./factorial');

describe('factorial', () => {
    test('returns 1 for 0', ()=> {
        expect(factorial(0)).toBe(1);
    });
});

test(' returns 1 for 1', () => {
    expect(factorial(1)).toBe(1);
});

test('returns 120 for 5', () => {
    expect(factorial(5)).toBe(120);
});

test('returns 720 for 6', () => {
    expect(factorial(6)).toBe(720);
});

test('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
});

