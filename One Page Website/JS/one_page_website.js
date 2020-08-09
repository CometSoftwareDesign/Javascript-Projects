//open modal
function openModal1(){
    document.getElementById("myModal1").style.display ="block";
}
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}
function openModal3() {
    document.getElementById("myModal3").style.display = "block";
}
//end open modal

//close modal
function closeModal1(){
    document.getElementById("myModal1").style.display ="none";
}
function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
}
function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

//end close modal
//slide index
var slideIndex1 = 1;
showSlides1(slideIndex1);

var slideIndex2 = 1;
showSlides2(slideIndex2);

var slideIndex3 = 1;
showSlides3(slideIndex3);
//end slide index

//plus slides
function plusSlides1(n){
    showSlides1(slideIndex1 += n);

}
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);

}
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

//end plus slides

//current slides
function currentSlides1(n){
    showSlides1(slideIndex1 = n);

}
function currentSlides2(n) {
    showSlides2(slideIndex2 = n);

}
function currentSlides3(n) {
    showSlides3(slideIndex3 = n);

}

//end current slides


function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("mySlides1");
    var dots1 = document.getElementsByClassName("demo1");
    var captionText1 = document.getElementById("caption1");
    if (n > slides1.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides1.length }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
    captionText.innerHTML=dots1[slideIndex1 - 1].alt;
}

function showSlides(n) {
    var j;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    for (j = 0; i < dots.length; j++) {
        dots[j].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showSlides(n) {
    var k;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (k = 0; k < slides.length; k++) {
        slides[k].style.display = "none";
    }
    for (k = 0; k < dots.length; k++) {
        dots[k].className = dots[k].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}