//Keydown_Keyup

document.addEventListener("keydown", function(x) {

    
    evento  = x.key;

    if (evento === 'j'){
        console.log("Ola Jonathan")}else{
            console.log(x.key);
        }
    

});


document.addEventListener("keyup", function(x) {

    
    evento  = x.key;

    if (evento === 'Enter'){
        console.log("Soltou o enter")}else{
            console.log(x.key);
        }
    

});