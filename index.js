const ones= {
    1:"አንድ",
    2:"ሁለት",
    3:"ሶስት",
    4:"አራት",
    5:"አምስት",
    6:"ስድስት",
    7:"ሰባት",
    8:"ስምንት",
    9:"ዘጠኝ",
    0:"ዜሮ"
}

const tens = {
    1:"አስራ",
    2:"ሃያ",
    3:"ሰላሳ",
    4:"አርባ",
    5:"ሃምሳ",
    6:"ስልሳ",
    7:"ሰባ",
    8:"ሰማንያ",
    9:"ዘጠና",
}

const _100 = "መቶ";
const _10e3 = "ሺ";
const _10e6 = "ሚሊዮን";

let input = "";
let inputNum = Number(input);
let beforeDecimal = Math.trunc(inputNum); 
let oneth = beforeDecimal%10;
let tenth = Math.trunc((beforeDecimal%100)/10) ;
let hundredth = Math.trunc((beforeDecimal%1000)/100);


function translateThree(num){
    let oneth = num%10;
    let tenth = Math.trunc((num%100)/10) ;
    let hundredth = Math.trunc((num%1000)/100);
    if(num===0) {
      return "";
    }
    if(oneth===0 && tenth ==0){
      return `${ones[hundredth]} ${_100}`;
    }
    if(hundredth===0){
        return translateTwo(num);
    }
    return `${ones[hundredth]} ${_100} ${translateTwo(num)}`; 
    
    return text; 
}

function translateTwo(num){
    let oneth = num%10;
    let tenth = Math.trunc((num%100)/10) ;
    
    if(oneth===0 && tenth===1){
        return `አስር`; 
    }
    if(tenth === 0){
        return `${ones[oneth]}`;
    }
    if(oneth==0){
        return `${tens[tenth]}`;
    }
    return `${tens[tenth]} ${ones[oneth]}`;
}





function translate(num){
    let hundredths = Math.trunc(num%1000);
   let thousandths = Math.trunc(num/1000%1000);
   let millionths = Math.trunc(num/1000000%1000);
//    let billionths = Math.trunc(num/1000000000%1000);
//    let trillionths = Math.trunc(num/1000000000000%1000);
let milliText,thouText,hundText;
 if(translateThree(millionths)==="")  {
     milliText = "";
 }
 else {
     milliText = `${translateThree(millionths)} ${_10e6} `;
 }
 if(translateThree(thousandths)==="")  {
    thouText = "";
}
else {
    thouText = `${translateThree(thousandths)} ${_10e3} `;
}

if(translateThree(hundredths)==="")  {
    hundText = "";
}
else {
    hundText = `${translateThree(hundredths)}`;
}
if(num!==0){
    return `${milliText}${thouText}${hundText}`;
}
else if(num===0){
    return ones[0];
}
    
}


