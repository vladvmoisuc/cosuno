import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

import Heading from '../../components/Heading/Heading';

const Company = () => {
  const [company, setCompany] = useState({
    name: '',
    city: '',
    specialities: [],
    logo: '',
  });
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const getCompany = async (company) => {
      try {
        const { data } = await axios.get(`/api/companies/${company}`);

        setCompany(data);
      } catch (error) {
        history.push('/not-found');
      }
    };

    getCompany(params.company);
  }, []);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <main className="container">
      <img src={company.logo} />
      <Heading>
        {company.name}, from {company.city}
      </Heading>
      <p className="paragraph">{company.specialities.join(', ')}</p>
      <button className="button" onClick={handleClick}>
        Go back to the homepage
      </button>
    </main>
  );
};

export default Company;
