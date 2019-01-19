function capitalizeEveryOtherLetter(string){
    let newWord = [];
    for (i = 0; i < string.length; i ++){
        if(i % 2 === 0){
            newWord.push(string[i]);
        } else {
            let z = string[i].toUpperCase();
            newWord.push(z);
        }
    }
    let result = newWord.join("")
    console.log("Output: ", result);
    return result;
}

capitalizeEveryOtherLetter('amazing');
