const mongoose = require("mongoose")
const { Schema } = mongoose

const mode = new Schema(
    {
        name: { type: String, require: true, unique: true },
        isActive: { type: Boolean, default: false },
        deviceList: [{ type: Schema.Types.ObjectId, ref: "Device" }]
    },
    { timestamps: {createdAt: "created", updatedAt: "updateAt" } }
)

module.exports = mongoose.model("Mode", mode)
