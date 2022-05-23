class Employee{

}
class FullTimeEmployee extends Employee{
    empId;
    firstName;
    lastName;
    email;
    anualSalary;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

}
let fte = new FullTimeEmployee();
fte.firstName = 'Mark';
fte.lastName = 'Smith';


let pte = new PartTimeEmployee();
pte.firstName = 'Paul';
pte.lastName = 'Watson';