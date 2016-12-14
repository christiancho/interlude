json.extract! @playlist_follow, :id, :playlist_id
json.playlist_image_url @playlist_follow.playlist.image_url
json.playlist_name @playlist_follow.playlist.name
