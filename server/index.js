const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const port = process.env.PORT || 2000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});