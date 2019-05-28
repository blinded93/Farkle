class GamesController < ApplicationController
  before_action :authenticate_request!

  def create
    game = Game.create_with_scorecards(current_user, player_params)
    
    render json: game, status: 200
  end

  private
    def player_params
      keys = params.keys.select{|key| key.include?('player')}
      keys.map{|key| params.require(key.to_sym).permit(:name, :color)}
    end
end
