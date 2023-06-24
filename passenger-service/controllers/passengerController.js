const { PassengerService } = require("../services/passengerService");
const { PassengerRepository } = require("../repo/passengerRepo");
const PassengerModel = require("../models/passenger");
const passengerRepository = new PassengerRepository(PassengerModel);

const passengerService = new PassengerService(passengerRepository);


exports.addPassenger = async (req, res, next) => {
  try {
    const response = await passengerService.addPassenger(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getPassengers = async (req, res, next) => {
  try {
    const response = await passengerService.getPassengers(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getPassengerById = async (req, res, next) => {
  try {
    const response = await passengerService.getPassengerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.updatePassengerById = async (req, res, next) => {
  try {
    const response = await passengerService.updatePassengerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.deletePassengerById = async (req, res, next) => {
  try {
    const response = await passengerService.deletePassengerById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
