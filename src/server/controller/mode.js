const Mode = require("../model/mode")

exports.loadModesByUser = async (req, res, next) => {
    try {
        const datas = await Mode.find()
        res.json(datas)
    } catch(err) {
        res.json("NOT OK")
    }
}
exports.loadModesByActive = async (req, res, next) => {}

exports.createMode = async (req, res, next) => {}
exports.showMode = async (req, res, next) => {}
exports.updateMode = async (req, res, next) => {}
exports.removeMode = async (req, res, next) => {}

exports.loadDeviceList = async (req, res, next) => {}
