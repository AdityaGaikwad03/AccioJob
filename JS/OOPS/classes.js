// classes

class User {
    constructor(firstName, lastName, contact){
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
    }
    getName(){
        console.log(this.firstName,this.lastName)
    }
}

const user1 = new User("add","assd","1234567890");
console.log(user1);
console.log(user1.contact);


