## Component Hierachy

**AuthFormContainer**
- SignUpForm
  - SignUpErrors
- LoginForm
  - LoginErrors

**NavigationContainer**
- Navigation
- Logout

**BrowseContainer**
- BrowseNavigation
- Recommendations

**NowPlayingContainer**
- NowPlaying
- RelatedMusic

**QueueContainer**
- CurrentTrack
- QueuedTracks
- PlaylistQueue

**UserViewContainer**
- UserView
- PublicPlaylists
- Following
- Followers

**ArtistViewContainer**
- ArtistView
  - AlbumDetail
  - SongDetail
    - [SongContextMenuContainer](#modular)

**AlbumViewContainer**
- AlbumView
- SongDetail
  - [SongContextMenuContainer](#modular)

**PlaylistViewContainer**
- PlaylistView
  - PlaylistEditForm
  - SongDetail
    - [SongContextMenuContainer](#modular)

### Modular

**SongContextMenuContainer**
- SongContextMenu
- PlaylistMenu
- PlaylistForm

## BONUS: Search

**SearchContainer**
- SearchForm
- SearchResults
  - SearchResultsTopResults
  - SearchResultsSongs
  - SearchResultsArtists
  - SearchResultsAlbums
  - SearchResultsPlaylists
  - SearchResultsUsers

**SearchDetailContainer**
- SearchDetailArtists
  - SearchDetailArtistDetail
- SearchDetailAlbums
  - SearchDetailAlbumDetail
- SearchDetailPlaylists
  - SearchDetailPlaylistDetail
- SearchDetailSongs

## Routes

|Path                                 |Component              |
|-------------------------------------|-----------------------|
|"/signup"                            |"AuthFormContainer"    |
|"/login"                             |"AuthFormContainer"    |
|"/browse"                            |"BrowseContainer"      |
|"/user/:userId/playlists/:playlistId"|"PlaylistViewContainer"|
|"/artist/:artistId"                  |"ArtistViewContainer"  |
|"/album/:albumId"                    |"AlbumViewContainer"   |
|"/search"                            |"SearchContainer"      |
