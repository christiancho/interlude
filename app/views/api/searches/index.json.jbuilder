json.artists do
  json.array! @artists do | artist |
    json.extract! artist, :name, :id
  end
end

json.albums do
  json.array! @albums do | album |
    json.extract! album, :title, :id
    json.artist_name album.artist.name
    json.artist_id album.artist.id
  end
end

json.songs do
  json.array! @songs do | song |
    json.extract! song, :title, :id
    json.album_title song.album.title
    json.artist_name song.artist.name
  end
end

json.playlists do
  json.array! @playlists do | playlist |
    json.extract! playlist, :name, :id
    json.owner playlist.user.username
  end
end

json.users do
  json.array! @users do | user |
    json.extract! user, :username, :f_name, :l_name
  end
end
