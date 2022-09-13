// closure will be created but will be executed separately

// Global variables are the bad practice in Js as it can be redeclared and debugging becomes difficult
let message = 'Hello world'

function parent() {
    //let message = 'Hello world'

    function child() {
        console.log(message)
    }

    return child // omit brackets so this doesn't execute yet
}

// instantiate 
let childFunction = parent()

// run
childFunction()

// We do this is when we want to use the variable  multiple times and later on
// example - emails