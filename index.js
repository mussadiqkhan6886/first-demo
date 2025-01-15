const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");
const hands = document.querySelectorAll(".name");
const player = document.querySelector(".humanChoice");
const computer = document.querySelector(".computerChoice");

const handsArr = ["rock", "paper", "scissor"];
// console.log(randomNum);

function game(){
    hands.forEach((hand) => {
        hand.addEventListener("click", (e) => {
            win.innerHTML = "";
            lose.innerHTML = "";
            tie.innerHTML = "";
            let randomNum = Math.floor(Math.random() * 3);
            console.log(randomNum);
            let computerChoice = handsArr[randomNum];
            let playerChoice = e.target.innerHTML;
            player.innerHTML = `Player: <span>${playerChoice}</span>`;
            computer.innerHTML = `Computer: <span>${computerChoice}</span>`;
            if(playerChoice === computerChoice){
                tie.innerHTML = "Tie";
            }else{
                if(playerChoice === "rock" && computerChoice === "paper"){
                    lose.innerHTML = "Lose";
                    // win.innerHTML = "";
                }else if(playerChoice === "rock" && computerChoice === "scissor"){
                    win.innerHTML = "Win";
                    // lose.innerHTML = "";
                }else if(playerChoice === "paper" && computerChoice === "rock"){
                    win.innerHTML = "Win";
                }else if(playerChoice === "paper" && computerChoice === "scissor"){
                    lose.innerHTML = "Lose";
                }else if(playerChoice === "scissor" && computerChoice === "rock"){
                    lose.innerHTML = "Lose";
                }else if(playerChoice === "scissor" && computerChoice === "paper"){
                    win.innerHTML = "Win";
                }else{
                    throw new Error("Issue in game");
                }
            }
    
            // console.log(e.target.innerHTML);
        })
    })
}

game();