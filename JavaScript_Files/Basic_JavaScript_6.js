function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height") .value;
    Can_Ride = (Height < 6) ? "You are way too short":"Congratulations! You are tall enough";
    document.getElementById ("Ride") .innerHTML = Can_Ride + " to ride.";
}
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age") .value;
    Can_Vote = (Age < 18) ? "You are too young" : "Congratulations! You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
//Constructors with Keywords
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Tod  = new Vehicle("Dodge", "Ram",1976, "Green");
var James = new Vehicle("Chevy", "Malibu", 1990, "Yellow");
var Anne = new Vehicle("Tesla", "Model x", 2020, "Pearl Blue");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Tod drives a " + Tod.Vehicle_Color + " colored " + Tod.Vehicle_Model +" manufactured in " + Tod.Vehicle_Year;
}


function Baby (Weight, Name, Length){
    this.Baby_Weight= Weight;
    this.Baby_Name= Name;
    this.Baby_Length= Length;

}

var Hanzel = new Baby ("9 Pounds","Hanzel", "12 Inches");
var Banks = new Baby ("8.5 Pounds", "Banks","11 Inches");

function babyFunction(){
    document.getElementById("New_and_this") .innerHTML = "The new baby is " + Banks.Baby_Weight +". His name is  " + Banks.Baby_Name + " and he is " + Banks.Baby_Length + " long. ";
}

//Nested functions

function nestedFunction() {
    document.getElementById("Nested_Function") .innerHTML = Countdown();
    function Countdown(){
        var Starts =10;
        function Minus_one() {Starts -=1;}
        Minus_one();
        return Starts;

}
}
