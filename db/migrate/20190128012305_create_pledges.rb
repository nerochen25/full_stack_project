class CreatePledges < ActiveRecord::Migration[5.2]
  def change
    create_table :pledges do |t|
      t.integer :amount, null: false
      t.integer :supporter_id, null: false
      t.integer :project_id, null: false
      t.integer :reward_id
      t.timestamps
      
    end

    add_index :pledges, :supporter_id, unique: true
  end
end
