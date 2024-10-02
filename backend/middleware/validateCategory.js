const validateCategory = (req, res, next) => {
    const { categoryName, type } = req.body;
    const validTypes = ['income', 'expense'];
  
    if (!categoryName || !type || !validTypes.includes(type)) {
      return res.status(400).json({ error: 'Invalid category data' });
    }
  
    next();
  };
  
  export default validateCategory;
  