
// Format decimal string "nnnnn.nn to "nn nnn.nn $
export function formatDecimal(strdec, currency, left) {
    var out = ""
    var fleft = left || false;

    var fmtdec = roundToTwo(parseFloat(strdec)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
    if (currency) out = fleft ? currency + " " + fmtdec : fmtdec + " " + currency;
    else out = fmtdec;

    return out;
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}