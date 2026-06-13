const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello, today we are learning MERN Stack");
});

emitter.emit("greet");

