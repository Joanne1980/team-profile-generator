const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, 
//and render the HTML file.

function createManager(team){
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",

        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",

        type: 'input',
        name: 'name',
        message: "What is the team manager's email address?",

        type: 'input',
        name: 'phone number',
        message: "What is the team manager's office number?",
        }
    ]).then((managerDetails) => {
        const manager=new Manager(managerDetails.name, managerDetails.id,
        managerDetails.email, managerDetails.officeNumber)
        
        team.push(manager);
        createTeam(team);
    });
}

function createEngineer(team){
    inquirer.createPrompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        
        type: 'input',
        name: 'id',
        message: "What is he engineer's id?",
        
        
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?", 
        
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?"
        }

    ]).then((engineerDetails) => {
        const engineer=new Engineer(engineerDetails.name, engineerDetails.id,
        engineerDetails.email, engineerDetails.githubUsername)
        
        team.push(engineer);
        createTeam(team);
    });
}
function createIntern(team){
    inquirer.createPrompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
        
        
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?", 
        
        type: 'input',
        name: 'school',
        message: "What school doe's the intern attend?",
        }

    ]).then((internDetails) => {
        const intern=new Intern(internDetails.name, internDetails.id,
        internDetails.email, internDetails.school)
        
        team.push(intern);
        createTeam(team);
    });
}
function createTeam(team) {
    inquirer.createPrompt([
        {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member do you want to add?',
        choices: ['Engineer',
                  'Intern',
                  "I don't want to add anymore team members"],    
        }
    ]).then((choice)=> {
        if (choice.memberChoice === 'Engineer'){
            createEngineer(team);
        } else if (choice.memberChoice === 'intern'){
            createIntern(team);
        }else{
            const html=render(team);
            fs.writeFile(outputPath, html, (err) => {
                if (err){
                    console.log('Failed to write HTML file');
                }
            });
        }

    });
}

function start(){
    const team =[];
    createManager(team);    
}

start();