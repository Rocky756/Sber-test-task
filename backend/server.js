const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const connect = require('./db/connect');
const http = require('http')
const cors = require("cors");
const workersRouter = require('./routes/workers');

const app = express();;

connect.connect();


app.use(cors());

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());


app.use('/tab', workersRouter)

// app.use('*', (req, res, next) => {
//   // console.log('jere')
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });


app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`)
})

