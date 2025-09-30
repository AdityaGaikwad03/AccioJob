//  constructor function

function User(firstName, lastName, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
}

let user1 = new User("Rohit", "Shah", "5555555");
let user2 = new User("Jenil", "Gupta", "8989999");
console.log(user1);
console.log(user1.firstName);
console.log(user2);
console.log(user2.contact);

