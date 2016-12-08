class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :artists, :name
  end
end
