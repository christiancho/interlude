@artists.each do | artist |
  json.set! artist.id do
    json.partial! 'api/artists/artist', locals: { artist: artist }
  end
end
