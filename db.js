
const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
// const mongoURL= 'mongodb+srv://rahulberojya06082002:Rahul123@cluster0.fibrgbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoURL= process.env.MONGODB_URL_LOCAL;
const mongoURL= process.env.MONGODB_URL;; 
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("mongodb connected");
});
db.on('error', (err) => {
  console.log("mongodb connection error", err);
});
db.on('disconnected', () => {
  console.log("mongodb disconnected");
});

module.exports = db;
