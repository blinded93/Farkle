import React from 'react'
import Logout from './Logout'

const DialogBody = props => {
  const components = {
    'Logout': Logout
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