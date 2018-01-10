const router = require('express').Router();
const mongoose = require('mongoose');

const Event = mongoose.model('Event');

const requireLogin = require('../middlewares/requireLogin');

// get all events
router.get('/events', async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (e) {
    next(e);
  }
})

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
