json.array! @playlists.each do | playlist |
  json.extract! playlist, :name, :id
  json.playlistImageUrl playlist.image_url
end
