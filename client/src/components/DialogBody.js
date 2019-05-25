import React from 'react'
import Logout from './Logout'
import NewGame from './newGame/NewGame'

const DialogBody = props => {
  const components = {
    'Logout': Logout,
    'NewGame': NewGame
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