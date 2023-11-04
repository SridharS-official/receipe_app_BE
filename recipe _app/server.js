const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
const receipeApi = require('./Routes/recipeRoute')

app.use(express.json());

app.use('/api',receipeApi);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
