export const fetchArtist = (artistId) => {
  return $.ajax({
    url: `api/artists/${artistId}`
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    url: `api/albums/${albumId}`
  });
};

export const fetchSong = (songId) => {
  return $.ajax({
    url: `api/songs/${songId}`
  });
};
