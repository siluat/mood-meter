import { FormEvent, useState } from 'react'
import { css } from '../../styled-system/css'
import { hstack } from '../../styled-system/patterns'

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
    <>
      <h1 className={css({ margin: '1rem' })}>Mood Meter</h1>
      <form onSubmit={handleSubmit} className={hstack()}>
        <input
          placeholder="이름을 입력하고 입장하세요"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">ENTER</button>
      </form>
    </>
  )
}
