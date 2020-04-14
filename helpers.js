const ones = {
    1: "አንድ",
    2: "ሁለት",
    3: "ሶስት",
    4: "አራት",
    5: "አምስት",
    6: "ስድስት",
    7: "ሰባት",
    8: "ስምንት",
    9: "ዘጠኝ",
    0: "ዜሮ"
}

const tens = {
    1: "አስራ",
    2: "ሃያ",
    3: "ሰላሳ",
    4: "አርባ",
    5: "ሃምሳ",
    6: "ስልሳ",
    7: "ሰባ",
    8: "ሰማንያ",
    9: "ዘጠና",
}

const _100 = "መቶ";


function translateThree(num) {
    let oneth = num % 10;
    let tenth = Math.trunc((num % 100) / 10);
    let hundredth = Math.trunc((num % 1000) / 100);
    if (num === 0) {
        return "";
    }
    if (oneth === 0 && tenth == 0) {
        return `${ones[hundredth]} ${_100}`;
    }
    if (hundredth === 0) {
        return translateTwo(num);
    }
    return `${ones[hundredth]} ${_100} ${translateTwo(num)}`;

}

function translateTwo(num) {
    let oneth = num % 10;
    let tenth = Math.trunc((num % 100) / 10);

    if (oneth === 0 && tenth === 1) {
        return `አስር`;
    }
    if (tenth === 0) {
        return `${ones[oneth]}`;
    }
    if (oneth == 0) {
        return `${tens[tenth]}`;
    }
    return `${tens[tenth]} ${ones[oneth]}`;
}

module.exports = {ones, translateThree};