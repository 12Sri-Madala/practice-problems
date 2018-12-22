function sortArray(array){
    let output = [[], [], []];
    for (arrayInd = 0; arrayInd<array.length; arrayInd++){
        if (typeof array[arrayInd] === "number"){
            output[0].push(array[arrayInd])
        } else if (typeof array[arrayInd] === "string"){
            output[1].push(array[arrayInd])
        } else {
            output[2].push(array[arrayInd])
        }
    }
    console.log(output);
    return output
}

sortArray(['hello', 34, true, false, 'goodbye', 56, 12, '25', true])