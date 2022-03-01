const getRouter = require('express').Router();

const { getData } = require('../controllers');

getRouter.get('/', getData);

module.exports = getRouter;
