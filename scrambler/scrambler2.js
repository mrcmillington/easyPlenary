//Globals
word = [];
word.push("Reformatus","Nagy","Konyvtar");
let count = 0;
setup()

function setup(){
    loadWords(count);
    document.querySelector("#progress").addEventListener("click",function(){

        count+=1;
    loadWords(count);
    });
}

function loadWords(num){
    document.querySelector("#scrambled").innerHTML = scramble(word[num]);
    document.querySelector("#answer").innerHTML = '';
    document.querySelector("#reveal").addEventListener('click',function() {
        document.querySelector("#answer").innerHTML = word[num];

    })
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






