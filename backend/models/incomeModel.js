
const db = require('./db');

const Income = {
  create: async (userId, amount, date, category) => {
    const result = await db.query(
      'INSERT INTO income (user_id, amount, date, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, amount, date, category]
    );
    return result.rows[0];
  },

  findByUserId: async (userId) => {
    const result = await db.query('SELECT * FROM income WHERE user_id = $1', [userId]);
    return result.rows;
  },

  update: async (id, amount, date, category) => {
    const result = await db.query(
      'UPDATE income SET amount = $1, date = $2, category = $3 WHERE id = $4 RETURNING *',
      [amount, date, category, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM income WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Income;
