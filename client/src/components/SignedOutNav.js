import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const SignedOutNav = props => {
  const { modalOpen } = props

  return (
    <>
      <Nav className='ml-auto'>
        <Nav.Link
          onClick={e => modalOpen('Login')}>
            Login
        </Nav.Link>
        <Navbar.Text>/</Navbar.Text>
        <Nav.Link
          onClick={e => modalOpen('Signup')}>
            Signup
        </Nav.Link>
      </Nav>
    </>
  )
}

export default SignedOutNav