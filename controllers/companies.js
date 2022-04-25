const data = require('../data.json');

const getCompanies = async (req, res, _next) => {
  try {
    const { searchQuery } = req.query;
    const companies = data
      .map((company) => {
        if (company.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return company;
        }
      })
      .filter((company) => company);

    return res.json(companies);
  } catch (error) {
    res.status(500).send();
  }
};

const getCompany = async (req, res, _next) => {
  try {
    const company = data.filter(
      ({ name }) =>
        req.params.path ===
        encodeURIComponent(name.split(' ').join('-').toLowerCase())
    )[0];

    res.json(company);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  getCompanies,
  getCompany,
};
