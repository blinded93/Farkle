import React from 'react'
import { Nav } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

const SignedOutNav = ({ modalOpen }) => {
  return (
    <>
      <IndexLinkContainer to='/'>
        <Nav.Link onClick={e => modalOpen('Login')}>
            Login
        </Nav.Link>
      </IndexLinkContainer>
      <IndexLinkContainer to='/'>
        <Nav.Link onClick={e => modalOpen('Signup')}>
            Signup
        </Nav.Link>
      </IndexLinkContainer>
    </>
  )
}

export default SignedOutNav