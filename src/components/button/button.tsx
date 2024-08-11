import { FC, ReactNode } from 'react'
import './button.css'

type Props = {
  onStart: () => void
  children: ReactNode
}

export const Button: FC<Props> = ({ onStart, children }) => {
  return (
    <button className="button" onClick={onStart} type="button">
      {children}
    </button>
  )
}
