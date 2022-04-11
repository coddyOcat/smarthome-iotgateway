const Mode = require("../model/mode")
const Device = require("../model/device")
const { addMicrobitData } = require("../service/microbit")

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
exports.updateMode = async (req, res, next) => {
    try {
        const thisMode = await Mode.findOneAndUpdate({_id: req.params.modeId}, {isActive: req.body.isActive})
        const boolz = req.body.isActive? "1" : "0"
        addMicrobitData(thisMode.name, boolz)
        thisMode.deviceList.map( async (device) => {
            await Device.findOneAndUpdate({_id: device}, {isModded: req.body.isActive})
        })
        res.json("OK")
    } catch(err) {
        res.json("NOT OK")
    }
}
exports.removeMode = async (req, res, next) => {}

exports.loadDeviceList = async (req, res, next) => {}
