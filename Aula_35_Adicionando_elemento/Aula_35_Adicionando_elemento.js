//ADICIONANDO ELEMENTO

var elem = document.createElement("div");
var p = document.createElement("p");

elem.classList = "div-criada";
//Inserindo elementos
p.append("Olá humano")  //Usado para adicionar conteúdo

elem.appendChild(p)    //Usado para adicionar tag



// console.log(elem);

var container = document.querySelector("#container")

container.appendChild(elem)





//insertBefore


var elem2 = document.createElement("div");

elem2.classList = 'div-Before';

console.log(elem2);



var elem3 = document.querySelector("#container .div-criada");

console.log(elem3)

container.insertBefore(elem2, elem3);  //elem2 é o que será inserido e o elem3 é a referencia
