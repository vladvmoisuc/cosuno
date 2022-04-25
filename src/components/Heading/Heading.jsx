import React from 'react';

import './styles.scss';

const Heading = ({ level = 1, children }) => {
  return React.createElement(`h${level}`, { className: 'heading' }, children);
};

export default Heading;
