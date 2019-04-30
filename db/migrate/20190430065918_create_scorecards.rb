class CreateScorecards < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecards do |t|

      t.timestamps
    end
  end
end
