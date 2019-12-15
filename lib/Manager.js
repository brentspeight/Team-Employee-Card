const Employee = require('./Employee');

    function Manager(name,id, email, officeNumber) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.officeNumber = officeNumber
    }
// getRole(){
//     return "Manager";
// }
// getOfficeNumber(){
//     return this.officeNumber
// }


module.exports = Manager;


// manager(name, id, email, officeNumber) = {
//     name = this.name,
//     age = this.age,
//     email = this.email,
//     officeNumber = this.officeNumber
// }



