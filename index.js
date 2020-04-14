const helperObj = require('./helpers.js');
let {ones, translateThree} = helperObj;
const _10e3 = "ሺህ";
const _10e6 = "ሚሊዮን";
const _10e9 = "ቢሊዮን";
const _10e12 = "ትሪሊዮን";
const _10e15 = "ኳድሪሊዮን"


function numToAmhTxt(num) {
    let hundredths = Math.trunc(num % 1000);
    let thousandths = Math.trunc(num / 1000 % 1000);
    let millionths = Math.trunc(num / 1e6 % 1000);
    let billionths = Math.trunc(num/1e9%1000);
    let trillionths = Math.trunc(num/1e12%1000);
    let quadrillionths = Math.trunc(num/1e15%1000);
    let milliText, thouText, hundText, billiText,trilliText,quadrilliText;
    if (translateThree(quadrillionths) === "") {
        quadrilliText = "";
    }
    else {
        quadrilliText = `${translateThree(quadrillionths)} ${_10e15} `;
    }
    if (translateThree(trillionths) === "") {
        trilliText = "";
    }
    else {
        trilliText = `${translateThree(trillionths)} ${_10e12} `;
    }
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