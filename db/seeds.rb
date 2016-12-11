require 'open-uri'
require 'open_uri_redirections'
require 'csv'

puts "\nUsers"

unless ( User.find_by(username: "guest") )
  user = User.create(
    username: "guest",
    password_digest: "$2a$10$EcPPZe8SruUlBJKKySdD7OUmuUFIHGZnIQgDX/DgWVl512YFdCks2",
    f_name: "Guest",
    l_name: "Account",
    email: "guest@interludeapp.herokuapp.com"
  )
end

puts "\nArtists"
puts "Reading from file"
artist_seeds = CSV.read('db/seeds/artist-seeds.csv')
artist_seeds.shift

artist_seeds.each do | artist_row |
  name = artist_row[0]
  image_url = artist_row[1]

  if ( Artist.find_by(name: name) )
    puts "Skipping artist"
    next
  end

  puts "\nSAVING ARTIST: #{name}"
  record = Artist.new(name: name)
  file = open(image_url)
  record.image = file
  record.save!
  puts "SAVED: #{name} AT #{record.id}."

end

puts "\nAlbums"
puts "Reading from file"
album_seeds = CSV.read('db/seeds/album-seeds.csv')
album_seeds.shift

album_seeds.each do | album_row |
  artist = album_row[0]
  year = album_row[1]
  title = album_row[2]
  image_url = album_row[3]

  puts "\nSAVING ALBUM #{title} BY #{artist}"
  album_artist = Artist.find_by(name: artist)
  record = Album.new(year: year, title: title)
  file = open(image_url)
  record.image = file
  album_artist.albums.push(record)
  puts "SAVED #{title} BY #{artist} AT #{record.id}"

end

puts "\nSongs"
puts "Reading from file"
song_seeds = CSV.read('db/seeds/song-seeds.csv')
song_seeds.shift

song_seeds.each do | song_row |
  title = song_row[0]
  ord = song_row[1]
  album = song_row[2]
  media_url = song_row[3]

  puts "\nSAVING #{title} ON #{album}"
  song_album = Album.find_by(title: album)

  if ( Song.find_by(title: title, ord: ord) )
    puts "Skipping song"
    next
  end

  record = Song.new(title: title, ord: ord)
  file = open(media_url, allow_redirections: :all)
  record.media = file
  song_album.songs.push(record)
  puts "SAVED TRACK #{ord} - #{title} ON #{album}"

end
