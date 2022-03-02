const getPatientQuery = require('../database/queries/getPatientQuery');

const getPatient = (req, res) => {
  getPatientQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => res.status(500).json({ err: 'database error' }));
};
module.exports = getPatient;
