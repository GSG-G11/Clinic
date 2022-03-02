const { addAppointment, getPatientId } = require('../database/queries');

const postData = (req, res, next) => {
  const { name, date, time } = req.body;
  console.log(date);

  return getPatientId(name)
    .then((data) => {
      console.log('data', data);
      return addAppointment(date, time, data);
    })
    .then(() => res.json('sent'))
    .catch((err) => next(err));
};
module.exports = postData;
