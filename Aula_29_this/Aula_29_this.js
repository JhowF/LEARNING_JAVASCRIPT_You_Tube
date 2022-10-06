//THIS

//Fora de escopos locais o this vai sempre se referir ao objeto global Window

//console.log(this);

let teste = 'testando';
console.log(this.teste);

let pessoa = {
    nome: 'Jonathan',
    Idade: 21,
    falar: function(){
        console.log('Olá tudo bem ?');
        
    },
    soma: function(a, b){
        console.log(a+b);
    },
    dizerNome: function(){
          console.log('Meu nome é ' + this.nome);
      console.log('Minha idade é ' + this.Idade+ ' Anos');
}
}

pessoa.dizerNome()
