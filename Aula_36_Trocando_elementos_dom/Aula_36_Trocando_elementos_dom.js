//TROCANDO ELEMENTOS VIA DOM 

//Montar o elemento que irei alocar

var el = document.createElement('h3');

el.classList = 'Class-put';

var text = document.createTextNode('Texto h3 3 teste');

el.appendChild(text);

console.log(el);

//Selecionar o elemento que quero trocar
var title = document.querySelector('#title');

console.log(title);


//Selecionar o pai do elemento que quero trocar nesse caso por exemplo é o body
var pai = title.parentNode;

pai.replaceChild(el, title)   //(x, y)    O argumento X irá entrar no lugar do elemento Y