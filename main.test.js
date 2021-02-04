const { fibonnacci } = require('./main');
const fn = require ('./main');

describe('the function fibonnacci', () => {
  describe('must use recursion', () => {
    test('use recursion', () => {
      const spy = jest.spyOn(fn, 'fibonnacci');
      const result = fn.fibonnacci(5);
  
      expect(spy).toHaveBeenCalledTimes(15);
      spy.mockRestore();
    });
  })

  describe('must returns 120 when 5 is the parameter', () => {
    test('returns 120', () => {
      let array = []
      for(var i = 0; i < 5; i++ ) {
        array.push(fn.fibonnacci(i))
      }
      console.log(array);
      expect(array).toEqual([ 1, 1, 2, 3, 5 ]);
    })
  })
})