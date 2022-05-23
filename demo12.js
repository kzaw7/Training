class pErson {
    firstname;
    lastName;

    getFullName(){
        console.log(`$this.firstName`)
    }
}

let person = new Person();
person.firstName = 'Mark';
person.lastName = 'Smith';
person.getFullName();
