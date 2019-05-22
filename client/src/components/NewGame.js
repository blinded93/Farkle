import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

const NewGame = props => {
  const { modalClose } = props
  debugger
  const newWithSave = () => {
    
    modalClose()
  }
  const newWithoutSave = () => {

    modalClose()
  }

  return (
    <>
      <Modal.Body>
        <div className='text-center'>
          <div className='mb-2'>Saving the current game will not save incomplete turns. Would you like to save the current game before starting a new one?</div>
          <Button
            className='mr-1'
            size='sm'
            variant='outline-success'
            onClick={e => newWithSave()}>
            Yes
          </Button>
          <Button
            className='mr-1'
            size='sm'
            variant='outline-danger'
            onClick={e => newWithoutSave()}>
            No
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

export default connect(null, { logout })(NewGame)