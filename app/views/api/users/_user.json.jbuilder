json.extract! user, :username, :f_name, :l_name, :image_url, :created_at
json.playlists user.playlists do | playlist |
  json.extract! playlist, :id, :name
end
