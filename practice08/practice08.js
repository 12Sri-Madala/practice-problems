function characterConvert(string){
    let output = '';
    for (i = 0; i < string.length; i++){  
        let asciiCharacter = string.charCodeAt(i);
        output += asciiCharacter;
    }
    console.log("Final Output: " + output);
    return output;
}

characterConvert("the cat in the hat")