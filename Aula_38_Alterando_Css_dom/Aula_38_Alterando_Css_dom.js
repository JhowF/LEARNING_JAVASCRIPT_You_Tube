//ALTERANDO CSS COM JS

let title = document.querySelector("#title");

title.style.color = 'red';   //font color

title.style.fontSize = '28px';  //font-size

function kiding(){
title.style.paddingLeft = '70px';}; //padding-left

function backing(){
    title.style.paddingLeft = '0px';
};

title.addEventListener('mouseover', kiding);

title.addEventListener('mouseout',back => {title.style.paddingLeft = '0px'});


console.log(title)



//----------------------------


let subtitle = ('.title2');

subtitle.style.cssText = 'color: blue; background-color: yellow; font-size:25px;'



