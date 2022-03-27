const Data = require("../model/data")
const Device = require("../model/device")

exports.loadDatas = async (req, res, next) => {}
exports.loadDatasByTime = async (req, res, next) => {}
exports.loadDatasByDevice = async (req, res, next) => {
    try {
        const device = await Device.findOne({ name: req.params.deviceName })
        const datas = await Data.find({ device: device._id })
        res.json(datas)
    } catch(err) {
        res.json({status: "NOT OK"})
    }
}

exports.createData = async (req, res, next) => {}
exports.showData = async (req, res, next) => {}
exports.updateData = async (req, res, next) => {}
exports.removeData = async (req, res, next) => {}
