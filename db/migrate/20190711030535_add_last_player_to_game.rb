class AddLastPlayerToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :last_player, :string, default: nil
  end
end
