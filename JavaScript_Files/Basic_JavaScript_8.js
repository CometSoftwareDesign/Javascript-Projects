//Concatenate Method
function Concat_Function(){
    var A1 ="Hello";
    var A2 = " my friend.";
    var A3 = " How are you this day?";
    var whole_sentence = A1.concat(A2,A3);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

//End Concatente

//Slice Method

function slice_Method() {
    var Words = "Have you ever danced with the devil in the pale moon light?";
    var Section = Words.slice(10,14);
    document.getElementById("Slice").innerHTML = Section;
}
//End Slice Method

//uppercase method

function myFunction() {
    var str = "ahhaahahahahahahahahahahahahahahhaa";
    var res = str.toUpperCase();
    document.getElementById("Demo_Uppercase").innerHTML = res;
}

//end uppercase method

//Search Function

function Search_Function() {
    var str = "Visit Space Station Mars ";
    var H = str.search ("Mars");
    document.getElementById ("Demo_Search") .innerHTML = H;
}
//end search function

//numbers to string

function String_Function(){
    var C = 1779;
    document.getElementById("Numbers_to_String") .innerHTML = C.toString();
}

//end numbers to string function

// to precision function (giving a precise length to a number)

function Precise_Function(){
    var J = 1546461.45465131;
    document.getElementById ("Precise") .innerHTML = J.toPrecision(10);
}

//end precision function

//fixed function

function Fixed_Function(){
    var num =555.2;
    var K= num.toFixed(5);
    document.getElementById ("Fixed") .innerHTML = K;
}

//end fixed function

//value of function

function value_Function(){
    var str = "Hello my little freind!";
    var res = str.valueOf();
    document.getElementById ("value").innerHTML = res;
    
}