import { sql } from './db.js'; // Use ES module syntax

const Expense = {
  // Create a new expense record
  create: async (userId, amount, date, category) => {
    try {
      const result = await sql`INSERT INTO expenses (user_id, amount, date, category) 
                               VALUES (${userId}, ${amount}, ${date}, ${category}) 
                               RETURNING *`;
      return result[0]; // Return the newly created expense
    } catch (error) {
      console.error('Error creating expense:', error);
      throw new Error('Error creating expense');
    }
  },

  // Find all expenses for a specific user
  findByUserId: async (userId) => {
    try {
      const result = await sql`SELECT * FROM expenses WHERE user_id = ${userId}`;
      return result; // Return all expenses for the user
    } catch (error) {
      console.error('Error finding expenses by user ID:', error);
      throw new Error('Error finding expenses by user ID');
    }
  },

  // Update an expense record
  update: async (id, amount, date, category) => {
    try {
      const result = await sql`UPDATE expenses 
                               SET amount = ${amount}, date = ${date}, category = ${category} 
                               WHERE id = ${id} 
                               RETURNING *`;
      return result[0]; // Return the updated expense
    } catch (error) {
      console.error('Error updating expense:', error);
      throw new Error('Error updating expense');
    }
  },

  // Delete an expense record
  delete: async (id) => {
    try {
      const result = await sql`DELETE FROM expenses WHERE id = ${id} 
                               RETURNING *`;
      return result[0]; // Return the deleted expense
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw new Error('Error deleting expense');
    }
  },
};

export default Expense;
