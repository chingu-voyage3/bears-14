const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');

const app = express();

// initialize cookies, stores for 2 days
app.use(cookieSession({
  maxAge: 2 * 24 * 3600 * 1000,
  keys: [keys.cookieKey]
}));

// populate req.body with form data
app.use(bodyParser.json());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/auth', authRoutes);

// serve react assests when in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // express will server up index.html for any route it doesn't understand
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
