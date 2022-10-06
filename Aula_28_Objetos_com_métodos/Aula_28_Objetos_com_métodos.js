//CRIANDO OBJETOS COM MÉTODOS

let pessoa = {
    nome: 'Jonathan',
    Idade: 21,
    falar: function(){
        console.log('Olá tudo bem ?');
        
    },
    soma: function(a, b){
        console.log(a+b);
    }
};

pessoa.falar()
pessoa.soma(5,5)