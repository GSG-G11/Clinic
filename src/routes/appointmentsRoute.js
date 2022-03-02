const appointmentsRouter = require('express').Router();

const {appointmentPage } = require('../controllers');

appointmentsRouter.get('/', appointmentPage);

module.exports = appointmentsRouter;
