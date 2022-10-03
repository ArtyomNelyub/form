import { useState } from 'react';

export default function useInput(initial, required) {
  const [value, setValue] = useState(initial);
  const [isError, setIsError] = useState(false);

  return {
    setIsError,
    setValue,
    value,
    isError,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      !e.target.value && required
        ? setIsError(true)
        : setIsError(false);
    },
  };
}
