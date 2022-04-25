import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Filters from '../../components/Filters/Filters';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Table from '../../components/Table/Table';

import { HOMEPAGE } from '../../constants/values';

import './styles.scss';

const getFilters = (companies) => {
  const { list } = companies.reduce(
    (data, company) => {
      company.specialities.forEach((speciality) => {
        if (data.tracker[speciality] === undefined) {
          data.tracker[speciality] = false;

          data.list.push({ name: speciality, checked: true });
        }
      });

      return data;
    },
    { tracker: {}, list: [] }
  );

  return list;
};

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const getAndSetCompanies = async (searchQuery = '') => {
    const { data: companies } = await axios.get('/api/companies', {
      params: { searchQuery },
    });

    setCompanies(companies);

    return companies;
  };

  useEffect(() => {
    const onLoad = async () => {
      const companies = await getAndSetCompanies();

      setFilters(getFilters(companies));
    };

    onLoad();
  }, []);

  useEffect(() => {
    const activeFilters = filters.filter(({ checked }) => checked);

    const filteredCompanies = companies.filter(({ specialities }) => {
      return activeFilters.some(({ name }) =>
        specialities.join(', ').includes(name)
      );
    });

    setFilteredCompanies(filteredCompanies);
  }, [filters, companies]);

  const handleFilterChange = (name) => {
    setFilters(
      filters.map((filter) => {
        if (filter.name === name) {
          return {
            ...filter,
            checked: !filter.checked,
          };
        }

        return filter;
      })
    );
  };

  const handleFilterReset = () => {
    setFilters(filters.map((filter) => ({ ...filter, checked: true })));
  };

  return (
    <>
      <main className="companies container">
        <Heading>{HOMEPAGE.TITLE}</Heading>
        <Input
          placeholder={HOMEPAGE.SEARCH_PLACEHOLDER}
          onType={getAndSetCompanies}
        />
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleFilterReset}
        />
        <p className="paragraph">
          {HOMEPAGE.RESULTS_COUNT(filteredCompanies.length)}
        </p>
        <Table rows={filteredCompanies} />
      </main>
    </>
  );
};

export default Home;
