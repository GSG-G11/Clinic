const express = require('express');
const { notFound, serverError } = require('./controllers');
const appointmentsRouter = require('./routes/appointmentsRoute');
const getRouter = require('./routes/getDataRoute');
const postRoute = require('./routes/postDataRoute');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/getData', getRouter);
app.use('/postData', postRoute);
app.use ('/appointments',appointmentsRouter)
app.use(notFound);
app.use(serverError);

module.exports = app;
