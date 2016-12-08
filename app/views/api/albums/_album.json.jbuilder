json.extract! album, :id, :title, :image_url, :year
json.songs album.songs do |song|
  json.partial! 'api/songs/song', locals: { song: song }
end
