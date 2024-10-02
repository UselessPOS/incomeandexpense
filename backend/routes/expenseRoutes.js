import express from 'express';
import { addExpense, getExpenses } from '../controllers/expenseController.js';

const router = express.Router();

// Define routes
router.post('/add', addExpense);
router.get('/:userId', getExpenses);

export default router;