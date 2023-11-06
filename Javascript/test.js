function findMax(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
let result = findMax(4,5);
console.log(result);

function checkPalindrome(mystring){
    let a = "";
    for(let i = mystring.length - 1; i>=0; i--){
        a += mystring.charAt(i);
        console.log(mystring.charAt(i));
    }
    if(mystring.toLowerCase() === a.toLowerCase()){
        return true;
    } else {
        return false;
    }
}
let mystring = "abbba";
console.log(checkPalindrome(mystring));


function isVowel(c){
    array = ['a','e','i','o','u'];
    for(let i = 0; i < array.length; i++){
        if(array[i] == c){
            return true
        }
    }
    return false;
}

let c = 'e';
console.log(isVowel(c));

function sum(a,b,c,d){
    return a + b + c + d;
}
function multiply(a,b,c,d){
    return a * b * c * d;
}
console.log(sum(2,3,5,6));
console.log(multiply(2,3,5,6));

function reverser(rever){
    return result.split("").reverse().join("");
}
var a = "it will reversed";
console.log(reverser(a));