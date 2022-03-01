const express = require('express');
const { notFound, serverError } = require('./controllers');
const getRouter = require('./routes/getDataRoute');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/getData', getRouter);

app.use(notFound);
app.use(serverError);
module.exports = app;
