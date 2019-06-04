import React from 'react'
import { Tabs, Tab, Table } from 'react-bootstrap'

const Scorecard = props => {
  const { scorecards } = props
  
  const tableRows = scoresPerTurn => (
    [...Array(7)].map((s, i) => (
      <tr key={`row-${i}`}>
        <td className='scores'>{scoresPerTurn[i]}</td>
        <td className='scores'>{scoresPerTurn[i + 7]}</td>
        <td className='scores'>{scoresPerTurn[i + 14]}</td>
      </tr>
    ))
  )
  
  return (
    <>
      <Tabs defaultActiveKey="player1" id="player-scorecards">
        {
          Object.keys(scorecards).map((string, key) => {
            const { name, score, scoresPerTurn } = scorecards[string]

            return (
              <Tab
                key={key}
                eventKey={`player${key + 1}`}
                title={name}>
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

export default Scorecard