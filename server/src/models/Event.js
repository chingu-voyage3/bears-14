const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Event requires a name'
  },
  description: String,
  date: Date,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'Coordinates are required'
    }],
    address: {
      type: String,
      required: 'Address is required!'
    }
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  volunteers: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
}, 
  { timestamps: true }
);

mongoose.model('Event', eventSchema);
