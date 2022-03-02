const connection = require('../config/connection');

const getPatientId = (name) => {
  return connection
    .query(`SELECT * from patients WHERE full_name=$1 ;`, [name])
    .then((data) => data.rows[0].id);
};

module.exports = getPatientId;
