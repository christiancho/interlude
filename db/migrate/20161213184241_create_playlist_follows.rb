class CreatePlaylistFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_follows do |t|
      t.integer :playlist_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
