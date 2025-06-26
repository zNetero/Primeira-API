const Usuario = require('./Usuario');

async function lerUsuarios(){
    try{
        const usuario = await Usuario.findAll()
        console.log(usuario);
    }
    catch(erro){
        console.error('Erro ao ler usuários:',erro);
    }
}

lerUsuarios();
