const AreaProfile = require("../model/area_profile")

exports.loadAreasByUser = async (req, res, next) => {
    try {
        const datas = await AreaProfile.find({ userAccount: req.params.userId })
        res.json(datas)
    } catch(err) {
        res.json({status: "NOT OK"})
    }
}

exports.createArea = async (req, res, next) => {}
exports.showArea = async (req, res, next) => {}
exports.updateArea = async (req, res, next) => {}
exports.removeArea = async (req, res, next) => {}

exports.loadUserShared = async (req, res, next) => {}
