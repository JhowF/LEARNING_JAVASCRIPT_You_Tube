//Criando Elementos


//1_Primeiro se cria o elemento 
var novoParagrafo = document.createElement("p");//Coloque dentro do parênteses o elemento que será removido

console.log(novoParagrafo);

//2_Depois o conteúdo que vai está dentro do elemento
var texto = document.createTextNode("Este é o testo do p");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

//Por ultimo adicione o elemento no texto
var doby = document.querySelector('body');

doby.appendChild(novoParagrafo);

//----------------------------------------------------------

//Criando elemento
var novoElemento = document.createElement("nav");

//Criando elemento Ul
var novoElementoUl = document.createElement("ul");

//Adicionando Ul no nav
novoElemento.appendChild(novoElementoUl)

//Criando Elemento li e adicionando dentro da Ul
n=0
while (n < 4){
    var novoElementoli = document.createElement("li");
    novoElementoUl.appendChild(novoElementoli)
    n+=1
}
console.log(novoElemento);


