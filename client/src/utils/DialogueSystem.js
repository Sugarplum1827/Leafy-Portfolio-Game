class DialogueSystem {
    constructor(scene) {
        this.scene = scene;
        this.isActive = false;
        this.currentDialogue = [];
        this.currentIndex = 0;
        this.dialogueBox = null;
        this.dialogueText = null;
        this.continuePrompt = null;
        this.typingTimer = null;
        this.currentCharIndex = 0;
        this.isTyping = false;
        this.typingSpeed = 30; // milliseconds per character
        this.fullText = '';
    }

    startDialogue(npcId) {
        if (this.isActive) return;
        
        // Get dialogue data
        const dialogueData = window.dialogues[npcId];
        if (!dialogueData) {
            console.warn(`No dialogue found for NPC: ${npcId}`);
            return;
        }
        
        this.currentDialogue = dialogueData;
        this.currentIndex = 0;
        this.isActive = true;
        
        // Create dialogue UI
        this.createDialogueUI();
        
        // Start first message
        this.showCurrentMessage();
    }

    createDialogueUI() {
        const { width, height } = this.scene.game.config;
        
        // Create dialogue box at bottom of screen
        this.dialogueBox = this.scene.add.graphics();
        this.dialogueBox.fillStyle(0x000000, 0.8);
        this.dialogueBox.fillRoundedRect(20, height - 150, width - 40, 120, 10);
        this.dialogueBox.lineStyle(3, 0xFFFFFF, 1);
        this.dialogueBox.strokeRoundedRect(20, height - 150, width - 40, 120, 10);
        this.dialogueBox.setDepth(1000);
        
        // Create text object
        this.dialogueText = this.scene.add.text(40, height - 130, '', {
            fontSize: '16px',
            fontFamily: 'Orbitron, monospace',
            color: '#FFFFFF',
            wordWrap: { width: width - 100, useAdvancedWrap: true },
            lineSpacing: 5
        });
        this.dialogueText.setDepth(1001);
        
        // Create continue prompt
        this.continuePrompt = this.scene.add.text(width - 80, height - 50, 'SPACE', {
            fontSize: '14px',
            fontFamily: 'Orbitron, monospace',
            color: '#FFFF00',
            align: 'right'
        });
        this.continuePrompt.setDepth(1001);
        this.continuePrompt.setAlpha(0);
        
        // Add blinking effect to continue prompt
        this.scene.tweens.add({
            targets: this.continuePrompt,
            alpha: { from: 0, to: 1 },
            duration: 500,
            yoyo: true,
            repeat: -1
        });
    }

    showCurrentMessage() {
        if (this.currentIndex >= this.currentDialogue.length) {
            this.endDialogue();
            return;
        }
        
        const message = this.currentDialogue[this.currentIndex];
        this.fullText = message;
        this.currentCharIndex = 0;
        this.isTyping = true;
        
        // Clear current text
        this.dialogueText.setText('');
        this.continuePrompt.setVisible(false);
        
        // Start typing animation
        this.startTyping();
    }

    startTyping() {
        if (this.typingTimer) {
            this.typingTimer.destroy();
        }
        
        this.typingTimer = this.scene.time.addEvent({
            delay: this.typingSpeed,
            callback: this.typeNextCharacter,
            callbackScope: this,
            repeat: this.fullText.length - 1
        });
    }

    typeNextCharacter() {
        if (this.currentCharIndex < this.fullText.length) {
            const currentText = this.fullText.substring(0, this.currentCharIndex + 1);
            this.dialogueText.setText(currentText);
            this.currentCharIndex++;
            
            // Play typing sound effect (optional)
            // this.scene.sound.play('typeSound', { volume: 0.1 });
        }
        
        // Check if typing is complete
        if (this.currentCharIndex >= this.fullText.length) {
            this.isTyping = false;
            this.continuePrompt.setVisible(true);
            
            if (this.typingTimer) {
                this.typingTimer.destroy();
                this.typingTimer = null;
            }
        }
    }

    nextMessage() {
        if (!this.isActive) return;
        
        if (this.isTyping) {
            // If still typing, show full text immediately
            this.skipTyping();
        } else {
            // Move to next message
            this.currentIndex++;
            this.showCurrentMessage();
        }
    }

    skipTyping() {
        if (this.typingTimer) {
            this.typingTimer.destroy();
            this.typingTimer = null;
        }
        
        this.isTyping = false;
        this.dialogueText.setText(this.fullText);
        this.continuePrompt.setVisible(true);
    }

    endDialogue() {
        this.isActive = false;
        this.currentDialogue = [];
        this.currentIndex = 0;
        
        // Clean up UI elements
        if (this.dialogueBox) {
            this.dialogueBox.destroy();
            this.dialogueBox = null;
        }
        
        if (this.dialogueText) {
            this.dialogueText.destroy();
            this.dialogueText = null;
        }
        
        if (this.continuePrompt) {
            this.continuePrompt.destroy();
            this.continuePrompt = null;
        }
        
        if (this.typingTimer) {
            this.typingTimer.destroy();
            this.typingTimer = null;
        }
    }

    // Method to check if dialogue system is currently active
    getIsActive() {
        return this.isActive;
    }
    
    // Method to get current dialogue progress
    getProgress() {
        if (!this.isActive) return { current: 0, total: 0 };
        return {
            current: this.currentIndex + 1,
            total: this.currentDialogue.length
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DialogueSystem;
} else {
    window.DialogueSystem = DialogueSystem;
}
