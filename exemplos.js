let frutas = [
    'jaca',
    'apple',
    'tomate',
    'limao',
    'caqui',
    'banana'
]

let users = [
    {
        name: 'Thiago',
        email: 'thiagolancer@gmail.com',
        age: 55
    },
    {
        name: 'Ana',
        email: 'ana@gmail.com',
        age: 44
    },
    {
        name: 'Dudu',
        email: 'dudu@gmail.com',
        age: 33
    },
    {
        name: 'Victor',
        email: 'aberto@gmail.com',
        age: 22
    }
]


const topBoss = {
    name: 'Marcelo Palaveri',
    email: 'seubarriga@gmail.com',
    age: 77
}


users.push(topBoss)

console.log(users)

for (let index = 0; index < users.length; index++) {
    console.log(users[index].age)
}



users.forEach(user => {
    if (user.age) {
        console.log(`O unico usuario que tem idade pq comeu ela foi o ${user.name}`)
    } else {
        console.log(`Nao foi definido idade para o usuario ${user.name}`)
    }
});

// =================================
console.log(`\n=================== FOREACH =======================\n`)

users.forEach(user => {
    console.log(user.name)
});

// =================================
console.log(`\n================== FOR ========================\n`)

for (let index = 0; index < users.length; index++) {
    console.error(users[index].name)
}

// =================================

console.log(`\n==================== FILTRO ======================\n`)

let novoUsers = users
novoUsers.reverse()

novoUsers.filter(user => user.age > 40)
    .forEach(user => console.log(`${user.name}, ${user.age} anos`))


console.log(`\n=================== WHILE =======================\n`)


const elemento = novoUsers.length
let cont = 0

while (cont < elemento) {
    console.warn(novoUsers[cont].name)
    cont++
}

// =================================

