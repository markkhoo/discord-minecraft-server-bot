import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  // You can add custom checks for your application here
  // For example, check the connection to a database or other services

  // If everything is OK, return a 200 status code and a JSON response
  res.status(200).json({ status: 'OK' });
});

export default app;