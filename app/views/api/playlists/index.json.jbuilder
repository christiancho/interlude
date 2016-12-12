json.array! @playlists.each do | playlist |
  json.extract! playlist, :name, :id
  if playlist.user.username == "interlude"
    json.playlistImageUrl playlist.image_url
  else
    json.albumCovers playlist.songs.each do | song |
      json.albumCoverUrl song.album.image_url
    end
  end
end
