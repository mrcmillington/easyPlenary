//Globals
let words=[]

setupPage()


function setupPage(){


    //Setup progress buttons
    loadPage(0);
    document.querySelector("#setWords").addEventListener('click', () =>getWords());
    document.querySelector("#homeStart").addEventListener("click",()=>loadPage(2))

    //Add inputs to Setup page
    createNewInput("Enter first Word ");

}

function getWords(){
    let tmp = document.querySelectorAll('.initialEntry');
    words.push(pairArray(tmp[0].value,"donkey"));
    console.log(words[0]);
}




function loadPage(screen) {
    // Loads required page and hides others
    let pages = document.querySelectorAll('.page');
    let submitBttn = document.querySelector('#setWords');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[screen].style.display = 'block';
}

function createNewInput(placeHolder){
    var input = document.createElement("input");
    input.placeholder = placeHolder;
    input.classList.add("initialEntry");
    input.type='text';
    document.querySelector('#enterBoxes').appendChild(input);
    input.addEventListener("click",function(){
        createNewInput('Optional Extra')
    } );
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
function pairArray(word){
    return {word,scramble(word)};

}
loadSetup();
function loadSetup(){
    document.querySelector("#setupSubmit").addEventListener('click',completeSetup);
    createNewInput("Enter a 6 digit number here");
    loadPage(0);
}

function completeSetup(){
    let questionArray = document.querySelectorAll(".initialEntry");
    let numbers = [];
    for(let x of questionArray){
        if(x.value.length>0){
            numbers.push(x.value);
        }
    }
    loadGamePage(numbers);
    loadPage(1);
    completeHomePage()
}

function completeHomePage(){
    document.querySelector('#start').addEventListener('click',function(){
        loadPage(2);
    })
}
function loadGamePage(num){
    const listOfNumbers = num;
    let playGame = document.querySelector('#playGame');
    playGame.innerHTML = num[0];
}
function finishGame(){

}

// Other functions

function loadPage(screen){
    // Loads required page and hides others
    let pages = document.querySelectorAll('.page');
    for(let i = 0;i<pages.length;i++){
        pages[i].style.display = 'none';
    }
    pages[screen].style.display = 'block';
}
function createNewInput(placeHolder){
    var input = document.createElement("input");
    var questions = document.querySelector('#questions');
    input.placeholder = placeHolder;
    input.classList.add("initialEntry");
    input.type='number';
    questions.appendChild(input);
    input.addEventListener("mousedown",function(){
        createNewInput('Optional Extra')
    } );

}
function addOption(){

}
