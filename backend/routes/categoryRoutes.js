import express from 'express';
import { addCategory, getCategories } from '../controllers/categoryController.js';

const router = express.Router();

// Define routes for categories
router.post('/add', addCategory);
router.get('/:userId', getCategories);

export default router;
