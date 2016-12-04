# Schema Information

## users

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|username       |string   |not null, indexed, unique|
|email          |string   |not null, indexed, unique|
|f_name         |string   |not null, indexed        |
|l_name         |string   |not null, indexed        |
|password_digest|string   |not null                 |
|session_token  |string   |not null, indexed, unique|
|image_url      |string   |                         |

## sessions

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |string   |not null, indexed        |
|http_user_agent|string   |not null,                |

## artists

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|name           |string   |not null, indexed        |
|image_url      |string   |not null                 |
|bio            |text     |not null                 |

## songs

|column name    |data type|details                                                  |
|---------------|---------|---------------------------------------------------------|
|id             |integer  |not null, primary key                                    |
|title          |string   |not null, indexed                                        |
|album_id       |integer  |not null, indexed                                        |
|ord            |integer  |not null, foreign key (references albums)                |
|song_credit_id |integer  |not null, foreign key (references song credits), indexed |
|media_url      |string   |not null                                                 |

## song credits

|column name|data type|details                                            |
|-----------|---------|---------------------------------------------------|
|id         |integer  |not null, primary key                              |
|oreds      |integer  |not null                                           |
|song_id    |integer  |not null, foreign key (references songs), indexed  |
|artist_id  |integer  |not null, foreign key (references artists), indexed|

## albums

|column name|data type|details                                            |
|-----------|---------|---------------------------------------------------|
|id         |integer  |not null, primary key                              |
|title      |string   |not null, primary key                              |
|artist_id  |integer  |not null, foreign key (references artists), indexed|
|image_url  |string   |                                                   |

## playlists

|column name|data type|details                                          |
|-----------|---------|-------------------------------------------------|
|id         |integer  |not null, primary key                            |
|name       |string   |not null, indexed                                |
|owner_id   |integer  |not null, foreign key (references users), indexed|

## playlist listings

|column name|data type|details                                              |
|-----------|---------|-----------------------------------------------------|
|id         |integer  |not null, primary key                                |
|playlist_id|integer  |not null, foreign key (references playlists), indexed|
|song_id    |integer  |not null, foreign key (references songs), indexed    |
|ord        |integer  |not null                                             |
|added_date |date     |not null                                             |

## follows

|column name  |data type|details                                          |
|-------------|---------|-------------------------------------------------|
|id           |integer  |not null, primary key                            |
|user_id      |integer  |not null, foreign key (references users), indexed|
|playlist_id  |integer  |not null, foreign key (playlists), indexed       |
