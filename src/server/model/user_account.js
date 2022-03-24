const mongoose = require("mongoose")
const { Schema } = mongoose

const userAccount = new Schema(
    {
        fname: { type: String, default: "" },
        lname: { type: String, default: "" },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, require: true, unique: true },
        phone: { type: String }
    },
    { timestamps: {createdAt: "created", updatedAt: "updateAt" } }
)

module.exports = mongoose.model("UserAccount", userAccount)
