import React, { useState } from 'react'
import { connect } from 'react-redux'
import { selectDice, deselectDice } from '../../actions/turn'

const Dice = props => {
  const { id, num, selectDice } = props
  const [status, setStatus] = useState('dice-on')
  const diceNum = Number(id.split('-')[1])
  const handleSelect = () => {
    if (status === 'dice-on') {
      setStatus('dice-off')
      selectDice(diceNum)
    } else {
      setStatus('dice-on')
      deselectDice(diceNum)
    }
  }

  return (
    <>
      <i
        onClick={handleSelect}
        style={{ 'animationName': status }}
        className={`hvr-grow-rotate dice fas fa-dice-${num}`}
        id={id} />
    </>
  )
}

export default connect(null, { selectDice, deselectDice })(Dice)