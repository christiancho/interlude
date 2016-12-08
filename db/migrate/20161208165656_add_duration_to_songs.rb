class AddDurationToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :duration, :integer
  end
end
