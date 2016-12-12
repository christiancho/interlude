class RemoveOrdFromPlaylistListings < ActiveRecord::Migration[5.0]
  def change
    remove_column :playlist_listings, :ord
  end
end
