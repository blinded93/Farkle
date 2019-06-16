import React from 'react'
import { Tabs, Tab, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import CurrentGame from '../../containers/CurrentGame';

const Scorecard = props => {
  const { scorecards, currentPlayer } = props
  const tableRows = scoresPerTurn => (
    [...Array(7)].map((_, i) => (
      <tr key={`row-${i}`}>
        <td className='scores'>{scoresPerTurn[i]}</td>
        <td className='scores'>{scoresPerTurn[i + 7]}</td>
        <td className='scores'>{scoresPerTurn[i + 14]}</td>
      </tr>
    ))
  )

  return (
    <>
      <Tabs
        activeKey={currentPlayer}
        id="player-scorecards">
        {
          Object.keys(scorecards).map((string, key) => {
            const { name, score, scoresPerTurn } = scorecards[string]

            return (
              <Tab
                key={key}
                eventKey={`player${key + 1}`}
                title={`${name} (${score})`}>
                  <Table borderless size='sm' className='mt-2 text-center'>
                    <tbody>
                      {tableRows(scoresPerTurn)}
                      <tr>
                        <td></td><td></td><td className='text-right'><span className='font-weight-bold'>Total:</span>{`  ${score}`}</td>
                      </tr>
                    </tbody>
                  </Table>
              </Tab>
            )
          })
        }
      </Tabs>
    </>
  )
}

const mapStateToProps = state => ({
  scorecards: state.scorecards,
  currentPlayer: state.currentGame.currentPlayer
})

export default connect(mapStateToProps, {})(Scorecard)