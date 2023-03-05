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
    //*Getters and Setters
    get Recentreports() {
        if (!this.reports) {
            throw new Error("No report Found");
        }
        return this.reports[this.reports.length - 1];
    }
    set Recentreports(v) {
        if (!v) {
            throw new Error("Can\n't insert new report");
        }
        this.addReports(v);
    }
    addReports(reports) {
        this.reports.push(reports);
    }
    printReports() {
        console.log(this.reports);
        console.log(this.reports.length);
    }
    //*Overriding through Private Property.
    addEmployees(employees) {
        if (employees === 'Leela') {
            return;
        }
        super.addEmployees(employees);
    }
}
let department = new Department('accounting', 'd1');
// console.log(department);
let It = new ITdepartment('It', 'secondClass');
// console.log(It);
let accounting = new Accounting('a1', '', []);
// console.log(accounting);
department.addEmployees('leela');
department.addEmployees('Jhon');
department.addEmployees('Don');
accounting.printEmployees();
It.addIT('Loretta');
It.addIT("Lovelyn");
It.addIT("Lovette");
It.printIT();
accounting.addReports('Earlier received Report');
accounting.addReports('Earliest received Report');
accounting.addReports('LastestReort');
accounting.Recentreports = 'assigned report';
console.log(accounting.Recentreports);
accounting.printReports();
// department.employees [1] = 'Bruno';
// //direct way to add
let departmentCopy = {
    describe: department.describe
};
// console.log(departmentCopy);
departmentCopy.describe.bind(department)();
//# sourceMappingURL=main.js.map