const mongoose = require("mongoose")
const { Schema } = mongoose

const microbitData = new Schema(
    {
        field_name: { type: String, require: true },
        value: { type: String, require: true },
    }
)

module.exports = mongoose.model("MicrobitData", microbitData)