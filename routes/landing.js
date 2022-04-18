const express = require('express');

const router = express.Router();

const charity = require("../controllers/charity");

const auth = require("../controllers/auth");

//chưa có isAuth

//get  Main
router.get("/", charity.main);

//get About Us
router.get("/aboutUs", charity.aboutUs);

//get Donation
router.get("/eventDonation", charity.donation);

//get Create Event
router.get("/createEvent", charity.createEvent);

//get History Event
router.get("/historyEvent", charity.historyEvent)

//get auth
router.get("/signIn", auth.signIn);
router.get("/signUp", auth.signUp);

module.exports = router;