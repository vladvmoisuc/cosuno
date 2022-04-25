import React, { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

import './styles.scss';

const Input = ({ placeholder, onType }) => {
  const handleType = ({ target: { value } }) => {
    onType(value);
  };

  const handleChange = useMemo(() => debounce(handleType, 500), []);

  useEffect(() => {
    return () => {
      handleChange.cancel();
    };
  });

  return (
    <input
      className="input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
