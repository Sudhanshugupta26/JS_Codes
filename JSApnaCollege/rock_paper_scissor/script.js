let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const drawGame= ()=>{
    console.log('Game Draw')
    msg.innerText = "Game was Draw! Play Again."
    msg.style.backgroundColor = "whitesmoke"
    msg.style.color = "dodgerblue"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin) {
        console.log("YOU WIN")
        userScore++
        userScorePara.innerText=userScore
        msg.innerText = `YOU WIN! Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
    }else{
        compScore++
        compScorePara.innerText=compScore
        console.log("YOU LOSE")
        msg.innerText = `YOU LOSE! ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        msg.style.color = "white"
    }
}

const playGame =(userChoice)=>{
    console.log("Choice clicked",userChoice)
    // rock paper scissor
    const compChoice = genCompChoice()
    console.log(compChoice)
    if(compChoice===userChoice){ // Draw game
        drawGame()
    }else{
        let userWin = true
        if (userChoice==='Rock') {
            // Scissors,paper
            userWin = compChoice==='Paper'?false:true
        }else if (userChoice==='Paper') {
            //rock,scissor
            userWin = compChoice==='Scissors'?false:true
        }else{
            //paper,rock
            userWin = compChoice==='Rock'?false:true
        }
        showWinner(userWin ,userChoice,compChoice)
    }
}

const genCompChoice=()=>{
    const options = ["Rock","Paper","Scissors"];
    const randidx= Math.floor(Math.random()*3)         // to generate num btw 1 to 3
    return options[randidx]
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})