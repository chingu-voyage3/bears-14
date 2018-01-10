// run db config file
require('./config/db');

// import passport setup
require('./services/passport');

const app = require('./app');

// import mock data to populate database comment out in production
const mocks = require('./mocks');

const PORT = process.env.PORT || 5000;

// listen on port
// mocks().then(() => {
  app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));
// });
