class GameSerializer < ApplicationSerializer
  attributes :id, :inProgress, :winner
  has_many :scorecards

  def inProgress
    object.in_progress
  end
end
