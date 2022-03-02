const connection = require('../config/connection');

const addPatient = (name, phone, address) => {
  return connection.query({
    text: `INSERT INTO patients (full_name,phone_number,address) VALUES ($1,$2,$3) RETURNING id;`,
    values: [name, phone, address],
  });
};
module.exports = addPatient;
