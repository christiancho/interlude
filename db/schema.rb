# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170126193008) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "artist_id",          null: false
    t.integer  "year",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["name"], name: "index_artists_on_name", using: :btree
  end

  create_table "geopoints", force: :cascade do |t|
    t.integer  "user_id",         null: false
    t.string   "metrocode"
    t.float    "geo_lat"
    t.float    "geo_lng"
    t.string   "ip_address"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "http_user_agent"
    t.index ["user_id"], name: "index_geopoints_on_user_id", using: :btree
  end

  create_table "playlist_follows", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "playlist_listings", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "song_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_playlist_listings_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_playlist_listings_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "name",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["user_id"], name: "index_playlists_on_user_id", using: :btree
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_token", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_sessions_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "album_id",           null: false
    t.integer  "ord",                null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "media_file_name"
    t.string   "media_content_type"
    t.integer  "media_file_size"
    t.datetime "media_updated_at"
    t.integer  "duration"
    t.index ["album_id"], name: "index_songs_on_album_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "email",              null: false
    t.string   "f_name",             null: false
    t.string   "l_name",             null: false
    t.string   "password_digest"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["f_name"], name: "index_users_on_f_name", using: :btree
    t.index ["l_name"], name: "index_users_on_l_name", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
