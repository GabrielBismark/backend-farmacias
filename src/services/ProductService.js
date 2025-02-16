const Product = require("../models/Product");

exports.getAllProducts = async () => {
    const products = await Product.find()

    if (products.length === 0) {
        throw new Error ( "Não há produtos cadastrados" );
    }

    return {products}
};

exports.createProduct = async ({ nomeComercial, nomeQuimico, quantidade, validade, lote, descricao }) => {
    if (!nomeComercial || !nomeQuimico || !quantidade || !validade || !lote || !descricao) {
        throw new Error("Preencha todos os campos!");
    }

    const product = new Product({ nomeComercial, nomeQuimico, quantidade, validade, lote, descricao })

    await product.save();

    return { msg: "Produto cadastrado com sucesso!" };
};

exports.getProduct = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error("Usuário não existe.");
    }

    return { product }
};

exports.editProduct = async (id, { nomeComercial, nomeQuimico, quantidade, validade, lote, descricao }) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, { nomeComercial, nomeQuimico, quantidade, validade, lote, descricao });
    if (!updatedProduct) {
        throw new Error("Produto não encontrado.");
    }
    return { msg: "Atualizado com sucesso!" };
};

exports.deleteProduct = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error("Produto não existe.");
    }

    await Product.findByIdAndDelete(id);
    return { msg: "Produto excluído com sucesso!" };
};