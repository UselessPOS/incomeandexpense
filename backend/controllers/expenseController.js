import { sql } from '../models/db.js'; // Use ES module syntax for imports

// Add Expense Controller
export const addExpense = async (req, res) => {
  const { userId, amount, date, category } = req.body;
  try {
    // Insert a new expense into the database and return the inserted row
    const result = await sql`INSERT INTO expenses (user_id, amount, date, category) 
                             VALUES (${userId}, ${amount}, ${date}, ${category}) 
                             RETURNING *`;

    // Respond with the newly added expense
    res.status(201).json(result[0]);  // Accessing the first row of the result
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Error adding expense' });
  }
};

// Get Expenses Controller
export const getExpenses = async (req, res) => {
  const { userId } = req.params;
  try {
    // Fetch all expenses for the given user from the database
    const result = await sql`SELECT * FROM expenses WHERE user_id = ${userId}`;

    // Respond with the list of expenses
    res.status(200).json(result); // 'result' is already an array of rows
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Error retrieving expenses' });
  }
};

