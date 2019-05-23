class GameSerializer < ApplicationSerializer
  attributes :id, :user_id
  has_many :scorecards
end
