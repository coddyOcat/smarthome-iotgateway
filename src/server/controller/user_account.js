const UserAccount = require("../model/user_account")

exports.signup = async (req, res, next) => {
    try {
        if(!req.body) {
            return res.status(400).json(
                {message: "Content can not be empty!"}
            )
        }
        var newUser = new UserAccount({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone
        })
        await newUser.save()
        res.json({status: "OK"})
    } catch(err) {
        res.json({status: "NOT OK"})
    }
}
exports.login = async (req, res, next) => {
    try {
        if(!req.body) {
            return res.status(400).json(
                {message: "Content can not be empty!"}
            )
        }
        const user = await UserAccount.findOne({ username: req.body.username })
        if(!user) res.json({status: "NOT OK"})
        else if(user.password === req.body.password) res.json({status: "OK", userId: user._id})
        else res.json({status: "NOT OK"})
    } catch(err) {
        res.json({status: "NOT OK"})
    }
}
exports.showUser = async (req, res, next) => {}
exports.updateUser = async (req, res, next) => {}
