// 1 taka joto sunka dibo er gunfol.
/*
1 != 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
*/
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const result = factorial(12);
console.log('fact of 12:',result);