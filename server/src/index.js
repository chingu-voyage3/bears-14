// run db config file
require('./config/db');

// import passport setup
require('./services/passport');

const app = require('./app');

// import mock data to populate database comment out in production
const mocks = require('./mocks');

const PORT = process.env.PORT || 5000;

// function for initializing application
const initApp = () => {
  app.listen(PORT, () => {
    console.log(`Serving listening on port ${PORT}`);
  });
}

// only insert mocks when in development
// change this after CRUD of event is completed
if (process.env.NODE_ENV === 'production') {
  initApp();
} else {
  mocks().then(initApp)
}
