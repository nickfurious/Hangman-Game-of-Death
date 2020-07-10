const wordEl = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['shogun', 'ninja', 'samurai', 'assassin', 'killer', 'murder', 'sniper', 'maniac', 'hitman', 'homicidal', 'suicide', 'zombie', 'decapitated', 'guillotine', 'slaughter', 'poison', 'deathblow', 'executioner', 'strangler', 'slayer', 'weapon', 'murdererous', 'gunpowder', 'ammunition', 'destruction'];

let selectWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
      .split('')
      .map(letter => `
      <span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}
      </span>
      `
    )
    .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
}

// Keydown letter press
window.addEventListener('keydown', e => {
  
});

displayWord();