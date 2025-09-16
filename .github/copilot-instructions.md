# Copilot Instructions — Dice Duel Game

> Purpose: Build a **dice guessing game MVP** in under an hour. Players predict dice roll sums and get instant feedback with score tracking.

## Project Context
- **Game Type**: Single-page dice prediction game with immediate feedback
- **Target Audience**: Casual gamers wanting quick, fun challenges with subtle probability learning
- **Core Action**: Choose dice count (1-3) → predict sum → roll → see win/loss + updated stats
- **Tech Stack**: React + Vite, client-side only, localStorage for persistence
- Keep code simple and focused on the game loop. Avoid over-engineering.

## Development Guardrails
- **Single component first**: Keep everything in App.jsx until core game works
- **No external game libraries**: Use plain JavaScript for dice rolling and game logic
- **Mobile-first design**: Large touch targets, responsive layout for phone play
- **Visual feedback priority**: Clear win/loss states, encouraging messages for engagement
- **localStorage only**: Persist game stats locally, no backend needed
- **Emoji/simple graphics**: Use 🎲 or basic CSS for dice visualization

## Build Flow (ask the user step-by-step)
1. **Confirm the MVP goal** in one sentence.
2. **Sketch the UI** as simple JSX (form, button, list, results area).
3. **Wire the core interaction** (event handlers, state).
4. **Add one finishing touch** (basic validation, simple animation, or a tiny data mock).
5. **Ship** (build & preview), then suggest next steps.

## Game-Specific Prompts to Use with Me (copy/paste)
- "Implement the core dice rolling logic with state management for wins/losses"
- "Create the dice selection UI (1-3 dice) with prediction input and roll button"
- "Add visual dice representation using emoji or CSS, with roll animation"
- "Implement localStorage to persist game stats between sessions"
- "Add probability hints that show after a few games to help learning"
- "Create encouraging win/loss messages ('Perfect!', 'Close!', 'Try again!')"
- "Make the layout mobile-responsive with large touch-friendly buttons"
- "Add simple sound effects or haptic feedback for dice rolls (stretch goal)"

## Quality Bar
- Works locally with `npm run dev` and builds with `npm run build`.
- No runtime errors in the console.
- Keep the bundle minimal.

## Stretch (only after MVP)
- Add routing (react-router-dom) if multiple views are essential.
- Add a small chart or animation *only if* it clarifies the outcome.
