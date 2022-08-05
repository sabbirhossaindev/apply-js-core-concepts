// kon oo akta sonka ka jodi 2 dara vag kora jay thola oita even number
// vag fol ses korer program.
console.log(4 / 2);
console.log(98 / 2);
console.log(144 / 2);
console.log(1286 / 2);

// kon oo akta sonka ka jodi 2 dara vag kora na jay thola oita odd number
console.log(7 / 2);
console.log(83 / 2);
console.log(145 / 2);
console.log(1287 / 2);


// kon oo akta sonka ka jodi 2 dara vag kora jay thola oita even number
// vag ses ber korer program.
console.log(4 % 2);
console.log(98 % 2);
console.log(144 % 2);
console.log(1286 % 2);

// kon oo akta sonka ka jodi 2 dara vag kora na jay thola oita odd number
console.log(7 % 2);
console.log(83 % 2);
console.log(145 % 2);
console.log(1287 % 2);


// function use kora even number declear kora;
function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder === 0) {
        // console.log('Number is Even Number');
        return true;
    }
    else {
        // console.log('Number is odd number');
        return false;
    }
}
const myEvenNumber = isEven(41);
console.log(myEvenNumber);
const herEvenNumber = isEven(1240);
console.log(herEvenNumber);