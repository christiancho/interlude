json.extract! album, :id, :title, :image_url, :year
json.artist_name album.artist.name
json.artist_id album.artist.id
json.artist_image_url album.artist.image_url
sorted_songs = album.songs.order(:ord)
json.tracks do
  json.order sorted_songs.map{ |song| song.id }
  sorted_songs.each do | song |
    json.set! song.id do
      json.extract! song, :id, :title, :media_url, :duration
    end
  end
end
