//global variable

var X = 27;
var Y = 33;

    function Add_numbers_1()  {
        document.write (45 + X + "<br>");
        console.log(45 + X);
    }

    //local variable

    function Subtract_Numbers_2(){
        var G = 22
        document.write (100 - G + "<br>");
        console.log ( 100 - Y);
    }

 Add_numbers_1();
Subtract_Numbers_2();
// end Global and Local Variables

//If Statemets

function GreetingFunction() {
    if (new Date() .getHours() < 19) {
        document.getElementById("Hello").innerHTML = "Hello, and welcome!";
    }
}

    if (76 <  78) {
   document.write("I am the boss.")
    }

    //End If Statement

    //Else Statement

    function Planet_Function() {
        Planet = document.getElementById ("Planet").value;
        if (Planet <= 18) {
            Answer = "Let's go to Mars!";
        }
        else{
              Answer = "You must stay on Jupiter";
        }
        document.getElementById("Planet_Des") .innerHTML = Answer;
    }
    

    function Time_function() {
        var Time = new Date() .getHours();
        var Reply;
        if (Time < 12 == Time > 0 ){
            Reply ="It is the Morning Time.";
        }

        else if ( Time > 12 == Time < 18 ) {
            Reply= "It is the Afternoon";
        }
        
        else{
            Reply= "it is Evening time."
        }
        document.getElementById("Time_of_Day") .innerHTML = Reply;
    }