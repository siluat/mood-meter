import { FormEvent } from 'react'
import { css } from '../../styled-system/css'
import { hstack } from '../../styled-system/patterns'

interface Props {
  onSubmit: (e: FormEvent) => void
}

export default function Entrance({ onSubmit }: Props) {
  return (
    <>
      <h1 className={css({ margin: '1rem' })}>Mood Meter</h1>
      <form onSubmit={onSubmit} className={hstack()}>
        <input placeholder="이름을 입력하고 입장하세요" />
        <button type="submit">ENTER</button>
      </form>
    </>
  )
}
