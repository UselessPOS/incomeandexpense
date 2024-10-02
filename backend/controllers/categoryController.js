import { sql } from '../models/db.js'; // Use ES module syntax

// Add a new category
export const addCategory = async (req, res) => {
  const { userId, categoryName, type } = req.body;
  
  try {
    // Insert the category into the database
    const result = await sql`INSERT INTO categories (user_id, category_name, type) 
                             VALUES (${userId}, ${categoryName}, ${type}) 
                             RETURNING *`;
    
    // Return the newly created category
    res.status(201).json(result[0]); // Access the first row (the inserted category)
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'Error adding category' });
  }
};

// Get all categories for a user
export const getCategories = async (req, res) => {
  const { userId } = req.params;

  try {
    // Retrieve categories for the given user ID
    const result = await sql`SELECT * FROM categories WHERE user_id = ${userId}`;
    
    // Return the list of categories
    res.status(200).json(result); // The result is already an array of categories
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ error: 'Error retrieving categories' });
  }
};
