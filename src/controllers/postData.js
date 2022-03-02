const { addPatient, addAppointment } = require('../database/queries');

const postData = (req, res, next) => {
  const { name, phone, address, date, time } = req.body;

  addPatient(name, phone, address)
    .then((data) => addAppointment(date, time, data.rows[0].id))
    .then(() => res.json('sent'))
    .catch((err) => next(err));
};
module.exports = postData;
