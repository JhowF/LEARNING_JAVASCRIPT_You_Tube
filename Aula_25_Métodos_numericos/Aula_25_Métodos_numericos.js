//MÉTODOS NUMÉRICOS

//O objeto Number, pai dos números, contém métodos muito úteis para trabalhar com números em JS;

//parseFloat     = Transforma em float ("Number")
numerofloat = parseFloat('233.56')
console.log(typeof(numerofloat))
console.log(numerofloat)
console.log("")

//parseInt       = Transforma em int
numeroint = parseInt('233.56')
console.log(typeof(numeroint))
console.log(numeroint)
console.log("")

//toFixed       = Limita a quantidade de casas decimais e aredonda
numerocasade = (233.56.toFixed(1))
console.log(numerocasade)
console.log("")

//isNaN       = Testa se é um number ou não  |  NaN = Not a number       true igual não é numero
console.log(isNaN('teste'))
console.log(isNaN(12))
console.log(isNaN('12'))
console.log("")

//MAX_VALUE       = Mostra o valor maximo que o javascript trabalha
console.log(Number.MAX_VALUE)
console.log("")

//MIN_VALUE       = Mostra o valor minimo que o javascript trabalha
console.log(Number.MIN_VALUE)




















// let nome = 'jonathan'

// for (i=0;i<nome.length;i++){
//     console.log(`${nome[i]}`)
// }

