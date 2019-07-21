import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class Rules extends Component {
  
  render() {
    return (
      <>
        <Container>
          <div className='pb-2 text-center'>
            <u className='h2'>Rules</u>
          </div>
          <Row>
            <Col>
              <Row>
                <Col>
                  <div className='pb-2 text-center'>
                    <b className='h4'>Scoring</b>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='text-right'>
                  <i className="rules-dice fas fa-dice-five" /> FIVES = 50 points  &nbsp;
                </Col>
                <Col className='pl-4'>
                  <i className="rules-dice fas fa-dice-one" /> ONES = 100 points
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-one" />&nbsp;
                  <i className="rules-dice fas fa-dice-one" />&nbsp;
                  <i className="rules-dice fas fa-dice-one" />&nbsp;
                  = 300 pts.
                </Col>
                <Col className='border-left pl-3'>
                  4 of any number = 1,000 pts.
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-two" />&nbsp;
                  <i className="rules-dice fas fa-dice-two" />&nbsp;
                  <i className="rules-dice fas fa-dice-two" />&nbsp;
                  = 200 pts.
                </Col>
                <Col className='border-left pl-3'>
                  5 of any number = 2,000 pts.
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-three" />&nbsp;
                  <i className="rules-dice fas fa-dice-three" />&nbsp;
                  <i className="rules-dice fas fa-dice-three" />&nbsp;
                  = 300 pts.
                </Col>
                <Col className='border-left pl-3'>
                  6 of any number = 3,000 pts.
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-four" />&nbsp;
                  <i className="rules-dice fas fa-dice-four" />&nbsp;
                  <i className="rules-dice fas fa-dice-four" />&nbsp;
                  = 400 pts.
                </Col>
                <Col className='border-left pl-3'>
                  1-6 straight = 1,500 pts.
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-five" />&nbsp;
                  <i className="rules-dice fas fa-dice-five" />&nbsp;
                  <i className="rules-dice fas fa-dice-five" />&nbsp;
                  = 500 pts.
                </Col>
                <Col className='border-left pl-3'>
                  Three pairs = 1,500 pts.
                </Col>
              </Row>
              <Row>
                <Col className='text-right pr-3'>
                  <i className="rules-dice fas fa-dice-six" />&nbsp;
                  <i className="rules-dice fas fa-dice-six" />&nbsp;
                  <i className="rules-dice fas fa-dice-six" />&nbsp;
                  = 600 pts.
                </Col>
                <Col className='border-left pl-3'>
                  Four of any number<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  with a pair = 1,500 pts.
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col className='border-left pl-3'>
                  Two triplets = 2,500 pts.
                </Col>
              </Row>
            </Col>
            <Col>
             <h4>Objective</h4>
             <p>To score points through systematic rolling of the dice.</p>
             <h5>How to Play</h5>
             <p>The first player rolls 6 dice and selects (sets aside) any scoring dice that appear. Players can continue to roll the remaining dice for more points, setting aside a minimum of 1 scoring dice each turn. 500 points must be collected before points can be added to scorecard (banked). If a roll does not contain any scoring dice, the player has 'FARKLED' and loses points and turn.</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {})(Rules)