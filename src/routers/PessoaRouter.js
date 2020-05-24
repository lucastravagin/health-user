module.exports = app => {

    const PessoaController = require('../controller/PessoaController')

    app.get('/pessoas', PessoaController.GetPessoa)

    //Consultar uma pessoa por ID
    app.get('/pessoas/:Id', PessoaController.GetPessoaById)

    //Inserir uma pessoa
    app.post('/pessoas', PessoaController.InserirPessoa)

}