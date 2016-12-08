require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create test account

# User.transaction do
#   User.create(
#     username: "guest",
#     email: "guest@email.com",
#     f_name: "Guest",
#     l_name: "Account",
#     password_digest: "$2a$10$3PTsKIyxfVhrin5mZt69wexueXnH0ydP3YyIhlsky4Ei/cpvPU6Qu"
#   )
# end
# # Seed artists
#
# artists = [
#   "Podington Bear",
#   "Pocketmaster",
#   "Broke for Free",
#   "Blue Dot Sessions",
#   "Gillicuddy",
#   "Jahzzar",
#   "So Far As I Know",
#   "Starover Blue",
#   "The Kyoto Connection",
#   "Tours"
# ]
#
# albums = {
#   "Podington Bear" => ["2010|Meet Podington Bear", "2015|Daydream", "2016|Dance", "2016|Electronic", "2016|Epilogue", "2016|Melodic Ambient", "2016|Springtime"],
#   "Blue Dot Sessions" => ["2015|Aeronaut"],
#   "Gillicuddy" => ["2012|...Plays Guitar", "2013|...Plays Guitar Again"],
#   "Jahzzar" => ["2014|Kuddelmuddel"],
#   "So Far As I Know" => ["2016|Far From The Earth Beneath Your Feet"],
#   "The Kyoto Connection" => ["2011|No Headphones Required", "2013|Wake Up", "2016|A Christmas Meditation", "2016|Kyoto Soundscapes"],
# }
#
# artists.each do |artist_name|
#
#   artist = Artist.new(name: artist_name)
#   artist_in_path = artist_name.gsub(" ", "-").downcase
#   artist_path = "https://s3.amazonaws.com/interlude-seed-data/albums/" + artist_in_path + "/image.jpg"
#   puts artist_path
#   artist.image = open(artist_path)
#   artist.save!
#
#   next if !albums[artist_name]
#
#   albums[artist_name].each do |album|
#     year = album.split("|")[0]
#     album_title = album.split("|")[1]
#     album_to_create = Album.new(year: year, title: album_title)
#     album_path = "https://s3.amazonaws.com/interlude-seed-data/albums/" + artist_in_path + "/" + year + "/" + album_title.gsub(" ","-").downcase + "/cover.jpg"
#     puts album_path
#     album_to_create.image = open(album_path)
#     artist.albums.push(album_to_create)
#   end
#
# end

songs = [
  "Just Watching",
  "Pure Swell",
  "Sidecar",
  "Spring Comes Early",
  "Springtime",
  "T Shirt Weather",
  "Transmogrify",
  "Trellis",
  "Golden Hour"
]

songs.each_with_index do |song, index|
  order = index + 1
  song_path = order.to_s.rjust(2, "0") + "-" + song.gsub(" ","-").downcase + ".mp3"
  song_path = "https://s3.amazonaws.com/interlude-seed-data/albums/podington-bear/2016/springtime/" + song_path
  song_to_create = Song.new(title: song, ord: order)
  puts song_path
  mp3 = open(song_path)
  song_to_create.media = mp3
  Album.find_by(title: "Springtime").songs.push(song_to_create)
end
