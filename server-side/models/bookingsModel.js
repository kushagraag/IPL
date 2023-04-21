const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  match: {
    type: mongoose.Schema.ObjectId,
    ref: "matches",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },
  transactionId:{
    type:String,
    required:true
  }
},{
    timestamps:true,
});

module.exports = mongoose.model("bookings",bookingSchema)

