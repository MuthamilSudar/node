// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

// you can also pass a function as an argument to a function. 
// This function that is passed as an argument inside of another function is called a callback function.