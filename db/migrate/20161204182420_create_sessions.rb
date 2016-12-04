class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.string :session_token, null: false
      t.integer :user_id, null: false
      t.string :http_user_agent, null: false

      t.timestamps
    end

    add_index :sessions, :user_id
  end
end
