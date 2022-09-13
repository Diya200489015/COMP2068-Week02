function closedFunction() {
    let counter = 0

    // nested function
    //let increment = function() {
    let increment = () => {
        counter++
        console.log(counter)
    }

    return increment
}

//set up ("instantiate") function
let myCountFunction = closedFunction()

//execute twice
myCountFunction()
myCountFunction()

//untill we call the method it will stay like that
// useful in shopping cart