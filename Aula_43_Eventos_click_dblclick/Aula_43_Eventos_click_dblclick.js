var btn = document.querySelector("#btn");

btn.addEventListener('click', function() {

    console.log('Clicou');

    console.log(this)

    this.style.cssText = 'color: red; font-size:17px; width:150px;'

});

var title = document.querySelector('#title');

title.addEventListener('click', function(){
    console.log('Title ok')
    var btn = document.querySelector("#btn");
    btn.style.display = 'none';
    console.log(this)

});

var tile2 = document.querySelector('.title2');

tile2.addEventListener('dblclick', function() {

    console.log("Clique duplo ok");
    console.log(this)

})