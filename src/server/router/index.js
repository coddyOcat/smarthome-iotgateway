const express = require("express")
// const authRoutes = require("./auth")
// const syncRoutes = require("./sync")

const router = express.Router()

// router.use("/auth", authRoutes)
// router.use("/auth", syncRoutes)

router.get("/welcome", (_, res) => {
    res.send("OK")
})


module.exports = (app) => {
    app.use("/api", router)
}
