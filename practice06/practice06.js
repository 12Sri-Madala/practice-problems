function fibSequence( number ){
    let output = [];
    for (i = 0; i < number; i++){
        let nextNumber = null;
        if ( number === 0 ){
            break;
        } else if( output.length <= number && i < 2){
            output.push(i);
        } else if ( output.length <= number ){
            nextNumber = output[i-2] + output[i-1];
            output.push(nextNumber);
        }
    }
    console.log("resulting array: ", output);
    return output;
}

fibSequence(9);