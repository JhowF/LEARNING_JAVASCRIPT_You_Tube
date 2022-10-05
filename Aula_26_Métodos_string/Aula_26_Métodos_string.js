//MÉTODOS DE STRING
 var frase = "Jonathan é brabo"
var nome =  'Jonathan';

//length
console.log(nome.length);

//indedxOf()
console.log(nome.indexOf('n'));
console.log(frase.indexOf('é'));

//lastIndexOF
//console.log(newFraseTT.lastIndexOf('CSS'));

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


//PARTE 2

//toUpperCase 
var newFrase = "Parte dois BILL".toUpperCase();
console.log(newFrase);
console.log('')

//trim    _Usado para remover espaço no javascrip equivalente ao strip no Python
var newFraseF = "       Parte dois BILL            ".trim();
var newFraseT = newFraseF.trim();
console.log(newFraseF);
console.log(newFraseT);

//split
console.log('')
console.log(newFraseT.split(' '));
//console.log(newFraseT.split(', '));    Caso tenha virgula no meu arquivo posso especificar que a virgula será o separador


console.log('')
var newFraseTT = ("PHP PYTHON HTML CSS");
console.log(newFraseTT.split(' '));
//console.log(newFraseTT.split(', '));   Caso tenha virgula no meu arquivo posso especificar que a virgula será o separador


//lastIndexOF

console.log(newFraseTT.lastIndexOf('CSS'));





