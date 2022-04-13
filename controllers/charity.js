const myUser = require("../models/user");
const myEvent = require("../models/event");
const myChatting = require("../models/chatting");

//#region show path="/"
exports.main = (req, res, next) => {
    res.render("main", {
        pageTitle: "Philanthropic",
        path: "/"
    });
}
//#endregion

//#region get path="/aboutUs"
exports.aboutUs = (req, res, next) => {
    res.render("aboutUs", {
        pageTitle: "About Us",
        path: "/aboutUs"
    })
}
//#endregion

//#region get path="/donation"
exports.donation = (req, res, next) => {
    res.render("donation", {
        pageTitle: "Donation",
        path: "/eventDonation"
    })
}
//#endregion