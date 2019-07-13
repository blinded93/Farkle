import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Container, Row, Col } from 'react-bootstrap'

class Rules extends Component {
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={1} lg={1} xl={1}  />
            <Col>
              <Table borderless size='sm'>
                <tbody>
                  <tr>
                    <td className='text-right'>
                      <i class="rules-dice fas fa-dice-five" /> FIVES = 50 points  &nbsp;
                    </td>
                    <td className='pl-4'>
                      <i class="rules-dice fas fa-dice-one" /> ONES = 100 points
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-one" />&nbsp;
                      <i class="rules-dice fas fa-dice-one" />&nbsp;
                      <i class="rules-dice fas fa-dice-one" />&nbsp;
                      = 300 pts.
                    </td>
                    <td className='border-left pl-3'>
                      4 of any number = 1,000 pts.
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-two" />&nbsp;
                      <i class="rules-dice fas fa-dice-two" />&nbsp;
                      <i class="rules-dice fas fa-dice-two" />&nbsp;
                      = 200 pts.
                    </td>
                    <td className='border-left pl-3'>
                      5 of any number = 2,000 pts.
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-three" />&nbsp;
                      <i class="rules-dice fas fa-dice-three" />&nbsp;
                      <i class="rules-dice fas fa-dice-three" />&nbsp;
                      = 300 pts.
                    </td>
                    <td className='border-left pl-3'>
                      6 of any number = 3,000 pts.
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-four" />&nbsp;
                      <i class="rules-dice fas fa-dice-four" />&nbsp;
                      <i class="rules-dice fas fa-dice-four" />&nbsp;
                      = 400 pts.
                    </td>
                    <td className='border-left pl-3'>
                      1-6 straight = 1,500 pts.
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-five" />&nbsp;
                      <i class="rules-dice fas fa-dice-five" />&nbsp;
                      <i class="rules-dice fas fa-dice-five" />&nbsp;
                      = 500 pts.
                    </td>
                    <td className='border-left pl-3'>
                      Three pairs = 1,500 pts.
                    </td>
                  </tr>
                  <tr>
                    <td className='text-right pr-3'>
                      <i class="rules-dice fas fa-dice-six" />&nbsp;
                      <i class="rules-dice fas fa-dice-six" />&nbsp;
                      <i class="rules-dice fas fa-dice-six" />&nbsp;
                      = 600 pts.
                    </td>
                    <td className='border-left pl-3'>
                      Four of any number<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      with a pair = 1,500 pts.
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td className='border-left pl-3'>
                      Two triplets = 2,500 pts.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={1} lg={1} xl={1} />
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {})(Rules)