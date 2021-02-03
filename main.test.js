const fn = require ('./main');

test('use recursion', () => {
    const spy = jest.spyOn(fn, 'factorial');
    const result = fn.factorial(5);

    expect(spy).toHaveBeenCalledTimes(6);
    spy.mockRestore();
  });