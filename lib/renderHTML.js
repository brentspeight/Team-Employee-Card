const engineer = require("../templates/engineer.js");
const intern = require("../templates/intern.js");
const team = engineer() + intern() + managerOne() 
const fs = require('fs');

module.exports = function htmlCreated() {
   return fs.writeFile('render.html', team, (err) =>{
        if (err){
            throw err;
        }
    })
}
