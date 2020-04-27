// //function pageLoading(){
// let pageLoading = function(){
//     console.log("yemukera text");

//     const txtName = document.getElementById("txtName");
//     const chkObject = document.getElementById("chkTest");
//     //const chkObject = document.getElementById("chkTest");
    
//     //sidObject.value = "another test";
    
//     console.log(chkObject);
    
// }

window.onload = function(){
    console.log("yemukera text");

    const txtName = document.getElementById("txtName");
    const chkObject = document.getElementById("chkTest");
    //const chkObject = document.getElementById("chkTest");
    
    //sidObject.value = "another test";
    
    console.log(chkObject);

    chkObject.onchange = clickCheckbox;
    txtName.onkeypress =  clickCheckbox;
    
}

const addition = function(a, b){
    return a + b;
}

const multiplication = function(a, b){
    return a*b;
}

function apply(x, y, givenFunction){
    let result = givenFunction(x, y);

    console.log("The result is: " + result);
}

const subtraction = (a, b) => a - b;

const names = ["ayele", "abebe", "tadese"];
names.map(x => console.log(x));


const divide = (a, b) => a/b;

apply(2,3, addition);
apply(2,3, multiplication);
apply(2,3, subtraction);
apply(6,3, divide);

function clickCheckbox(){
    console.log("checkbox changed");
}

// chkObject.checked = true;
// chkObject.onclick = clickCheckbox;



console.log("another yemukera text");