json.extract! user, :username, :f_name, :l_name, :image_url, :created_at

json.playlists do
  user.playlists.each do | playlist |
    json.set! playlist.id do
      json.extract! playlist, :name, :image_url
    end
  end
end

if user.playlist_follows.length == 0
  json.subscriptions({})
end

json.subscriptions do
  user.playlist_follows.each do | follow |
    json.set! follow.playlist.id do
      json.follow_id follow.id
      json.name follow.playlist.name
      json.image_url follow.playlist.image_url
    end
  end
end

# json.playlists user.playlists do | playlist |
#   json.extract! playlist, :id, :name, :image_url
# end
#
# json.subscriptions user.playlist_follows.each do | follow |
#   json.follow_id follow.id
#   json.name follow.playlist.name
#   json.id follow.playlist.id
#   json.image_url follow.playlist.image_url
# end
