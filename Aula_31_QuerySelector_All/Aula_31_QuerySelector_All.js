
//OUTRAS FORMA DE ACESSAR

//querySelector e querySelectorALL;

//Com esses 2 podemos acessar elementos baseados em regras de CSS;




//getElementsById  and getElementsByClassName

var itensClasse = document.getElementsByClassName('item')

console.log(itensClasse)




//querySelector     Usado para selecionar somente um argumento
var lista = document.querySelector('#lista');  
console.log(lista);


//querySelectorALL  Usado para selecionar varios argumentos
var itensQueryAll = document.querySelectorAll('#lista2 li');
console.log(itensQueryAll);

var itensQueryAll = document.querySelectorAll('#lista .item');
console.log(itensQueryAll);



console.log(document.querySelector('#paragrafo'))


