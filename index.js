let minnum = 1;
let maxnum = 100;
let result = document.getElementById("result");
let newgame = document.getElementById("newgame");
let check = document.getElementById("check");
let attempt = document.getElementById("attempts");
let attempts = 0;
let guess = document.getElementById("textbox");
let random = generateRandom();
let resultcontainer=document.getElementById("resultcontainer");
let attemptcontainer=document.getElementById("attemptcontainer");
function resultcss(running){
    if(running){
        resultcontainer.style.display="block";
    }
    else{
        resultcontainer.style.display="none";
    }

}
function attemptcss(running){
    if(running){
        attemptcontainer.style.display="block";
    }
    else{
        attemptcontainer.style.display="none";
    }
    
}
function generateRandom() {
    return Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
}

check.onclick = function() {
    let guessValue = Number(guess.value);
    if (guessValue < 0 || guessValue > 100) {
        result.textContent = "Number should be in the range of 1 to 100";
        resultcss(true);
        attemptcss(false);
    } else {
        attempts++;
        if (guessValue > random) {
            result.textContent = "You are too high!";
            resultcss(true);
            attemptcss(false);
        } else if (guessValue < random) {
            result.textContent = "You are too low!";
            resultcss(true);
            attemptcss(false);
        } else {
            result.textContent = "Congratulations! Your guess is correct!";
            attempt.textContent = `You took ${attempts} attempts.`;
            resultcss(true);
            attemptcss(true);
        }
    }
};

newgame.onclick = function() {
    attempts = 0;
    result.textContent = "";
    attempt.textContent = "";
    guess.value = "";
    random = generateRandom();
    resultcss(false);
    attemptcss(false);
};