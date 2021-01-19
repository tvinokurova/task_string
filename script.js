

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

String.prototype.replaceAt=function(index, znak) {
    return this.substr(0, index) + znak + this.substr(index + znak.length);
}
var stringNew='Я изучаю JavaScript';
console.log(stringNew.replaceAt(8, "p"));

