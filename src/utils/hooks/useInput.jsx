import React, { useState } from 'react';

const useInput = (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const setWrap = ({ target: { value } }) => setInput(value);

  return [input, { set: setInput, setWrap }];
};

export default useInput;
