import { grid } from '../../../styled-system/patterns'
import MoodBox, { Mood } from './MoodBox'

interface Props {
  selectedMoodList: Mood[]
  onSelectMood: (mood: Mood) => void
}

export default function MoodBoard({ selectedMoodList, onSelectMood }: Props) {
  const handleSelect = (mood: Mood) => {
    onSelectMood(mood)
  }

  return (
    <div
      className={grid({
        p: '1rem',
        columns: 10,
        overflow: 'auto',
        gap: '1',
        minW: '1168px',
        minH: '568px',
      })}
    >
      <MoodBox
        ko="격분한"
        en="Enraged"
        color="#821f22"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="공황에 빠진"
        en="Panicked"
        color="#bb2224"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="스트레스 받는"
        en="Stressed"
        color="#dd4726"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="초조한"
        en="Jittery"
        color="#f85627"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="충격받은"
        en="Shocked"
        color="#f97b26"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="놀란"
        en="Surprised"
        color="#fae767"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="긍정적인"
        en="Upbeat"
        color="#f9d539"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="흥겨운"
        en="Festive"
        color="#f9cb3a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="아주 신나는"
        en="Exhilarated"
        color="#f9b83a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="황홀한"
        en="Ecstatic"
        color="#f9ad26"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="격노한"
        en="Livid"
        color="#821f22"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="몹시 화가 난"
        en="Furious"
        color="#bb2224"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="좌절한"
        en="Frustrated"
        color="#dd4726"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="신경이 날카로운"
        en="Tense"
        color="#f85627"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="망연자실한"
        en="Stunned"
        color="#f97b26"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="들뜬"
        en="Hyper"
        color="#fae767"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="쾌활한"
        en="Cheerful"
        color="#f9d539"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="동기 부여된"
        en="Motivated"
        color="#f9cb3a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="영감을 받은"
        en="Inspired"
        color="#f9b83a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="의기양양한"
        en="Elated"
        color="#f9ad26"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="화가 치밀어 오른"
        en="Fuming"
        color="#821f22"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="겁먹은"
        en="Frightened"
        color="#bb2224"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="화난"
        en="Angry"
        color="#dd4726"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="초조한"
        en="Nervous"
        color="#f85627"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="안절부절못하는"
        en="Restless"
        color="#f97b26"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="기운이 넘치는"
        en="Energized"
        color="#fae767"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="활발한"
        en="Lively"
        color="#f9d539"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="흥분한"
        en="Excited"
        color="#f9cb3a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="낙관적인"
        en="Optimistic"
        color="#f9b83a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="열광하는"
        en="Enthusiastic"
        color="#f9ad26"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="불안한"
        en="Anxious"
        color="#821f22"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="우려하는"
        en="Apprehensive"
        color="#bb2224"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="근심하는"
        en="Worried"
        color="#dd4726"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="짜증나는"
        en="Irritated"
        color="#f85627"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="거슬리는"
        en="Annoyed"
        color="#f97b26"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="만족스러운"
        en="Pleased"
        color="#fae767"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="집중하는"
        en="Focused"
        color="#f9d539"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="행복한"
        en="Happy"
        color="#f9cb3a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="자랑스러운"
        en="Proud"
        color="#f9b83a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="짜릿한"
        en="Thrilled"
        color="#f9ad26"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="불쾌한"
        en="Repulsed"
        color="#821f22"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="골치 아픈"
        en="Troubled"
        color="#bb2224"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="염려하는"
        en="Concerned"
        color="#dd4726"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="마음이 불편한"
        en="Uneasy"
        color="#f85627"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="언짢은"
        en="Peeved"
        color="#f97b26"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="유쾌한"
        en="Pleasant"
        color="#fae767"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="기쁜"
        en="Joyful"
        color="#f9d539"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="희망찬"
        en="Hopeful"
        color="#f9cb3a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="재미있는"
        en="Playful"
        color="#f9b83a"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="더없이 행복한"
        en="Blissful"
        color="#f9ad26"
        fontColor="black"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="역겨운"
        en="Disgusted"
        color="#231f80"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="침울한"
        en="Glum"
        color="#232299"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="실망스러운"
        en="Disappointed"
        color="#2348ba"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="의욕 없는"
        en="Down"
        color="#2672e2"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="냉담한"
        en="Apathetic"
        color="#26a4f0"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="속 편한"
        en="At Ease"
        color="#9cd526"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="태평한"
        en="Easygoing"
        color="#7ec124"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="자족하는"
        en="Content"
        color="#66b123"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="다정한"
        en="Loving"
        color="#23a626"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="충만한"
        en="Fulfilled"
        color="#228d23"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="비관적인"
        en="Pessimistic"
        color="#231f80"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="시무룩한"
        en="Morose"
        color="#232299"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="낙담한"
        en="Discouraged"
        color="#2348ba"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="슬픈"
        en="Sad"
        color="#2672e2"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="지루한"
        en="Bored"
        color="#26a4f0"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="평온한"
        en="Calm"
        color="#9cd526"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="안전한"
        en="Secure"
        color="#7ec124"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="만족스러운"
        en="Satisfied"
        color="#66b123"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="감사하는"
        en="Grateful"
        color="#23a626"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="감동적인"
        en="Touched"
        color="#228d23"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="소외된"
        en="Alienated"
        color="#231f80"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="비참한"
        en="Miserable"
        color="#232299"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="쓸쓸한"
        en="Lonely"
        color="#2348ba"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="기죽은"
        en="Disheartened"
        color="#2672e2"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="피곤한"
        en="Tired"
        color="#26a4f0"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="여유로운"
        en="Relaxed"
        color="#9cd526"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="차분한"
        en="Chill"
        color="#7ec124"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="편안한"
        en="Restful"
        color="#66b123"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="축복받은"
        en="Blessed"
        color="#23a626"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="안정적인"
        en="Balanced"
        color="#228d23"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="의기소침한"
        en="Despondent"
        color="#231f80"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="우울한"
        en="Depressed"
        color="#232299"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="뚱한"
        en="Sullen"
        color="#2348ba"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="기진맥진한"
        en="Exhausted"
        color="#2672e2"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="지친"
        en="Fatigued"
        color="#26a4f0"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="한가로운"
        en="Metlow"
        color="#9cd526"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="생각에 잠긴"
        en="Thoughtful"
        color="#7ec124"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="평화로운"
        en="Peaceful"
        color="#66b123"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="편한"
        en="Comfortable"
        color="#23a626"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="근심 걱정 없는"
        en="Carefree"
        color="#228d23"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="절망한"
        en="Despairing"
        color="#231f80"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="가망 없는"
        en="Hopeless"
        color="#232299"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="고독한"
        en="Desolate"
        color="#2348ba"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="소모된"
        en="Spent"
        color="#2672e2"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="진이 빠진"
        en="Drained"
        color="#26a4f0"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />

      <MoodBox
        ko="나른한"
        en="Sleepy"
        color="#9cd526"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="흐뭇한"
        en="Complacent"
        color="#7ec124"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="고요한"
        en="Tranquil"
        color="#66b123"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="안락한"
        en="Cozy"
        color="#23a626"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
      <MoodBox
        ko="안온한"
        en="Serene"
        color="#228d23"
        fontColor="white"
        selectedMoodList={selectedMoodList}
        onSelect={handleSelect}
      />
    </div>
  )
}
