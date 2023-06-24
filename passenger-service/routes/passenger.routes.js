const express = require('express');

const router = express.Router();
const controller = require("../controllers/passengerController");
router.post('/passengers', controller.addPassenger);
router.get('/passengers', controller.getPassengers);
router.get('/passengers/:id', controller.getPassengerById);
router.put('/passengers/:id', controller.updatePassengerById);
router.delete('/passengers/:id', controller.deletePassengerById);

module.exports = router;


