const str = "xaxaxa";
function charCounter(str){
    const result = {};
    for(letter of str){
        if(letter in result){
            result[letter] = result[letter]+1;
        } else {
            result[letter] = 1;
        };
    };

    return result;
};

console.log(charCounter(str));