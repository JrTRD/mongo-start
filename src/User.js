const mongoose, {Schema} = require("mongoose")

const UserSchema = new Schema({
  name: String
})

const User = mongoose.model("user", UserSchema)

module.exports = User