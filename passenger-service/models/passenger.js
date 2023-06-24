const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PassengerSchema = new Schema({
  firstName: String,
  lastName: String, 
  address:String,
  cin:  String,    
  telephoneNumber: String,
  email: String,
  birthDate:  Date
});

const passenger = mongoose.model('Passenger', PassengerSchema);

module.exports = passenger;
