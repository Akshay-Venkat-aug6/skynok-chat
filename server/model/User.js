var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true
    },
    email: {
      unique: true,
      type: String,
      trim: true
    },
    password: {
      type: String,
      trim: true
    },
    status:{
      type: String,
      enum: ['online', 'offline']
    }
  },
  { timestamps: true }
);

var User = mongoose.model("user", userSchema);

module.exports = User;
