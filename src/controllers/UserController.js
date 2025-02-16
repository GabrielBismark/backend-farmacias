const userService = require("../services/UserService");

// Criar novo usuário
exports.createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login de usuário
exports.loginUser = async (req, res) => {
  try {
    const response = await userService.loginUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Editar usuário
exports.editUser = async (req, res) => {
  try {
    const response = await userService.editUser(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
  try {
    const response = await userService.deleteUser(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
