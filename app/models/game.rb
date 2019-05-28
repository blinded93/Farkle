class Game < ApplicationRecord
  has_many :scorecards, dependent: :destroy
  
  scope :for, -> (id) { where(user_id: id) }

  def self.create_with_scorecards(user, players)
    user.games.build.tap do |game|
      players.each{ |player_params| game.scorecards.build(player_params) }
    end
  end
end
