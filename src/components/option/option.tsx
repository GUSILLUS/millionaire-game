import { FC, useState } from 'react'
import cn from 'classnames'
import './option.css'
import AnswerBg from '@/assets/answer-bg.svg'
import { Answer } from '@/shared/types'

type Props = {
  answer: Answer
  onCheckAnswer: (isCorrect: boolean) => void
}

export const Option: FC<Props> = ({ answer, onCheckAnswer }) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)

  const { id, text, isCorrect } = answer

  const handleClick = () => {
    if (isAnswerCorrect === null) {
      setIsAnswerCorrect(isCorrect)
      setTimeout(() => onCheckAnswer(isCorrect), 800)
    }
  }

  return (
    <li
      className={cn('option', {
        'option--correct': isAnswerCorrect !== null && isAnswerCorrect === true,
        'option--wrong': isAnswerCorrect !== null && isAnswerCorrect === false,
      })}
      onClick={handleClick}
    >
      <AnswerBg className="option__background" />
      <div className="option__answer">
        <span className="option__letter">{id}</span>
        <span className="option__text">{text}</span>
      </div>
    </li>
  )
}
