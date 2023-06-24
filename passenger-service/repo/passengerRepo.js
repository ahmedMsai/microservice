class PassengerRepository {
  constructor(passengerModel) {
    this.passengerModel = passengerModel;
  }

  addPassenger(
    firstName,
    lastName,
    address,
    cin,
    telephoneNumber,
    email,
    birthDate
  ) {
    return this.passengerModel.create({
      firstName,
      lastName,
      address,
      cin,
      telephoneNumber,
      email,
      birthDate
    });
  }

  getPassengers() {
    return this.passengerModel.find();
  }

  getPassengerById(uuid) {
    return this.passengerModel.findOne({ uuid });
  }

  updatePassengerById(uuid, name, mobile, address) {
    return this.passengerModel.findOneAndUpdate(
      { uuid },
      {
        $set: { name, mobile, address }
      },
      { new: true }
    );
  }

  deletePassengerById(uuid) {
    return this.passengerModel.findOneAndDelete({ uuid });
  }
}

module.exports = {
  PassengerRepository
};
