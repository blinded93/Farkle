import React from 'react'
import { connect} from 'react-redux'
import DeleteRowBtn from './DeleteRowBtn'
import GameCols from './GameCols'

const GameRows = props => {
  const { games } = props
  const handleProgress = progress => {
    return progress ? 'table-success' : 'table-warning'
  }
  const handleClick = e => {
    
  }

  return (
    <>
      {
        !!games[0] &&
        games.map(game => (
          <tr
            id={`game-${game.id}`}
            key={`game-${game.id}`}
            onClick={handleClick}
            className={handleProgress(game.in_progress)}>
              <GameCols game={game} />
              <DeleteRowBtn gameId={game.id} />
          </tr>
        ))
      }
    </>
  )
}

const mapStateToProps = state => ({ games: state.games.list })

export default connect(mapStateToProps)(GameRows)