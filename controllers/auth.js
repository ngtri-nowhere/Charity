const { validationResult } = require('express-validator/check');

const myUser = require("../models/user");



//#region show get path="/signIn"
exports.signIn = (req, res, next) => {
    console.log(req.session.isLoggedIn);
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0]
    } else {
        message = null;
    }
    res.render("singIn", {
        pageTitle: "Sign In",
        path: "/signIn",
        errorMessage: message,
        oldInput: {
            email: "",
            password: "",
        },
        validationErrors: []
    });
}
//#endregion

//#region post path="/signIn"
exports.postSignIn = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('singIn', {
            pageTitle: "Sign In",
            path: "/signIn",
            errorMessaage: message,
            oldInput: {
                email: email,
                password: password,
            },
            validationErrors: errors.array()
        });
    }
    myUser.findOne({ email: email, password: password }).then(user => {
        console.log(user)
        if (!user) {
            return res.status(422).render("singIn", {
                path: "/signIn",
                pageTitle: "Sign In",
                errorMessage: 'Invalid email or password',
                oldInput: {
                    email: email,
                    password: password
                },
                validationErrors: []
            });
        }
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            console.log(err);
            res.redirect("/");
        }).catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        })
    })
}
//#endregion

//#region Post Sign Out
exports.signOut = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
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

