// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee');

class intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        school.this = school;
    }

    getSchool(){}
    getRole(Intern){}
}

module.exports = Intern;