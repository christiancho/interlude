json.extract! song, :id, :title, :media_url, :duration
json.album_id song.album.id
json.album_title song.album.title
json.album_image_url song.album.image_url
json.artist_id song.artist.id
json.artist_name song.artist.name
