// console.log("Hello world");
// alert("Hello World");
let x;
let y;
let z;
function max(x, y){
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}
console.log(max(8,7))
function maxOfThree(x,y,z) {
    if(x>y&&x>z){
        return x;
    }
    else if(y>x&&y>z){
        return y;
    }   
    else if(z>x&&z>y){
        return z;
    } 
   
}
console.log(maxOfThree(1,4,5))
let s;
function isVowel(s) {
    if(s.length===1 &&(s==='a'||s==='e'||s==='i'||s=='o'||s==='u') ){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(isVowel('i'));

let numbers=[];
let result =0;
function sum(numbers) {
for(let i=0;i < numbers.length;i++){
     result = result + numbers[i];
}
return result;
}
console.log(sum([1,2,3,4]));
 result=1;
function multiply(numbers){
    for(let i=0;i<numbers.length;i++){
        result=result*numbers[i];
    }
    return result;
} 
console.log(multiply([1,2,4,5,6]))


function reverse(words) {
    return words.split("").reverse().join("");
}
console.log(reverse("Hello"))

function findLongestWord(word) { 
    let arrstr = word.split(" ");
let longestWord=arrstr.sort(function (a,b){
    return b.length-a.length;})
return longestWord[0];
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function filterLongWords() {

}