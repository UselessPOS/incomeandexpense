import { sql } from '../models/db.js'; // Import your database instance

export const addIncome = async (req, res) => {
  const { userId, amount, date, category } = req.body;
  try {
    // Insert income into the database
    const result = await sql`INSERT INTO income (user_id, amount, date, category) 
                             VALUES (${userId}, ${amount}, ${date}, ${category}) RETURNING *`;

    // Respond with the newly added income record
    res.status(201).json(result[0]);  // Access the first (and likely only) row returned
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding income' });
  }
};

export const getIncome = async (req, res) => {
  const { userId } = req.params;
  try {
    // Retrieve income records for the user
    const result = await sql`SELECT * FROM income WHERE user_id = ${userId}`;

    // Respond with the income records
    res.status(200).json(result); // 'result' is already an array
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving income' });
  }
};

