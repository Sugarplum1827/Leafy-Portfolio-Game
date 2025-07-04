// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [IntroScene, TownScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 400,
            height: 300
        },
        max: {
            width: 1200,
            height: 900
        }
    },
    pixelArt: true,
    antialias: false
};

// Initialize game
let game;

// Hide loading screen and start game
function startGame() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    
    game = new Phaser.Game(config);
    
    // Global game variables
    window.gameData = {
        playerName: 'Jake',
        currentScene: 'intro',
        dialogueSystem: null,
        gameCompleted: false
    };
}

// Start the game after a short delay
setTimeout(startGame, 1500);

// Handle window resize
window.addEventListener('resize', () => {
    if (game) {
        game.scale.refresh();
    }
});

// Prevent context menu on right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Prevent default browser shortcuts that might interfere
    if (e.code === 'Space' || e.code === 'Enter' || 
        e.code === 'KeyW' || e.code === 'KeyA' || 
        e.code === 'KeyS' || e.code === 'KeyD') {
        e.preventDefault();
    }
});
