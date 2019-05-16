import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { modalShow } from '../actions/modal'
import { authSuccess } from '../actions/auth'
import SignedOutNav from '../components/SignedOutNav'
import SignedInNav from '../components/SignedInNav'
import MainModal from './modal/Modal'

class Navigation extends Component {
  componentDidMount() {
    const { authSuccess } = this.props
    const user = localStorage.user

    !!user && authSuccess(JSON.parse(user))
  }

  menuItems = currentUser => {
    const { modalShow, logout } = this.props

    return Object.keys(currentUser).length === 0
            ? ( <SignedOutNav modalOpen={modalShow}/> )
            : ( <SignedInNav modalOpen={modalShow} logout={logout} /> )
  }

  render () {
    const { currentUser, errors } = this.props

    return (
      <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
          <Navbar.Brand>
            Farkle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            { this.menuItems(currentUser) }
          </Navbar.Collapse>
        </Navbar>
        <MainModal errors={errors} />
      </>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser, errors } = state.auth

  return { currentUser, errors }
}

export default connect(mapStateToProps, { modalShow, authSuccess })(Navigation)