class IntroScene extends Phaser.Scene {
    constructor() {
        super({ key: 'IntroScene' });
        this.flickerTimer = 0;
        this.textVisible = true;
        this.fadeCompleted = false;
    }

    preload() {
        // Create simple colored rectangles as placeholder sprites
        this.load.image('player', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAFklEQVR42mNk+M9QzzBKmxgNgwGjYQAAKv4D/TLT4LwAAAAASUVORK5CYII=');
        
        // Load background music if available
        this.load.audio('background', '/sounds/background.mp3');
        
        // Create a simple player sprite as a colored rectangle
        this.add.graphics()
            .fillStyle(0x4CAF50)
            .fillRect(0, 0, 32, 32)
            .generateTexture('player-sprite', 32, 32);
    }

    create() {
        // Set up the scene with black background
        this.cameras.main.setBackgroundColor('#000000');
        
        // Add fade-in effect
        this.cameras.main.fadeIn(2000, 0, 0, 0);
        
        // Create player sprite in center
        this.player = this.add.sprite(400, 250, 'player-sprite');
        this.player.setScale(2);
        this.player.setAlpha(0);
        
        // Fade in player sprite
        this.tweens.add({
            targets: this.player,
            alpha: 1,
            duration: 2000,
            delay: 1000,
            onComplete: () => {
                this.fadeCompleted = true;
                this.showText();
            }
        });
        
        // Set up input
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
        // Add background music
        if (this.sound.get('background')) {
            this.backgroundMusic = this.sound.add('background', { loop: true, volume: 0.3 });
        }
    }

    showText() {
        // Create title text
        this.titleText = this.add.text(400, 350, "Jake's Portfolio", {
            fontSize: '32px',
            fontFamily: 'Orbitron, monospace',
            color: '#FFFFFF',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 2
        });
        this.titleText.setOrigin(0.5);
        
        // Create instruction text
        this.instructionText = this.add.text(400, 400, 'Press ENTER to Start', {
            fontSize: '18px',
            fontFamily: 'Orbitron, monospace',
            color: '#FFFF00',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 1
        });
        this.instructionText.setOrigin(0.5);
        
        // Start flicker effect
        this.flickerTimer = this.time.addEvent({
            delay: 500,
            callback: this.flickerText,
            callbackScope: this,
            loop: true
        });
    }

    flickerText() {
        if (this.instructionText) {
            this.textVisible = !this.textVisible;
            this.instructionText.setVisible(this.textVisible);
        }
    }

    update() {
        // Check for Enter key press
        if (this.fadeCompleted && this.enterKey && Phaser.Input.Keyboard.JustDown(this.enterKey)) {
            this.transitionToTown();
        }
    }

    transitionToTown() {
        // Stop flicker timer
        if (this.flickerTimer) {
            this.flickerTimer.destroy();
        }
        
        // Start background music if available
        if (this.backgroundMusic && !this.backgroundMusic.isPlaying) {
            this.backgroundMusic.play();
        }
        
        // Fade out and transition to town scene
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('TownScene');
        });
    }
}
