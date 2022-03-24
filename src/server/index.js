const mongoose = require("mongoose")
const app = require("./app")
const config = require("./config")

const connect = (url) => {
    return mongoose.connect(url, config.db.options)
}

if (require.main === module) {
    app.listen(config.port)
    connect(config.db.prod)
    mongoose.connection.on("error", console.log)
}
