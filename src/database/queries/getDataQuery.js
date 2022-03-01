const connection = require('../config/connection');

const getDataQuery = () => {
  return connection.query(
    `SELECT patients.full_name, patients.phone_number, patients.address, appointments.date, appointments.time   FROM patients INNER JOIN appointments ON patients.id=appointments.patient_id;`
  );
};

module.exports = getDataQuery;
