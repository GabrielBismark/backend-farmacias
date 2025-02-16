const productService = require("../services/ProductService");

// CRIAR PRODUTO
exports.createProduct = async (req, res) => {
    try {
        const response = await productService.createProduct(req.body);

        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    }
};

// GET TODOS OS PRODUTOS
exports.getAllProducts = async (req, res) => {
    try {
        const response = await productService.getAllProducts(req.body)

        res.status(200).json(response)   
    } catch (error) {
        res.status(500).json({error: error})
    }
};

// GET PRODUTO
exports.getProduct = async (req, res) => {
    try {
        const response = await productService.getProduct(req.params.id)

        res.status(200).json(response)   
    } catch (error) {
        res.status(500).json({error: error})
    }
};

// EDITAR PRODUTO
exports.editProduct = async (req, res) => {
  try {
    const response = await productService.editProduct(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETAR PRODUTO
exports.deleteProduct = async (req, res) => {
  try {
    const response = await productService.deleteProduct(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};