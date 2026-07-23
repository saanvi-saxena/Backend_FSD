//javascript
//function: block of code
//function fname(){
//block of code
//}
//function calling
//passing arguments 
//DOM is not used in node.js


function sayHello(a,b){
    console.log("Hello World");
    console.log(arguments);
    return a+b;
}
console.log(sayHello(3,2));


//Arrow functions
// ()=>{}

const ArrFunc = () => {
    console.log("arrow function")
}   
ArrFunc();

