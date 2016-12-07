require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create test account

User.create(
  username: "guest",
  email: "guest@email.com",
  f_name: "Guest",
  l_name: "Account",
  password_digest: "$2a$10$3PTsKIyxfVhrin5mZt69wexueXnH0ydP3YyIhlsky4Ei/cpvPU6Qu"
)

# Seed artists

podington_bear = Artist.new(name: "Podington Bear")
podington_bear.image = open("https://s3.amazonaws.com/interlude-seed-data/albums/podington-bear/image.png")
podington_bear.save!

pocketmaster = Artist.new(name: "Pocketmaster")
pocketmaster.image = open("https://s3.amazonaws.com/interlude-seed-data/albums/pocketmaster/image.jpg")
pocketmaster.save!

broke_for_free = Artist.new(name: "Broke for Free")
broke_for_free.image = open("https://s3.amazonaws.com/interlude-seed-data/albums/broke-for-free/brokeforfree.jpg")
broke_for_free.save!
