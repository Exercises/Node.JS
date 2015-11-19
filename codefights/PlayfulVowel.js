function PlayfulVowel(characters) {
    var result = 0;
    /*
    var ch = [];
    for(var i = 1; i < characters.length; i++) {
        if(characters[i] != ' ') {
            ch.push(characters[i]);
        }
    }
    */
    ch = characters;
    for(var i = 1; i < ch.length - 1; i++) {
        if(isvowels(ch[i]) && isconsonant(ch[i+1]) && isconsonant(ch[i-1])) {
            result = result + 1;
        }
    }
    return result;
}

function isconsonant(ch) {
   !isvowels(ch) && isletter(ch);
}

function isletter(ch) {
    return  ch <= 'Z' && ch >= 'A' || ch <= 'z' && ch >= 'a';
}

function isvowels(ch) {
    var little = (ch === 'a' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'e');
    var big = (ch === 'A' || ch === 'I' || ch === 'O' || ch === 'U' || ch === 'E');
    return little || big;
}

console.log("hehe" + isletter('M') + "isvowels(o) : " + isvowels('o') );
