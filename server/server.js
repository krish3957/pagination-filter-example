const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');
const dbConnect = require("./dbConnect");
app.use(express.json());
const movieRoutes = require('./routes/movie');
app.use(cors());

dbConnect();

const port = process.env.PORT || 5000;
app.use("/api",movieRoutes);

app.listen(port,()=> console.log(`App is running on port ${port}`));