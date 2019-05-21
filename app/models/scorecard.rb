class Scorecard < ApplicationRecord
  belongs_to :user
  belongs_to :game

  serialize :scores_per_turn, Array
end
