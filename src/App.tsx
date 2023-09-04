import { useState } from 'react'
import Entrance from './components/Entrance'

function App() {
  const [username, setUsername] = useState('')

  const onSubmit = (name: string) => {
    setUsername(name)
  }

  return (
    <>
      {username ? <>Your name: {username}</> : <Entrance onSubmit={onSubmit} />}
    </>
  )
}

export default App
