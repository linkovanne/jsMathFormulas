let nb = +isPrime(7);

function isPrime(nb) {
    // let i = 2;
    // if(nb <= 1){
    //     return false;
    // } else {
    //     while (i*i <= nb){
    //         if (nb % i == 0)
    //         {
    //             break;
    //         }
    //         i++;
    //     }
    //     return (nb);
    // }
    if(nb <= 1){
        return ;
    } else if(nb == 2 || nb == 3){
        return(nb);
    } else {
        for(i = 2; i*i <= nb; i++){
            if (nb % i == 0){
                return ;
            }
        }
        return(nb);
    }
}
console.log(nb);

let p = 3*(2**(nb-1)-1);
let q = 3*(2**(nb)-1);
let r = 9*(2**(nb-1)-1);

console.log(p);
console.log(q);
console.log(r);
