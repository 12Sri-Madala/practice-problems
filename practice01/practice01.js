
function findLongerWords(baseline, array){
    var output = [];
    var wordLength = baseline.length;
    for (wordInd = 0; wordInd < array.length; wordInd++){
        if(array[wordInd].length > wordLength){
            output.push(array[wordInd])
        }
    }
    console.log(output)
    return output;
}

findLongerWords('whales', ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'])
