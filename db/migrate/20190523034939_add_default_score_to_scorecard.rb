class AddDefaultScoreToScorecard < ActiveRecord::Migration[5.2]
  def change
    change_column :scorecards, :score, :integer, :default => 0
  end
end
