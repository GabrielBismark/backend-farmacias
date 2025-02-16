const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
});

const User = mongoose.model("Usuarios", userSchema);

module.exports = User;