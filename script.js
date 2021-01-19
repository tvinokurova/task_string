

//1 способ

var string1 = 'Я изучаю JavaScript';
console.log(string1.substr(0,1));
console.log(string1.substr(2,1));
console.log(string1.substr(-1));


//2 способ

var string2 = 'Я изучаю JavaScript';

console.log(string1.slice(0,1));
console.log(string1.slice(2,3));
console.log(string1.slice(-1));

//замена символа

//1 способ

String.prototype.replaceAt=function(index, Symbol) {
    return this.substr(0, index) + Symbol + this.substr(index + Symbol.length);
}
var stringNew='Я изучаю JavaScript';
console.log(stringNew.replaceAt(7, "p"));


String.prototype.replaceAt=function(index, Symbol) {
    return this.substr(0, index) + Symbol + this.substr(index + Symbol.length);
}
var stringNew2= (stringNew.substring(0, stringNew.length - 2))
console.log(stringNew2.replaceAt( 9, "Frontend"));

//2 способ

let change = 'Я изучаю JavaScript'; 
let newstr = change.replace(/ю/gi, 'з');
console.log(newstr); 

let change2 = 'Я изучаю JavaScript'; 
let newstr2 = change2.replace(/JavaScript/gi, 'Frontend');
console.log(newstr2); 