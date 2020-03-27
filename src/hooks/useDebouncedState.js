import { useState, useEffect } from 'react';

export default (defaultValue, delay) => {
  const [lastValue, setLastValue] = useState(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState(defaultValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(lastValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [lastValue, delay]);

  return [debouncedValue, setLastValue];
};
