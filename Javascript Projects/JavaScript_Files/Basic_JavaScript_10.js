function Call_Loop(){
   var Number = "";
   var N = 10; 
   while (N > 2){
       Number += "<br>" + N;
       N++;

   }
   document.getElementById("Loop") .innerHTML = Number;

}

//this function helps find the length of characters in a string

function String_Length_Function(){
    var str = "You build me up, you break me down, Believer, Believer!";
    var X = str.length;
    document.getElementById("String_Length").innerHTML = X;
}

//end

//this is a for loop

function for_Loop(){
    var Places = ["Rome", "Greece", "Egypt", "Byzantine", "Martian", "Hulapai", "Aztec", "Pictish", "Viking"];
    var content = "";
    var G;
    for (G = 0; G < Places.length; G++){
        content += Places[G]+ "<br>";
    }
    document.getElementById ("Ancient_Places").innerHTML = content;
}