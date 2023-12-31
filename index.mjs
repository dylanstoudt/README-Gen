//imports inquirer.js for an interactive command line interface
import inquirer from "inquirer";
import fs from "fs/promises";

//Declares variables to grab and pass from inquirer
let {title, description, installation, usage, license, contribution, tests, username, email, contact} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Input the title of your project.",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description about your project.",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Write a short tutorial on how to install your project.",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Write a short description on how to use your project.",
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['MIT', 'Mozilla', 'Unlicense'],
            name: 'license'
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Provide guidelines on how other developers can contribute to your project.",
        },
        {
            type: 'input',
            message: "Provide a link to a screenshot of your application, if the screenshot is in the root directory you can type `./screenshot.png`",
            name: 'tests'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is you github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: "contact",
            message: "How would you like to be contacted?",
            choices: ['GitHub', 'Email']
        }
    ])
//Grabs license badges
function generateLicense(license) {

    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Mozilla") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (license === "Unlicense") {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
}

//Large string to set text of README.md
let READMEtext = `
# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contibution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${generateLicense(license)}

## Contribution

${contribution}

## Tests

![Screenshot of README-gen code](${tests})

## Questions

https://www.github.com/${username}
-----------------
${email}
-----------------
Please contact me via: ${contact}
`
//Fileshare to write READMEtext into README.md (Will generate README.md if not created)
fs.writeFile("README.md", READMEtext)