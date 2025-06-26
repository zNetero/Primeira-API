const express = require('express');
const app = express();
app.use(express.json());

const {lerUsuarios} = require('./read');

const { criarUsuario } = require('./create');

const { sincronizarBanco } = require('./sync');

app.get('/', (req, res) => {//req = request, res = response
    res.status(200).json({
        mensagem: 'Criando primeira API'
    })
})

app.post('/Usuario', ((req, res) => {
    criarUsuario(req.body.nome, req.body.email, req.body.idade)
        .then(() => {
            res.status(200).json({
                mensagem: 'Usuário criado com sucesso'
            })
        })
        .catch((error) => {
            res.status(500).json({
                erro: error.message
            })
        })
}))

app.get('/Usuario',async(req,res)=>{
    const usuario = await lerUsuarios()
    res.status(200).json({
        usuario
    })
})


sincronizarBanco()
    .then(() => {
        app.listen(3000, () => {
            console.log('Aplicação rodando');
        })
    })
