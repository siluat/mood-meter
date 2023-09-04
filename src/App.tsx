import { useState } from 'react'
import Entrance from './components/Entrance'
import MoodBoard from './components/MoodBoard'

function App() {
  const [username, setUsername] = useState('')

  const onSubmit = (name: string) => {
    setUsername(name)
  }

  return <>{username ? <MoodBoard /> : <Entrance onSubmit={onSubmit} />}</>
}

export default App
