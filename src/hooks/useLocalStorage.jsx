import { useState } from "react";

export default function useLocalStorage(keyName, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(keyName);

      if (item) return JSON.parse(item);
      else {
        window.localStorage.setItem(keyName, JSON.stringify(initialValue));

        return initialValue;
      }
    } catch (err) {
      console.error(err);
    }
  });

  const setValue = (value) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.error(err);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(keyName);
      setStoredValue(null);
    } catch (err) {
      console.error(err);
    }
  };

  const removeAllValue = () => {
    try {
      window.localStorage.clear();
      setStoredValue(null);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue, removeValue, removeAllValue];
}
