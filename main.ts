console.log("Login");
//? Inheritance 
class Department { 
    name: string;
    
  constructor(name:string){
    this.name = name;
  }
//*Adding Methods
describe(this:Department){
    console.log(`department is ${this.name}`);
    
}

}
let department = new Department('accounting');
department.describe()
// console.log(department);

let departmentCopy = {
    name: "Leela",
    describe: department.describe
};
console.log(departmentCopy);
departmentCopy.describe();
