function evenOddSeparation( array ) {
    let output = {
        odd: [],
        even: []
    }

    for (i = 0; i < array.length; i++){
        if (isNaN(array[i])){
            continue;
        }
        if (array[i]%2 !== 0){
            if (output.odd.lastIndexOf(array[i]) === -1){
                output.odd.push(array[i])
            }
        } else {
            if (output.even.lastIndexOf(array[i]) === -1){
                output.even.push(array[i])
            }
        }
    }

    console.log(output);
    return output
}

evenOddSeparation([2,5,1,6,8,2,20,'cat',13,3])