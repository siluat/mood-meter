import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { nanoid } from 'nanoid'
import Entrance from './components/Entrance'
import MoodBoard from './components/MoodBoard'
import { Mood } from './components/MoodBoard/MoodBox'
import UserStates from './components/UserStates'

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const userId = nanoid()

const moodMeterChannel = supabaseClient.channel('mood-meter')

export type UserState = {
  userId: string
  username: string
  moodList: Mood[]
}

function App() {
  const [username, setUsername] = useState('')
  const [userStates, setUserStates] = useState<UserState[]>([])

  const currentUserState = userStates.find(
    (userState) => userState.userId === userId
  )

  const onSubmit = (name: string) => {
    setUsername(name)
  }

  const handleSelectMood = async (mood: Mood) => {
    moodMeterChannel.track({
      userId,
      username,
      moodList: [mood],
    })
  }

  useEffect(() => {
    if (!username) return

    moodMeterChannel
      .on('presence', { event: 'sync' }, () => {
        const state = moodMeterChannel.presenceState<UserState>()
        const newUserStates = Object.entries(state).reduce((acc, [, state]) => {
          acc.push({
            userId: state[0].userId,
            username: state[0].username,
            moodList: state[0].moodList,
          })
          return acc
        }, [] as UserState[])
        setUserStates(newUserStates)
      })
      .on('presence', { event: 'join' }, () => {})
      .on('presence', { event: 'leave' }, () => {})
      .subscribe()

    moodMeterChannel.track({
      userId,
      username,
      moodList: [],
    })

    return () => {
      moodMeterChannel.state === 'joined' && moodMeterChannel.unsubscribe()
    }
  }, [username])

  return (
    <>
      {currentUserState ? (
        <>
          <MoodBoard
            selectedMoodList={currentUserState.moodList}
            onSelectMood={handleSelectMood}
          />
          <UserStates userStates={userStates} />
        </>
      ) : (
        <Entrance onSubmit={onSubmit} />
      )}
    </>
  )
}

export default App
