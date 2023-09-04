import { FormEvent } from 'react'
import { hstack } from '../styled-system/patterns'
import { css } from '../styled-system/css'

function App() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

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

export default App
