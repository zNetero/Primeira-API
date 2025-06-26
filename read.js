const Usuario = require('./Usuario');


async function lerUsuarios(){
    try{
        return await Usuario.findAll();
    }
    catch(erro){
        console.error('Erro ao ler usuários:',erro);
    }
}

module.exports = {lerUsuarios};
