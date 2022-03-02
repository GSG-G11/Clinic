const getPatientRoute = require('express').Router();
const { postPatient } = require('../controllers');

getPatientRoute.post('/', postPatient);
module.exports = getPatientRoute;
