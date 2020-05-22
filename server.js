//CommonJS
// const express = require('express')
// const app = express()

const app = require('express')()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})

app.get('/', (req, res) => {
    res.json({mensagem: "Olá Mundo"})
})

app.get('/users', (req, res) => {

    res.json({
        nome: "Lucas",
        cpf: "46140346839",
        imc: "39.9",
        registros: [
            {peso: 120, altura: 1.80, imc: 39.9, data: 22/05/2020},
            {peso: 120, altura: 1.80, imc: 25.9, data: 22/06/2020},
            {peso: 120, altura: 1.80, imc: 21.9, data: 22/07/2020}
        ]
    })

})