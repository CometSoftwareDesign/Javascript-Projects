//THis is how to set up a dictionary in JS
//this will use Key Value Pairs/KVPs. 
//Only one key can be used for a Value

function my_Dictionary(){
    var Pet = {
        type:"Cat",
        color: "Orange",
        Breed: "American Short-hair",
        Age: 9,
    };
  
    document.getElementById("Dictionary").innerHTML = Pet.Age
}
