function isPrime(nb) {
    if (nb <= 1) {
        return;
    } else if (nb == 2 || nb == 3) {
        return (nb);
    } else {
        for (i = 2; i * i <= nb; i++) {
            if (nb % i == 0) {
                return;
            }
        }
        return (nb);
    }
}

function countP(n) {
    if (n <= 1) {
        return;
    } else {
        let p = +isPrime(3 * (2 ** (n - 1)) - 1);
        // let p = 3 * (2 ** (n - 1)) - 1;
        return (p);
    }
}

function countQ(n) {
    if (n <= 1) {
        return;
    } else {
        let q = +isPrime(3 * (2 ** (n)) - 1);
        return (q);
    }
}

function countR(n) {
    if (n <= 1) {
        return;
    } else {
        let r = +isPrime(9 * (2 ** (2 * n - 1)) - 1);
        return (r);
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

let findN = (a, z) => {
    for (let i = 2; i < 100; i++){
        let l = +countP(i);
        let m = +countQ(i);
        let n = +countR(i);

        if(!(isNaN(l)) && !(isNaN(m)) && !(isNaN(n))){
            let fAmc = firstAmicable(i, l, m);
            let sAmc = secondAmicable(i, n);
            if (fAmc >= a && fAmc <= z && sAmc >= a && sAmc <= z){
                let amicables = [fAmc, sAmc];
                console.log(amicables)
            } else {
                break;
            }
        }
    }
}

findN(1, 500);
