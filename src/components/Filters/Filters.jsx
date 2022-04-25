import React from 'react';

import { FILTERS } from '../../constants/values';

import './styles.scss';

const Filters = ({ filters = [], onChange, onReset }) => {
  const handleChange = (event) => {
    onChange(event.target.name);
  };

  return (
    <div className="filters">
      <span className="filters_category">Specialities: </span>
      {filters.map(({ name, checked }) => (
        <label
          key={name}
          className={`filters_checkbox filters_checkbox__${
            checked ? 'checked' : 'unchecked'
          }`}
        >
          {name}
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
          />
        </label>
      ))}
      <button className="button__text-only" onClick={onReset}>
        {FILTERS.RESET}
      </button>
    </div>
  );
};

export default Filters;
