const mongoose = require("mongoose")
const { Schema } = mongoose

const device = new Schema(
    {
        typeName: { type: String, require: true },
        name: { type: String, require: true, unique: true },
        isActive: { type: Boolean, default: false },
        isModded: { type: Boolean, default: false },
        areaProfile: { type: Schema.Types.ObjectId, ref: "AreaProfile" }
    }
)

module.exports = mongoose.model("Device", device)
