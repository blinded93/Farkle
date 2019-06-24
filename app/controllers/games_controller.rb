class GamesController < ApplicationController
  before_action :authenticate_request!
  include Pagy::Backend

  def index
    pagy, games = pagy(Game.for(current_user.id), items: 1)

    render json: {
      games: games.map { |g| GameSerializer.new(g) },
      pagy: pagy
      }, status: 200
  end

  def create
    game = Game.create_with_scorecards(current_user, player_params)
    binding.pry
    render json: game, status: 200
  end

  def destroy
    game = current_user.games.find_by(id: (params[:id]))
    status = game ? 200 : 404

    render json: game.destroy, status: status
  end

  private
    def player_params
      keys = params.keys.select{|key| key.include?('player')}
      keys.map{|key| params.require(key.to_sym).permit(:name, :color)}
    end
end
