// controllers/categoryController.js
const db = require('../models/db');

exports.addCategory = async (req, res) => {
  const { userId, categoryName, type } = req.body; // type: 'income' or 'expense'
  try {
    const result = await db.query(
      'INSERT INTO categories (user_id, category_name, type) VALUES ($1, $2, $3) RETURNING *',
      [userId, categoryName, type]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error adding category' });
  }
};

exports.getCategories = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('SELECT * FROM categories WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving categories' });
  }
};
