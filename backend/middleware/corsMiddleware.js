import cors from 'cors';

const corsOptions = {
  origin: ['http://your-frontend-url.com'], // Replace with your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If you’re handling credentials (e.g., cookies)
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
