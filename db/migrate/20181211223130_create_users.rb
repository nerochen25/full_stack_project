class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email_address, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :profile_description

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email_address, unique: true
  end
end
