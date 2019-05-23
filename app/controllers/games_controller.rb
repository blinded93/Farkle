class GamesController < ApplicationController
  def create
    game = Game.new(game_params)
    # binding.pry

    render json: game, status: 200
  end

  private
  
    def game_params
      params.permit(:user_id)
    end
end
