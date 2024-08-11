import { useState } from 'react'
import gameConfig from '@/shared/constants/game-config.json'
import { GameStatus, Question } from '../types'

export const useGameConfig = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('initial')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    gameConfig[currentIndex]
  )
  const rewardsList = gameConfig.map((param) => param.reward).reverse()

  const onStart = () => {
    setGameStatus(null)
    setCurrentIndex(0)
    setCurrentQuestion(gameConfig[0])
  }

  const onAnswerCheck = (isCorrect: boolean) => {
    if (isCorrect) {
      const nextIndex = currentIndex + 1

      if (nextIndex < gameConfig.length) {
        setCurrentIndex(nextIndex)
        setCurrentQuestion(gameConfig[nextIndex])
        return
      }

      setGameStatus('try-again')

      return
    }

    setGameStatus('try-again')
  }

  return {
    gameStatus,
    currentQuestion,
    rewardsList,
    onStart,
    onAnswerCheck,
  }
}
