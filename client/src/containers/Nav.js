import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import SessionModal from './SessionModal'
import { authSuccess, logout } from '../actions/auth'
import SignedOutNav from '../components/SignedOutNav'
import SignedInNav from '../components/SignedInNav'

class Navigation extends Component {
  state = {
    modalShow: false,
    form: ''
  }
  
  componentDidMount() {
    const { authSuccess } = this.props
    const user = localStorage.user

    !!user && authSuccess(JSON.parse(user))
  }

  modalOpen = form => this.setState({ form: form, modalShow: true })

  modalClose = () => this.setState({ modalShow: false })

  menuItems = currentUser => {
    const { logout } = this.props

    return Object.keys(currentUser).length === 0
            ? ( <SignedOutNav modalOpen={this.modalOpen}/> )
            : ( <SignedInNav logout={logout} /> )
  }

  render () {
    const { modalShow, form } = this.state
    const { currentUser, errors } = this.props.auth

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
        <SessionModal
          show={modalShow}
          onHide={this.modalClose}
          errors={errors}
          form={form} />
      </>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, { authSuccess, logout })(Navigation)