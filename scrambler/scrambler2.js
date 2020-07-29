//Globals
word = [];
word.push("Reformatus","Nagy","Konyvtar");
let count = 0;
loadGame();
function loadGame(){
    document.querySelector('#scrambledWord').innerHTML = word[count];
}


function scramble(ini){
    ini = ini.toLowerCase();
    for(let i =0;i<ini.length;i++){
        let x = Math.floor(Math.random()*ini.length);
        let y = Math.floor(Math.random()*ini.length);
        let letter = ini.charAt(x);
        ini = ini.replace(ini.charAt(x),ini.charAt(y));
        ini = ini.replace(ini.charAt(y),letter);

    }
    return(ini);
}






