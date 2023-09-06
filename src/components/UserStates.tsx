import { css } from '../../styled-system/css'
import { UserState } from '../App'

interface Props {
  userStates: UserState[]
}

export default function UserState({ userStates }: Props) {
  return (
    <>
      {userStates.map((state) => {
        if (state.moodList.length === 0) return null

        return (
          <p key={state.userId}>
            <span>{state.username}: </span>
            {state.moodList.map((mood) => (
              <span
                key={mood.ko}
                style={{ color: mood.color }}
                className={css({
                  p: '0.1rem',
                  '@media (prefers-color-scheme: dark)': {
                    bg: 'white',
                    borderRadius: '0.1rem',
                  },
                })}
              >
                {`${mood.ko} (${mood.en})`}
              </span>
            ))}
          </p>
        )
      })}
    </>
  )
}
