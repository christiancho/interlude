class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    add_index :songs, :album_id
  end
end
