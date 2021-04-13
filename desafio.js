const nodemon = require("nodemon")

//Cria um array de usuários com dados de nome, e-mail, idade e status (se esta ativo ou não)
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

//Cria um array de clientes com dados de nome, e-mail, idade e status (se esta ativo ou não)
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
//Apresenta os dados dentro do array
console.log(usuarios)

//Cria uma função que filtra os usuários que estão ativos, de acordo com os dados do array
function filtroUsuarios (todosUsuarios) {
    return todosUsuarios.filter(user => user.ativo === true)
}

//Chama a função para filtrar o array usuários e mostra uma lista com os nomes dos ativos 
filtroUsuarios(usuarios)
    .forEach(user => console.log(`Usuário ativos: ${user.nome}`))

//Chama a função filtrar para o array de clientes e lista os ativos    
filtroUsuarios(clientes)
    .forEach(user => console.log(`Cliente ativo: ${user.nome}`))