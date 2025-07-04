# Jacob's Interactive Portfolio Game

A Phaser 3-powered interactive portfolio that recreates the classic Pokémon Fire Red experience. Explore a retro RPG world to discover Jacob's professional background through engaging NPC interactions.

## 🎮 Game Features

### Intro Scene
- Pokemon-style intro screen with character display
- Flickering "Press ENTER to Start" text
- Smooth fade transitions between scenes

### Town Exploration
- Top-down RPG map with collision detection
- 8 interactive NPCs in themed buildings
- WASD/Arrow key movement controls
- Spacebar interaction system

### Portfolio Content
- **Signpost (Flower Field)**: Personal introduction
- **Black Roof Houses**: Professional references
- **Brown Roof House**: Work experience
- **Red Roof Building**: Organizations and memberships  
- **Blue Roof Building**: Certificates and education
- **Purple Museum**: Project showcase
- **Purple Hut**: Portfolio completion

### Technical Features
- Pokemon-style dialogue system with typing animation
- Collision detection for realistic movement
- Audio integration with background music and sound effects
- Responsive design that scales to different screen sizes
- Game completion cycle that returns to intro

## 🎯 How to Play

1. **Start**: Press ENTER on the intro screen
2. **Move**: Use WASD or arrow keys to navigate
3. **Interact**: Face an NPC and press SPACEBAR to start dialogue
4. **Continue**: Press SPACEBAR to advance through dialogue
5. **Complete**: Talk to the final NPC in the purple hut to restart

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The game will be available at `http://localhost:5000`

## 🛠 Technology Stack

- **Game Engine**: Phaser 3.80.1
- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js
- **Styling**: Tailwind CSS
- **Audio**: HTML5 Audio with Phaser sound system
- **Build Tool**: Vite

## 📁 Project Structure

```
client/
├── src/
│   ├── scenes/          # Game scenes (Intro, Town)
│   ├── utils/           # Dialogue system
│   ├── data/            # NPC dialogue content
│   └── main.js          # Game initialization
├── public/
│   ├── sounds/          # Audio files
│   └── style.css        # Game styling
└── index.html           # Main HTML file
```

## 🎨 Design Philosophy

This portfolio combines professional presentation with nostalgic gaming elements to create a memorable experience. The retro RPG format makes exploring career information engaging while demonstrating technical skills in game development.

## 📝 Portfolio Content

The game showcases comprehensive professional information including:
- Personal introduction and background
- Professional references from colleagues
- Detailed work experience and career progression
- Educational achievements and certifications
- Professional organizations and community involvement
- Technical project portfolio with descriptions

---

*Experience Jacob's portfolio in a whole new way - where professional meets playful!*