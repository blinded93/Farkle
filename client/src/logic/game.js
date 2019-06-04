const indexToString = num => ({
  '0': 'one',
  '1': 'two',
  '2': 'three',
  '3': 'four',
  '4': 'five',
  '5': 'six'
}[num.toString()])

const randomNum = () => Math.round(0 + Math.random() * 5)

export const rollTheDice = (dice, selectedIndexes) => (
  dice.map((d, i) => (
    selectedIndexes && selectedIndexes.includes(i)
      ? d
      : indexToString(randomNum())
    )
  )
)