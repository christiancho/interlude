# Interlude

![alt text](https://raw.githubusercontent.com/christiancho/interlude-app/master/app/assets/images/splash/logo-green-cutout.png "Logo Green Cutout")

[Interlude live](http://interludeapp.herokuapp.com/)

## Minimum Viable Product

Interlude is a full-stack web application inspired by the web app version of Spotify. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song playback during navigation
- [ ] Maintain a queue of songs
- [ ] CRUD playlists
- [ ] Subscribe to other users' playlists

## Design Docs

* [View Wireframes](wireframes)
* [React Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Sample State](sample-state.md)

## Implentation Timeline

### Phase 1: Backend setup and front end user authentication (2 days)

**Objective:** Functioning rails project with front-end authentication

### Phase 2: Song model, API, and components (2 days)

**Objective:** Songs can be played during navigation of site

### Phase 3: Play queue (2 days)

**Objective:** Songs can be added to a play queue that will persist during user's session

### Phase 4: Playlist CRUD (2 days, W2 Th 6 pm)

**Objective:** Users can create, update, and delete playlists through context menus from songs

### Phase 5: Playlist following (1 day, W2 F 6 pm)

**Objective:** Playlists can have followers and users can access their subscribed playlists through their personal menu

### Bonus Features (TBD)
- [ ] Database search of users, playlists, artists, albums, and songs
- [ ] Site can show related artists through genres
- [ ] Create radio that utilizes related artists to generate random play queue
