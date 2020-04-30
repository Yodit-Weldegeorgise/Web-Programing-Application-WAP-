
function BMI(){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
    var bmi=weight/(height/100*height*100);
    var display=document.getElementById("calculate");
    display.innerHTML="Your BMI is =" + bmi;
//   window.Console(weight);
}

