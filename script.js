// Game Configuration
const config = {
    themes: {
                foodie: ['🍕', '🍔', '🍟', '🌭', '🍿', '🧁', '🍩', '🍦', '🍪', '🍫', '🍬', '🥤', '🍎', '🍌', '🍉', '🍒', '🥑', '🍇', '🍓', '🥝', '🍍', '🥕', '🌽', '🍆', '🥨', '🧀', '🥐', '🥞', '🍖', '🥩', '🌮', '🌯', '🥪', '🥗', '🍜', '🍣', '🍱', '🥟', '🍤', '🥡'],
        
        world: ['🗼', '🗽', '🗿', '🏰', '🏯', '🏟️', '🏝️', '🌋', '🌉', '🏙️', '🏞️', '🏜️', '🗻', '🏛️', '🏕️', '🌄', '🌇', '🌆', '🏔️', '⛩️', '🏥', '🏤', '🏨', '🏦', '🏪', '⛪', '🕌', '🕍', '🏢', '🏣', '🎡', '🎢', '🎪', '🌅', '🌄', '🏖️', '🗾', '🎭', '🏺', '🎨'],
        
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🦒', '🦘', '🦔', '🦦', '🦥', '🦦', '🦨', '🦃', '🦚', '🦩'],
        
        space: ['🚀', '🛸', '🌌', '🪐', '☄️', '🌟', '🌙', '🌠', '👨‍🚀', '🌍', '🌕', '🌞', '🔭', '🛰️', '🌓', '🌔', '🌖', '🌗', '🌘', '🌑', '🌒', '🌡️', '⭐', '✨', '💫', '🌚', '🌝', '🌛', '🌜', '🌏', '🌎', '👩‍🚀', '🌍', '🌃', '🌄', '🌅', '🌆', '🌇', '🌉', '🌁'],
        
        hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💖', '💗', '💓', '💝', '💘', '💕', '💞', '💌', '❣️', '💟', '💔', '💋', '💯', '💢', '💥', '💫', '💤', '💦', '💨', '🕳️', '💭', '💗', '💝', '💖', '💘', '💕', '💞', '💓', '💟', '❣️', '💌'],
        
        fantasy: ['🧙‍♂️', '🧚‍♀️', '🦄', '🐉', '🧝‍♀️', '🧛‍♂️', '🧟‍♂️', '🧞‍♀️', '👻', '🗡️', '🏹', '🔮', '💎', '👑', '🧞‍♂️', '🧜‍♀️', '🧚‍♂️', '🧝‍♂️', '🧙‍♀️', '🦹‍♀️', '🦸‍♂️', '🧠', '👁️', '🐲', '🏰', '⚔️', '🛡️', '🧿', '🪄', '📜', '🗝️', '⚡', '🎭', '🌈', '🔥', '❄️', '🌪️', '🎪', '🎇', '🎆'],
        
        vacation: ['🏖️', '🌴', '🏝️', '🛥️', '✈️', '🧳', '🏨', '🌅', '🏄‍♂️', '🍹', '⛱️', '🏊‍♀️', '🚢', '🗺️', '🏔️', '🚗', '🚕', '🚌', '🚲', '⛺', '🏕️', '🚶‍♀️', '🧗‍♀️', '⛷️', '🏂', '🏎️', '🚤', '🛳️', '🚁', '🪂', '🎪', '🎡', '🎢', '🚡', '🚠', '🚟', '🚃', '🚂', '🛩️', '🚍'],
        
        emojis: ['😀', '😍', '🤣', '😎', '🥳', '😴', '🤔', '😱', '🙄', '😤', '🥺', '😂', '😇', '🤩', '😭', '🥰', '😊', '😉', '😌', '🤪', '😜', '😝', '🤑', '🤯', '😲', '😮', '😳', '🥵', '🥶', '😈', '🤓', '🧐', '🤠', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥴'],
        
        gems: ['💎', '💍', '👑', '💄', '💰', '💲', '👛', '👝', '👜', '🧳', '💼', '💸', '💵', '🪙', '💴', '💶', '💷', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🔑', '🗝️', '📿', '⚱️', '🏺', '💠', '🧿', '👒', '🎩', '🎓', '👒', '⛑️', '💝', '🎁', '🎀', '🎊', '🎉'],
        
        festivals: ['🎄', '🎅', '🎁', '🎃', '👻', '🦃', '🥚', '🐰', '🎆', '🎇', '🧨', '🎈', '🎉', '🎊', '🎀', '🎌', '🏮', '🪔', '🧧', '✨', '🎪', '🎭', '🎨', '🎬', '🎼', '🎷', '🎸', '🎹', '🎺', '🎻', '🥁', '🪘', '🎯', '🎲', '🎮', '🎨', '🎭', '🎪', '🎢', '🎡']

    },
    cardColors: {
        black: '#000000',
        red: '#ED1C24',
        green: '#009a4e',
        yellow: '#fff200',
        blue: '#000099'
    },
    levelConfig: {
        1: { cards: 12, maxMisses: Infinity },
        2: { cards: 16, maxMisses: Infinity },
        3: { cards: 20, maxMisses: Infinity },
        4: { cards: 24, maxMisses: Infinity },
        5: { cards: 28, maxMisses: Infinity },
        6: { cards: 12, maxMisses: 6 },
        7: { cards: 16, maxMisses: 8 },
        8: { cards: 20, maxMisses: 10 },
        9: { cards: 24, maxMisses: 12 },
        10: { cards: 28, maxMisses: 14 }
    }
};

// DOM Elements
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');
const gameOverPage = document.getElementById('gameOverPage');
const startButton = document.getElementById('startButton');
const homeIcon = document.getElementById('homeIcon');
const gameGrid = document.getElementById('gameGrid');
const levelTitle = document.getElementById('levelTitle');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const movesEl = document.getElementById('moves');
const accuracyEl = document.getElementById('accuracy');
const gameOverTitle = document.getElementById('gameOverTitle');
const replayButton = document.getElementById('replayButton');
const newGameButton = document.getElementById('newGameButton');
const celebrationContainer = document.getElementById('celebrationContainer');
const celebrationText = document.getElementById('celebrationText');
const confettiContainer = document.getElementById('confettiContainer');
const colorSelect = document.getElementById('colorSelect');
const levelSelect = document.getElementById('levelSelect');
const themeSelect = document.getElementById('themeSelect');
const matchSound = document.getElementById('matchSound');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const missesEl = document.getElementById('misses');

// Game State
let gameState = {
    selectedColor: 'black',
    selectedLevel: 1,
    selectedTheme: 'foodie',
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    totalPairs: 0,
    moves: 0,
    correctMoves: 0,
    misses: 0,
    gameStarted: false,
    gameOver: false,
    timer: null,
    time: 0,
    maxMisses: Infinity
};

// Event Listeners
function initEventListeners() {
    startButton.addEventListener('click', startGame);
    homeIcon.addEventListener('click', goToHome);
    replayButton.addEventListener('click', replay);
    newGameButton.addEventListener('click', goToHome);
    colorSelect.addEventListener('change', updateCardColor);
}

// Initialize Game
function init() {
    initEventListeners();
    homeIcon.style.display = 'none'; // Hide home icon on home page
    preloadSounds(); // Preload sounds when the game initializes
}

// Preload sounds to eliminate first-time delay
function preloadSounds() {
    // Preload match sound
    matchSound.preload = 'auto';
    matchSound.load();
    // Force a silent play to initialize the audio engine
    try {
        matchSound.play().then(() => {
            matchSound.pause();
            matchSound.currentTime = 0;
        }).catch(e => {
            // Silent error handling - some browsers require user interaction first
        });
        
        // Also preload win and lose sounds
        winSound.preload = 'auto';
        winSound.load();
        loseSound.preload = 'auto';
        loseSound.load();
    } catch (e) {
        // Fallback for browsers that don't support promises with audio
    }
}

// Navigation Functions
function showPage(page) {
    homePage.classList.add('hidden');
    gamePage.classList.add('hidden');
    gameOverPage.classList.add('hidden');
    
    page.classList.remove('hidden');
    
    if (page === homePage) {
        homeIcon.style.display = 'none';
    } else {
        homeIcon.style.display = 'block';
    }
}

function goToHome() {
    resetGame();
    showPage(homePage);
}

// Game Logic
function startGame() {
    gameState.selectedColor = colorSelect.value;
    gameState.selectedLevel = parseInt(levelSelect.value);
    gameState.selectedTheme = themeSelect.value;
    
    const levelData = config.levelConfig[gameState.selectedLevel];
    gameState.totalPairs = levelData.cards / 2;
    gameState.maxMisses = levelData.maxMisses;
    
    resetGameState();
    createCards();
    updateUI();
    startTimer();
    
    // Make sure sounds are ready before starting the game
    ensureSoundsReady();
    
    levelTitle.textContent = `LEVEL ${gameState.selectedLevel}`;
    showPage(gamePage);
}

// Ensure sounds are ready before the first match
function ensureSoundsReady() {
    // Create and play an inaudible sound to "wake up" the audio system
    const silentSound = new Audio();
    silentSound.volume = 0.001; // Nearly silent
    document.addEventListener('click', function initAudio() {
        silentSound.play().catch(e => {});
        document.removeEventListener('click', initAudio);
    }, { once: true });
    
    // Make sure match sound is loaded and ready
    if (matchSound.readyState < 2) { // Less than HAVE_CURRENT_DATA
        matchSound.load();
    }
    
    // Also prepare win and lose sounds
    winSound.load();
    loseSound.load();
}

function resetGameState() {
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.moves = 0;
    gameState.correctMoves = 0;
    gameState.misses = 0;
    gameState.gameStarted = true;
    gameState.gameOver = false;
    gameState.time = 0;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

function resetGame() {
    resetGameState();
    gameGrid.innerHTML = '';
    gameState.gameStarted = false;
}

// Select random emojis from the theme
function getRandomEmojis(theme, count) {
    const themeEmojis = config.themes[theme];
    const shuffledEmojis = shuffle([...themeEmojis]);
    return shuffledEmojis.slice(0, count);
}

function createCards() {
    gameGrid.innerHTML = '';
    const cardCount = config.levelConfig[gameState.selectedLevel].cards;
    const pairsNeeded = cardCount / 2;

    gameGrid.setAttribute('data-cards', cardCount);
    
    // Get random emojis for this game
    const selectedEmojis = getRandomEmojis(gameState.selectedTheme, pairsNeeded);
    
    // Create pairs of cards
    let cards = [];
    for (let i = 0; i < pairsNeeded; i++) {
        const emoji = selectedEmojis[i];
        cards.push(emoji, emoji); // Add each emoji twice to create pairs
    }
    
    // Shuffle cards
    gameState.cards = shuffle(cards);
    
    // Create card elements
    gameState.cards.forEach((emoji, index) => {
        const card = createCardElement(emoji, index);
        gameGrid.appendChild(card);
    });
    
    // Adjust grid columns for responsiveness
    adjustGridColumns();
}

function createCardElement(emoji, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-front" style="background-color: ${config.cardColors[gameState.selectedColor]}"></div>
            <div class="card-face card-back">${emoji}</div>
        </div>
    `;
    
    card.addEventListener('click', () => flipCard(card, index));
    return card;
}

function flipCard(card, index) {
    // Prevent flipping if:
    if (
        gameState.gameOver || // Game is over
        gameState.flippedCards.length >= 2 || // Already have 2 flipped cards
        card.classList.contains('flipped') || // Card is already flipped
        card.classList.contains('matched') // Card is already matched
    ) {
        return;
    }
    
    // Flip the card
    card.classList.add('flipped');
    gameState.flippedCards.push({ card, index });
    
    // Check for match when two cards are flipped
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = gameState.flippedCards;
    const isMatch = gameState.cards[card1.index] === gameState.cards[card2.index];
    
    // Clone the audio for simultaneous plays (prevents delays on consecutive matches)
    const playMatchSound = () => {
        // Use the original sound for better compatibility
        matchSound.currentTime = 0;
        matchSound.play().catch(e => {});
    };
    
    setTimeout(() => {
        if (isMatch) {
            // Match found - play sound immediately
            playMatchSound();
            
            card1.card.classList.add('matched');
            card2.card.classList.add('matched');
            gameState.matchedPairs++;
            gameState.correctMoves++;
            
            // Update score
            updateScore();
            
            // Check if game is completed
            if (gameState.matchedPairs === gameState.totalPairs) {
                endGame(true);
            }
        } else {
            // No match
            card1.card.classList.remove('flipped');
            card2.card.classList.remove('flipped');
            gameState.misses++;
            
            // Check if max misses reached
            if (gameState.misses >= gameState.maxMisses) {
                endGame(false);
            }
        }
        
        // Reset flipped cards
        gameState.flippedCards = [];
        
        // Update UI
        updateUI();
    }, 1000);
}

function endGame(isWin) {
    gameState.gameOver = true;
    clearInterval(gameState.timer);
    
    if (isWin) {
        showCelebration('YOU WON!!');
        winSound.currentTime = 0;
        winSound.play().catch(e => {});
    } else {
        showCelebration('YOU LOST!');
        loseSound.currentTime = 0;
        loseSound.play().catch(e => {});
    }
    
    setTimeout(() => {
        hideCelebration();
        gameOverTitle.textContent = isWin ? 'YOU WON!!' : 'GAME OVER!!';
        showPage(gameOverPage);
    }, 3000);
}

function updateScore() {
    // Calculate score: Each match is worth 10 points
    const score = gameState.matchedPairs * 10;
    scoreEl.textContent = score;
}

function updateUI() {
    // Update moves
    movesEl.textContent = gameState.moves;
    
    // Update misses with left count in same line (for challenge levels)
    if (gameState.maxMisses < Infinity) {
        const missesLeft = Math.max(0, gameState.maxMisses - gameState.misses);
        missesEl.textContent = `${gameState.misses} (${missesLeft} left)`;
    } else {
        missesEl.textContent = gameState.misses;
    }
    
    // Update accuracy
    const accuracy = gameState.moves > 0 
        ? Math.round((gameState.correctMoves / gameState.moves) * 100) 
        : 0;
    accuracyEl.textContent = `${accuracy} %`;
    
    // Update score
    updateScore();
}

function startTimer() {
    gameState.time = 0;
    timeEl.textContent = '0 sec';
    
    gameState.timer = setInterval(() => {
        gameState.time++;
        timeEl.textContent = `${gameState.time} sec`;
    }, 1000);
}

function replay() {
    resetGame();
    startGame();
}

// Helper Functions
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function adjustGridColumns() {
    const cardCount = gameState.cards.length;
    
    // Always use 4 columns as per requirements
    gameGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    
    // Adjust card sizes based on card count
    if (cardCount > 20) {
        document.documentElement.style.setProperty('--card-size', '70px');
    } else {
        document.documentElement.style.setProperty('--card-size', '80px');
    }
}

function updateCardColor() {
    const selectedColor = colorSelect.value;
    document.querySelectorAll('.card-front').forEach(card => {
        card.style.backgroundColor = config.cardColors[selectedColor];
    });
}

// Celebration Animation
function showCelebration(message) {
    celebrationText.textContent = message;
    celebrationContainer.classList.remove('hidden');
    createConfetti();
}

function hideCelebration() {
    celebrationContainer.classList.add('hidden');
    confettiContainer.innerHTML = '';
}

function createConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#fff200', '#ED1C24', '#009a4e', '#000099', 'white'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Initialize game on page load
window.addEventListener('load', init);