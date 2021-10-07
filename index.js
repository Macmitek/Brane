import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(`Node and express server running at PORT :${PORT}`);
});

app.listen(PORT, () => {
  console.log(`your server is running at ${PORT}`);
});
