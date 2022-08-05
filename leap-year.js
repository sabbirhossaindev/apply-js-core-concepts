function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myLeapYear = isLeapYear(2024);
console.log('My year:', myLeapYear);

// hw leap year logic google.