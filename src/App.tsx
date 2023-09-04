import { FormEvent } from 'react'
import Entrance from './components/entrance'

function App() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Entrance onSubmit={onSubmit} />
    </>
  )
}

export default App
