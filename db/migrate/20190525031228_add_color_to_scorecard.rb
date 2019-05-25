class AddColorToScorecard < ActiveRecord::Migration[5.2]
  def change
    add_column :scorecards, :color, :string, default: 'black'
  end
end
