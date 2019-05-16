import React from 'react'
import DialogBody from '../components/DialogBody'
import SessionBody from '../containers/modal/SessionBody'

const ModalTypeDecipher = props => {
  const components = {
    'Login': SessionBody,
    'Signup': SessionBody,
    'Logout': DialogBody
  }
  const SelectedComponent = components[props.modalType]
  
  return (
    <>
      <SelectedComponent {...props} />
    </>
  )
}

export default ModalTypeDecipher