class Employee {
    // firstName;
    // lastName;

    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

getFullName(){
    console.log(`${this.firstName}`)
  }
}

let employee = new Employee('Mark')
employee.getFullName();

