

function arrayFactors(array){
    let arrayObject = {}
    for (i = 0; i < array.length; i++){
        let x = array[i];
        arrayObject[x] = []
        for (y = 0; y < array.length; y++){
            if (array[y] === x){
                continue;
            }
            if (arrayObject[x].lastIndexOf(array[y]) === -1){
                if(x % array[y] === 0){
                    arrayObject[x].push(array[y])
                }
            }
        }
    }
    console.log("object of arrays: ", arrayObject);
    return arrayObject;
}

arrayFactors([4,2,8,6,3,9]);