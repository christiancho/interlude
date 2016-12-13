json.extract! album, :id, :title, :image_url, :year
sorted_songs = album.songs.order(:ord)
json.songs sorted_songs do |song|
  json.extract! song, :id, :title, :media_url, :duration
end
