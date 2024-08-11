import { FC } from 'react'
import './step.css'
import cn from 'classnames'
import RewardBg from '@/assets/reward_bg.svg'
import { normalizeNumber } from '@/shared/utils/general'

type Props = {
  step: string
  currentReward: string
}

export const Step: FC<Props> = ({ step, currentReward }) => {
  const isCurrent = normalizeNumber(step) === normalizeNumber(currentReward)
  const isPrev = normalizeNumber(step) < normalizeNumber(currentReward)

  return (
    <li
      className={cn('step', {
        'step--current': isCurrent,
        'step--prev': isPrev,
      })}
    >
      <RewardBg className="step__background" />
      <div className="step__reward">{`$${step}`}</div>
    </li>
  )
}
