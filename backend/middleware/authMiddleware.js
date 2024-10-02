import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token (assuming you're using JWT)
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

export default authMiddleware;
