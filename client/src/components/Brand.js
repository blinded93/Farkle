import React from 'react'
import { Navbar, Nav, Badge } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

const Brand = props => {
  return (
    <>
      <Navbar.Brand>
        <IndexLinkContainer to='/'>
          <Nav.Link className='d-inline'>Farkle</Nav.Link>
        </IndexLinkContainer>
        <small>
          <Badge
            className='pointer'
            onClick={e => alert('GREAT!')}
            variant='secondary'>
              New
          </Badge>
        </small>
      </Navbar.Brand>
    </>
  )
}

export default Brand