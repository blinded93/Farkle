import React from 'react'
import Logout from './Logout'
import NewGame from './newGame/NewGame'
import Farkle from './game/Farkle'

const DialogBody = props => {
  const components = {
    'Logout': Logout,
    'NewGame': NewGame,
    'Farkle': Farkle
  }
  const { modalClose, modalType } = props
  const SelectedComponent = components[modalType]

  return (
    <>
      {<SelectedComponent modalClose={modalClose} />}
    </>
  )
}

export default DialogBody