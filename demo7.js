//destructuring 

const employee = {
    empId: 1,
    firstName: "Mark",
    lastName: "Watson",
    email: "m@gmail.com"
};

//let empId = employee.empId;
//let firstName = employee.firstName;
//let lastName = employee.lastName;
//let email = employee.email;

//console.log(firstName + ' ' + lastName)

let { empId, firstName, lastName, email } = employee;

console.log(firstName + ' ' +lastName)

const scores = [30, 40, 50, 60]

//let a scores[0]
//let a scores[1]
//let a scores[2]
//let a scores[3]


let [a,b,c,d] = scores;

console.log(a,b,c,d)
