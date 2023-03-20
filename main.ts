console.log("Login");
//? Inheritance 
class Department { 
private employees: string[] = [];
static financialyear = 2022;
name;

    
  constructor(name:string, protected readonly id: string, employees:string[]){
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
    super(name, id, it)

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
        super(id, name, reports)
        
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
//this doesnt work here cuz this method is not an target of the class and can be call anywhere.
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

let department = new Department('Department', 'd1', ['Pink-shoe']);
// department.name = 'adul'; 
console.log(department);

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
//this a design pattern used to know all that is contained in a class without declaring the Object of that class. 
//?--------------------------------------------------------------------//

class Singleton extends Department {
    private static target: Singleton;
    private constructor(name:string, id:string, protected num: number,   private it:string[] = []){
        super(name,id, it);
        this.num = num;
        
    }
    static getInstance(){
        if (Singleton.target) {
            return Singleton.target
        }Singleton.target = new Singleton("Joan", "Leela" ,23, []);
        return  Singleton.target
    }
}   
let Instance = Singleton.getInstance();
console.log(Instance);
//?------------------------------------------------------------------------//


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
type Fun =  (a: number , b: number) => number;

//Intersecting both Types of Interfsce

 type bothType = Thatis & Fun;




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
//--------------------------------------------------//
//? function Overload.
//* How we handle functions the Typescript isn't aware about.
//*writing all possible DT in a function using an overload.

function Getter(a:string, b:string): string;
function Getter(a: number, b: number):number;
function Getter(a:string, b:number):string;
function Getter(a:number, b:string):number;

function Getter(a:combine, b:combine){
    if (typeof a === 'string' || typeof b === 'string') {
      return  a.toLocaleString() + b.toLocaleString();
    }
    return a+b;
}
const get = Getter('Di--','--Bollical');
get.split("")
console.log(get);
//------------------------------------------------------------------------------------//


//*Intersecting multiple Types and Interfacce
 type Admin = {
    name:string;
    position: string;
    roles: string[];
 }

 type Employ = {
    name:string;
    duties:number;
    
 }

 type Deploy = Admin & Employ;

let mask:Deploy = {
position: 'CTO',
roles:['array'],
name:'James',
duties:23,

 }

 console.log(mask);

 //it selects only the most frequent DT which is number.

type combine = number | string;
type numeric = boolean | number;

type selects = combine & numeric;

let faggots: selects;
faggots = 34;



type selected = Admin | Employ;

function check(emp:selected){
    console.log('name: '+emp.name);

    if('roles' in emp){
        console.log('roles: '+ emp.roles);   
    }if('duties' in emp){
        console.log('duties: '+ emp.duties);
        
    }
}
//? In classes
class Car {
    drive(){
        console.log(`A very smooth drive`);
        
    }
}
class Truck {
    drive(){
        console.log(`Very smoother ride with truck`);
        
    }
    carryCargo(amount:numeric):void{
        console.log(`Luggages is about: `+amount);

    }
}

type vehicle = Car | Truck;

function Ride(engine:vehicle):void{
        engine.drive();
   if(engine instanceof Truck){
       engine.carryCargo(30);
   }
   
}

const v1 = new Car();
const v2 = new Truck();
// console.log(v2.drive());
Ride(v2);

//*Discriminated Union Types in Typescript.
/*Using the type para in the interfaces to describe them while
 implementating them in switch statements other than using the 'In' properties in IF's*/

interface bird {
    type:'bird'
    flyingSpeed: number;
}
interface snake {
    type:'snake'
    crawingspeed: number;
}

interface horse {
    type:'horse'
    runnningSpeed: number;
}
type move = snake | bird | horse

function Terrestial(speed:move) {
  let locomotive = 0;
  switch (speed.type) {
    case 'bird':
        locomotive = speed.flyingSpeed;
        break;
    case 'horse':
        locomotive = speed.runnningSpeed;
        break
    case 'snake':
        locomotive = speed.crawingspeed;    
        break      
    }
    console.log(`it takes the animal ${locomotive} km/h to arrive at it's destination`);
}

const snake: snake = {
  crawingspeed: 30,
  type: 'snake'
}

const horse: horse = {
type:'horse',
runnningSpeed: 55,
}
const bird: bird = {
type: 'bird',
flyingSpeed: 80,
}

Terrestial(horse)

//Typescasting: casting recognize values in DOM.

const dom = document.querySelector("#number1")
if(dom){
    (dom as HTMLInputElement).value= 'Chinweike';
}

//Index Type Property
interface container {
    // id:number 
  [position:string]:string
}

let contain:container = {
    email: "Error in Email verification",
    id_number: '13',
    position: "short fro property",

}
console.log(contain.email);

//*Optional properties chaining and Null coalescing
//Optional proprty.
let Userdata = {
    name:'leela',
    job: {title: 'cleanner', salary: '$120', workingHours: 2+'Hrs'},

}
console.log(Userdata?.job?.salary);

//Null coalescing
//if it is null or undefined, take the default value.

let userInput:unknown = null

let storedInput = userInput ?? 'DEFAULT';
console.log(storedInput);

//!GENERICS 🥟
//Built--in Generics
//Generics in TypeScript allow you to create reusable code components that can work with multiple data types. 
//They enable you to write more flexible and type-safe code.

//*the array of string and the promise of string

let set:Array<string> = ['Generic']
console.log(set);


/* let promise:Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve('The expected Resolved data')
      }, 4000)

 promise.then((value)=>{
    value.split('') })
    .catch(error => console.log(error));
});
*/

//*Generic function 
//matchng 2 Objcts DT.

function merge(obj: object, obj1:object){
   return Object.assign(obj,obj1)
}

const mer = merge({name: 'Leela'}, {age: 23}) as {
    name:string,
    age:number,
};
console.log(mer.name);

interface lengthy {
    length: number;
}

function countasDescribe<T extends lengthy>(element:T):[T, string]{
   let text = "No text found";
    if(element.length === 1){
     text = 'Only 1 word found'
    }if (element.length > 1) {
       text = element.length + ' word found' 
    }
     return [element, text]
}
console.log(countasDescribe(['ggsgd', 'fvefefb', 'hbefbfjb', 'ehbfkf'], ));

//Using the keyof as a constrain.

function Constrain<U extends Object, T extends keyof U >(obj:U, key:T){
  return obj[key];
}
console.log(Constrain({name:"jerry", age:27, status: "NEET"},'age'));

//*Generics in Classes.

class dataStorage<T> {
    public data:Array<T> = [];

    addItem(item:T):void{
    this.data.push(item);
    }
    removeItem(item:T):void{
    this.data.splice(this.data.indexOf(item),1)
    }
    getItems():void{
        [...this.data]
    }
}
const storage = new dataStorage<string>();
storage.addItem('Ghost'),
storage.addItem('Ryder'),
storage.addItem('cider'),
storage.addItem('Onion');

storage.removeItem('');


console.log(storage.data);

const numberStorage = new dataStorage<numeric>();
numberStorage.addItem(1)
numberStorage.addItem(2)
numberStorage.addItem(4);

numberStorage.removeItem(3)
console.log(numberStorage.data);

const objectStorage = new dataStorage<object>();
objectStorage.addItem({name: 'Leela' });
objectStorage.addItem({ job: 'Midwife'})
objectStorage.addItem({age: 30,})
objectStorage.addItem({gender: 'female',})

objectStorage.removeItem({})
console.log(objectStorage.data);

//*Using different Generic utility.
//Partial & Readonly

interface Util {
    description: string,
    addedDate:Date,
    occupation:string
}

function addUtil(
    description: string,
    addedDate:Date,
    occupation:string
):Util{
    let utility: Partial<Util> = {}
    
    utility.description = description;
    utility.addedDate = addedDate;
    utility.occupation = occupation;


    return<Util>utility
}

let leela:  Readonly<string[]> = ['LMAO', 'LOL']
console.log(leela);

//*DECORATORS 🍞
//Allows extends the functionality
// of classes and methods in declaring&Assigning the function.
//it helps claasses to execute without instantiating an Object.
//? creating a decorator with a decorator factory.(anonimously)
//*Angular component decorator (component)

function serge(local:string){
    console.log('serge Qaurters');
   return (constructor:Function) => {
        console.log('sergent...' + local);
        // console.log(constructor); 
    }  
}
//Returning the constructior  & extending from a class decorator.

function component(template: string, hookID: string){
  return function<T extends { new (...args: any[]): {name:string} }> (constructor:T){
        return class extends constructor {
            constructor(...args:any){
                super(name);
                let ID = document?.querySelector('#decorate');
                let data = new constructor()
                if(ID){
                    ID.textContent = template;
                    ID.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
};


@serge("in Green")
@component('<h1> Hello Boys </h1>', 'App')

class comrade {
    public name = 'Bucky';
    constructor(){
        console.log('Comrade in battle....');  
    }
    fn(){}
}

//*bottom to top execution 
let green = new comrade ();
console.log(green);

//* applying the decortors to the property, accessors and methods as well.

function log1(target:any, propertyName:string):void{
    console.log('property decorator');
    console.log(target);
    console.log(propertyName);   
}

function  log2(target:any, name: string, descriptor: PropertyDescriptor ):void{
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    
}
function  log3(target:any, name: string, descriptor: PropertyDescriptor ):void{
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    
}
function  log4(target:any, name: string, position: number ):void{
    console.log('parameters decorator');
    console.log(target);
    console.log(name);
    console.log(position);
    
}

class shop {
    @log1
    costPrice:string;
    price:number;

    @log2
    set input(value:number){
      if(value > 0){
       this.price = value;
      }else {
        throw new Error("price should be positive");
      }
    }

    constructor(costPrice:string, price:number){
       this.costPrice = costPrice;
       this.price = price
    }
    @log3
    VAT( @log4 tax:number):void{
     this.price + tax;
    }
}


//*Return property descriptor data from a method decorator 

function blind(target:any, name: string, descriptor:PropertyDescriptor){
    console.log(descriptor);
     const auto = descriptor.value;

    const autoblind:PropertyDescriptor  = {
     configurable: true,
     enumerable:false,
     get(){
       return auto.bind(this);
     }
    }
    return autoblind
    
}

class Bind { 
    name = 'chinweike';
   
   @blind
    bider():void{
      console.log(this.name);
       
    }
}

let button = document?.querySelector("#button")!;
const p = new Bind();
button.addEventListener('click', p.bider);

//*IMPLEMENT PROPERTY VALIDATION DECORATION
interface ValidationConfig {

[property:string]: {
    [validationProperty:string]:string[]
};

//    Course: {
//     price: ['required'],
//     title: ['required']
//    }

}

function requried(target:any, name:string){
    
}

class Course{

    @requried
    price:number;

    title:string;
    constructor(price: number, title: string){
      this.price = price;
      this.title = title;

    }
 
}
const form = document?.querySelector("#submit");

form?.addEventListener('click', (e) => {
e.preventDefault()
let priceEX = document?.querySelector('#price') as HTMLInputElement
let titleEX = document?.querySelector('#input')  as HTMLInputElement

const prEX = +priceEX.value;
const title= titleEX.value;


const C = new Course(prEX, title)

console.log(C);


})