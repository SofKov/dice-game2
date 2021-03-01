//PLAYER ONE VARIABLES
const pOne = document.getElementById("pOne");
const p1Score = document.getElementById("pOneOverallScore");
const p1Counter = document.getElementById("pOneCurrCount");
const p1Back = document.getElementById("left");

//PLAYER TWO VARIABLES
const pTwo = document.getElementById("pTwo");
const p2Score = document.getElementById("pTwoOverallScore");
const p2Counter = document.getElementById("pTwoCurrCount");
const p2Back = document.getElementById("right");

//BUTTON VARIABLES
const newGame = document.getElementById("newGame");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");

//DICE IMAGE VARIABLE
const dice = document.getElementById("dice");

//ACTIVE PLAYER TURN VARIABLE
let activePlayer = 0;

//INDICATE NEW TURN FUNCTION
const changeTurn = (activePlayer) => {
    if (activePlayer == 1) {
        p1Back.style.backgroundColor = "rgba(207, 167, 33, 0.514)";
        p2Back.style.backgroundColor = "rgba(175, 25, 212, 0.589)";
    }
    else {
        p1Back.style.backgroundColor = "rgba(175, 25, 212, 0.589)";
        p2Back.style.backgroundColor = "rgba(207, 167, 33, 0.514)";
    }
}

