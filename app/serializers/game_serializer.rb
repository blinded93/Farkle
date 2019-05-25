class GameSerializer < ApplicationSerializer
  attributes :id, :in_progress, :winner
  has_many :scorecards
end
