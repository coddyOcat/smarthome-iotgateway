const mongoose = require("mongoose")
const { Schema } = mongoose

const areaProfile = new Schema(
    {
        areaName: { type: String, require: true, unique: true },
        userAccount: { type: Schema.Types.ObjectId, ref: "UserAccount", required: true },
        userShared: [{ type: Schema.Types.ObjectId, ref: "UserAccount"}],
        numDevice: { type: Number, default: 0 },
        numActive: { type: Number, default: 0}
    }
)

module.exports = mongoose.model("AreaProfile", areaProfile)
