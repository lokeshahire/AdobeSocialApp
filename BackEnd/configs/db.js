const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = mongoose.connect(
  "mongodb+srv://lokesh:ahire@cluster0.entjnlc.mongodb.net/AbodeAssignment?retryWrites=true&w=majority"
);

module.exports = {
  dbConnection,
};
