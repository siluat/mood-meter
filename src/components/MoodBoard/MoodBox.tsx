import { css } from '../../../styled-system/css'
import { vstack } from '../../../styled-system/patterns'

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
  onSelect: (mood: Mood) => void
}

export default function MoodBoard({ ko, en, fontColor, color }: Props) {
  return (
    <div
      className={vstack({
        w: '100px',
        h: '50px',
        cursor: 'pointer',
        justify: 'center',
        gap: 0,
        _hover: { boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.5)' },
      })}
      style={{ backgroundColor: color }}
    >
      <p
        className={css({
          fontSize: '0.875rem',
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