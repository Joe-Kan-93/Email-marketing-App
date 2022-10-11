const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client form schema structure
const clientSchema = new Schema(
  {
    fullName: {
      type: String,
      // unique: true,
      required: true,
      uppercase: true
    },

    email: {
      type: String,
      // unique: true,
      required: true,
      trim: true
    },

    video: {
      type: String,
      // unique: true,
      required: true
    },

    firstDate: {
      type: String,
      required: true
    },
    firstDateEmail: {
      type: String,
      required: true
    },
    firstDateEvent: {
      type: String,
      required: true
    },

    secondDate: {
      type: String,
      required: true
    },
    secondDateEmail: {
      type: String,
      required: true
    },
    secondDateEvent: {
      type: String,
      required: true
    },

    created: Date
  }
);

module.exports = mongoose.model("Client", clientSchema);
