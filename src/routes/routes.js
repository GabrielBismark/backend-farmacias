const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const productController = require('../controllers/ProductController');

// ROTAS USER
router.get('/', (req, res) => res.send('API funcionando!'));
router.post('/auth/register', userController.createUser);
router.post('/auth/login', userController.loginUser);
router.patch('/profile/:id', userController.editUser);
router.delete('/profile/:id', userController.deleteUser);

// ROTAS PRODUTO
router.get('/fornecedor/produto/', productController.getAllProducts);
router.get('/fornecedor/produto/:id', productController.getProduct);
router.post('/fornecedor/produto/register', productController.createProduct);
router.patch('/fornecedor/produto/:id', productController.editProduct);
router.delete('/fornecedor/produto/:id', productController.deleteProduct);

module.exports = router;