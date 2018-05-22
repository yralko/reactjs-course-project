import debounce from '../debounce';

describe('Debounce()', () => {
  jest.useFakeTimers();

  it('is invoked twice, though called three times', () => {
    const mockFn = jest.fn();

    debounce(mockFn, 200)();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
  });
});
