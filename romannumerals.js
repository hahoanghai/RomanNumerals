function smallNumberString(number, libraryString, k){
    var str = "";
    
    if(number < 1)
        str = "";
    else if(number < 4){
        for(var i = 0; i < number; i++)
            str += libraryString.charAt(k);
    }
    else if(number < 5)
        str += libraryString.charAt(k) + libraryString.charAt(k+1);
    else if(number < 9){
        str += libraryString.charAt(k+1);
        for(var i = 0; i < number-5; i++)
            str += libraryString.charAt(k);
    }else
        str += libraryString.charAt(k) + libraryString.charAt(k+2);
    return str;
}

function bigNumberString(number, libraryString, j){
    var combinedString = "";
    if(number < 10)
        combinedString += smallNumberString(number%10, libraryString, j);
    else{
        //combinedString += libraryString.charAt(4);
        combinedString += bigNumberString(Math.floor(number/10), libraryString, j+2) + smallNumberString(number%10, libraryString, j);
    }
    return combinedString;
}

function convertNumberToRomanString(number){
    var libraryString = "IVXLCDM";
    var romanString = "";
    romanString = bigNumberString(Math.floor(number/10), libraryString, 2) + smallNumberString(number%10, libraryString, 0);
    return romanString;
}

function test(number, romanString){
    var numberToRomanString = convertNumberToRomanString(number);
    if(numberToRomanString == romanString)
        console.log("PASSED: " + number + " = " + romanString);
    else{
        console.log("FAILED: " + number + " != " + romanString);
        console.log("Got: " + numberToRomanString + " Instead!");
    }
}

$(document).ready(function () {
    test(1, "I");
    test(2, "II");
    test(3, "III");
    test(4, "IV");
    test(5, "V");
    test(6, "VI");
    test(7, "VII");
    test(8, "VIII");
    test(9, "IX");
    test(10, "X");
    test(11, "XI");
    test(12, "XII");
    test(13, "XIII");
    test(14, "XIV");
    test(15, "XV");
    test(16, "XVI");
    test(17, "XVII");
    test(18, "XVIII");
    test(19, "XIX");
    test(20, "XX");
    test(40, "XL");
    test(50, "L");
    test(90, "XC");
    test(91, "XCI");
    test(99, "XCIX");
    test(100, "C");
    test(400, "CD");
    test(500, "D");
    test(900, "CM");
    test(1000, "M");
    test(3999, "MMMCMXCIX");
});