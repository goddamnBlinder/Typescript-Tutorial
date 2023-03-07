console.log("Login");
//? Inheritance 
class Department { 
private employees: string[] = [];
static financialyear = 2022;
    
  constructor(private name:string, protected readonly id: string, employees:string[] = [] ){
    this.name = name;
    this.employees = employees;
    this.id = id;
  }
//*Adding Methods
addEmployees(employees:string){
    //?Validations
    //* this.id = 'difficult'; wont be changed by other Users cause is an readonly.
  
    this.employees.push(employees)
}
printEmployees(){
    console.log(this.employees.length);
  
    
    
}

describe(this:Department):void{
    console.log(`department is ${this.name} : ${this.id}`);
    console.log(this.employees);   
    
}

}
class ITdepartment extends Department {

    constructor(name:string, id:string , private it:string[] = []){
    super(name, id)

    }
    addIT(employees:string){
       this.it.push(employees);
    }
    printIT(){
        console.log(this.it.length);
        console.log(this.it);
    
    }
}
class Accounting extends Department{
    constructor(id:string, name:string, private reports:string[] = [] ){
        super(id, name)
        
    }
    //*Getters and Setters
      get Recentreports(){
        if (!this.reports){
            throw new Error("No report Found"); 
           
        } return this.reports[this.reports.length - 1]
      }

      
      set Recentreports(v : string){
     if (!v) {
        throw new Error("Can\n't insert new report"); 
     }this.addReports(v)
      }
//*----------------------------------------------------------//

//* Static Methods 
//this doesnt work here cuz this method is not an instance of the class and can be call anywhere.
    static createEmployees(name:string) {
      return {name: name}
     }
    

//*-----------------------------------------------------------//
    addReports(reports:string){
     this.reports.push(reports);
    }
    printReports(){
        console.log(this.reports); 
        console.log(this.reports.length);
         
    }
    //*Overriding through Private Property.
    addEmployees(employees: string){
        if (employees === 'Leela') {
           return; 
        } super.addEmployees(employees);   
    }
//*--------------------------------------------------------//
    describe(){
        console.log('this accounting unit with Id: '+ this.id)        
    }    
}

let department = new Department('accounting', 'd1');
// console.log(department);

let It = new ITdepartment('It', 'secondClass');
// console.log(It);
let accounting = new Accounting('Account', 'A1', [] );
// console.log(accounting);


department.addEmployees('leela');
department.addEmployees('Jhon');
department.addEmployees('Don');

accounting.printEmployees();


It.addIT('Loretta')
It.addIT("Lovelyn");
It.addIT("Lovette");

It.printIT()
//---------------------------//
accounting.describe()

accounting.addReports('Earlier received Report')
accounting.addReports('Earliest received Report')
accounting.addReports('LastestReort')
accounting.Recentreports = 'assigned report';

console.log(accounting.Recentreports);
accounting.printReports();
// department.employees [1] = 'Bruno';
// //direct way to add

Department.financialyear = 2023 //staic property
console.log(Accounting.createEmployees('Leela'), Department.financialyear.toString());


let departmentCopy = {
    describe: department.describe
};
// console.log(departmentCopy);
departmentCopy.describe.bind(department)();


//?-----------------------------------------//
/*Abstract classes in Typescript are classes that cannot be directly instantiated, 
but can be used as a base class for other classes
They can contain abstract methods, which are methods that have no implementation in the abstract class
 but must be implemented in any concrete class that extends the abstract class.*/


abstract class newDepartment{
    name
    input
    constructor(name:string, input:number){
     this.name = name;
     this.input = input;
    }

}

class AbDepartment extends newDepartment {
    constructor(name:string, input:number){
        super(name, input)
    }
    abstract(){
     console.log("this is the new Department :"+ this.name);

    } 
}  
console.log(newDepartment);


