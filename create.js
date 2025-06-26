const Usuario = require('./Usuario')

async function criarUsuario(nome,email,idade) {
    try{
        await Usuario.create({nome, email, idade});
        console.log('Usuário criado com sucesso');
    }
    catch(erro){
        console.error('Erro ao criar usuário:',erro)
    }
}

module.exports = {criarUsuario};