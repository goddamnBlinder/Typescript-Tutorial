"use strict";
console.log("Login");
//? Inheritance 
class Department {
    constructor(name, id, employees = []) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.employees = employees;
        this.id = id;
    }
    //*Adding Methods
    addEmployees(employees) {
        //?Validations
        this.employees.push(employees);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log(`department is ${this.name} : ${this.id}`);
        console.log(this.employees);
    }
}
let department = new Department('accounting', 'd1');
console.log(department);
department.addEmployees('leela');
department.addEmployees('leela');
department.printEmployees();
// department.employees [1] = 'Bruno';
// //direct way to add
let departmentCopy = {
    describe: department.describe
};
console.log(departmentCopy);
departmentCopy.describe.bind(department)();
//# sourceMappingURL=main.js.map