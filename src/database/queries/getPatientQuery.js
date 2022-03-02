const connection = require('../config/connection');

const getPatientQuery = () => {
  return connection.query(`SELECT * from patients;`);
};

module.exports = getPatientQuery;
