let min=3
let max=7
// let firstCard = Math.floor(Math.random()*(max - min)+ min)
// let secondCard =  Math.floor(Math.random()*(max - min)+ min)
// let sum = firstCard + secondCard
let firstCard
let secondCard
let sum
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
     firstCard = Math.floor(Math.random()*(max - min)+ min)
 secondCard =  Math.floor(Math.random()*(max - min)+ min)
 sum = firstCard + secondCard
    
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
   
}


function newCard() {
    if(sum<21){
    let card= Math.floor(Math.random()*(max - min)+ min)
    sum+=card
    cardsEl.innerText+=" "
    cardsEl.innerText+=" " + card
    console.log("Drawing a new card from the deck!")
    sumEl.innerText="Sum:"+" "+sum
    // 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame()
    if(sum<21){
    messageEl.innerText="Do you want to draw a new card?"
    } else if(sum===21){
        messageEl.innerText="Wohoo you won the jackpot!!"
        }else {
    messageEl.innerText="You are out of the game!!"
    }
    }else{
        
    }
    
}

function newgame(){
    messageEl.innerText="Want to play a round?"
    cardsEl.innerText="Cards:"
    sumEl.innerText="Sum:"
    sum=0
}

