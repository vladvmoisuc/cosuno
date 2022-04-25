const express = require('express');
const companies = require('./companies');
const router = express.Router();

router.use('/companies', companies);

module.exports = router;
