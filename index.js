function isPrime(nb) {
    if(nb <= 1){
        return;
    } else if(nb == 2 || nb == 3){
        return(nb);
    } else {
        for(i = 2; i*i <= nb; i++){
            if (nb % i == 0){
                return;
            }
        }
        return(nb);
    }
}

function countP(n){
    if (n <= 1) {
        return;
    } else {
        let p = +isPrime(3 * (2 ** (n - 1)) - 1);
        // let p = 3 * (2 ** (n - 1)) - 1;
        return(p);
    }
}
function countQ(n){
    if (n <= 1) {
        return;
    } else {
        let q = +isPrime(3 * (2 ** (n)) - 1);
        // let q = 3 * (2 ** (n)) - 1;
        return(q);
    }
}
function countR(n){
    if (n <= 1) {
        return;
    } else {
        let r = +isPrime(9 * (2 ** (2 * n - 1)) - 1);
        // let r = 9 * (2 ** (2*n - 1)) - 1;
        return(r);
    }
}

function firstAmicable(n, p, q) {
    let fAm = (2 ** n) * p * q;
    return (fAm);
}

function secondAmicable(n, r) {
    let sAm = (2 ** n) * r;
    return (sAm);
}

function writeArr(a, z) {
    let arr= [];
    let j = z - a + 1;
    for (i = 0; i < j; i++){
        arr[i] = a;
        a++;
    }
    // return (arr);
    arr.forEach(function (i) {
        let l = countP(i);
        let m = countQ(i);
        let n = countR(i);
        if(!(isNaN(l)) && !(isNaN(m)) && !(isNaN(n))){
            console.log(firstAmicable(i, l, m));
            console.log(secondAmicable(i, n));
            // console.log(l);
            // console.log(m);
            // console.log(n);
        } else  {
            console.log(i + ' is not amicable');
        }
    });
}

console.log(writeArr(1, 10));
