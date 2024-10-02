import { sql } from './db.js'; // Use ES module syntax for database

const Income = {
  // Create a new income record
  create: async (userId, amount, date, category) => {
    try {
      const result = await sql`INSERT INTO income (user_id, amount, date, category) 
                               VALUES (${userId}, ${amount}, ${date}, ${category}) 
                               RETURNING *`;
      return result[0];  // Return the created income record
    } catch (error) {
      console.error('Error creating income:', error);
      throw new Error('Error creating income');
    }
  },

  // Find all income records for a specific user
  findByUserId: async (userId) => {
    try {
      const result = await sql`SELECT * FROM income WHERE user_id = ${userId}`;
      return result;  // Return all income records for the user
    } catch (error) {
      console.error('Error finding income by user ID:', error);
      throw new Error('Error finding income by user ID');
    }
  },

  // Update an income record
  update: async (id, amount, date, category) => {
    try {
      const result = await sql`UPDATE income 
                               SET amount = ${amount}, date = ${date}, category = ${category} 
                               WHERE id = ${id} 
                               RETURNING *`;
      return result[0];  // Return the updated income record
    } catch (error) {
      console.error('Error updating income:', error);
      throw new Error('Error updating income');
    }
  },

  // Delete an income record
  delete: async (id) => {
    try {
      const result = await sql`DELETE FROM income WHERE id = ${id} 
                               RETURNING *`;
      return result[0];  // Return the deleted income record
    } catch (error) {
      console.error('Error deleting income:', error);
      throw new Error('Error deleting income');
    }
  },
};

export default Income;
