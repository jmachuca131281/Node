console.log('Program start');

setTimeout(function() {
    console.log('First Timeout');
}, 300);
setTimeout(function() {
    console.log('Second Timeout');
}, 0);
setTimeout(function() {
    console.log('Therst Timeout');
}, 0);
console.log('Program End');