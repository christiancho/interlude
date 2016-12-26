# Interlude

[Interlude live](http://www.interludemusic.com "Live link")

Interlude is a full-stack web application inspired by the web app version of Spotify. The back end is Ruby on Rails using a PostgreSQL database while the front end uses React.js with a Redux framework.

## Features & Implementation

### Music Playback

The heart of Interlude is the library of free music that users can stream. This data is stored in a series of tables associated with three models: `Artist`, `Album`, and `Song`. Each of these models are associated linearly, starting with the `Song` belonging to `Album`, which belongs to `Artist`.

Any registered user can login and the app will make API calls to retrieve media through `image_url` (for images) or `media_url` (for mp3s). These URLs point to an Amazon Web Services S3 bucket.

Various components will use these data to render them accordingly. For example, the `Album` component uses the the song's title and duration, the latter of which is stored in the column `duration` in the `songs` table when the song is first saved to the database. This was done to eliminate the fetching of bandwidth-hogging audio files to extract duration information, especially since playlists and albums show the durations of multiple songs:

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

#### Shuffle and Repeat

The slice of state concerning the play queue includes the following:

```javascript
let defaultState = {
  currentOrderIndex: -1,
  order: [],
  unshuffledOrder: [],
  tracks: {},
  repeat: false,
  shuffle: false
};
```

While implementing repeat was a rather straightforward process, requiring a simple toggle of the `repeat` boolean, implementing a shuffle option was another issue. It required the use of two arrays: `order` and `unshuffledOrder`. When any playlist or album is played, `unshuffledOrder` copies the `order` array, based on the playlist's or album's original track order.

When a user toggles shuffle, the `order` array is either shuffled (shuffle is turned on) or becomes a copy of `unshuffledOrder` (shuffle is turned off). Additionally, `currentOrderIndex`, an integer, updates to the position of the currently playing song's id in the `order` array:

```javascript
case TOGGLE_SHUFFLE:
  let newShuffleOrder;
  if (state.shuffle){
    newShuffleOrder = state.unshuffledOrder.slice(0);
  } else {
    newShuffleOrder = state.order.slice(0);
    shuffle(newShuffleOrder);
  }
  const currentSongId = state.order[state.currentOrderIndex];
  const newShuffleOrderIndex = newShuffleOrder.indexOf(currentSongId);
  return merge(
    {},
    state,
    {
      currentOrderIndex: newShuffleOrderIndex,
      order: newShuffleOrder,
      shuffle: !state.shuffle
    }
  );
```

### Playlist Creation and Following

While users can't persist their play queue, they *can* create, edit and follow playlists. Users can also upload their own images to change their playlists' cover images. Users view the same `Playlist` component, but the owner of the playlist has editing options while others have the option to follow or unfollow the playlist. Changes to their playlist are sent via API calls but also hit reducers in the Redux framework so that users can see their updates right away without having to fetch more data from the database.

### Search

Interlude's search queries all five major tables: `artists`, `albums`, `songs`, `users`, and `playlists`. The `SearchBar` component fetches and renders results as the user types:

![alt text](https://raw.githubusercontent.com/christiancho/interlude-app/master/docs/screenshots/screencap_search.gif "Search Screenshot")

### Multiple Device Login

By using a `sessions` table in the database, Interlude allows for not only simultaneous login by the same user, it also facilitates the gathering of session information. For now, Interlude only tracks the `HTTP_USER_AGENT`. In the future, Interlude can use this information as well as other identifying data from sessions to:

1. Identify suspicious login behavior
2. Allow users to log devices out
3. Infer login trends like time of day, browsers used, and geo-locations.

```ruby
def login!(user)
  @current_user = user
  session[:session_token] = @current_user.reset_session_token!
  Session.find_by(session_token: session[:session_token]).update(http_user_agent: request.env["HTTP_USER_AGENT"])
end
```

## Future Directions for the Project

### Listen History

I plan on collecting users' listen history in order to:

1. Collect data in general to glean trends.
2. Use that data to recommend music to users.

Listen records will be stored in a new join table `listens` that will have the columns `song_id` and `user_id`. This will also allow for Interlude's browse page to show top hits.

### Radio

By assigning genres to songs and albums, Interlude would be able to generate a radio station based on a genre itself or based on an artist, album, or song, using its genre information to find other songs with similar musical style.
