import React, { Fragment } from 'react'
import { connect} from 'react-redux'
import DeleteRowBtn from './DeleteRowBtn'

const GamesList = props => {
  const { games } = props
  const handleProgress = progress => {
    return progress ? 'table-success' : 'table-warning'
  }
  const handleWinner = (name, winner) => {
    return name === winner ? 'bg-danger text-light' : ''
  }

  return (
    <>
      {
        !!games[0] &&
        games.map(game => (
          <tr
            id={`game-${game.id}`}
            key={`game-${game.id}`}
            onClick={alert('nope')}
            className={handleProgress(game.in_progress)}>
              <td>{game.id}</td>
              {
                game.scorecards.map(card => (
                  <Fragment key={`card-${card.id}`}>
                    <td className={handleWinner(card.name, game.winner)}>
                      {card.name}
                    </td>
                    <td>{card.score}</td>
                  </Fragment>
                ))
              }
              <DeleteRowBtn gameId={game.id} />
          </tr>
        ))
      }
    </>
  )
}

const mapStateToProps = state => ({ games: state.games.list })

export default connect(mapStateToProps)(GamesList)