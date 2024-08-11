import { FC } from 'react'
import Image from 'next/image'
import { Button } from '../button'
import './game-banner.css'
import { imageProperties } from '@/shared/constants/general'
import { GameStatus } from '@/shared/types'

type Props = {
  onStart: () => void
  gameStatus: GameStatus
  reward: string
}

export const GameBanner: FC<Props> = ({ onStart, gameStatus, reward }) => {
  return (
    <section className="game-banner">
      <div className="game-banner__picture">
        <Image
          src="/hand.png"
          alt="game-banner-hand"
          width={imageProperties.width}
          height={imageProperties.height}
        />
      </div>
      {gameStatus === 'initial' ? (
        <div className="game-banner__start">
          <h1 className="game-banner__title">Who wants to be a millionaire?</h1>
          <Button onStart={onStart}>Start</Button>
        </div>
      ) : (
        <div className="game-banner__try-again">
          <p className="game-banner__score">Total score:</p>
          <span className="game-banner__reward">{`$${reward} earned`}</span>
          <Button onStart={onStart}>Try again</Button>
        </div>
      )}
    </section>
  )
}
