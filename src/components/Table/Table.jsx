import React from 'react';
import { Link } from 'react-router-dom';
import { TABLE_HEADINGS } from '../../constants/values';
import './styles.scss';

const generateURL = (name) =>
  `/companies/${encodeURIComponent(name.split(' ').join('-').toLowerCase())}`;

const Table = ({ rows = [] }) => {
  return (
    <table className="table">
      <thead className="table_head">
        <tr className="table_row">
          {TABLE_HEADINGS.map(({ title }) => (
            <th className="table_heading" key={title}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table_body">
        {rows.map(({ name, logo, specialities, city, id }, index) => (
          <tr className="table_row" key={id}>
            <td className="table_cell">
              <Link to={generateURL(name)}>{`${index + 1}. ${name}`}</Link>
            </td>
            <td className="table_cell">
              <img src={logo} />
            </td>
            <td className="table_cell">{specialities.join(', ')}</td>
            <td className="table_cell">{city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
