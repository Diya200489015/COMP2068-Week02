// use a counter variable without a closure
function openFunction() {
    let counter = 0
    counter++
    console.log(counter)
}

//execute twice 
openFunction()
openFunction()

// Even if we do a loop it will return 1 each time
