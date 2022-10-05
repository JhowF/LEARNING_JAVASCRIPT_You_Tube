//MÉTODOS DE ARRAYS

var arr = [1,2,3,4,5]

//length
console.log(arr.length);

// push  _Adiciona na ultima posição
arr.push(6);
console.log(arr);

// pop  Remove na ultima posição
arr.pop();
console.log(arr);

// unshift  _Adiciona na primeira posição
arr.unshift('Teste');
console.log(arr);

// shift   _Remove na primeira posição
arr.shift();
console.log(arr);

//Acessar o ultimo elemento
console.log(arr.length -1);

//Verificar array
console.log(Array.isArray(arr));




//PARTE 2

var novoArr = [1,2,3,4,5]


//SPLICE

//Adicionar no array
novoArr.splice(2, 0, 999);   //Primeiro indico a posição do argumento que desejo colocar, após isso coloca 0 para não excluir nenhum elemento e por último coloco o valor que desejo adicionar.
console.log(novoArr)

//Excluindo elemento
novoArr.splice(2,1);   //Informo a posição do elemento e quantos elementos desejo excluir a parti dele, caso coloque 1 irá excluir somente o elemento da posição!
console.log(novoArr)

//indexOf()
console.log(novoArr.indexOf(2));  //Está me dizendo qual o indice do elemento 2 na minha lista

//join  _Transforma em string um array
console.log(novoArr.join(', '));

//reverse   _Reverter a ordem do array
console.log(novoArr.reverse());
