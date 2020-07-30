let scrambled = document.querySelector('#scrambled');
let reveal = document.querySelector("#reveal");
let original = document.querySelector("#original");
let next = document.querySelector("#next");
let game = document.querySelector('.game');
let count=-1;
let words = [];

document.querySelector('#addWord').addEventListener('click',function(){
    words.push(document.querySelector('#newWord').value);
    document.querySelector('#newWord').value = "";
    document.querySelector('#listWords').innerHTML = words;
})
document.querySelector('#playGame').addEventListener('click',function(){
    document.querySelector(".splashScreen").style.display='block';
    document.querySelector(".selectWords").style.display='none';
})
document.querySelector('.start').addEventListener('click',function(){
    document.querySelector(".game").style.display='block';
    document.querySelector(".splashScreen").style.display='none';
    LoadQues();
})
next.addEventListener('click',function() {
    LoadQues();
})
function LoadQues(){
    original.innerHTML="";
    next.disabled=true;
    count+=1;
    if (count===words.length){
        game.style.display='none';
        document.querySelector(".thatsAllFolks").style.display='block';
    }else{
        scrambled.innerHTML = scramble(words[count]);
        reveal.addEventListener('click',function(){
            original.innerHTML = words[count];
            next.disabled=false;
        })
    }
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
function createNewInput(placeHolder){
    var input = document.createElement("input");
    var questions = document.querySelector('#questions');
    input.placeholder = placeHolder;
    input.classList.add("wordsTolist");
    input.type='text';
    questions.appendChild(input);
    input.addEventListener("mousedown",function(){
        createNewInput('Optional Extra')
    } );
}