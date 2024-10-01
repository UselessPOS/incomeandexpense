// routes/incomeRoutes.js
const express = require('express');
const { addIncome, getIncome } = require('../controllers/incomeController');
const router = express.Router();

router.post('/add', addIncome);
router.get('/:userId', getIncome);

module.exports = router;