//NEW GAME BUTTON - RESET GAME FUNCTION
newGame.addEventListener("click", () =>{
    activePlayer = 1;
    let pFNL1 = prompt("Ok, player 1 - let's find out your DRAG name! First letter of your first name?");
    let pLNL1 = prompt("Ok, werk! Now, first letter of your last name?");
    
        if(pFNL1 == "A" || pFNL1 == "a") {
            pFNL1 = "Peaches";
        }
        else if(pFNL1 == "B" || pFNL1 == "b"){
            pFNL1 = "Backroll";
        }
        else if(pFNL1 == "C" || pFNL1 == "c"){
            pFNL1 = "Orgazma";
        }
        else if(pFNL1 == "D" || pFNL1 == "d" ){
            pFNL1 = "Sequence";
        }
        else if(pFNL1 == "E" || pFNL1 == "e"){
            pFNL1 = "Felicia";
        }
        else if(pFNL1 == "F" || pFNL1 == "f"){
            pFNL1 = "Kiki";
        }
        else if(pFNL1 == "G" || pFNL1 == "g"){
            pFNL1 = "Nutmeg";
        }
        else if(pFNL1 == "H" || pFNL1 == "h"){
            pFNL1 = "Summer";
        }
        else if(pFNL1 == "I" || pFNL1 == "i"){
            pFNL1 = "Iona";;
        }
        else if(pFNL1 == "J" || pFNL1 == "j"){
            pFNL1 = "Ornacia";
        }
        else if(pFNL1 == "K" || pFNL1 == "k"){
            pFNL1 = "Ivana";
        }
        else if(pFNL1 == "L" || pFNL1 == "l"){
            pFNL1 = "Charity";
        }
        else if(pFNL1 == "M" || pFNL1 == "m"){
            pFNL1 = "Ophelia";
        }
        else if(pFNL1 == "N" || pFNL1 == "n"){
            pFNL1 = "Toxic";
        }
        else if(pFNL1 == "O" || pFNL1 == "o"){
            pFNL1 = "Olivia";
        }
        else if(pFNL1 == "P" || pFNL1 == "p"){
            pFNL1 = "Ida";
        }
        else if(pFNL1 == "Q" || pFNL1 == "q"){
            pFNL1 = "Regina";
        }
        else if(pFNL1 == "R" || pFNL1 == "r"){
            pFNL1 = "Alotta";
        }
        else if(pFNL1 == "S" || pFNL1 == "s"){
            pFNL1 = "Mimi";
        }
        else if(pFNL1 == "T" || pFNL1 == "t"){
            pFNL1 = "Frieda";
        }
        else if(pFNL1 == "U" || pFNL1 == "u"){
            pFNL1 = "Sasha";
        }
        else if(pFNL1 == "V" || pFNL1 == "v"){
            pFNL1 = "Tyra";
        }
        else if(pFNL1 == "W" || pFNL1 == "w"){
            pFNL1 = "Bon Qui Qui";
        }
        else if(pFNL1 == "X" || pFNL1 == "x"){
            pFNL1 = "Coco";
        }
        else if(pFNL1 == "Y" || pFNL1 == "y"){
            pFNL1 = "Karen";
            pFNL2 = "Karen";
        }
        else if(pFNL1 == "Z" || pFNL1 == "z"){
            pFNL1 = "Zizi";
        }
    
        if(pLNL1 == "A" || pLNL1 == "a"){
            pLNL1 = "Rivers";
        }
        else if(pLNL1 == "B" || pLNL1 == "b"){
            pLNL1 = "Lake";
        }
        else if(pLNL1 == "C" || pLNL1 == "c"){
            pLNL1 = "Surprise";
        }
        else if(pLNL1 == "D" || pLNL1 == "d"){
            pLNL1 = "Eleganza";
        }
        else if(pLNL1 == "E" || pLNL1 == "e"){
            pLNL1 = "Goodnight";
        }
        else if(pLNL1 == "F" || pLNL1 == "f"){
            pLNL1 = "Kayne";
        }
        else if(pLNL1 == "G" || pLNL1 == "g"){
            pLNL1 = "Beaverhousen";
        }
        else if(pLNL1 == "H" || pLNL1 == "h"){
            pLNL1 = "Balls";
        }
        else if(pLNL1 == "I" || pLNL1 == "i"){
            pLNL1 = "Summers";
        }
        else if(pLNL1 == "J" || pLNL1 == "j"){
            pLNL1 = "Vision";
        }
        else if(pLNL1 == "K" || pLNL1 == "k"){
            pLNL1 = "Heaux";
        }
        else if(pLNL1 == "L" || pLNL1 == "l"){
            pLNL1 = "Cutab*tch";
        }
        else if(pLNL1 == "M" || pLNL1 == "m"){
            pLNL1 = "Filth";
        }
        else if(pLNL1 == "N" || pLNL1 == "n"){
            pLNL1 = "Tucker";
        }
        else if(pLNL1 == "O" || pLNL1 == "o"){
            pLNL1 = "Monsoon";
        }
        else if(pLNL1 == "P" || pLNL1 == "p"){
            pLNL1 = "Wylde";
        }
        else if(pLNL1 == "Q" || pLNL1 == "q"){
            pLNL1 = "Latifah";
        }
        else if(pLNL1 == "R" || pLNL1 == "r"){
            pLNL1 = "O'Plenty";
        }
        else if(pLNL1 == "S" || pLNL1 == "s"){
            pLNL1 = "Bang-Bang";
        }
        else if(pLNL1 == "T" || pLNL1 == "t"){
            pLNL1 = "Foxxx";
        }
        else if(pLNL1 == "U" || pLNL1 == "u"){
            pLNL1 = "Caliente";
        }
        else if(pLNL1 == "V" || pLNL1 == "v"){
            pLNL1 = "Bush";
        }
        else if(pLNL1 == "W" || pLNL1 == "w"){
            pLNL1 = "D-Lite";
        }
        else if(pLNL1 == "X" || pLNL1 == "x"){
            pLNL1 = "Alert";
        }
        else if(pLNL1 == "Y" || pLNL1 == "y"){
            pLNL1 = "Anaconda";
        }
        else if(pLNL1 == "Z" || pLNL1 == "z"){
            pLNL1 = "Diamond";
        }
    pOne.innerHTML = `${pFNL1} ${pLNL1}`;
    p1Score.innerHTML = 0;
    p1Counter.innerHTML = 0;
    p1Back.style.backgroundColor = "rgba(207, 167, 33, 0.514)";
    
    let pFNL2 = prompt("Now, player 2 - let's get that DRAG name! First letter of your first name?");
    let pLNL2 = prompt("Yas gawd! And the first letter of your last name?");
        if(pFNL2 == "A" || pFNL2 == "a") {
            pFNL2 = "Peaches";
        }
        else if(pFNL2 == "B" || pFNL2 == "b"){
            pFNL2 = "Backroll";
        }
        else if(pFNL2 == "C" || pFNL2 == "c"){
            pFNL2 = "Orgazma";
        }
        else if(pFNL2 == "D" || pFNL2 == "d" ){
            pFNL2 = "Sequence";
        }
        else if(pFNL2 == "E" || pFNL2 == "e"){
            pFNL2 = "Felicia";
        }
        else if(pFNL2 == "F" || pFNL2 == "f"){
            pFNL2 = "Kiki";
        }
        else if(pFNL2 == "G" || pFNL2 == "g"){
            pFNL2 = "Nutmeg";
        }
        else if(pFNL2 == "H" || pFNL2 == "h"){
            pFNL2 = "Summer";
        }
        else if(pFNL2 == "I" || pFNL2 == "i"){
            pFNL2 = "Iona";;
        }
        else if(pFNL2 == "J" || pFNL2 == "j"){
            pFNL2 = "Ornacia";
        }
        else if(pFNL2 == "K" || pFNL2 == "k"){
            pFNL2 = "Ivana";
        }
        else if(pFNL2 == "L" || pFNL2 == "l"){
            pFNL2 = "Charity";
        }
        else if(pFNL2 == "M" || pFNL2 == "m"){
            pFNL2 = "Ophelia";
        }
        else if(pFNL2 == "N" || pFNL2 == "n"){
            pFNL2 = "Toxic";
        }
        else if(pFNL2 == "O" || pFNL2 == "o"){
            pFNL2 = "Olivia";
        }
        else if(pFNL2 == "P" || pFNL2 == "p"){
            pFNL2 = "Ida";
        }
        else if(pFNL2 == "Q" || pFNL2 == "q"){
            pFNL2 = "Regina";
        }
        else if(pFNL2 == "R" || pFNL2 == "r"){
            pFNL2 = "Alotta";
        }
        else if(pFNL2 == "S" || pFNL2 == "s"){
            pFNL2 = "Mimi";
        }
        else if(pFNL2 == "T" || pFNL2 == "t"){
            pFNL2 = "Frieda";
        }
        else if(pFNL2 == "U" || pFNL2 == "u"){
            pFNL2 = "Sasha";
        }
        else if(pFNL2 == "V" || pFNL2 == "v"){
            pFNL2 = "Tyra";
        }
        else if(pFNL2 == "W" || pFNL2 == "w"){
            pFNL2 = "Bon Qui Qui";
        }
        else if(pFNL2 == "X" || pFNL2 == "x"){
            pFNL2 = "Coco";
        }
        else if(pFNL2 == "Y" || pFNL2 == "y"){
            pFNL2 = "Karen";
            pFNL2 = "Karen";
        }
        else if(pFNL2 == "Z" || pFNL2 == "z"){
            pFNL2 = "Zizi";
        }

        if(pLNL2 == "A" || pLNL2 == "a"){
            pLNL2 = "Rivers";
        }
        else if(pLNL2 == "B" || pLNL2 == "b"){
            pLNL2 = "Lake";
        }
        else if(pLNL2 == "C" || pLNL2 == "c"){
            pLNL2 = "Surprise";
        }
        else if(pLNL2 == "D" || pLNL2 == "d"){
            pLNL2 = "Eleganza";
        }
        else if(pLNL2 == "E" || pLNL2 == "e"){
            pLNL2 = "Goodnight";
        }
        else if(pLNL2 == "F" || pLNL2 == "f"){
            pLNL2 = "Kayne";
        }
        else if(pLNL2 == "G" || pLNL2 == "g"){
            pLNL2 = "Beaverhousen";
        }
        else if(pLNL2 == "H" || pLNL2 == "h"){
            pLNL2 = "Balls";
        }
        else if(pLNL2 == "I" || pLNL2 == "i"){
            pLNL2 = "Summers";
        }
        else if(pLNL2 == "J" || pLNL2 == "j"){
            pLNL2 = "Vision";
        }
        else if(pLNL2 == "K" || pLNL2 == "k"){
            pLNL2 = "Heaux";
        }
        else if(pLNL2 == "L" || pLNL2 == "l"){
            pLNL2 = "Cutab*tch";
        }
        else if(pLNL2 == "M" || pLNL2 == "m"){
            pLNL2 = "Filth";
        }
        else if(pLNL2 == "N" || pLNL2 == "n"){
            pLNL2 = "Tucker";
        }
        else if(pLNL2 == "O" || pLNL2 == "o"){
            pLNL2 = "Monsoon";
        }
        else if(pLNL2 == "P" || pLNL2 == "p"){
            pLNL2 = "Wylde";
        }
        else if(pLNL2 == "Q" || pLNL2 == "q"){
            pLNL2 = "Latifah";
        }
        else if(pLNL2 == "R" || pLNL2 == "r"){
            pLNL2 = "O'Plenty";
        }
        else if(pLNL2 == "S" || pLNL2 == "s"){
            pLNL2 = "Bang-Bang";
        }
        else if(pLNL2 == "T" || pLNL2 == "t"){
            pLNL2 = "Foxxx";
        }
        else if(pLNL2 == "U" || pLNL2 == "u"){
            pLNL2 = "Caliente";
        }
        else if(pLNL2 == "V" || pLNL2 == "v"){
            pLNL2 = "Bush";
        }
        else if(pLNL2 == "W" || pLNL2 == "w"){
            pLNL2 = "D-Lite";
        }
        else if(pLNL2 == "X" || pLNL2 == "x"){
            pLNL2 = "Alert";
        }
        else if(pLNL2 == "Y" || pLNL2 == "y"){
            pLNL2 = "Anaconda";
        }
        else if(pLNL2 == "Z" || pLNL2 == "z"){
            pLNL2 = "Diamond";
        }
    pTwo.innerHTML= `${pFNL2} ${pLNL2}`;
    p2Score.innerHTML = 0;
    p2Counter.innerHTML = 0;
    p2Back.style.backgroundColor = "rgba(175, 25, 212, 0.589)";
})

