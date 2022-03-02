const connection = require('../config/connection');

const addAppointment = (date, time, patientId) => {
  return connection.query({
    text: `INSERT INTO appointments (date,time,patient_id) VALUES ($1,$2,$3);`,
    values: [date, time, patientId],
  });
};
module.exports = addAppointment;
