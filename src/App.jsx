import React, { useState, useEffect } from 'react'

export default function App() {
  // Game state based on PRD data model
  const [diceCount, setDiceCount] = useState(1)
  const [prediction, setPrediction] = useState('')
  const [lastRoll, setLastRoll] = useState([])
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [wins, setWins] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [gameMessage, setGameMessage] = useState('')
  const [isRolling, setIsRolling] = useState(false)

  // Load stats from localStorage on component mount
  useEffect(() => {
    const savedStats = localStorage.getItem('diceGameStats')
    if (savedStats) {
      const { gamesPlayed: savedGames, wins: savedWins } = JSON.parse(savedStats)
      setGamesPlayed(savedGames)
      setWins(savedWins)
    }
  }, [])

  // Save stats to localStorage whenever they change
  useEffect(() => {
    if (gamesPlayed > 0) {
      localStorage.setItem('diceGameStats', JSON.stringify({ gamesPlayed, wins }))
    }
  }, [gamesPlayed, wins])

  // Get dice emoji based on value
  const getDiceEmoji = (value) => {
    const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return diceEmojis[value - 1]
  }

  // Calculate possible sum range based on dice count
  const getMinSum = (count) => count
  const getMaxSum = (count) => count * 6

  // Roll dice function
  const rollDice = () => {
    if (!prediction || prediction < getMinSum(diceCount) || prediction > getMaxSum(diceCount)) {
      alert(`Please enter a prediction between ${getMinSum(diceCount)} and ${getMaxSum(diceCount)}`)
      return
    }

    setIsRolling(true)

    // Simulate rolling animation delay
    setTimeout(() => {
      // Generate random dice values
      const rolls = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1)
      const sum = rolls.reduce((total, roll) => total + roll, 0)
      const isWin = parseInt(prediction) === sum

      // Update game state
      setLastRoll(rolls)
      setGamesPlayed(prev => prev + 1)
      if (isWin) {
        setWins(prev => prev + 1)
        setGameMessage('🎉 Perfect! You guessed it!')
      } else {
        const diff = Math.abs(parseInt(prediction) - sum)
        if (diff === 1) {
          setGameMessage('🔥 So close! Try again!')
        } else if (diff <= 2) {
          setGameMessage('👍 Close! You\'re getting better!')
        } else {
          setGameMessage('🎲 Try again! Keep practicing!')
        }
      }
      setIsRolling(false)
      setShowResult(true)
    }, 1000)
  }

  // Reset for next round
  const playAgain = () => {
    setShowResult(false)
    setIsRolling(false)
    setPrediction('')
    setGameMessage('')
  }

  return (
    <main style={{ 
      maxWidth: 600, 
      margin: '20px auto', 
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '20px',
        gap: '15px'
      }}>
        <img 
          src="/logo.png" 
          alt="Dice Duel Logo" 
          style={{ 
            height: '50px', 
            width: 'auto',
            objectFit: 'contain'
          }} 
        />
        <div>
          <h1 style={{ color: '#2563eb', marginBottom: '0', margin: '0' }}>🎲 Dice Duel</h1>
          <p style={{ color: '#64748b', marginBottom: '0', margin: '0', fontSize: '14px' }}>
            Predict the sum of your dice rolls and test your luck!
          </p>
        </div>
      </header>

      {/* Game Stats */}
      <div style={{ 
        background: '#f1f5f9', 
        padding: '15px', 
        borderRadius: '8px', 
        marginBottom: '30px',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a34a' }}>{wins}</div>
          <div style={{ fontSize: '14px', color: '#64748b' }}>Wins</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{gamesPlayed}</div>
          <div style={{ fontSize: '14px', color: '#64748b' }}>Games</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>
            {gamesPlayed > 0 ? Math.round((wins / gamesPlayed) * 100) : 0}%
          </div>
          <div style={{ fontSize: '14px', color: '#64748b' }}>Win Rate</div>
        </div>
      </div>

      {!showResult && !isRolling ? (
        // Game Setup Phase
        <div>
          {/* Dice Count Selection */}
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ marginBottom: '15px' }}>Choose Number of Dice:</h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[1, 2, 3].map(count => (
                <button
                  key={count}
                  onClick={() => setDiceCount(count)}
                  style={{
                    padding: '20px 30px',
                    fontSize: '20px',
                    border: '3px solid',
                    borderColor: diceCount === count ? '#2563eb' : '#d1d5db',
                    background: diceCount === count ? '#2563eb' : 'white',
                    color: diceCount === count ? 'white' : '#374151',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    minWidth: '100px',
                    minHeight: '60px',
                    touchAction: 'manipulation'
                  }}
                >
                  {count} 🎲
                </button>
              ))}
            </div>
          </div>

          {/* Prediction Input */}
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ marginBottom: '15px' }}>
              Predict the Sum ({getMinSum(diceCount)} - {getMaxSum(diceCount)}):
            </h3>
            <input
              type="number"
              min={getMinSum(diceCount)}
              max={getMaxSum(diceCount)}
              value={prediction}
              onChange={(e) => setPrediction(e.target.value)}
              placeholder={`Enter ${getMinSum(diceCount)}-${getMaxSum(diceCount)}`}
              style={{
                padding: '20px',
                fontSize: '24px',
                border: '3px solid #d1d5db',
                borderRadius: '12px',
                width: '200px',
                maxWidth: '80vw',
                textAlign: 'center',
                touchAction: 'manipulation'
              }}
            />
          </div>

          {/* Roll Button */}
          <button
            onClick={rollDice}
            disabled={!prediction || isRolling}
            style={{
              padding: '25px 50px',
              fontSize: '24px',
              background: (prediction && !isRolling) ? '#16a34a' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: (prediction && !isRolling) ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              minHeight: '70px',
              touchAction: 'manipulation'
            }}
          >
            🎲 Roll Dice!
          </button>
        </div>
      ) : isRolling ? (
        // Rolling Animation
        <div style={{ padding: '50px 0' }}>
          <div style={{ 
            fontSize: '80px', 
            animation: 'bounce 1s infinite',
            marginBottom: '20px'
          }}>
            🎲
          </div>
          <h2 style={{ color: '#2563eb' }}>Rolling...</h2>
          <style>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-30px); }
              60% { transform: translateY(-15px); }
            }
          `}</style>
        </div>
      ) : (
        // Results Phase
        <div>
          {/* Show rolled dice */}
          <div style={{ marginBottom: '20px' }}>
            <h3>You rolled:</h3>
            <div style={{ 
              fontSize: '60px', 
              margin: '15px 0',
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              {lastRoll.map((die, index) => (
                <div key={index} style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90px',
                  height: '90px',
                  border: '3px solid #374151',
                  borderRadius: '12px',
                  background: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  margin: '5px'
                }}>
                  {getDiceEmoji(die)}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              Sum: {lastRoll.reduce((sum, die) => sum + die, 0)}
            </div>
            <div style={{ fontSize: '18px', color: '#64748b' }}>
              Your prediction: {prediction}
            </div>
          </div>

          {/* Game Message */}
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            margin: '20px 0',
            color: gameMessage.includes('Perfect') ? '#16a34a' : '#2563eb'
          }}>
            {gameMessage}
          </div>

          {/* Play Again Button */}
          <button
            onClick={playAgain}
            style={{
              padding: '20px 40px',
              fontSize: '20px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              minHeight: '60px',
              touchAction: 'manipulation'
            }}
          >
            🎯 Play Again
          </button>
        </div>
      )}

      {/* Probability Hint */}
      {gamesPlayed >= 3 && (
        <div style={{ 
          marginTop: '30px', 
          padding: '15px', 
          background: '#fef3c7', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#92400e'
        }}>
          💡 Tip: With {diceCount} dice, sums near the middle are more likely than extreme values!
        </div>
      )}
    </main>
  )
}
