console.log("Login");
//? Inheritance 
class Department { 

  private  employees: string[] = [];
    
  constructor(private name:string, private id: string, employees:string[] = [] ){
    this.name = name;
    this.employees = employees;
    this.id = id;
  }
//*Adding Methods
addEmployees(employees:string){
    //?Validations
    this.employees.push(employees)
}
printEmployees(){
    console.log(this.employees.length);
    console.log(this.employees);
    
    
}

describe(this:Department){
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
