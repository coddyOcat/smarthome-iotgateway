const express = require("express")
// const authRoutes = require("./auth")
// const syncRoutes = require("./sync")

const router = express.Router()

// router.use("/auth", authRoutes)
// router.use("/auth", syncRoutes)

const {
    signup,
    login,
    showUser,
    updateUser
} = require("../controller/user_account")

const {
    loadAreasByUser,
    createArea,
    showArea,
    updateArea,
    removeArea,
    loadUserShared
} = require("../controller/area_profile")

const {
    loadDevices,
    loadDevicesByArea,
    loadDevicesByActive,
    loadDevicesByTypeName,
    createDevice,
    showDevice,
    updateDevice,
    removeDevice
} = require("../controller/device")

const {
    loadDatas,
    loadDatasByTime,
    loadDatasByDevice,
    createData,
    showData,
    updateData,
    removeData
} = require("../controller/data")

const {
    loadModes,
    loadModesByActive,
    createMode,
    showMode,
    updateMode,
    removeMode,
    loadDeviceList
} = require("../controller/mode")

router.get("/welcome", (_, res) => {
    res.send("OK")
})


module.exports = (app) => {
    app.use("/api", router)
}
