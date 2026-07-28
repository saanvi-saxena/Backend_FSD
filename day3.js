//promises for asynch
//js single threaded

const promiseOne = new Promise((resolve, reject)=>{
    console.log("Promise task 1");
    resolve("Promises passed by using resolve");
    let msg=true;
    if(!msg==true){
        console.log("msg using promises failed")
    }
    else{
        console.log("error........");
    }
    setTimeout(()=>{
        console.log(resolve());
    },2000)
});
promiseOne.then((result)=>{
    console.log(result);
}).catch((error)=>{
    comsole.log(error);
})