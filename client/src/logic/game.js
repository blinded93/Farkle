import { scoreAccumulation } from './rules'

const indexToString = num => ({
  '0': 'one',
  '1': 'two',
  '2': 'three',
  '3': 'four',
  '4': 'five',
  '5': 'six'
}[num.toString()])

const stringToNum = string => ({
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6
}[string])

const randomNum = () => Math.round(0 + Math.random() * 5)

export const rollTheDice = (dice, selectedIndexes) => (
  dice.map((d, i) => (
    selectedIndexes && selectedIndexes.includes(i)
      ? d
      : indexToString(randomNum())
  ))
)

export const checkForScore = dice => {
  const amounts = { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 }
  dice.forEach(d => amounts[d] += 1)

  return scoreAccumulation(amounts)
}