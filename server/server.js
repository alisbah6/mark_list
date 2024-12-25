const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const connectDB = require("./connect");
const allRoutes = require('./routes/allroutes');
app.use('/api',allRoutes);

const PORT = 3200;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`server running on port ${PORT}`);

  } catch (err) {
    console.log("something went wrong ");
    process.exit(1);
  }
})