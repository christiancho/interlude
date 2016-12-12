export const fetchArtist = artistId => {
  return $.ajax({
    url: `api/artists/${artistId}`
  });
};

export const fetchArtists = () => {
  return $.ajax({
    url: 'api/artists/'
  });
};

export const fetchAlbum = albumId => {
  return $.ajax({
    url: `api/albums/${albumId}`
  });
};

export const fetchSong = songId => {
  return $.ajax({
    url: `api/songs/${songId}`
  });
};

export const fetchPlaylist = playlistId => {
  return $.ajax({
    url: `api/playlists/${playlistId}`
  })
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'post',
    url: 'api/playlists',
    data: { playlist },
    dataType: 'JSON'
  })
};
