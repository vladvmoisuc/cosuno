const express = require('express');
const router = express.Router();
const { getCompanies, getCompany } = require('../controllers/companies');

router.get('/', getCompanies);
router.get('/:path', getCompany);

module.exports = router;
