import express from 'express';
import { addIncome, getIncome } from '../controllers/incomeController.js';

const router = express.Router();

// Define routes
router.post('/add', addIncome);
router.get('/:userId', getIncome);

export default router;
