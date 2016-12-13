json.extract! user, :username, :f_name, :l_name, :image_url, :created_at
json.playlists user.playlists do | playlist |
  json.extract! playlist, :id, :name
end
json.subscriptions user.playlist_follows.each do | follow |
  json.playlist_id follow.playlist.id
  json.follow_id follow.id
end
