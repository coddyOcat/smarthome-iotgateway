const mongoose = require("mongoose")
const { Schema } = mongoose

const data = new Schema(
    {
        dataValue: { type: String, require: true },
        device: { type: Schema.Types.ObjectId, ref: "Device" }
    },
    { timestamps: {createdAt: "created", updatedAt: "updateAt" } }
)

module.exports = mongoose.model("Data", data)
