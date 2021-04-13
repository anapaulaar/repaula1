const nodemon = require("nodemon")

var usuario = [
    {
        nome: 'ana',
        email: 'ana@gmail.com',
        idade: 25,
        ativo: true
    },
    {
        nome: 'Eduardo',
        email: 'dudu@gmail.com',
        idade: 27,
        ativo: true
    },
    {
        nome: 'Victor',
        email: 'vic@gmail.com',
        idade: 22,
        ativo: true
    },
    {
        nome:'Thiago',
        email: 'tc@gmail.com',
        idade: 35,
        ativo: true
    },
    {
        nome: 'Paula',
        email: 'paula@gmail.com',
        idade: 20,
        ativo: false
    },
    {
        nome: 'João',
        email: 'jo@gmail.com',
        idade: 40,
        ativo: false
    }
]

console.log(usuario)

const lista = usuario.filter((user) => user.ativo === true)
console.log("Os usuários ativos são:")
console.log(lista)