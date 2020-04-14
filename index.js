const helperObj = require('./helpers.js');
let {ones, translateThree} = helperObj;
const _10e3 = "ሺ";
const _10e6 = "ሚሊዮን";
const _10e9 = "ቢሊዮን";


function numToAmhTxt(num) {
    let hundredths = Math.trunc(num % 1000);
    let thousandths = Math.trunc(num / 1000 % 1000);
    let millionths = Math.trunc(num / 1000000 % 1000);
    let billionths = Math.trunc(num/1000000000%1000);
    let milliText, thouText, hundText, billiText;
    if (translateThree(billionths) === "") {
        billiText = "";
    }
    else {
        billiText = `${translateThree(billionths)} ${_10e9} `;
    }
    if (translateThree(millionths) === "") {
        milliText = "";
    }
    else {
        milliText = `${translateThree(millionths)} ${_10e6} `;
    }
    if (translateThree(thousandths) === "") {
        thouText = "";
    }
    else {
        thouText = `${translateThree(thousandths)} ${_10e3} `;
    }

    if (translateThree(hundredths) === "") {
        hundText = "";
    }
    else {
        hundText = `${translateThree(hundredths)}`;
    }
    if (num !== 0) {
        return `${billiText}${milliText}${thouText}${hundText}`;
    }
    else if (num === 0) {
        return ones[0];
    }

}


module.exports = numToAmhTxt;