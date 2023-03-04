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
        //* this.id = 'difficult'; wont be changed by other Users cause is an readonly.
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
class ITdepartment extends Department {
    constructor(name, id, it = []) {
        super(name, id);
        this.it = it;
    }
    addIT(employees) {
        this.it.push(employees);
    }
    printIT() {
        console.log(this.it.length);
        console.log(this.it);
    }
}
class Accounting extends Department {
    constructor(id, name, reports = []) {
        super(id, name);
        this.reports = reports;
    }
    addReports(reports) {
        this.reports.push(reports);
    }
    printReports() {
        console.log(this.reports);
    }
    //*Overriding through Private Property.
    addEmployees(employees) {
        if (employees === 'Leela') {
            return;
        }
        super.addEmployees(employees);
    }
    //*Getters and Setters
    get Recentreports() {
        if (condition) {
        }
    }
}
let department = new Department('accounting', 'd1');
console.log(department);
let It = new ITdepartment('', '');
// console.log(It);
let accounting = new Accounting('', '');
It.addIT('Loretta');
It.addIT("Lovelyn");
It.addIT("Lovette");
// It.printIT()
;
department.addEmployees('leela');
department.addEmployees('leela');
department.addEmployees('Jhon');
department.addEmployees('Don');
accounting.printEmployees();
// department.employees [1] = 'Bruno';
// //direct way to add
let departmentCopy = {
    describe: department.describe
};
//! console.log(departmentCopy);
departmentCopy.describe.bind(department)();
//# sourceMappingURL=main.js.map