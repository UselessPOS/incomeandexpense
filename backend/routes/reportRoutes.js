import express from 'express';
import { getReport } from '../controllers/reportController.js';

const router = express.Router();

// Define the route for getting the report
router.get('/report', getReport);

export default router;
