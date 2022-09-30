//Break e continue

//Break  Podemos usar para encerrar um estrutura

//Continue Podemos pular instrução especifica  _ Apos o continue ele não vai execultar os codigos abaixo do mesmo pulando assim para a proxima execulção

//Normalmente usado em loops


for (let i = 10; i > 0; i--){
    
    console.log(`${i} _ Execução`);
    
   
    
    if(i===5){
        break;
    }

}
console.log('');

console.log(`Break`);

console.log('Continue');




//CONTINUE


i = 0;



while( i < 6){
    i+=1; //É bom sempre colocar no inicio do código quando usar o 'continue' para não ter problemas futuros

 if(i === 3 || i === 4 ){
    console.log('Pulou')
    continue;
}

console.log(`${i} _ Continue`);



}

console.log(`Continue _ finish`);

