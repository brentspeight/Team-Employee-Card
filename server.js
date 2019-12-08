const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs')
const team = []
inquirer
.prompt([
    {type: 'input',
    name: "name",
    message:" Manager name"
    }, 
    {type: 'input',
    name: "email",
    message:" Manager email"
    }, 
    {type: 'input',
    name: "id",
    message:"Manager id"
    }, 
    {type: 'input',
    name: "office",
    message:"Manager office nubmber"
    }

    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    // 
    team.push(manager)
    console.log(team)
    createTeam()
  });

  function createTeam(){
    inquirer
    .prompt([
        {type: 'list',
        name: "choice",
        message:" what you want",
        choices:[
            "Engineer", "Intern", "end"
        ]
        }
    
        /* Pass your questions in here */
      ])
      .then(answers => {
          console.log(answers)
          //switch  create eng or create inte or end
        if(answers.choice === 'Engineer'){
            createEng();
        }else if(answers.choice === "Intern"){
            createInt();
        }else{
            createHTML()
        }
        })
    }
  function createEng(){
// inquiere then  create new Eng then push to array 
    inquirer
    .prompt([
        {type: 'input',
        name: "name",
        message:" Engineer name"
        }, 
        {type: 'input',
        name: "email",
        message:" Engineer email"
        }, 
        {type: 'input',
        name: "id",
        message:"Engineer id"
        }, 
        {type: 'input',
        name: "github",
        message:"Engineer Github Username"
        }

        /* Pass your questions in here */
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer)
        console.log(team)
        createTeam()
    })
    }

    function createInt(){
    // inquiere then  create new Int then push to array 
    inquirer
    .prompt([
        {type: 'input',
        name: "name",
        message:" Intern name"
        }, 
        {type: 'input',
        name: "email",
        message:" Intern email"
        }, 
        {type: 'input',
        name: "id",
        message:"Intern id"
        }, 
        {type: 'input',
        name: "school",
        message:"Intern School"
        }

        /* Pass your questions in here */
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        
        team.push(intern)
        console.log(team)
        createTeam()
    });

    }
    
    function createHTML(){
    // when you need to read the team arrayy an build the html
     

    }

