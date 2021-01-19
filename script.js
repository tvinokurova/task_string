

//1 способ

var i = 'Я изучаю JavaScript';
console.log(i.substr(0,1));
console.log(i.substr(2,1));
console.log(i.substr(-1));


//2 способ

var e = 'Я изучаю JavaScript';

console.log(e.slice(0,1));
console.log(e.slice(2,3));
console.log(e.slice(-1));


//3 способ

var z = 'Я изучаю JavaScript';
var f = z.split('');

delete f[1],



console.log(f);