import { useState } from "react";

function useStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    const newValue = JSON.stringify(value);
    sessionStorage.setItem(key, newValue);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export { useStorage };
