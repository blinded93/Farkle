import React from 'react'
import { connect } from 'react-redux'
import { selectDice, deselectDice } from '../../actions/turn'

const Dice = props => {
  const { id, num, selectDice, deselectDice, diceState, rollCount } = props
  const diceIndex = Number(id.split('-')[1])
  const handleSelect = () => {
    rollCount > 0
      && (
          diceState === 'dice-on'
            ? selectDice(diceIndex)
            : deselectDice(diceIndex)
        )
  }

  return (
    <>
      <i
        onClick={handleSelect}
        style={{ 'animationName': diceState }}
        className={`hvr-grow-rotate dice fas fa-dice-${num}`}
        id={id} />
    </>
  )
}

const mapStateToProps = state => ({ rollCount: state.turn.rollCount })

export default connect(mapStateToProps, { selectDice, deselectDice })(Dice)