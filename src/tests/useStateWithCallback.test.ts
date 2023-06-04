import { act, renderHook } from '@testing-library/react';

import { useStateWithCallback } from '../../lib';

describe('useStateWithCallback', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() =>
      useStateWithCallback(
        () => 'Initial State',
        () => {
          /*  */
        }
      )
    );
    expect(result.current[0]).toBe('Initial State');
  });

  it('should update state correctly', () => {
    const { result } = renderHook(() =>
      useStateWithCallback('Initial State', () => {
        /*  */
      })
    );
    act(() => {
      result.current[1]('Updated State');
    });
    expect(result.current[0]).toBe('Updated State');
  });

  it('should call callback with new state', () => {
    const callback = vi.fn();
    const { result } = renderHook(() =>
      useStateWithCallback<string>('Initial State', callback)
    );
    act(() => {
      result.current[1]('Updated State');
    });
    expect(callback).toHaveBeenCalledWith('Updated State');
  });

  it('should correctly handle updater function', () => {
    const callback = vi.fn();
    const { result } = renderHook(() =>
      useStateWithCallback<string>('Initial State', callback)
    );
    act(() => {
      result.current[1]((prevState) => `${prevState} Updated`);
    });
    expect(result.current[0]).toBe('Initial State Updated');
    expect(callback).toHaveBeenCalledWith('Initial State Updated');
  });
});
