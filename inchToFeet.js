// inch ka ber ber / 12 diya vag korsi ;

const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);


const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet:-', dadaFeet);

// function diya inch to feet convert
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
// dadaFeets
const dadaInche = 144;
const dadaFeets = inchToFeet(dadaInche);
console.log(dadaFeets);

// nanafeet
const nanaInch = 168;
const nanafeet = inchToFeet(nanaInch);
console.log(nanafeet);

// hW mail to km convert 3