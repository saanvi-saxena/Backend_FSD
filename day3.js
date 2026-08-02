//promises for asynch
//js single threaded

//const promiseOne = new Promise((resolve, reject)=>{
// new Promise((resolve, reject)=>{
//     console.log("Promise task 1");
//     resolve("Promises passed by using resolve");
//     let msg=true;
//     if(!msg==true){
//         console.log("msg using promises failed")
//     }
//     else{
//         console.log("error........");
//     }
//     setTimeout(()=>{
//         console.log(resolve());
//     },2000)
// });
// promiseOne.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     comsole.log(error);
// })

//Async await
// console.log("1");
// async function test(){
//     console.log("2");
//     console.log("3");
//     await console.log("3");
//     console.log("4");
// }
// test();
// console.log("5");

// t1=test();
// console.log("5");
//create promises that will print username and password using resolve
//and if username and password not found then it will call 
//reject state and print Error...

// new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         console.log("this is promises")
//         let err= true;
//         if(!err){
//             resolve("user: ABC, password:1234");
//         }
//         else{
//             reject("Error: Data failed");
//         }
//     },2000);
    
// }).then(()=>{
//     console.log();
// }).catch((error)=>{
//     console.log(error);
// });

async function test(){
    console.log("message: 1");
    const response = await fetch("./student.json");
    console.log(response.status)
    const std = await response.json();
    return std;
    console.log("message: 3")
}
test().then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.error("Error fetching students data", error);
})