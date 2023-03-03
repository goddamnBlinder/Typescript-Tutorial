"use strict";
console.log("Login");
//? Inheritance 
class Department {
    constructor(name) {
        this.name = name;
    }
    //*Adding Methods
    describe() {
        console.log(`department is ${this.name}`);
    }
}
let department = new Department('accounting');
department.describe();
// console.log(department);
let departmentCopy = {
    name: "Leela",
    describe: department.describe
};
console.log(departmentCopy);
departmentCopy.describe();
//# sourceMappingURL=main.js.map