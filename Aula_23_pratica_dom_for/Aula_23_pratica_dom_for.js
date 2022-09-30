
var lista = ['Laranja', 'Maça', 'Pera', 'Banana', 'Manga', 'Abacate', 'Abacaxi'];


var listaUL = document.createElement('ul');


var body = document.getElementsByTagName('body');

//console.log(body[0]);


body[0].appendChild(listaUL);


var listaNoBody = document.getElementsByTagName('ul')


console.log(listaNoBody[0])

for (var i =0; i < lista.length; i++){

    var lifor = document.createElement('li');

    var textoli = document.createTextNode(lista[i]);

    lifor.appendChild(textoli);

    listaNoBody[0].appendChild(lifor)

    
}