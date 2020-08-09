function getReceipt() {
    //this intialiazes our string so it can get passed from
    //function to function, growing line by line into a full reciept
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 5;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 15;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 20;
    } else if (selectedSize === "Family Size Pizza") {
        sizeTotal = 25;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
    getVegetable(runningTotal,text1);
};
//get topping function
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("Toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";        
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);   
    }else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
//get vegetable function
function getVegetable(runningTotal, text1) {
    var vegetableTotal = 0;
    var selectedVegetable = [];
    var vegetableArray = document.getElementsByClassName("vegetables");
    for (var v = 0; v < vegetableArray.length; v++) {
        if (vegetableArray[v].checked) {
            selectedVegetable.push(vegetableArray[v].value);
            console.log("selected vegetable item: (" + vegetableArray[v].value + ")");
            text1 = text1 + vegetableArray[v].value + "<br>";
        }
    }
    var vegetableCount = selectedVegetable.length;
    if (vegetableCount > 1) {
        vegetableTotal = (vegetableCount - 1);
    } else {
        vegetableTotal = 0;
    }
    runningTotal = (runningTotal + vegetableTotal);
    console.log("total selected vegetable items: " + vegetableCount);
    console.log(vegetableCount + " vegetable - 1 free vegetable = " + "$" + vegetableTotal + ".00");
    console.log("vegetable text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};


