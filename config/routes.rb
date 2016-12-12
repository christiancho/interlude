Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    resource :sessions, only: [ :destroy, :create ]
    resources :users, only: [ :create, :show ]
    resources :artists, only: [ :show, :index ]
    resources :albums, only: [ :show ]
    resources :songs, only: [ :show ]
    resources :playlists, only: [ :show, :create, :update, :destroy ]
    resources :playlist_listings, only: [ :create, :destroy ]
  end

end
