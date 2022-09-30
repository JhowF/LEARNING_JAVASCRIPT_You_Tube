
let lista = ['Laranja', 'Maça', 'Pera', 'Banana', 'Manga', 'Abacate', 'Abacaxi'];


let listaUL = document.createElement('ul');


let body = document.getElementsByTagName('body');

console.log(body[0]);


body[0].appendChild(listaUL);


let listaNoBody = document.getElementsByTagName('ul')


console.log(listaNoBody[0])