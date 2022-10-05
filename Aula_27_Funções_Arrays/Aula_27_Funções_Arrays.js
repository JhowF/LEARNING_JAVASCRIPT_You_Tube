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