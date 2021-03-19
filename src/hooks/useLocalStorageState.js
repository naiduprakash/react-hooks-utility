import React from 'react';

export default function useLocalStorageState(key, initialValue) {
  const [state, setState] = React.useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialValue));
    } catch (e) {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}
