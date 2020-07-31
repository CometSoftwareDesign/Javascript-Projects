function Call_Loop(){
   var Number = "";
   var N = 10; 
   while (N < 20){
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

//array function

function array_Function(){
    var Egypt_Picture = [];
    Egypt_Picture [0] = " the Pyramids of Giza";
    Egypt_Picture [1] = "Imhotep's Tomb";
    Egypt_Picture [2] = " the Eye of Horus";
document.getElementById ("Array").innerHTML = "This is " + Egypt_Picture [2] + ".";
}

//End Array Function

//Constant function

function constant_Function() {
    const scottish_Empire = {country:"Scotland", capital:"Edinburg"};
    scottish_Empire.capital = "Leith";
    scottish_Empire.population = "20 Million."
    document.getElementById("Constant").innerHTML = "The Capital of Scotland is " + scottish_Empire.capital + "." + "The total population is "+ scottish_Empire.population;
}
//end Const Function

// Let Function
D = 78;
document.write ( "<br>"+ D );

{let D = 66
document.write ("<br>"+ D)
}

document.write ("<br>" + D);

//end let function

//Return Function


function returnFunction() {
    H = 7
    return (H * H);
}

document.getElementById("Return") .innerHTML = returnFunction();

//Let Function part 2
let Vacation = {
    Destination: "Greece",
    Cost_of_Travel : "$26,000",
    Number_of_People: 6,
    Length_of_trip: "2 Weeks",
    description : function() {
     return "We are going to " + this.Destination + "." + " It will cost " + this.Cost_of_Travel + ". " + this.Number_of_People + " people will be going. " + "The trip will last " + this.Length_of_trip + ".";
    }
};
 document.getElementById ("LetFunction").innerHTML = Vacation.description();

//end let function part 2


//Loop Break Function
{var text = ""
var i;
for (i = 1; i < 600; i++) {
    if (i === 15) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;
}
//end Loop Break function

//Loop Continue function

{
var words = "";
var p;
for (p = 0; p < 20; p++) {
    if (p === 9) { continue; }
    words += "The number is " + p + "<br>";
}
document.getElementById("Continue").innerHTML = words;
}