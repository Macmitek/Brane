import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:37017/CRMdb', {
  useNewUrlparser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express server running at PORT :${PORT}`);
});

app.listen(PORT, () => {
  console.log(`your server is running at ${PORT}`);
});
