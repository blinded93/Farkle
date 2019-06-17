import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rollDice } from '../../actions/turn'
import { isEmpty } from '../../tools'
import { checkForScore } from '../../logic/game'

const RollBtn = props => {
  const { dice, selectedDiceIndexes, savedDice, rollCount } = props.turn
  const { rollDice, updateTotal } = props
  const selectedAndSavedDice = [
    ...new Set([...selectedDiceIndexes, ...savedDice])
  ]

  const handleDisable = () => {
    const selectedDice = dice.filter((_, i) => {
      return selectedDiceIndexes.includes(i)
    })
    const scoreCheck = checkForScore(selectedDice)

    if (rollCount === 0) return false
    else if (!isEmpty(selectedDiceIndexes)
              && scoreCheck) return false
    else if (isEmpty(selectedDiceIndexes)
              || !scoreCheck) return true
  }

  const handleClick = e => {
    rollDice(dice, selectedAndSavedDice)
    updateTotal()
  }

  return (
    <>
      <Button
        onClick={handleClick}
        style={{ width: '47%' }}
        variant="outline-success"
        disabled={handleDisable()}>
          Roll
      </Button>
    </>
  )

}

const mapStateToProps = ({ turn }) => ({ turn })

export default connect(mapStateToProps, { rollDice })(RollBtn)