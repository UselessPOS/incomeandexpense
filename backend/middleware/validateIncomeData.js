const validateIncomeData = (req, res, next) => {
    const { userId, amount, date, category } = req.body;
  
    if (!userId || !amount || !date || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
  
    // Proceed if validation passes
    next();
  };
  
  export default validateIncomeData;
  