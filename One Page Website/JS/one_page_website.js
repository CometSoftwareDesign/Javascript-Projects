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
function currentSlide1(n){
    showSlides1(slideIndex1 = n);

}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);

}
function currentSlide3(n) {
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
    captionText1.innerHTML=dots1[slideIndex1 - 1].alt;
}

function showSlides2(n) {
    var j;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("demo2");
    var captionText2 = document.getElementById("caption2");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
    captionText2.innerHTML = dots2[slideIndex2 - 1].alt;
}

function showSlides3(n) {
    var k;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("demo3");
    var captionText3 = document.getElementById("caption3");
    if (n > slides3.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides3.length }
    for (k = 0; k < slides3.length; k++) {
        slides3[k].style.display = "none";
    }
    for (k = 0; k < dots3.length; k++) {
        dots3[k].className = dots3[k].className.replace(" active", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active";
    captionText3.innerHTML = dots3[slideIndex3 - 1].alt;
}