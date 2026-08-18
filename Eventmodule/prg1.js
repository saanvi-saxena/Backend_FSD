//What is event
//EventEmitter- on(emit event parameter, callback)- resgister event, event listener; emit(event parameter)- trigger/create/fire event

const EventEmitter= require('events');
class MyEvent extends EventEmitter{}
const events = new EventEmitter();
events.on("greet", (name)=>{
    console.log(`Hello, ${name}! This is event emitter`);  //template literal ${variable}

})
events.on("exit", ()=>{
    console.log("This is exit event");
});
events.emit("greet","Saanvi");
events.emit("exit");
