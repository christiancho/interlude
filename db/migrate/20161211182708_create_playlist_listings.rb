class CreatePlaylistListings < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_listings do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    add_index :playlist_listings, :song_id
    add_index :playlist_listings, :playlist_id
  end
end
