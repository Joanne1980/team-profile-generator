// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        gitHub.this = gitHub;
    }

    getGithub(){}
    getRole(Engineer){}
}

module.exports = Engineer;