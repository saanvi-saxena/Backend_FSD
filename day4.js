//Event loop. 
//create one log synchronous task
//function main
//set timeout
// 2 promises

console.log("synchronous task");
const f1 = () => {
    console.log("f1");
}

const f2 = () => {
    console.log("f2");
}

const f3= function main(){
console.log("this evenet loop");
    setTimeout(f1,1000);
    setTimeout(f2,2000);
    new Promise((resolve, reject)=>{
        resolve("I am promise")
    }).then((result)=>{
        console.log(result);
    })
    new Promise((resolve,reject)=>{
        resolve("this is promise");
    }).then((res)=>{
        console.log(res);
    })
}


//function main(){}
    
f3()
//main()