function reverseArray(array){
    let output = [];
    for(i = array.length-1; i >= 0; i--){
        output.push(array[i])
    } 
    console.log(output)
    return output
}

reverseArray(['hello', 45, 'Bob', 'what', '23'])