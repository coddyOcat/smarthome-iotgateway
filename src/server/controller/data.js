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
        res.json("NOT OK")
    }
}

exports.createData = async (req, res, next) => {}
exports.showData = async (req, res, next) => {}
exports.updateData = async (req, res, next) => {
    try {
        const device = await Device.findOneAndUpdate({ name: req.params.deviceName }, {isActive: req.body.isActive})
        const formData = new Data({
            dataValue: (req.body.isActive? "1" : "0"),
            device: device._id
        })
        await formData.save()
        res.json("OK")
    } catch(err) {
        res.json("NOT OK")
    }
}
exports.removeData = async (req, res, next) => {}
