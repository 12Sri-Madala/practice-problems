function printNumbers(){
    // var currentNum = 1;
    let output = [];
    for (x = 1; x<101; x++){
        if (x%3 === 0 && x%5 === 0){
            output.push("FizzBuzz")
        } else if (x%3 === 0){
            output.push("Fizz")
        } else if (x%5 === 0){
            output.push("Buzz")
        } else {
            output.push(x)
        }
    }
    console.log(output)
    return output;
    // Do a switch statement for this in the future
}

printNumbers();