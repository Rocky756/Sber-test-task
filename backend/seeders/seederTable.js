const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const WorkerModel = require('../models/workerModel')
const connect = require('../db/connect');
const dbUrl = 'mongodb+srv://Rocky:1234@cluster0.ifkqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function main() {
  await mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const workers = [
  {
    name: "Владимир Маленков",
    dateBirth: new Date('1992-12-10T00:00:00'),
    salary: "30000р"
  },
  {
    name: "Светлана Тихоново",
    dateBirth: new Date('1996-09-04T00:00:00'),
    salary: "70000р"
  },
  {

    name: "Михайл Зубенко",
    dateBirth: new Date('1988-04-21T00:00:00'),
    salary: "300000р"
  },
  {
    name: "Марина Шарикова",
    dateBirth: new Date('1999-12-10T00:00:00'),
    salary: "100000р"
  }
]
await WorkerModel.insertMany(workers);
  await mongoose.disconnect();
}

main();
