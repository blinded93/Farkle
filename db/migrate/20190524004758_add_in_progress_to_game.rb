class AddInProgressToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :in_progress, :boolean, default: true
    add_column :games, :winner, :string
  end
end
