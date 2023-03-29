let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)
let player = {
  name : "Per",
  chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 
let sum = 0
function startGame(){
  let firstCard = getRandomValue()
  let secondCard = getRandomValue() 
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  isAlive = true
  renderGame()
}
function renderGame(){
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let i=0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }
  if(sum===21){
  message = "whohoo, youv've got blackjack!🥳"
  hasBlackJack = true
}
else if(sum<21){
  message = "Do you want to draw another card?🙂" 
}
else{
  message = "you're out of the game 😭"
  isAlive = false 
}
messageEl.textContent = message
}
function newCard(){
  if (hasBlackJack === false && isAlive === true){
    let thirdCard = getRandomValue()
  sum += thirdCard
  cards.push(thirdCard)
  console.log(cards)
  renderGame()
}}

function getRandomValue(){
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10){
    return 10
  } else if (randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }}
