import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import NewGameForm from './NewGameForm'

class NewGame extends Component {
  state = {
    player1Name:'',
    player2Name:'',
    player1Color:'',
    player2Color:''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    debugger
    this.props.modalClose()
  }

  render() {
    const { modalClose } = this.props
    console.log(this.state)
    return (
      <>
        <Modal.Header closeButton>
          <h5>New Game</h5>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div className='mb-2'>
              <NewGameForm
                onChange={this.onChange}
                onSubmit={this.onSubmit} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            form='new-game-form'
            size='sm'
            type='submit'
            variant='outline-success'>
              Create Game
          </Button>
        </Modal.Footer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  
})
export default connect(mapStateToProps, {  })(NewGame)