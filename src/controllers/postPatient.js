const { addPatient } = require('../database/queries');

const postPatient = (req, res, next) => {
  const { name, phone, address } = req.body;
  addPatient(name, phone, address)
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
};
module.exports = postPatient;
