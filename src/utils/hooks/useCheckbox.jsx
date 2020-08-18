import { useState } from 'react';

const useCheckbox = (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const setWrap = ({ target: { checked } }) => setInput(checked);

  return [input, { set: setInput, setWrap }];
};

export default useCheckbox;
