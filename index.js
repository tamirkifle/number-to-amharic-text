const helperObj = require('./helpers.js');
const { ones, translateThree } = helperObj;
const [amh_1e3, amh_1e6, amh_1e9, amh_1e12, amh_1e15] = ["ሺህ", "ሚሊዮን", "ቢሊዮን", "ትሪሊዮን", "ኳድሪሊዮን"];



function numberToAmharicText(num) {
    let hundredths = Math.trunc(num % 1000);
    let thousandths = Math.trunc(num / 1e3 % 1000);
    let millionths = Math.trunc(num / 1e6 % 1000);
    let billionths = Math.trunc(num / 1e9 % 1000);
    let trillionths = Math.trunc(num / 1e12 % 1000);
    let quadrillionths = Math.trunc(num / 1e15 % 1000);
    let milliText, thouText, hundText, billiText, trilliText, quadrilliText;
    if (translateThree(quadrillionths) === "") {
        quadrilliText = "";
    }
    else {
        quadrilliText = `${translateThree(quadrillionths)} ${amh_1e15} `;
    }
    if (translateThree(trillionths) === "") {
        trilliText = "";
    }
    else {
        trilliText = `${translateThree(trillionths)} ${amh_1e12} `;
    }
    if (translateThree(billionths) === "") {
        billiText = "";
    }
    else {
        billiText = `${translateThree(billionths)} ${amh_1e9} `;
    }
    if (translateThree(millionths) === "") {
        milliText = "";
    }
    else {
        milliText = `${translateThree(millionths)} ${amh_1e6} `;
    }
    if (translateThree(thousandths) === "") {
        thouText = "";
    }
    else {
        thouText = `${translateThree(thousandths)} ${amh_1e3} `;
    }

    if (translateThree(hundredths) === "") {
        hundText = "";
    }
    else {
        hundText = `${translateThree(hundredths)}`;
    }
    if (num !== 0) {
        return `${billiText}${milliText}${thouText}${hundText}`.trim();
    }
    else if (num === 0) {
        return ones[0];
    }

}


module.exports = numberToAmharicText;