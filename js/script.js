function myFunction() {
    var element = document.getElementById("myDiv");
    element.classList.toggle("none");
    var element = document.getElementById("span");
    element.classList.toggle("none");
    var element = document.getElementById("div");
    element.classList.toggle("none");
    var element = document.getElementById("this");
    element.classList.toggle("none");
    var element = document.getElementById("main");
    element.classList.toggle("w-4/5")
    element.classList.toggle("w-11/12");
    var element = document.getElementById("aside");
    element.classList.toggle("w-1/5")
    element.classList.toggle("w-1/12");
    element.classList.toggle("aside-click");
    var element = document.getElementById("img-1");
    element.classList.toggle("aside-icon-1")
    element.classList.toggle("aside-icon-2");
    var element = document.getElementById("img-2");
    element.classList.toggle("aside-icon-1")
    element.classList.toggle("aside-icon-2");
    var element = document.getElementById("img-3");
    element.classList.toggle("aside-icon-1")
    element.classList.toggle("aside-icon-2");
    var element = document.getElementById("img-4");
    element.classList.toggle("aside-icon-1")
    element.classList.toggle("aside-icon-2");
    var element = document.getElementById("ul");
    element.classList.toggle("text-center")
    var element = document.getElementById("twiz");
    element.classList.toggle("w-1/2")
    element.classList.toggle("w-2/5")
    
 }
 function thisFunction() {
    var element = document.getElementById("rock");
    element.classList.toggle("rock");
    element.classList.toggle("fly");
    var element = document.getElementById("zwaarte");
   element.classList.toggle("rock");
   element.classList.toggle("zwaarte-1");
 }
 function thatFunction() {
   var element = document.getElementById("bird");
   element.classList.toggle("rock");
   element.classList.toggle("top");
   var element = document.getElementById("shield");
   element.classList.toggle("rock");
   element.classList.toggle("shield");
 }
 function weightFunction() {
   var element = document.getElementById("zwaarte");
   element.classList.toggle("rock");
   element.classList.toggle("zwaarte-2");
 }
 function fastFunction() {
   var element = document.getElementById("fast");
   element.classList.toggle("rock");
   var element = document.getElementById("speed");
   element.classList.toggle("rock");
 }
 function slowFunction() {
   var element = document.getElementById("slow");
   element.classList.toggle("rock");
   var element = document.getElementById("speed");
   element.classList.toggle("rock");
 }


window.onload = function () {
  
   var seconds = 00; 
   var tens = 00; 
   var appendTens = document.getElementById("tens")
   var appendSeconds = document.getElementById("seconds")
   var buttonStart = document.getElementById('button-start');
   var buttonStop = document.getElementById('button-stop');
   var Interval ;
 
   buttonStart.onclick = function() {
     
     clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
   }
   
     buttonStop.onclick = function() {
        clearInterval(Interval);
   }
   
 
   buttonReset.onclick = function() {
      clearInterval(Interval);
     tens = "00";
      seconds = "00";
     appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
   }
   
    
   
   function startTimer () {
     tens++; 
     
     if(tens <= 9){
       appendTens.innerHTML = "0" + tens;
     }
     
     if (tens > 9){
       appendTens.innerHTML = tens;
       
     } 
     
     if (tens > 99) {
       console.log("seconds");
       seconds++;
       appendSeconds.innerHTML = "0" + seconds;
       tens = 0;
       appendTens.innerHTML = "0" + 0;
     }
     
     if (seconds > 9){
       appendSeconds.innerHTML = seconds;
     }
   
   }
   
 
 }