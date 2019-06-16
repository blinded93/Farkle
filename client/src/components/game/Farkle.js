import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const Farkle = props => {
  const { name } = props
  
  return (
    <>
      <Modal.Header>

      </Modal.Header>
      <Modal.Body>
        FARKLE!
      </Modal.Body>
      <Modal.Footer>
        <Button>
          GoTo {name}
        </Button>
      </Modal.Footer>
    </>
  )
}

export default Farkle