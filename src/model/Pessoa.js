const connection = require('../config/db_config')

const Pessoa = function(pessoa)  {
    this.nome = pessoa.nome
    this.cpf = pessoa.cpf
}

Pessoa.GetPessoa = (result) => {
    connection.query('SELECT * FROM pessoa', (err, res) => {
        if (err) {
            console.log('Erro: ', err)
            result(err)
            return
        } else {
            console.log('Lista de Pessoas: ', res)
            result(null, res)
        }
    })
}

Pessoa.GetPessoaById = (id, result) => {
    connection.query('SELECT * FROM pessoa where id = ' + id, (err, res) => {
        if (err) {
            console.log('Erro: ', err)
            result(null, err)
            return
        }

        if(res.length) {
            console.log('Objeto Localizado', res[0])
            result(null, res[0])
            return
        }

        //Object Not Found
        result(null, {kind: 'not_found'})
    })
}

Pessoa.InserirPessoa = (pessoa, result) => {
    connection.query('INSERT INTO pessoa SET ?', pessoa, (err, res) => {
        if(err) {
            console.log('Erro: ', err)
            result(null, err)
            return
        }
        console.log('Objeto inserido com sucess', {id: res.insertId, ...pessoa })
        result(null, {id: res.insertId, ...pessoa })
    })
}



module.exports = Pessoa