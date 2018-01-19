const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 4001;

const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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
app.use('/api', apiRoutes);

// serve react assests when in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // express will server up index.html for any route it doesn't understand
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

io.on("connection", (socket) => {
	console.log(socket.id);

	socket.on('SEND_MESSAGE', function(data) {
		io.emit('RECEIVE_MESSAGE', data);
	})

	socket.on("disconnect", () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
