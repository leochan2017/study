function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Leo', lastName: 'Chan ' };
document.body.innerHTML = greeter(user);
