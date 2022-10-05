//MÉTODOS DE STRING
var frase = "Jonathan é brabo"
var nome =  'Jonathan';

//length
console.log(nome.length);

//indedxOf()
console.log(nome.indexOf('n'));
console.log(frase.indexOf('é'));

//slice   _Primeiro numero é o argumento que começa e o segundo é o argumento que para
console.log(nome.slice(0,4))
console.log(frase.slice(11))

//replace
var novafrase = frase.replace('brabo', 'Lindo');
console.log(novafrase);

//toLowerCase     _Coloca em Minúsculo
console.log(novafrase.toLowerCase())

//toUpperCase     _Coloca em Maiúsculo
console.log(novafrase.toUpperCase())
