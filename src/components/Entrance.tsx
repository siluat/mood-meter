import { FormEvent, useState } from 'react'
import { hstack, vstack } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

interface Props {
  onSubmit: (name: string) => void
}

export default function Entrance({ onSubmit }: Props) {
  const [name, setName] = useState('')

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(name)
  }

  return (
    <div className={vstack({ justify: 'center', h: '100%' })}>
      <h1>Mood Meter</h1>
      <form onSubmit={handleSubmit} className={hstack()}>
        <input
          className={css({ w: '15rem' })}
          placeholder="이름을 입력하고 입장하세요"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">ENTER</button>
      </form>
    </div>
  )
}
