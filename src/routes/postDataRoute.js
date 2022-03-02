const postRoute = require('express').Router();

const postData = require('../controllers/postData');

postRoute.post('/', postData);

module.exports = postRoute;
