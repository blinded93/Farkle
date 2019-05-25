import React from 'react'
import { logout } from '../actions/auth'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

const Logout = props => {
  const { logout, modalClose } = props

  const logoutAndClose = () => {
    logout()
    modalClose()
  }

  return (
    <>
      <Modal.Body>
        <div className='text-center'>
          <div className='mb-2'>Are you sure you want to logout?</div>
          <Button
            className='mr-1'
            size='sm'
            variant='outline-danger'
            onClick={e => logoutAndClose()}>
              Logout
          </Button>
          <Button
            className='ml-1'
            size='sm'
            variant='outline-dark'
            onClick={modalClose}>
              Cancel
          </Button>
        </div>
      </Modal.Body>
    </>
  )
}

export default connect(null, { logout })(Logout)