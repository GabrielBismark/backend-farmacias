const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async ({ nome, email, senha, confirmaSenha }) => {
    if (!nome || !email || !senha || !confirmaSenha) {
        throw new Error("Preencha todos os campos!");
    }

    if (senha !== confirmaSenha) {
        throw new Error("Senhas não conferem!");
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
        throw new Error("Um usuário já foi cadastrado com esse email.");
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);

    const usuario = new User({ nome, email, senha: passwordHash });
    await usuario.save();

    return { msg: "Usuário criado com sucesso!" };
};

exports.loginUser = async ({ email, senha }) => {
    if (!email || !senha) {
        throw new Error("Preencha todos os campos!");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Nenhum usuário encontrado com essas credenciais.");
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
        throw new Error("Senha inválida!");
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    return { msg: "Autenticação realizada com sucesso!", token };
};

exports.editUser = async (id, { nome, email, senha }) => {
    const updatedUser = await User.findByIdAndUpdate(id, { nome, email, senha });
    if (!updatedUser) {
        throw new Error("Usuário não encontrado.");
    }
    return { msg: "Atualizado com sucesso!" };
};

exports.deleteUser = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error("Usuário não existe.");
    }

    await User.findByIdAndDelete(id);
    return { msg: "Usuário excluído com sucesso!" };
};