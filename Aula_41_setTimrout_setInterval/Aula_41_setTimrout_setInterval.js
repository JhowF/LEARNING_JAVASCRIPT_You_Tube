//sitTimeout e Setinterval

//Podemos com estas funções criar ações no software que executam
//depois de um tempo ou de tempos em tempos;

/*Um dos argumentos destas funções é uma callback function;*/

console.log('Before_jhow')


setTimeout(function(){
console.log('jhow')
}, 5000

);

console.log('After_jhow')

//O perio informado é em milisegundo 1000 equivale a 1 segundo


//setInterval    //Necessita de um comando para dar um stop funciona como um loop

setInterval(function(){
    console.log("Set_interval")

}, 5000);