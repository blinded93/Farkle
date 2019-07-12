class Game < ApplicationRecord
  has_many :scorecards, dependent: :destroy
  
  scope :for, -> (id) { where(user_id: id).order(id: :desc) }

  def self.create_with_scorecards(user, players)
    Game.create(user_id: user.id).tap do |game|
      game.scorecards = Scorecard.create_for(players, game)
      game.save
    end
  end

  def change_player(params, scorecard)
    next_player = params[:player] == 'player1' ? 'player2' : 'player1'

    self.update(current_player: next_player,
                          last_turn: scorecard.score >= 10000)
  end
end
