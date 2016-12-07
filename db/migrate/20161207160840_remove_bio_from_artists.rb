class RemoveBioFromArtists < ActiveRecord::Migration[5.0]
  def change
    remove_column :artists, :bio
  end
end
