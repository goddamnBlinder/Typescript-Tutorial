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
//this doesnt work here cuz this method is not an focus of the class and can be call anywhere.
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

    abstract abstract(): void 

}

class bigDepartment extends newDepartment {
    constructor(name:string, input:number){
        super(name, input)
    }
    abstract(){
     console.log("this is the new Department :"+ this.name);

    } 
}  

class smallDepartment extends newDepartment {
    constructor(name:string, input:number){
        super(name, input)
    }
    abstract(){
     console.log("this is the new Department :"+ this.name);

    } 
}  

//? Singleton design pattern of a class and private constructor

class Singleton extends Department {
    private static focus: Singleton;
    private constructor(name:string, id:string, protected num: number){
        super(name, id);
        this.num = num;
    }
    static getInstance(){
        if (Singleton.focus) {
            return Singleton.focus
        }Singleton.focus = new Singleton("Joan", "Leela" ,23);
        return  Singleton.focus
    }
}   
let Instance = Singleton.getInstance();
console.log(Instance);
//*Interface 
//* helps to describe a block of code (objects, Class, Functions) Data Types

interface Thereis {
    name: string;
    age:number;
    occupation?: string;     //Optional parameters you may add or not.
    meth(value:string):void
}
//?In Objects Literals
let obj:Thereis = {
   name: 'Bradly',
   age: 23,
   meth(value){
    console.log(value +`this Obj is said to be: ${this.name}`.endsWith("Th"));
   }

}
let adj:Thereis = {
    name: 'Angel',
    age:21,
    meth(value){
        console.log(value +`this adj aged :${this.age}`);
        
    }
}
type Thatis = {
    readonly once: string;
    date: Date;

}
//The  two ways of ways implementing the Interface, here, using function to prove a point.
type Fun = (a: number , b: number) => number;

//Intersecting both Types of Interfsce

 type bothType = Thatis & Fun;

 let test:bothType = {
    once = "OHHH"
    date = new Date();
    function fun(a:number, b:number) {
        return a + b;
    }
 }


var run:Fun
run = (a, b) =>{
    return a + Math.floor(b);
}
console.log(run(12, 36));



interface aunction {
    (a: number , b:number):number 
}
var Aunc:aunction;
Aunc = (x,y) => {
    return x+ y;
}
console.log(Aunc(34,16));


//?In class
class Moveto implements Thereis{
    constructor(public name:string, public age:number){
      
    }
    meth(){ 
        if(this.age){
        console.log( this.name +" is "+this.age +" years old.")
    }else{
         console.log(`this is ${this.name}`);
         
    }
  }
}
 


let move = new Moveto("Ye", 21);

console.log(move.meth());
