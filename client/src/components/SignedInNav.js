import React from 'react'
import { Nav } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const SignedInNav = ({ modalOpen, logout }) => {
  return (
    <>
      <LinkContainer to='profile'>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='friends'>
        <Nav.Link>Friends</Nav.Link>
      </LinkContainer>
      <LinkContainer to='games'>
        <Nav.Link>Games</Nav.Link>
      </LinkContainer>
      <IndexLinkContainer to='/'>
        <Nav.Link onClick={e => modalOpen('Logout')}>
            Logout
        </Nav.Link>
      </IndexLinkContainer>
    </>
  )
}

export default SignedInNav