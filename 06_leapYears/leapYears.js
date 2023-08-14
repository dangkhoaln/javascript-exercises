const leapYears = function(year) {
    if (!Number.isInteger(year) || year < 1) return 'ERROR';
    if (year%4 !== 0) return false;
    if (year%100 === 0 && year%400 !== 0) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
