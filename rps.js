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

function game(){
    let playerChoice = prompt("Choose either rock, paper or scissors")
    playerChoice = playerChoice.toUpperCase()
    let x = ComputerChoice()
    console.log(x,playerChoice)
    if (playerChoice === x){
        alert("Game was a draw")
    }
    else{
        if (playerChoice == "ROCK"){
            if (x== "SCISSORS"){
                alert("Player won!")
                playerScore++
            }
            else{
                alert("Computer won")
                computerScore++
            }
        }
        else if (playerChoice =="PAPER"){
            if (x== "ROCK"){
                alert("Player won!")
                playerScore++
            }
            else{
                alert("Computer won")
                computerScore++
            }
        }
        else if (playerChoice =="SCISSORS"){
            if (x== "PAPER"){
                alert("Player won!")
                playerScore++
            }
            else{
                alert("Computer won")
                computerScore++
            }
        }
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

game()
game()
game()
game()
game()
result(playerScore,computerScore)