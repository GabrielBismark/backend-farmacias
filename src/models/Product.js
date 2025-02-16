const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nomeComercial: String,
    nomeQuimico: String,
    quantidade: Number,
    validade: Date,
    lote: String,
    descricao: String,
});

const Product = mongoose.model("Produtos", productSchema);

module.exports = Product;