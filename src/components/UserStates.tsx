import { UserState } from '../App'

interface Props {
  userStates: UserState[]
}

export default function UserState({ userStates }: Props) {
  return (
    <div>
      {userStates.map((state) => {
        return (
          <>
            {state.mood ? (
              <p key={state.userId}>
                <span>{state.username}: </span>
                <span style={{ color: state.mood.color }}>
                  {`${state.mood.ko} (${state.mood.en})`}
                </span>
              </p>
            ) : null}
          </>
        )
      })}
    </div>
  )
}
