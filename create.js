const Usuario = require('./Usuario')

async function criarUsuario() {
    try{
    await Usuario.create({ nome: 'João', email: 'joão@joão.com', idade: 20 })
    await Usuario.create({ nome: 'Maria', email: 'maria@maria.com', idade: 25 })
    await Usuario.create({ nome: 'Pedro', email: 'pedro@pedro.com', idade: 30 })
    await Usuario.create({ nome: 'Ana', email: 'ana@ana.com', idade: 22 })
    await Usuario.create({ nome: 'Carlos', email: 'carlos@carlos.com', idade: 28 })
    await Usuario.create({ nome: 'Julia', email: 'julia@julia.com', idade: 19 })
    await Usuario.create({ nome: 'Lucas', email: 'lucas@lucas.com', idade: 24 })
    await Usuario.create({ nome: 'Mariana', email: 'mariana@mariana.com', idade: 27 })
    console.log('Usuários criados com sucesso');
    }
    catch(erro){
        console.error('Erro ao criar usuários:',erro)
    }
}

criarUsuario();