json.extract! song, :id, :title, :media_url, :duration
json.albumId song.album.id
json.albumTitle song.album.title
json.albumCoverUrl song.album.image_url
json.artistId song.artist.id
json.artistName song.artist.name
