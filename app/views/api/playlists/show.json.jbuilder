json.extract! @playlist, :name, :created_at, :updated_at, :id, :image_url
json.owner @playlist.user.username
json.tracks @playlist.playlist_listings.each do | listing |
  song = @playlist.songs.find(listing.song_id)
  json.listing_id listing.id
  json.partial! 'api/songs/song', locals: { song: song }
end
