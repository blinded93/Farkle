class CreateScorecards < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecards do |t|
      t.integer :score
      t.text :scores_per_turn
      t.references :user
      t.references :game

      t.timestamps
    end
  end
end
