
function apply(a, b, func) {
    let y = func(a, b);
    return y;
}
const multipliacation = function (a, b) {
    return a * b;
}


let x = apply(2, 3, multipliacation);
console.log(x);

const addition = function (a, b) {
    return a + b;
}
function apply(a, b, func) {
    let y = func(a, b);
    return y
}
let y = apply(2, 3, addition)
console.log(y);
var someOnesname;
function printName() {
    var someOnesname2 = "jone";
    // someOnesname = "anna"
    // console.log(someOnesname);
}
printName();
console.log(window)

function reverse(string) { 
    var newString = " "; 
for (var i = string.length - 1; i >= 0; i--) { 
    newString += string[i];
    return newString;
    
 }  
 
}
console.log(reverse("Good Afternoon"));
 
const s="Connie Client";
 fname=s.substring(0,s.indexOf(" "));
let len=s.length;
console.log(len);
console.log(s);
// consol.log(fname);