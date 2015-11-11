function botWar(n) {
    var result = 0;
    for(var i = 2; i <= n/2; i++) {
        if(isPrime(i) && isPrime(n-i)) {
            result += 1;   
        }
    }
    return result;
}

primeList = [2, 3, 5, 7, 11, 13];

function inPrimeList(n) {
    for(var i = 0; i < primeList.length; i++) {
        var item = primeList[i];
        if(item === n) {
            return true;
        }else if(item > n) {
            break;
        }
    }
    return false;
}

function isInteger(n) {
    return n === parseInt(n);
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }else if(inPrimeList(n)){
        return true;
    }else {
        for (var i = 0; i < primeList.length; i++) {
            var item = primeList[i];
            var divide = n/item;
            if(isInteger(divide)) {
                return false;
            }
        }
    }
    return true;
}

function checkPrime(n) {
    console.log(" " + n + "is prime: ? " + isPrime(n));
}

function botwarCount(n) {
    console.log(" " + n + "botwar count : ?  " + botWar(n));
}

checkPrime(2);
checkPrime(5);
checkPrime(17);
checkPrime(30);

botwarCount(8);
botwarCount(7);
botwarCount(10);
