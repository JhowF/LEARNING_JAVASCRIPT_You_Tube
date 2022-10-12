//ALTERANDO ATRIBUTOS VIA DOM

//Vale resaltar que o src=""  de uma img é um atributo sendo
//pode ser mudado dessa maneira

//adcionarAtributo

var title = document.querySelector('#title');

title.setAttribute('class','Class_test');  //Na primeira posição Informo o atributo a ser adicionado e no segundo o nome dentro do atributo

console.log(title);


//removerAtributo

var lista = document.querySelector('#lista');

lista.removeAttribute('id');//Informo o atributo a ser removido

console.log(lista);



//



