const mongoose = require("mongoose");

module.exports = () => mongoose.connect("mongodb+srv://alibaba:alibaba_123@cluster0.dlnul.mongodb.net/AlibabaDB?retryWrites=true&w=majority")