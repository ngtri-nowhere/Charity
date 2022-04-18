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

//#region get path="/createEvent"
exports.createEvent = (req, res, next) => {
    res.render("createEvent", {
        pageTitle: "Create Event",
        path: "/createEvent"
    });
}
//#endregion

//#region get path="/historyEvent"
exports.historyEvent = (req, res, next) => {
    res.render("historyEvent", {
        pageTitle: "History Event",
        path: "/historyEvent"
    })
}
//#endregion