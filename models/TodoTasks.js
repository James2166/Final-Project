const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("todoTask", todoTaskSchema);
