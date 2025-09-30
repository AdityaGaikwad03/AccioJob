// object literal
let user = {
    firstName: "Rohit",
    lastName: "Shah",
    contact: "55555",

    getName: function() {
        console.log(this.firstName, this.lastName);
    },
}

user.getName();

let user2 = {
    firstName: "Amit",
    lastName: "Mehta",
    contact: "88888",

    getName: function() {
        console.log("Rohit Shah");
    },
    getContact: function() {
        console.log(this.contact);
    }
}

user2.getName();
console.log(user2.firstName);
user2.getContact();
let myContact = "contact";
console.log(user2["firstName"]);
