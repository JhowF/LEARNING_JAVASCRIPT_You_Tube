// else Para caso false do if

var idade = 25;

if (idade >= 18 && idade < 60){
console.log('Você já pode tirar habilitação');
}

else if(idade >=60){
    console.log('Sinto muito más na sua idade já não é mais possivel tirar habilitação');
}

else{
    console.log('Sinto muito más você é muito jovem para tirar habilitação');
};


// else if para adicionar mais de uma condicional

let nome = 'JOnathan';
if (nome == 'jonathan' || nome == 'Jonathan'){
    console.log('Usuario valido (1)');
    }
    
    else if(nome == 'JONATHAN'){
        console.log('Usuario valido (2)');
    }
    else if(nome == 'JOnathan'){
        console.log('Usuario valido (3)');
    }
    else{
        console.log('Usuario invalido (4)');
    };