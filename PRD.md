# Dice ## MVP User Flow (Single Action)
1. **Setup**: Choose number of dice (1-3) and enter prediction for sum
2. **Play**: Click "Roll Dice" to see animated result
3. **Result**: Instant win/loss feedback with running score
4. **Repeat**: Continue playing with updated stats Vibe Coding PRD

> **One-Hour MVP Goal**: Build a playable dice guessing game where users predict dice roll sums and see instant results.

## Core Purpose
A single-page web game where players guess the sum of dice rolls. Immediate feedback creates engagement while subtly teaching probability through gameplay patterns.

### 2. User Stories

- As a **casual gamer**, I want to roll dice and guess outcomes so that I can enjoy quick, fun challenges.
- As a **student**, I want to see how often my guesses are right so that I can understand probability better.
- As a **first-time user**, I want to start playing instantly so that I don’t need to sign up or learn complex rules.
- As a **returning player**, I want to see my win stats so that I can track my progress.

## Essential Features (Build Order)
### Phase 1: Core Game Loop (30 mins)
- [ ] Dice selection buttons (1, 2, or 3 dice)
- [ ] Number input for sum prediction
- [ ] "Roll Dice" button with random number generation
- [ ] Win/loss result display
- [ ] Basic score tracking (wins/total games)

### Phase 2: Polish & Feel (20 mins)
- [ ] Visual dice representation (emoji or simple graphics)
- [ ] Win celebration message
- [ ] Game stats persistence (localStorage)
- [ ] Mobile-responsive layout

### Phase 3: Enhancement (10 mins)
- [ ] Simple roll animation or transition
- [ ] Probability hint ("Rolling 2 dice: sum range 2-12")

## Technical Constraints
- **Client-side only**: No backend, API calls, or authentication
- **Single component**: Keep in one App.jsx file until working
- **Minimal dependencies**: Use React built-ins (useState, useEffect)
- **Mobile-first**: Responsive design with large touch targets
- **localStorage**: Persist stats between sessions

## Success Criteria
**Functional MVP**: 
- Game loop works without errors
- Stats update correctly
- Playable on mobile and desktop

**User Experience**:
- Clear visual feedback for wins/losses
- Intuitive controls with obvious next action
- Fun factor through instant gratification

## Out of Scope (Post-MVP)
- Player names or profiles
- Multiplayer features
- Complex animations
- Sound effects
- Advanced statistics or charts
- Betting or currency systems

## Data Model (Simple State)
```javascript
{
  diceCount: 1,        // 1-3 dice
  prediction: null,    // user's guess
  lastRoll: [],        // array of dice values
  gamesPlayed: 0,      // total rounds
  wins: 0,             // successful predictions
  showResult: false    // display win/loss state
}
```

## Quick Win Patterns
- **Immediate feedback**: No loading states or delays
- **Visual clarity**: Large buttons, clear win/loss states
- **Progressive disclosure**: Show probability hints after a few games
- **Encouraging messaging**: "Close!" for near-misses, "Perfect!" for exact hits
