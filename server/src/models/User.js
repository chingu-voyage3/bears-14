const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
  avatar: String,
  email: String
});

mongoose.model('User', userSchema);
