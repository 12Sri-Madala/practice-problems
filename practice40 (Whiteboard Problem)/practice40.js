function findNonDuplicate(array){
    var output = [];
    for (var inputInd = 0; inputInd < array.length; inputInd++){
        if (inputInd === 0){
            output.push(array[inputInd]);
            continue;
        }
        for (outputInd = 0; outputInd < output.length; outputInd++){
            var temp = output.indexOf(array[inputInd])
                if (temp === -1){
                    output.push(array[inputInd])
                    break;
                } else {
                    output.splice(temp, 1)
                    break;
                }
                
        }
    }
    console.log(output)

    return output;
}

findNonDuplicate([5,2,5,1,3,3,2])
