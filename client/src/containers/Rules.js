import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

class Games extends Component {
  
  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {})(Games)