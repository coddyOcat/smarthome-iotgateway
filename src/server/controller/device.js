const Device = require("../model/device")
const AreaProfile = require("../model/area_profile")
const data = require("../model/data")

exports.loadDevices = async (req, res, next) => {}
exports.loadDevicesByArea = async (req, res, next) => {
    try {
        const datas = await Device.find({ areaProfile: req.params.areaId })
        res.json(datas)
    } catch(err) {
        res.json("NOT OK")
    }
}
exports.loadListTypeNameByUser = async (req, res, next) => {
    try {
        const areas = await AreaProfile.find({ userAccount: req.params.userId })
        let datas = []
        for (let i = 0; i<areas.length; i++) {
            const types = await Device.find({ areaProfile: areas[i]._id})
            types.forEach( type => {
                if (!datas.includes(type.typeName)) datas.push(type.typeName)
            })
        }
        console.log(datas)
    } catch(err) {
        res.json("NOT OK")
    }
}
exports.loadDevicesByTypeName = async (req, res, next) => {}
exports.loadDevicesByActive = async (req, res, next) => {}

exports.createDevice = async (req, res, next) => {}
exports.showDevice = async (req, res, next) => {}
exports.updateDevice = async (req, res, next) => {}
exports.removeDevice = async (req, res, next) => {}
