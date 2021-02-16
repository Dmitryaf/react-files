import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isTouch, setTouch] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouch(true);
  };

  return {
    value,
    isTouch,
    onChange,
    onBlur,
    ...valid,
  };
};
