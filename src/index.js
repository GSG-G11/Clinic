const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('this app works on http://localhost:3000');
});
