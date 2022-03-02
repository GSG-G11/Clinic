const getPatient = require('../controllers/getPatient');

const getPatientRouter = require('express').Router();

getPatientRouter.get('/', getPatient);

module.exports = getPatientRouter;
