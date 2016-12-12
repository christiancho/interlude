json.extract! album, :id, :title, :image_url, :year
sorted_songs = album.songs.order(:ord)
json.songs sorted_songs do |song|
  json.partial! 'api/songs/song', locals: { song: song }
end
