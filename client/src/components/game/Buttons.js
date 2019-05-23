import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = props => {
  return (
    <>
      <Button style={{ width: '47%' }} variant="outline-success">Roll</Button>
      <Button style={{ width: '47%' }} variant="outline-danger">Bank</Button>
    </>
  )
}

export default Buttons