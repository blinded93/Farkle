import React from 'react'
import Logout from './Logout'
import NewGame from './newGame/NewGame'
import Farkle from './game/Farkle'
import DeleteGame from './DeleteGame'

const DialogBody = props => {
  const components = {
    'Logout': Logout,
    'NewGame': NewGame,
    'Farkle': Farkle,
    'DeleteGame': DeleteGame
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