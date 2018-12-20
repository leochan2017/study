interface Person {
	firstName: string
	lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = { firstName: 'Leo', lastName: 'Chan ' }

document.body.innerHTML = greeter(user)