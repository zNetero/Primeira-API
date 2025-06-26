const sequelize = require('./database');
const Usuario = require('./Usuario');

async function sincronizarBanco() {
  try {
    await sequelize.sync({ force: true }); // Cria as tabelas
    console.log('Banco sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar banco:', error);
  }
}

module.exports = {sincronizarBanco};