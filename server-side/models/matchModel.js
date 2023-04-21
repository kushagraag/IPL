const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema({
  number: {
    type: String,
    require: true,
  },
  capacity: {
    type: String,
    require: true,
  },
  team1: {
    type: String,
    require: true,
  },
  team2: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  fare: {
    type: String,
    require: true,
  },
  seatBooked: {
    type: Array,
    default: [],
  },
  seatsAvailable: {
    type: String,
    default: "Yet to start",
  },
});

module.exports = mongoose.model("matches", matchSchema);
