import { sql } from '../models/db.js'; // Use ES module import

export const getReport = async (req, res) => {
  const { userId, startDate, endDate } = req.query;
  
  try {
    // Query for total income
    const incomeResult = await sql`SELECT SUM(amount) AS total_income 
                                   FROM income 
                                   WHERE user_id = ${userId} 
                                   AND date BETWEEN ${startDate} AND ${endDate}`;
    
    // Query for total expenses
    const expenseResult = await sql`SELECT SUM(amount) AS total_expenses 
                                    FROM expenses 
                                    WHERE user_id = ${userId} 
                                    AND date BETWEEN ${startDate} AND ${endDate}`;
    
    // Return the total income and expenses
    res.status(200).json({
      total_income: incomeResult[0]?.total_income || 0, // If no income, default to 0
      total_expenses: expenseResult[0]?.total_expenses || 0, // If no expenses, default to 0
    });
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ error: 'Error generating report' });
  }
};
