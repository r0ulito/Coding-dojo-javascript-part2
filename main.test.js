const fn = require ('./main');

describe('the function factorial', () => {
  describe('must use recursion', () => {
    test('use recursion', () => {
      const spy = jest.spyOn(fn, 'factorial');
      const result = fn.factorial(5);
  
      expect(spy).toHaveBeenCalledTimes(6);
      spy.mockRestore();
    });
  })

  describe('must returns 120 when 5 is the parameter', () => {
    test('returns 120', () => {
      const result = fn.factorial(5);
      expect(result).toEqual(120);
    })
  })
})