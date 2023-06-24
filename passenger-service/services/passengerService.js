const uuid = require('uuid');
const customResourceResponse = require('../utils/constants');

class PassengerService {
  constructor(passengerRepo) {
    this.passengerRepo = passengerRepo;
  }

  async addPassenger(req) {
    const {
      firstName,
      lastName, 
      address,
      cin,    
      telephoneNumber,
      email,
      birthDate

    } = req.body;
    const uuidV4 = uuid.v4();
    const response = {};
console.log(  firstName,
  lastName, 
  address,
  cin,    
  telephoneNumber,
  email,
  birthDate)
    if (!firstName || !lastName || !address || !cin ||  !telephoneNumber || !email || !birthDate ) {
      response.message = customResourceResponse.reqValidationError.message;
      response.statusCode = customResourceResponse.reqValidationError.statusCode;
      return response;
    }
    
    const passenger = await this.passengerRepo.addPassenger(uuidV4, firstName,
      firstName,
      lastName, 
      address,
      cin,    
      telephoneNumber,
      email,
      birthDate
);

    if (!passenger) {
      response.message = customResourceResponse.serverError.message;
      response.statusCode = customResourceResponse.serverError.statusCode;
      return response;
    }
    response.message = customResourceResponse.reqCreated.message;
    response.statusCode = customResourceResponse.reqCreated.statusCode;
    response.data = passenger;
    return response;
  }

  async getPassengers(req) {
    const response = {};

    const passengers = await this.passengerRepo.getPassengers();

    if (!passengers) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = passengers;
    return response;
  }

  async getPassengerById(req) {
    const response = {};
    const { uuid } = req.params;

    const passenger = await this.passengerRepo.getPassengerById(uuid);
    if (!passenger) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = passenger;
    return response;
  }

  async updatePassengerById(req) {
    const { name,  telephoneNumber, address } = req.body;
    const response = {};
    const { uuid } = req.params;

    const updatedPassenger = await this.passengerRepo.updatePassengerById(uuid, name, telephoneNumber, address);
    if (!updatedPassenger) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = updatedPassenger;
    return response;
  }

  async deletePassengerById(req) {
    const response = {};
    const { uuid } = req.params;

    const deletedPassenger = await this.passengerRepo.deletePassengerById(uuid);
    if (!deletedPassenger) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    return response;
  }
}

module.exports = {
  PassengerService,
};
