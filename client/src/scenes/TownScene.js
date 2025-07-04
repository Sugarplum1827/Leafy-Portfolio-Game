class TownScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TownScene' });
        this.player = null;
        this.npcs = [];
        this.buildings = [];
        this.cursors = null;
        this.wasd = null;
        this.spaceKey = null;
        this.dialogueSystem = null;
        this.interactionZones = [];
        this.currentInteractionNPC = null;
        this.gameCompleted = false;
    }

    preload() {
        // Create placeholder sprites with different colors for buildings and NPCs
        this.createPlaceholderSprites();
        
        // Load sound effects
        this.load.audio('interact', 'sounds/hit.mp3');
        this.load.audio('complete', 'sounds/success.mp3');
    }

    createPlaceholderSprites() {
        // Player sprite (green)
        this.add.graphics()
            .fillStyle(0x4CAF50)
            .fillRect(0, 0, 24, 24)
            .generateTexture('player-sprite', 24, 24);
        
        // NPC sprite (blue)
        this.add.graphics()
            .fillStyle(0x2196F3)
            .fillRect(0, 0, 24, 24)
            .generateTexture('npc-sprite', 24, 24);
        
        // Black roof house
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 64, 64)
            .fillStyle(0x000000)
            .fillRect(0, 0, 64, 16)
            .generateTexture('house-black', 64, 64);
        
        // Brown roof house
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 64, 64)
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 64, 16)
            .generateTexture('house-brown', 64, 64);
        
        // Red roof building
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 64, 64)
            .fillStyle(0xFF0000)
            .fillRect(0, 0, 64, 16)
            .generateTexture('building-red', 64, 64);
        
        // Blue roof building
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 64, 64)
            .fillStyle(0x0000FF)
            .fillRect(0, 0, 64, 16)
            .generateTexture('building-blue', 64, 64);
        
        // Purple roof museum (large)
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 96, 80)
            .fillStyle(0x800080)
            .fillRect(0, 0, 96, 20)
            .generateTexture('museum-purple', 96, 80);
        
        // Small purple hut
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 48, 48)
            .fillStyle(0x800080)
            .fillRect(0, 0, 48, 12)
            .generateTexture('hut-purple', 48, 48);
        
        // Signpost
        this.add.graphics()
            .fillStyle(0x8B4513)
            .fillRect(0, 0, 16, 32)
            .fillStyle(0xFFFFFF)
            .fillRect(0, 0, 16, 16)
            .generateTexture('signpost', 16, 32);
        
        // Grass/ground tile
        this.add.graphics()
            .fillStyle(0x4CAF50)
            .fillRect(0, 0, 32, 32)
            .generateTexture('grass-tile', 32, 32);
        
        // Path tile
        this.add.graphics()
            .fillStyle(0xD2B48C)
            .fillRect(0, 0, 32, 32)
            .generateTexture('path-tile', 32, 32);
        
        // Flower field
        this.add.graphics()
            .fillStyle(0x90EE90)
            .fillRect(0, 0, 32, 32)
            .fillStyle(0xFF69B4)
            .fillCircle(8, 8, 3)
            .fillCircle(24, 8, 3)
            .fillCircle(8, 24, 3)
            .fillCircle(24, 24, 3)
            .generateTexture('flower-tile', 32, 32);
    }

    create() {
        // Initialize dialogue system
        this.dialogueSystem = new DialogueSystem(this);
        window.gameData.dialogueSystem = this.dialogueSystem;
        
        // Set up world
        this.physics.world.setBounds(0, 0, 800, 600);
        
        // Create ground tiles
        this.createGround();
        
        // Create buildings and NPCs
        this.createBuildings();
        this.createNPCs();
        
        // Create player
        this.createPlayer();
        
        // Set up input
        this.setupInput();
        
        // Set up camera
        this.cameras.main.setBounds(0, 0, 800, 600);
        this.cameras.main.startFollow(this.player);
        
        // Fade in
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        
        // Add sound effects
        this.interactSound = this.sound.add('interact', { volume: 0.5 });
        this.completeSound = this.sound.add('complete', { volume: 0.7 });
    }

    createGround() {
        // Create a simple ground pattern
        for (let x = 0; x < 800; x += 32) {
            for (let y = 0; y < 600; y += 32) {
                if (x >= 300 && x <= 500 && y >= 200 && y <= 400) {
                    // Central path area
                    this.add.image(x, y, 'path-tile').setOrigin(0);
                } else if (x >= 50 && x <= 150 && y >= 100 && y <= 200) {
                    // Flower field area
                    this.add.image(x, y, 'flower-tile').setOrigin(0);
                } else {
                    // Grass everywhere else
                    this.add.image(x, y, 'grass-tile').setOrigin(0);
                }
            }
        }
    }

    createBuildings() {
        const buildingData = [
            { x: 100, y: 300, sprite: 'house-black', id: 'house1' },
            { x: 200, y: 300, sprite: 'house-black', id: 'house2' },
            { x: 600, y: 200, sprite: 'house-brown', id: 'house3' },
            { x: 600, y: 400, sprite: 'building-red', id: 'building1' },
            { x: 100, y: 500, sprite: 'building-blue', id: 'building2' },
            { x: 500, y: 50, sprite: 'museum-purple', id: 'museum' },
            { x: 620, y: 50, sprite: 'hut-purple', id: 'hut' }
        ];

        buildingData.forEach(building => {
            const buildingSprite = this.add.image(building.x, building.y, building.sprite);
            buildingSprite.setOrigin(0);
            this.buildings.push(buildingSprite);
            
            // Add physics body for collision
            this.physics.add.existing(buildingSprite, true);
        });
        
        // Add signpost in flower field
        const signpost = this.add.image(100, 150, 'signpost');
        signpost.setOrigin(0);
        this.physics.add.existing(signpost, true);
        this.buildings.push(signpost);
    }

    createNPCs() {
        const npcData = [
            { x: 120, y: 180, id: 'introduction', area: 'signpost' },
            { x: 130, y: 330, id: 'reference1', area: 'house1' },
            { x: 230, y: 330, id: 'reference2', area: 'house2' },
            { x: 630, y: 230, id: 'experience', area: 'house3' },
            { x: 630, y: 430, id: 'organizations', area: 'building1' },
            { x: 130, y: 530, id: 'certificates', area: 'building2' },
            { x: 530, y: 100, id: 'projects', area: 'museum' },
            { x: 640, y: 80, id: 'final', area: 'hut' }
        ];

        npcData.forEach(npcInfo => {
            const npc = this.physics.add.sprite(npcInfo.x, npcInfo.y, 'npc-sprite');
            npc.setOrigin(0);
            npc.body.setImmovable(true);
            npc.npcId = npcInfo.id;
            npc.area = npcInfo.area;
            this.npcs.push(npc);
        });
    }

    createPlayer() {
        this.player = this.physics.add.sprite(400, 300, 'player-sprite');
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(20, 20);
        
        // Add collision with buildings
        this.physics.add.collider(this.player, this.buildings);
        
        // Add collision with NPCs
        this.physics.add.collider(this.player, this.npcs);
    }

    setupInput() {
        // WASD controls
        this.wasd = this.input.keyboard.addKeys('W,S,A,D');
        
        // Space for interaction
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // Arrow keys as alternative
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.gameCompleted) return;
        
        // Handle player movement
        this.handleMovement();
        
        // Check for NPC interactions
        this.checkNPCInteractions();
        
        // Handle space key for dialogue
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.handleSpacePress();
        }
    }

    handleMovement() {
        const speed = 160;
        let moving = false;
        
        this.player.setVelocity(0);
        
        if (this.wasd.A.isDown || this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.direction = 'left';
            moving = true;
        } else if (this.wasd.D.isDown || this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.direction = 'right';
            moving = true;
        }
        
        if (this.wasd.W.isDown || this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            this.player.direction = 'up';
            moving = true;
        } else if (this.wasd.S.isDown || this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            this.player.direction = 'down';
            moving = true;
        }
    }

    checkNPCInteractions() {
        this.currentInteractionNPC = null;
        
        this.npcs.forEach(npc => {
            const distance = Phaser.Math.Distance.Between(
                this.player.x, this.player.y,
                npc.x, npc.y
            );
            
            if (distance < 40) {
                // Check if player is facing the NPC
                const playerDirection = this.player.direction || 'down';
                const isCorrectDirection = this.isPlayerFacingNPC(npc, playerDirection);
                
                if (isCorrectDirection) {
                    this.currentInteractionNPC = npc;
                    // Visual feedback could be added here
                }
            }
        });
    }

    isPlayerFacingNPC(npc, direction) {
        const dx = npc.x - this.player.x;
        const dy = npc.y - this.player.y;
        
        switch (direction) {
            case 'up':
                return dy < -10;
            case 'down':
                return dy > 10;
            case 'left':
                return dx < -10;
            case 'right':
                return dx > 10;
            default:
                return false;
        }
    }

    handleSpacePress() {
        if (this.currentInteractionNPC && !this.dialogueSystem.isActive) {
            // Play interaction sound
            if (this.interactSound) {
                this.interactSound.play();
            }
            
            // Start dialogue
            const npcId = this.currentInteractionNPC.npcId;
            this.dialogueSystem.startDialogue(npcId);
            
            // Check if this is the final NPC
            if (npcId === 'final') {
                this.gameCompleted = true;
                this.time.delayedCall(3000, () => {
                    this.resetGame();
                });
            }
        } else if (this.dialogueSystem.isActive) {
            // Continue dialogue
            this.dialogueSystem.nextMessage();
        }
    }

    resetGame() {
        // Play completion sound
        if (this.completeSound) {
            this.completeSound.play();
        }
        
        // Fade out and return to intro
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('IntroScene');
        });
    }
}
