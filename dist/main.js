"use strict";
var _a;
console.log("Login");
//? Inheritance 
class Department {
    constructor(name, id, employees) {
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
Department.financialyear = 2022;
class ITdepartment extends Department {
    constructor(name, id, it = []) {
        super(name, id, it);
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
        super(id, name, reports);
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
    //*----------------------------------------------------------//
    //* Static Methods 
    //this doesnt work here cuz this method is not an focus of the class and can be call anywhere.
    static createEmployees(name) {
        return { name: name };
    }
    //*-----------------------------------------------------------//
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
    //*--------------------------------------------------------//
    describe() {
        console.log('this accounting unit with Id: ' + this.id);
    }
}
let department = new Department('Department', 'd1', ['Pink-shoe']);
// department.name = 'adul'; 
console.log(department);
let It = new ITdepartment('It', 'secondClass');
// console.log(It);
let accounting = new Accounting('Account', 'A1', []);
// console.log(accounting);
department.addEmployees('leela');
department.addEmployees('Jhon');
department.addEmployees('Don');
accounting.printEmployees();
It.addIT('Loretta');
It.addIT("Lovelyn");
It.addIT("Lovette");
It.printIT();
//---------------------------//
accounting.describe();
accounting.addReports('Earlier received Report');
accounting.addReports('Earliest received Report');
accounting.addReports('LastestReort');
accounting.Recentreports = 'assigned report';
console.log(accounting.Recentreports);
accounting.printReports();
// department.employees [1] = 'Bruno';
// //direct way to add
Department.financialyear = 2023; //staic property
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
class newDepartment {
    constructor(name, input) {
        this.name = name;
        this.input = input;
    }
}
class bigDepartment extends newDepartment {
    constructor(name, input) {
        super(name, input);
    }
    abstract() {
        console.log("this is the new Department :" + this.name);
    }
}
class smallDepartment extends newDepartment {
    constructor(name, input) {
        super(name, input);
    }
    abstract() {
        console.log("this is the new Department :" + this.name);
    }
}
//? Singleton design pattern of a class and private constructor
//this a design pattern used to know all that is contained in a class without declaring the Object of that class. 
//?--------------------------------------------------------------------//
class Singleton extends Department {
    constructor(name, id, num, it = []) {
        super(name, id, it);
        this.num = num;
        this.it = it;
        this.num = num;
    }
    static getInstance() {
        if (Singleton.focus) {
            return Singleton.focus;
        }
        Singleton.focus = new Singleton("Joan", "Leela", 23, []);
        return Singleton.focus;
    }
}
let Instance = Singleton.getInstance();
console.log(Instance);
//?In Objects Literals
let obj = {
    name: 'Bradly',
    age: 23,
    meth(value) {
        console.log(value + `this Obj is said to be: ${this.name}`.endsWith("Th"));
    }
};
let adj = {
    name: 'Angel',
    age: 21,
    meth(value) {
        console.log(value + `this adj aged :${this.age}`);
    }
};
var run;
run = (a, b) => {
    return a + Math.floor(b);
};
console.log(run(12, 36));
var Aunc;
Aunc = (x, y) => {
    return x + y;
};
console.log(Aunc(34, 16));
//?In class
class Moveto {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meth() {
        if (this.age) {
            console.log(this.name + " is " + this.age + " years old.");
        }
        else {
            console.log(`this is ${this.name}`);
        }
    }
}
let move = new Moveto("Ye", 21);
console.log(move.meth());
function Getter(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toLocaleString() + b.toLocaleString();
    }
    return a + b;
}
const get = Getter('Di--', '--Bollical');
get.split("");
console.log(get);
let mask = {
    position: 'CTO',
    roles: ['array'],
    name: 'James',
    duties: 23,
};
console.log(mask);
let faggots;
faggots = 34;
function check(emp) {
    console.log('name: ' + emp.name);
    if ('roles' in emp) {
        console.log('roles: ' + emp.roles);
    }
    if ('duties' in emp) {
        console.log('duties: ' + emp.duties);
    }
}
//? In classes
class Car {
    drive() {
        console.log(`A very smooth drive`);
    }
}
class Truck {
    drive() {
        console.log(`Very smoother ride with truck`);
    }
    carryCargo(amount) {
        console.log(`Luggages is about: ` + amount);
    }
}
function Ride(engine) {
    engine.drive();
    if (engine instanceof Truck) {
        engine.carryCargo(30);
    }
}
const v1 = new Car();
const v2 = new Truck();
// console.log(v2.drive());
Ride(v2);
function Terrestial(speed) {
    let locomotive = 0;
    switch (speed.type) {
        case 'bird':
            locomotive = speed.flyingSpeed;
            break;
        case 'horse':
            locomotive = speed.runnningSpeed;
            break;
        case 'snake':
            locomotive = speed.crawingspeed;
            break;
    }
    console.log(`it takes the animal ${locomotive} km/h to arrive at it's destination`);
}
const snake = {
    crawingspeed: 30,
    type: 'snake'
};
const horse = {
    type: 'horse',
    runnningSpeed: 55,
};
const bird = {
    type: 'bird',
    flyingSpeed: 80,
};
Terrestial(horse);
//Typescasting: casting recognize values in DOM.
const dom = document.querySelector("#number1");
if (dom) {
    dom.value = 'Chinweike';
}
let contain = {
    email: "Error in Email verification",
    id_number: '13',
    prop: "short fro property",
};
console.log(contain.email);
//*Optional properties chaining and Null coalescing
//Optional proprty.
let Userdata = {
    name: 'leela',
    job: { title: 'cleanner', salary: '$120', workingHours: 2 + 'Hrs' },
};
console.log((_a = Userdata === null || Userdata === void 0 ? void 0 : Userdata.job) === null || _a === void 0 ? void 0 : _a.salary);
//Null coalescing
//if it is null or undefined, take the default value.
let userInput = null;
let storedInput = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedInput);
//!GENERICS 🥟
//Built--in Generics
//Generics in TypeScript allow you to create reusable code components that can work with multiple data types. 
//They enable you to write more flexible and type-safe code.
//*the array of string and the promise of string
let set = ['Generic'];
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
function merge(obj, obj1) {
    return Object.assign(obj, obj1);
}
const mer = merge({ name: 'Leela' }, { age: 23 });
console.log(mer.name);
function countasDescribe(element) {
    let text = "No text found";
    if (element.length === 1) {
        text = 'Only 1 word found';
    }
    if (element.length > 1) {
        text = element.length + ' word found';
    }
    return [element, text];
}
console.log(countasDescribe(['ggsgd', 'fvefefb', 'hbefbfjb', 'ehbfkf']));
//Using the keyof as a constrain.
function Constrain(obj, key) {
    return obj[key];
}
console.log(Constrain({ name: "jerry", age: 27, status: "NEET" }, 'age'));
//*Generics in Classes.
class dataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        [...this.data];
    }
}
const storage = new dataStorage();
storage.addItem('Ghost'),
    storage.addItem('Ryder'),
    storage.addItem('cider'),
    storage.addItem('Onion');
storage.removeItem('');
console.log(storage.data);
const numberStorage = new dataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(4);
numberStorage.removeItem(3);
console.log(numberStorage.data);
const objectStorage = new dataStorage();
objectStorage.addItem({ name: 'Leela' });
objectStorage.addItem({ job: 'Midwife' });
objectStorage.addItem({ age: 30, });
objectStorage.addItem({ gender: 'female', });
objectStorage.removeItem({});
console.log(objectStorage.data);
function addUtil(description, addedDate, occupation) {
    let utility = {};
    utility.description = description;
    utility.addedDate = addedDate;
    utility.occupation = occupation;
    return utility;
}
let leela = ['LMAO', 'LOL'];
//# sourceMappingURL=main.js.map