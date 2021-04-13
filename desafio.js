const nodemon = require("nodemon")

var usuarios = [
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

var clientes = [
    {
        nome: 'Amanda',
        email: 'ma@gmail.com',
        idade: 25,
        ativo: false
    },
    {
        nome: 'Edu',
        email: 'dudu@gmail.com',
        idade: 27,
        ativo: false
    },
    {
        nome: 'Vic',
        email: 'vic@gmail.com',
        idade: 22,
        ativo: true
    },

]

console.log(usuarios)

function listarUsuarios (todosUsuarios) {
    return todosUsuarios.filter(user => user.ativo === true)
}

listarUsuarios(usuarios)
    .forEach(user => console.log(`Usuário ativos: ${user.nome}`))

listarUsuarios(clientes)
    .forEach(user => console.log(`Cliente ativo: ${user.nome}`))