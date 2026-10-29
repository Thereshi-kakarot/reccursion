const factorial = require('./factorial');

describe('factorial', () => {
    test('returns 1 for 0', ()=> {
        expect(factorial(0)).toBe(1);
    });
});

test(' returns 1 for 1', () => {
    expect(factorial(1)).toBe(1);
});