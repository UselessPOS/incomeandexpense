
const db = require('../models/db');

exports.getReport = async (req, res) => {
  const { userId, startDate, endDate } = req.query;
  try {
    const incomeResult = await db.query(
      'SELECT SUM(amount) AS total_income FROM income WHERE user_id = $1 AND date BETWEEN $2 AND $3',
      [userId, startDate, endDate]
    );
    
    const expenseResult = await db.query(
      'SELECT SUM(amount) AS total_expenses FROM expenses WHERE user_id = $1 AND date BETWEEN $2 AND $3',
      [userId, startDate, endDate]
    );
    
    res.status(200).json({
      total_income: incomeResult.rows[0].total_income,
      total_expenses: expenseResult.rows[0].total_expenses,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error generating report' });
  }
};
