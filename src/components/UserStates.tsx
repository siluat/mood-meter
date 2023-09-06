import { UserState } from '../App'

interface Props {
  userStates: UserState[]
}

export default function UserState({ userStates }: Props) {
  return (
    <>
      {userStates.map((state) => {
        if (!state.mood) return null

        return (
          <p key={state.userId}>
            <span>{state.username}: </span>
            <span style={{ color: state.mood.color }}>
              {`${state.mood.ko} (${state.mood.en})`}
            </span>
          </p>
        )
      })}
    </>
  )
}
