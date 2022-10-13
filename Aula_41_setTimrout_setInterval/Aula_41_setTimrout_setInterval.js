//sitTimeout e Setinterval

//Podemos com estas funções criar ações no software que executam
//depois de um tempo ou de tempos em tempos;

/*Um dos argumentos destas funções é uma callback function;*/

console.log('Before_jhow')


setTimeout(function(){
console.log('jhow')
}, 50000

);

console.log('After_jhow')

//O perio informado é em milisegundo 1000 equivale a 1 segundo


//setInterval    //Necessita de um comando para dar um stop funciona como um loop

setInterval(function(){
    console.log("Set_interval")

}, 50000);



//clearTimeout

x = 0;

var myTime = setTimeout(function(){
    console.log('O x é 0');
}, 1500);

x=5;


if (x > 0) {
    clearTimeout(myTime);
    console.log("O x Passou de 0");
}


//clearsetInterval

var myInterval = setInterval(function(){
    console.log("Imprimindo interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 2000)//Atraves do tempo aqui consigo controlar a quantidade de repetições
