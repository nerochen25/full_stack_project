class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.float :funding_goal, null: false
      t.date :due_date, null: false
      t.boolean :reward_offered

      t.timestamps
    end
    add_index :projects, :creator_id
    add_index :projects, :category_id
  end
end
