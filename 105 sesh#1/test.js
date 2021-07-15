
//global variable






function sum(num1, num2){
    return num1 + num2;
}

function sayHello(name, lastName) {
    console.log("Hi" + name + " " + lastName);
}


function runTest1(){
    console.log("Starting test 1 - functions");

    sayHello("Jesse", "Ramos");

    let a = 21;
    let b = 42;
    let result = sum(a, b);
   console.log(result);
}



function runTest2(){
    console.log("Test for objects");

    //object literal
    //used for configuration, 1 time structure
    let dog = {
        name: "Kino",
        age: 1.5,
        color: "black and brown",
        breed: "Doberman"
    };
    console.log(dog);

    console.log( dog.age );
    dog.age= 3;


}

//object constructor
//used: multiple object same structure

function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

let solo = new Dog("Solo", 2, "Brown");
console.log(solo);

let another = new Dog("loco", 4, "Red");
console.log(another);

// class
console.log(a)