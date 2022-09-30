//ESCOPOS

//Escopo global é quando inicio uma variavel no top do cododigo

//E os escopos locais estão dentro de instruções como funções por exemplo

let j = 'Jonathan'; //GLOBAL


function escopo(){

    j = 'Jhow'  //ESCOPO LOCAL

    return(j)

}


console.log(j)

console.log(escopo())


