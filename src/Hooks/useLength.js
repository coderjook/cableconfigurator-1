import { useState } from "react";

export function useLength(defaultLength) {
  const [value, setValue] = useState(defaultLength || 1);

  function onChange(e) {
    if (!(+e.target.value >= 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}
