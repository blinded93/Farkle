import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Login from './Login'
import Signup from './Signup'
import { createUser, authenticate } from '../actions/users'
import { connect } from 'react-redux'

class SessionModal extends Component {
  state = {
    username:'',
    email:'',
    identifier:'',
    password:''
  }

  fields = () => {
    const nonBlankFields = {}
    
    for (const key in this.state) {
      if (this.state[key] !== '') nonBlankFields[key] = this.state[key]
    }

    return { [this.props.form.toLowerCase()]: nonBlankFields }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e, fields) => {
    const { createUser, authenticate, onHide } = this.props
    e.preventDefault()
    
    !!fields.login
    ? authenticate(fields.login, onHide)
    : createUser(fields.signup, onHide)
  }

  formComponent = form => {
    const { errors } = this.props

    if (form) {
      const formComponents = { 'Login': Login, 'Signup': Signup }
      const SelectedForm = formComponents[form]
  
      return <SelectedForm
               fields={this.fields()}
               onChange={this.onChange}
               onSubmit={this.onSubmit}
               onHide={this.props.onHide}
               errors={errors} />
      }
    }

  render() {
    const { createUser, authenticate, form, ...props } = this.props

    return (
      <>
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered >
          <Modal.Body>
            {this.formComponent(form)}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, { createUser, authenticate })(SessionModal)