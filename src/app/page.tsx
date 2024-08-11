'use client'

import { useState } from 'react'
import cn from 'classnames'

import { Option, GameBanner, Step } from '@/components'
import { useGameConfig } from '@/shared/hooks/useGameConfig'

const Home = () => {
  const { gameStatus, currentQuestion, rewardsList, onStart, onAnswerCheck } =
    useGameConfig()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { question, answers, reward: currentReward } = currentQuestion

  return (
    <main>
      {gameStatus ? (
        <GameBanner
          onStart={onStart}
          gameStatus={gameStatus}
          reward={currentReward}
        />
      ) : (
        <section className="game">
          <button
            className={cn('game__menu', {
              'game__menu--open': isMenuOpen,
            })}
            onClick={handleMenuToggle}
          />

          <div className="game__main">
            <p className="question">{question}</p>
            <ul className="answers-container">
              {answers.map((answer) => (
                <Option
                  answer={answer}
                  onCheckAnswer={onAnswerCheck}
                  key={crypto.randomUUID()}
                />
              ))}
            </ul>
          </div>

          <aside
            className={cn('game__ladder', {
              'game__ladder--mobile-open': isMenuOpen,
            })}
          >
            <ul className="game__ladder-list">
              {rewardsList.map((reward) => (
                <Step
                  step={reward}
                  currentReward={currentReward}
                  key={reward}
                />
              ))}
            </ul>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Home
