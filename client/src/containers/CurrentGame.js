import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import MobileBoard from '../components/game/MobileBoard'
import DesktopBoard from '../components/game/DesktopBoard'
import { connect } from 'react-redux'

class CurrentGame extends Component {
  state = {
    width: window.innerWidth,
    
  }

  render() {
    return (
      <>
        <Container>
          {
            this.state.width < 560
              ? <MobileBoard height={this.height} />
              : <DesktopBoard height={this.height} />
          }
        </Container>
      </>
    )
  }
}

export default connect()(CurrentGame)