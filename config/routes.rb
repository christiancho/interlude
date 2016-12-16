Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    resource :sessions, only: [ :destroy, :create ]
    resources :users, only: [ :index, :create, :show, :update ] do
      resources :playlists, only: [ :index ]
    end
    resources :playlist_listings, only: [ :create, :destroy ]
    resources :playlist_follows, only: [ :create, :destroy ]
    resources :artists, only: [ :show, :index ]
    resources :albums, only: [ :show ]
    resources :songs, only: [ :show ]
    resources :playlists, only: [ :show, :create, :update, :destroy ]
    resources :searches, only: [ :index ]
  end

end
