const { getDataQuery } = require('../database/queries');

const getData = (req, res) => {
  getDataQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => res.status(500).json({ err: 'database error' }));
};
module.exports = getData;
