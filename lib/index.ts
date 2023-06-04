import { useCallback, useRef, useState } from 'react';

export const useStateWithCallback = <T = unknown>(
  value: T | (() => T),
  callback: (newValue: T) => void
) => {
  const [state, _setState] = useState<T>(value);

  const callBackRef = useRef(callback);
  callBackRef.current = callback;

  const setState = useCallback((updatedState: T | ((currentState: T) => T)) => {
    _setState((current) => {
      if (updatedState instanceof Function) {
        const result = updatedState(current);
        callBackRef.current(result);
        return result;
      }

      callBackRef.current(updatedState);
      return updatedState;
    });
  }, []);

  return [state, setState] as const;
};
