# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "guest",
  email: "guest@email.com",
  f_name: "Guest",
  l_name: "Account",
  password_digest: "$2a$10$3PTsKIyxfVhrin5mZt69wexueXnH0ydP3YyIhlsky4Ei/cpvPU6Qu"
)

file = File.open(File.join(Rails.root,'app/assets/seed_media/artists/podington-bear.png'))
artist = Artist.new(name: "Podington Bear", bio: "The very first artist in Interlude. He makes free music and wears a bear onesie.")
artist.image = file
artist.save!
