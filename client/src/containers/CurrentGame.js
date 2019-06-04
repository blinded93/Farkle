import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import MobileBoard from '../components/game/MobileBoard'
import DesktopBoard from '../components/game/DesktopBoard'
import { connect } from 'react-redux'

class CurrentGame extends Component {
  state = {
    width: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  updateWidth = () => this.setState({ width: window.innerWidth })

  render() {
    const { currentGame, scorecards } = this.props
    const { width } = this.state

    return (
      <>
        <Container>
          {
            this.state.width < 560
              ? <MobileBoard
                  currentGame={currentGame}
                  scorecards={scorecards} />
              : <DesktopBoard
                  currentGame={currentGame}
                  scorecards={scorecards} />
          }
        </Container>
      </>
    )
  }
}

const mapStateToProps = ({ currentGame, scorecards }) => ({ currentGame, scorecards })

export default connect(mapStateToProps, { })(CurrentGame)