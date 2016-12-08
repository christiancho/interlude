json.extract! artist, :id, :name, :image_url
json.albums artist.albums do |album|
  json.partial! 'api/albums/album', locals: { album: album }
end
