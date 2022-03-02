const getDataQuery = require('./getDataQuery');
const getPatientId = require('./getUserId');
const addAppointment = require('./postAppointmentQuery');
const addPatient = require('./postUserQuery');

module.exports = { getDataQuery, addPatient, addAppointment, getPatientId };
