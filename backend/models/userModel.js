import { sql } from './db.js'; // Use ES module import

const User = {
  // Create a new user in the database
  create: async (name, email, hashedPassword) => {
    try {
      const result = await sql`INSERT INTO users (name, email, password) 
                               VALUES (${name}, ${email}, ${hashedPassword}) 
                               RETURNING id, name, email`;
      return result[0]; // Return the created user (first row)
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Error creating user');
    }
  },

  // Find a user by email in the database
  findByEmail: async (email) => {
    try {
      const result = await sql`SELECT * FROM users WHERE email = ${email}`;
      return result[0]; // Return the first matched user
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw new Error('Error finding user by email');
    }
  },

  // Find a user by ID in the database
  findById: async (id) => {
    try {
      const result = await sql`SELECT * FROM users WHERE id = ${id}`;
      return result[0]; // Return the user found by ID
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw new Error('Error finding user by ID');
    }
  },
};

export default User;
