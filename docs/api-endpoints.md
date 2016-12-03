# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### artists
- `GET /api/artists/:id`

### albums
- `GET /api/albums/:id`

### songs
- `GET /api/albums/:id/songs/`
- `GET /api/albums/:id/songs/:id`
- `GET /api/playlists/:id/songs`

### playlists
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists`

### playlist listings
- `POST /api/playlists/:id/playlist_listings`
- `DELETE /api/playlists/:id/playlist_listings/:id`
- `PATCH /api/playlists/:id/playlist_listings/:id`

### follows
- `POST /api/follows`
- `DELETE /api/follows/:id`
