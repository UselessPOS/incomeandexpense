// routes/reportRoutes.js
const express = require('express');
const { getReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/report', getReport);

module.exports = router;
