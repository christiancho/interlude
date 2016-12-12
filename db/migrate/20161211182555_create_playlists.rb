class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :playlists, :owner_id
  end
end
