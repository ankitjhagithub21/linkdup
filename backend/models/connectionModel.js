const { Schema, model } = require("mongoose");

const connectionSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending"
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

// Prevent duplicate invites (either direction)
connectionSchema.index(
  { sender: 1, receiver: 1 },
  { unique: true }
);
connectionSchema.index(
  { receiver: 1, sender: 1 },
  { unique: true }
);

const Connection = model("Connection", connectionSchema);

module.exports = Connection;
