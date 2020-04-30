function myEvaluator(){
  let firstName=  document.getElementById("firstName").value;
  let lastName=  document.getElementById("lastName").value;
  // let temp=firstName;
  // firstName=lastName;
  // lastName=temp;
  let display=document.getElementById("print");
  display.innerHTML="Your full name is=" + firstName+lastName;
  
}

onload=function(){
  function alertName(){
  alert("Hello");
  }
  let name=document.getElementById("BI");
  name.onclick=alertName};