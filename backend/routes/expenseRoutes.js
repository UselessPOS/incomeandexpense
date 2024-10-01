// routes/expenseRoutes.js
const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/:userId', getExpenses);

module.exports = router;
