import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const SignedInNav = ({ modalOpen, logout }) => {
  return (
    <>
      <Nav className='ml-auto'>
        <Link
          to='/profile'
          className='nav-link'>
            Home
        </Link>
        <Link
          to='/friends'
          className='nav-link'>
            Friends
        </Link>
        <Link
          to='/games'
          className='nav-link'>
            Games
        </Link>
        <Nav.Link
          onClick={e => modalOpen('Logout')}>
            Logout
        </Nav.Link>
      </Nav>
    </>
  )
}

export default SignedInNav