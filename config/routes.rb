Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    resource :sessions, only: [ :destroy, :create ]
    resources :users, only: [ :create ]
    resources :artists, only: [ :show, :index ]
    resources :albums, only: [ :show ]
  end

end
