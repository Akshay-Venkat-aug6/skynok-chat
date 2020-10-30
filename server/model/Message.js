var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messageSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      trim: true
    },
    to: {
      type: Schema.Types.ObjectId,
      trim: true
    },
    message: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

var Message = mongoose.model("message", messageSchema);

module.exports = Message;
