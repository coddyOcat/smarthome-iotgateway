const express = require("express")
// const authRoutes = require("./auth")
// const syncRoutes = require("./sync")

const router = express.Router()

// router.use("/auth", authRoutes)
// router.use("/auth", syncRoutes)

const {
    signup, // dang ky
    login, // dang nhap
    showUser, // lay thong tin tai khoan
    updateUser // cap nhat thong tin tai khoan
} = require("../controller/user_account")

const {
    loadAreasByUser, // lay thong tin khu vuc thuoc ve tai khoan nay
    createArea, // tao them khu vuc
    showArea, // lay thong tin khu vuc
    updateArea,
    removeArea,
    loadUserShared
} = require("../controller/area_profile")

const {
    loadDevices,
    loadListTypeNameByUser, // lay danh sach typename
    loadDevicesByArea, // lay thong tin thiet bi thuoc ve khu vuc nay
    loadDevicesByActive,
    loadDevicesByTypeName,
    loadDevicesByTypeNameAndArea, // lay danh sach thiet bi boi typename va area
    createDevice, // them thiet bi
    showDevice,
    updateDevice,
    removeDevice
} = require("../controller/device")

const {
    loadDatas,
    loadDatasByTime,
    loadDatasByDevice, //
    loadDatasByDeviceApp,
    createData,
    showData, //
    updateData,
    microbitUpdateData,
    removeData
} = require("../controller/data")

const {
    loadModesByUser,
    loadModesByActive,
    createMode,
    showMode,
    updateMode,
    removeMode,
    loadDeviceList
} = require("../controller/mode")
const { getMicrobitData } = require("../service/microbit")

router.get("/welcome", (_, res) => {
    res.send("OK")
})

router.post("/signup", signup)
router.post("/login", login)
router.get("/device/:deviceName/data", loadDatasByDevice)
router.get("/device/:deviceName/dataapp", loadDatasByDeviceApp)
router.get("/user/:userId/area", loadAreasByUser)
router.get("/area/:areaId/device", loadDevicesByArea)
// router.get("/user/:userId/type", loadListTypeNameByUser)
router.get("/user/:userId/mode", loadModesByUser)
router.post("/device/:deviceName/data", updateData)
router.post("/mode/:modeId", updateMode)
router.post("/microbit/updateData", microbitUpdateData)
router.get("/microbit/getData", getMicrobitData)

module.exports = (app) => {
    app.use("/api", router)
}
