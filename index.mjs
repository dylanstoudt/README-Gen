//imports inquirer.js for an interactive command line interface
import inquirer from "inquirer";

let {descriptio} = await inquirer
    .prompt([
    {
        type: 'input',
        name: 'description',
        message: "Write a description about your project",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's your last name?",
        default() {
            return 'Doe';
        },
    }
])
console.log(first_name,last_name)
`#Project description
`