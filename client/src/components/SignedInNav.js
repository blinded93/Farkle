import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const SignedInNav = props => {
  const { logout } = props

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
          onClick={logout}>
            Logout
        </Nav.Link>
      </Nav>
    </>
  )
}

export default SignedInNav