import { css, cva } from '../../../styled-system/css'

export type Mood = {
  color: string
  ko: string
  en: string
}

interface Props {
  color: string
  fontColor: 'white' | 'black'
  ko: string
  en: string
  selectedMoodList: Mood[]
  onSelect: (mood: Mood) => void
}

export default function MoodBoard({
  ko,
  en,
  fontColor,
  color,
  selectedMoodList,
  onSelect,
}: Props) {
  const selected = selectedMoodList.some(
    (mood) => mood.ko === ko && mood.en === en
  )

  const handleSelect = () => {
    onSelect({ color, ko, en })
  }

  return (
    <div
      className={boxStyle({ selected })}
      style={{ backgroundColor: color }}
      onClick={handleSelect}
    >
      <p
        className={css({
          fontSize: '0.8rem',
          fontWeight: 'bold',
        })}
        style={{ color: fontColor }}
      >
        {ko}
      </p>
      <p
        className={css({
          fontSize: '0.75rem',
        })}
        style={{ color: fontColor }}
      >
        {en}
      </p>
    </div>
  )
}

const boxStyle = cva({
  base: {
    w: '110px',
    h: '50px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,
  },
  variants: {
    selected: {
      true: {
        '@media (prefers-color-scheme: light)': {
          boxShadow: '0 0 0 3px rgba(0, 0, 0, 1)',
        },
        '@media (prefers-color-scheme: dark)': {
          boxShadow: '0 0 0 3px rgba(255, 255, 255, 1)',
        },
      },
      false: {
        _hover: {
          '@media (prefers-color-scheme: light)': {
            boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.5)',
          },
          '@media (prefers-color-scheme: dark)': {
            boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
  },
})
