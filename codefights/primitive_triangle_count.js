function primitive_triangle_count(N) {
    var result = 0;
    for(var i = 1 ; i <= Math.floor(N/3); i++) {
        for(var j = i; j <= Math.floor(N/2); j++) {
            for(var k = j; (i + j + k) <= N && k < (i + j); k++) {
                //if(gcd(i, gcd(j, k)) === 1) {
                    //console.log('[' + i + ', ' + j + ', ' + k + ']');
                    result += 1;
                //}
            }
        }
    }
    return result;
}

function gcd(a, b) {
    if (a === b) {
       return a; 
    }else if(a < b) {
        return gcd(b - a, a);
    }else {
        return gcd(a - b, b);
    }
   
}

console.log('6 : ' + primitive_triangle_count(6));
console.log('1000000: ' + primitive_triangle_count(1000000));
