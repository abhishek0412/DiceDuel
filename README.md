
# 🎲 Dice Duel

A fun, interactive dice guessing game where players predict dice roll sums and get instant feedback. Built as a single-page web application with React + Vite.

## 🎯 Game Overview

**Dice Duel** is a casual gaming experience that subtly teaches probability concepts through engaging gameplay. Players choose the number of dice (1-3), predict the sum, roll, and see if they guessed correctly. The game tracks wins and provides encouraging feedback to keep players engaged.

### Key Features
- **Quick Setup**: Choose 1-3 dice and enter your prediction
- **Instant Feedback**: Immediate win/loss results with encouraging messages
- **Progressive Learning**: Probability hints appear after playing several rounds
- **Persistent Stats**: Game statistics saved locally between sessions
- **Mobile-First**: Responsive design with large touch targets
- **Visual Appeal**: Emoji dice graphics with smooth animations

## 🚀 Live Demo

Run locally:
```bash
npm run dev
```
Then visit `http://localhost:5173` (or the port shown in terminal)

## 🎮 How to Play

1. **Choose Dice Count**: Select 1, 2, or 3 dice
2. **Make Prediction**: Enter your guess for the sum (valid range shown)
3. **Roll Dice**: Click "Roll Dice!" and watch the animation
4. **See Results**: Get instant feedback and updated stats
5. **Play Again**: Continue to improve your win rate!

## 🛠️ Technical Stack

- **Frontend**: React 18 with Hooks (useState, useEffect)
- **Build Tool**: Vite for fast development and building
- **Styling**: Inline CSS with mobile-first responsive design
- **Storage**: localStorage for persistent game statistics
- **Dependencies**: Minimal - uses only React built-ins

## 📁 Project Structure

```
DiceDuel/
├── public/
│   └── logo.png              # Game logo
├── src/
│   ├── App.jsx              # Main game component
│   └── main.jsx             # React entry point
├── .github/
│   └── copilot-instructions.md # AI assistant guidance
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── PRD.md                   # Product Requirements Document
├── AGENTS.md                # AI Development Process
└── README.md                # This file
```

## 🏗️ Development Process

This project was built using AI-assisted development following a structured approach:

1. **PRD Creation**: Defined clear requirements and scope
2. **Rapid Prototyping**: Built MVP in phases (30-20-10 minute increments)
3. **Feature Implementation**: Core game loop → Visual polish → Enhancements
4. **Testing & Refinement**: Ensured mobile responsiveness and user experience

See `AGENTS.md` for detailed AI development methodology.

## 🎯 Game Mechanics

### Scoring System
- **Win**: Exact prediction match
- **Close**: Within 1-2 points gets encouraging feedback
- **Miss**: Motivational message to try again

### Probability Learning
- Range indicators show possible sums for each dice count
- Hints appear after 3+ games explaining probability concepts
- Win rate tracking helps players see improvement over time

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/abhishek0412/DiceDuel.git
cd DiceDuel

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌟 Features Implemented

### Phase 1: Core Game Loop ✅
- [x] Dice selection buttons (1-3 dice)
- [x] Number input for sum prediction with validation
- [x] "Roll Dice" button with random generation
- [x] Win/loss result display
- [x] Basic score tracking (wins/total/percentage)

### Phase 2: Polish & Feel ✅
- [x] Visual dice representation using emoji graphics
- [x] Win celebration messages
- [x] Game stats persistence (localStorage)
- [x] Mobile-responsive layout

### Phase 3: Enhancements ✅
- [x] Simple roll animation with bouncing dice
- [x] Probability hints after several games
- [x] Encouraging feedback system

## 🎨 Design Principles

- **Immediate Gratification**: No loading states or delays
- **Clear Visual Hierarchy**: Large buttons and obvious next actions
- **Progressive Disclosure**: Advanced features revealed through play
- **Accessibility**: High contrast, large touch targets, proper alt text

## 📱 Mobile Optimization

- Large touch targets (minimum 60px height)
- Responsive flexbox layouts
- Touch-friendly interactions
- Optimized for portrait and landscape orientations

## 🔮 Future Enhancements

- Sound effects and haptic feedback
- Multiplayer challenges
- Advanced statistics and charts
- Customizable themes
- Social sharing features
- Achievement system

## 📄 License

MIT License - feel free to use this project as a learning resource or starting point for your own games! 