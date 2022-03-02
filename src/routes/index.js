const appointmentsRouter = require('./appointmentsRoute');
const getRouter = require('./getDataRoute');
const postRoute = require('./postDataRoute');
const getPatientRoute = require('./postPatientRoute');
const postPatientRoute = require('./postPatientRoute');

module.exports = {
  getRouter,
  postRoute,
  appointmentsRouter,
  postPatientRoute,
  getPatientRoute,
};
