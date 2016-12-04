class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :password_digest

      t.timestamps
    end
    
    add_index :users, :username
    add_index :users, :f_name
    add_index :users, :l_name
  end
end
