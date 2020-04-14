const translateThree = require('./helpers.js');
const [amh_1e3, amh_1e6, amh_1e9, amh_1e12, amh_1e15] = ["ሺህ", "ሚሊዮን", "ቢሊዮን", "ትሪሊዮን", "ኳድሪሊዮን"];


function numberToAmharicText(num) {
    if(isNaN(num)) 
        return "";
    if(!Number.isSafeInteger(num))
        return "";
    num = Math.abs(num);
    const hundredths = Math.trunc(num % 1000);
    let thousandths, millionths, billionths, trillionths, quadrillionths;
    let milliText, thouText, hundText, billiText, trilliText, quadrilliText;
    milliText = thouText = hundText = billiText = trilliText = quadrilliText = "";

    if (num > 999){
        thousandths = Math.trunc(num / 1e3 % 1000);

        if (thousandths !== 0) {
            thouText = `${translateThree(thousandths)} ${amh_1e3} `;
        }
    }

    if (num > 999999){
        millionths = Math.trunc(num / 1e6 % 1000);

        if (millionths!== 0) {
            milliText = `${translateThree(millionths)} ${amh_1e6} `;
        }
    }
    if (num > 999999999){
        billionths = Math.trunc(num / 1e9 % 1000);

        if (billionths!== 0) {
            billiText = `${translateThree(billionths)} ${amh_1e9} `;
        }
    }
    if (num > 999999999999){
        trillionths = Math.trunc(num / 1e12 % 1000);

        if (trillionths!== 0) {
            trilliText = `${translateThree(trillionths)} ${amh_1e12} `;
        }
    }
    if (num > 999999999999999){
        quadrillionths = Math.trunc(num / 1e15 % 1000);

        if (quadrillionths!== 0) {
            quadrilliText = `${translateThree(quadrillionths)} ${amh_1e15} `;
        }
    }

    
    if (num !== 0) {
        return `${quadrilliText}${trilliText}${billiText}${milliText}${thouText}${translateThree(Number(hundredths))}`.trim();
    }
    else {
        return "ዜሮ";
    }

}


module.exports = numberToAmharicText;