const EventEmitter = require('events');
const emitter = new EventEmitter();

// Order Received
emitter.on('orderReceived', (orderId) => {
    console.log(`Order ${orderId} has been received.`);
    emitter.emit('orderConfirmed', orderId);
});

// Order Confirmed
emitter.on('orderConfirmed', (orderId) => {
    console.log(`Order ${orderId} has been confirmed.`);
    emitter.emit('orderShipped', orderId);
});

// Order Shipped
emitter.on('orderShipped', (orderId) => {
    console.log(`Order ${orderId} has been shipped.`);
    emitter.emit('orderDelivered', orderId);
});

// Order Delivered
emitter.on('orderDelivered', (orderId) => {
    console.log(`Order ${orderId} has been delivered.`);
});

// Start the process
emitter.emit('orderReceived', 101);