const express = require('express');
const { notFound, serverError } = require('./controllers');
const { addPatient } = require('./database/queries');
const getPatientQuery = require('./database/queries/getPatientQuery');
const {
  getRouter,
  postRoute,
  appointmentsRouter,
  postPatientRoute,
  getPatientRoute,
} = require('./routes');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/getData', getRouter);
app.use('/postData', postRoute);

app.use('/postPatient', (req, res, next) => {
  const { name, phone, address } = req.body;

  addPatient(name, phone, address)
    .then(() => res.send('success'))
    .catch((err) => next(err));
});
app.use('/getPatient', (req, res) => {
  getPatientQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => res.status(500).json({ err: 'database error' }));
});

app.use('/appointments', appointmentsRouter);
app.use(notFound);
app.use(serverError);

module.exports = app;