//ROLL BUTTON - TALLY UP SCORE FUNCTION
roll.addEventListener("click", () =>{
    let randNum = Math.round(Math.random() * 5) + 1;
    dice.src = `./images/dice${randNum}.png`;
    if (activePlayer == 1) {
        if (randNum == 1) {
        p1Counter.innerHTML = 0;
        activePlayer = 2;
        changeTurn(activePlayer);
        }
        else if (p1Score.innerHTML < 20) {
            p1Counter.innerHTML = parseInt(p1Counter.innerHTML) + randNum;
        }   
    }
    else {
        if (randNum == 1) {
            p2Counter.innerHTML = 0;
            activePlayer = 1;
            changeTurn(activePlayer);
        }
        else if (p2Score.innerHTML < 20) {
            p2Counter.innerHTML = parseInt(p2Counter.innerHTML) + randNum;
        }
    }
})

//HOLD BUTTON - CONFIRM TALLY TO ACTUAL SCORE FUNCTION
hold.addEventListener("click", () =>{
    if (activePlayer == 1) {
        p1Score.innerHTML = parseInt(p1Score.innerHTML) + parseInt(p1Counter.innerHTML);
        p1Counter.innerHTML = 0;
        if (p1Score.innerHTML >= 20) {
            pOne.innerHTML = `${pOne.innerHTML}, Condragulations! Shantay, you stay!`;
            pTwo.innerHTML = `${pTwo.innerHTML}, sashay away...`;
            activePlayer = 0;
        }
        else {
            activePlayer = 2;
            changeTurn(activePlayer);
        }
    }
    else {
        p2Score.innerHTML = parseInt(p2Score.innerHTML) + parseInt(p2Counter.innerHTML);
        p2Counter.innerHTML = 0;
        if (p2Score.innerHTML >= 20) {
            pTwo.innerHTML = `${pTwo.innerHTML}, Condragulations! Shantay, you stay!`;
            pOne.innerHTML = `${pOne.innerHTML}, sashay away...`;
            activePlayer = 0;
        }
        else {
            activePlayer = 1;
            changeTurn(activePlayer);
        }
    }
})