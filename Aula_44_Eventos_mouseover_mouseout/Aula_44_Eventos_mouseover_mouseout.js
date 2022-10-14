//Mouseover   = mouse em cima de uma elemento
//Mouseout    = mouse saindo do elemento

let title = document.querySelector('#title');

title.addEventListener('mouseover', function(){

    
    this.style.cssText = 'font-size:28px; color:blue; background-color:yellow;'


});

