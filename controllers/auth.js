const myUser = require("../models/user");
const myEvent = require("../models/event");
const myChatting = require("../models/chatting");

//#region show get path="/signIn"
exports.signIn = (req, res, next) => {
    res.render("singIn", {
        pageTitle: "Sign In",
        path: "/signIn"
    });
}
//#endregion

//#region get path="/signUp" 
exports.signUp = (req, res, next) => {
    res.render("signUp", {
        pageTitle: "Sign Up",
        path: "/signUp"
    })
}
//#endregion

