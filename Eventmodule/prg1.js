//What is event
//EventEmitter- on(emit event parameter, callback)- resgister event, event listener; emit(event parameter)- trigger/create/fire event

const EventEmitter= require('events');
const event = new EventEmitter();
event.on("greet", ()=>{
    console.log("This is event emitter");

})
event.emit("greet");
