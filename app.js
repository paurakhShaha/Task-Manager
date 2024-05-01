const express = require('express');
const app = express();
const tasksRouter = require('./Routers/tasks');
require('dotenv').config();
const notFound = require('./middleware/err');
const connectDb = require('./db/connection');
const errorHandlerMiddleware = require("./middleware/errorHandelr")





//
app.use(express.static('public'));
app.use(express.json());//json data
app.use(express.urlencoded({extended:false}) );//form data
app.use('/api/v1/tasks',tasksRouter);
app.use(notFound);
app.use(errorHandlerMiddleware)

const port  = 5000


const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}



start();