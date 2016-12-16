# Interlude

[Interlude live](http://interludeapp.herokuapp.com/)

Interlude is a full-stack web application inspired by the web app version of Spotify. The back end is Ruby on Rails using a PostgreSQL database while the front end uses React.js with a Redux framework.

## Features & Implementation

### Music Playback

The heart of Interlude is the library of free music that users can stream. This data is stored in a series of tables associated with three models: `Artist`, `Album`, and `Song`. Each of these models are associated linearly, starting with the `Song` belonging to `Album`, which belongs to `Artist`.

Any registered user can login and the app will make API calls to retrieve media through `image_url` (for images) or `media_url` (for mp3s). These URLs point to an Amazon Web Services S3 bucket.

Various components will use theses data to render them accordingly. For example, the `Album` component uses the the song's title and duration, the latter of which is stored in the column `duration` in the `songs` table when the song is first saved to the database. This was done to eliminate the fetching of bandwidth-hogging audio files to extract duration information:

```ruby
def extract_duration
    path = media.queued_for_write[:original].path
    open_opts = { :encoding => 'utf-8' }
    Mp3Info.open(path, open_opts) do |mp3info|
      self.duration = (mp3info.length + 0.5).to_i
    end
  end
```

The user interface is designed to be seamless and encourages active navigation for music discovery:

![alt text](https://raw.githubusercontent.com/christiancho/interlude-app/master/docs/screenshots/interlude_screenshot.jpg "Interlude Screenshot")

### Song Playback During navigation

Interlude manages two major components in order to juggle both the current song playing and the queue of songs that users add to. The `NowPlaying` and `Controls` components work together and use an HTML5 audio tag to stream an mp3 stored in Amazon Web Services. The `Controls` component oversees playback options like shuffle and repeat while `NowPlaying` strictly manages the currently playing song.

### Maintenance of Play Queue

Users can add to their play queue by right-clicking on songs listed in the `Album` and `Playlist` components. This play queue does not persist as it is designed to feel organic. It utilizes a slice of state called `playQueue`, which is also changed when the user chooses to play an album or playlist. The `playQueue` slice of state also holds queue options like repeat and shuffle.

### Playlist Creation and Following

While users can't persist their play queue, they *can* create, edit and follow playlists. Users can also upload their own images to change their playlists' cover images. Users view the same `Playlist` component, but the owner of the playlist has editing options while others have the option to follow or unfollow the playlist. Changes to their playlist are sent via API calls but also hit reducers in the Redux framework so that users can see their updates right away without having to fetch more data from backend.

### Search

Interlude's search queries all five major tables: `artists`, `albums`, `songs`, `users`, and `playlists`. The `SearchBar` component fetches and renders results as the user types:

![alt text](https://raw.githubusercontent.com/christiancho/interlude-app/master/docs/screenshots/screencap_search.gif "Search Screenshot")

## Future Directions for the Project

### Listen History

I plan on collecting users' listen history in order to:

1. Collect data in general to glean trends.
2. Use that data to recommend music to users.

Listen records will be stored in a new join table `listens` that will have the columns `song_id` and `user_id`. This will also allow for Interlude's browse page to show top hits.

### Radio

By assigning genres to songs and albums, Interlude would be able to generate a radio station based on a genre itself or based on an artist, album, or song, using its genre information to find other songs with similar musical style.
