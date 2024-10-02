import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import incomeRoutes from './routes/incomeRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

import requestLogger from './middleware/requestLogger.js';
import corsMiddleware from './middleware/corsMiddleware.js';
import authMiddleware from './middleware/authMiddleware.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Apply global middleware
app.use(express.json());
app.use(requestLogger);
app.use(corsMiddleware);

// Routes requiring authentication
app.use('/api/income', authMiddleware, incomeRoutes);
app.use('/api/expenses', authMiddleware, expenseRoutes);

// Routes without authentication
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', reportRoutes);

// Error handling middleware (should be applied after all routes)
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
