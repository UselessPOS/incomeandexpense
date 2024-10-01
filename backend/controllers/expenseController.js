
const db = require('../models/db');

exports.addExpense = async (req, res) => {
  const { userId, amount, date, category } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO expenses (user_id, amount, date, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, amount, date, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error adding expense' });
  }
};

exports.getExpenses = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('SELECT * FROM expenses WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving expenses' });
  }
};
