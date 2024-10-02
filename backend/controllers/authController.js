import bcrypt from 'bcryptjs';
import { sql } from '../models/db.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await sql`INSERT INTO users (name, email, password) VALUES(${name}, ${email}, ${hashedPassword})`;

    // Respond with success status
    res.status(201).json({ message: 'success' });

  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Fetch the user from the database
    const result = await sql`SELECT * FROM users WHERE email = ${email}`;
    const user = result[0];  // Accessing the first row

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Return user data upon successful login
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in user' });
  }
};
