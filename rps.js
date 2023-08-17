let playerScore = 0
let computerScore = 0

function ComputerChoice(){
    let x = Math.floor(Math.random() * 3); //why cant javascript not be gay and generate random numbers like a normal language >>>>>:))))
    console.log(x)
    if (x == 0){
        return "ROCK";
    }
    else if (x==1){
        return "PAPER";
    }
    else if (x==2){
        return "SCISSORS";
    }
    
}

const computerOutputBar = document.querySelector("h3")
let roundToPlay = parseInt(prompt("How many rounds would you like to play?"))

function game(playerChoice){
    playerChoice = playerChoice.toUpperCase()
    let x = ComputerChoice()
    console.log(x,playerChoice)
    if (roundToPlay != 0){
        console.log(roundToPlay)
        if (playerChoice === x){
            computerOutputBar.textContent = ("Game was a draw")
        }
        else{
            if (playerChoice == "ROCK"){
                if (x== "SCISSORS"){
                    computerOutputBar.textContent = ("Player won")
                    playerScore++
                }
                else{
                    computerOutputBar.textContent = ("Computer won")
                    computerScore++
                }
            }
            else if (playerChoice =="PAPER"){
                if (x== "ROCK"){
                    computerOutputBar.textContent = ("Player won")
                    playerScore++
                }
                else{
                    computerOutputBar.textContent = ("Computer won")
                    computerScore++
                }
            }
            else if (playerChoice =="SCISSORS"){
                if (x== "PAPER"){
                    computerOutputBar.textContent = ("Player won")
                    playerScore++
                }
                else{
                    computerOutputBar.textContent = ("Computer won")
                    computerScore++
                }
            }
        roundToPlay = roundToPlay-1
        }
    }
    else if (roundToPlay == 0){
        result(playerScore,computerScore)
    }
}

function result(pScore,cScore){
    if (pScore>cScore){
        alert("Computer score was "+computerScore+"\nPlayer score was "+playerScore+"\nPlayer won!")
    }
    else if (cScore>pScore){
        alert("Computer score was "+computerScore+"\nPlayer score was "+playerScore+"\nComputer won!")
    }
    else{
        alert("Computer score was "+computerScore+"\nPlayer score was "+playerScore+"\nGame was a draw")

    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => button.addEventListener("click", (e) => game(e.target.id)))



//result(playerScore,computerScore)