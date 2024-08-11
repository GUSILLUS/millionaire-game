export type Answer = {
  id: string
  text: string
  isCorrect: boolean
}

export type Question = {
  question: string
  answers: Answer[]
  reward: string
}

export type ImageProperties = {
  width: number
  height: number
}

export type GameStatus = 'initial' | 'try-again' | null
