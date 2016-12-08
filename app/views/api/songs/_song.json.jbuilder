json.extract! song, :id, :title, :media_url, :duration
json.album_title song.album.title
json.album_cover_url song.album.image_url
json.artist_name song.artist.name
