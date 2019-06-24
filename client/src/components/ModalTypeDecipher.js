import React from 'react'
import DialogBody from '../components/DialogBody'
import SessionBody from '../containers/modal/SessionBody'

const ModalTypeDecipher = props => {
  const components = {
    'Login': SessionBody,
    'Signup': SessionBody,
    'NewGame': DialogBody,
    'Logout': DialogBody,
    'Farkle': DialogBody,
    'DeleteGame': DialogBody
  }
  const SelectedComponent = components[props.modalType]
  
  return (
    <>
      <SelectedComponent {...props} />
    </>
  )
}

export default ModalTypeDecipher