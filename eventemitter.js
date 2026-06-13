const fs=require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("fileCreated", (fileName) => {
    console.log(`File ${fileName} has been created successfully!`);
})
fs.writeFile("class.txt", "Welcome to MERN Stack class", (err) => {
    if (err) {
        console.error(err); 
    } else {
        emitter.emit("fileCreated", "class.txt");
    }
});         
