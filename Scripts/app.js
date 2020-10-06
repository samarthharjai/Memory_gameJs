document.addEventListener('DOMContentLoaded', () => {

    // Array of cards
    const cardArray = [
        {
            name: 'nasa',
            img: 'images/nasa.png',
        },
        {
            name: 'nasa',
            img: 'images/nasa.png'
        },
        {
            name: 'pepsi',
            img: 'images/pepsi.png'
        },
        {
            name: 'pepsi',
            img: 'images/pepsi.png'
        },
        {
            name: 'starbucks',
            img: 'images/starbucks.png'
        },
        {
            name: 'starbucks',
            img: 'images/starbucks.png'
        },
        {
            name: 'facebook',
            img: 'images/facebook.png'
        },
        {
            name: 'facebook',
            img: 'images/facebook.png'
        },
        {
            name: 'burgerking',
            img: 'images/burgerking.png'
        },
        {
            name: 'burgerking',
            img: 'images/burgerking.png'
        },
        {
            name: 'xbox',
            img: 'images/xbox.png'
        },
        {
            name: 'xbox',
            img: 'images/xbox.png'
        },
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/back.png')
      cards[optionTwoId].setAttribute('src', 'images/back.png')
      alert(`Stop clicking on the same image`)
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert(`Nice Job Now Do it Again`)
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/back.png')
      cards[optionTwoId].setAttribute('src', 'images/back.png')
      alert(`try again! Dont Fail`)
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You Won'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})