const passport = require('passport');
const router = require('express').Router();

const requireLogin = require('../middlewares/requireLogin');

// google authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// google authentication callback route
router.get('/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);

// logout user
router.get('/logout', requireLogin, (req, res) => {
  req.logout();
  res.redirect('/');
});

// get user info
router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
