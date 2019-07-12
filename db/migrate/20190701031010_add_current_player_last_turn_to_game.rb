class AddCurrentPlayerLastTurnToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :current_player, :string, default: 'player1'
    add_column :games, :last_turn, :boolean, default: false
  end
end
