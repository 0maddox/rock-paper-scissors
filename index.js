const playerText =document.querySelector("#playerText")
const computerText =document.querySelector("#computerText")
const resultText =document.querySelector("#resultText")
const choiceButtons=document.querySelectorAll(".choiceButton")
let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", ()=>{
    
    player=button.textContent;
    computerTurn();
    playerText.textContent =`Player: ${player}`;
    computerText.textContent =`Computer: ${computer}`;
    resultText.textContent =checkhWinner();
}))

function computerTurn(){

    const randNum = Math.floor(math.random() * 3) + 1 ;
    switch(randNum){
        case 1: 
        computer = "ROCK"
        break
        case 2:
        computer = "PAPER"
        break
            case 3:
       computer = "SCISSORS"
       break
    break
    }
}
function checkhWinner(){
    if(player == computer){
    return "DRAW"}

    else if (computer =="ROCK"){
    return(player =="PAPER")? "you win!":"you lose!"}
   
    else if (computer =="PAPER"){
        return(player =="SCISSORS")? "you win!":"you lose!"}

    else if (computer =="SCISSORS"){
            return(player =="ROCK")? "you win!":"you lose!"}
}