const path = require('path');

const appointmentPage = (req, res) => {
  const file = path.join(__dirname, '..', '..', 'public/html/appointments.html');
  res.sendFile(file);
};
module.exports = appointmentPage;