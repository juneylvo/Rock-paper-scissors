function getComputerChoice(){
    if (Math.random() < 0.33){
        return "Rock"
    }

    else if (Math.random() >= 0.33 && Math.random <= 0.66){
        return "Scissors"
    }

    else{
        return "Paper"
    }
}



function getHumanChoice(){

    let choice =  prompt("Please choose between rock,paper, or scissors")
    if (choice.toLowerCase == "rock" || choice.toLowerCase == "scissors" || choice.toLowerCase == "paper"){
    return choice}

    else{
        return "please enter a valid option."
    }
}

function playRound(){

    let humanScore = 0
    let computerScore = 0

    function playRound(HumanChoice,ComputerChoice){
        let HumanChoicelower = HumanChoice.toLowerCase()

        if (HumanChoicelower == ComputerChoice){
            console.log("It's a draw!")
        }

        else if ("rockscissorspaperrock".includes(humanChoiceLower + computerChoice)){
            console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;
        }
        else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        }    
}

for (let i = 0; i <= 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
    console.log("The current scores are:")
    console.log("User: " + humanScore);
    console.log("Computer: " + computerScore);
}

if (humanScore > computerScore){
    console.log("Well done! You won!");
}
else if (computerScore > humanScore){
    console.log("Tough luck! The computer won!");
}
else{
    console.log("It was a draw! We should play again.")
}
}
