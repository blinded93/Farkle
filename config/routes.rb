Rails.application.routes.draw do
  resources :accounts
  resources :scorecards
  resources :games
  post '/auth_user' => 'authentication#authenticate_user'
  resources :users
  get '/profile/:id' => 'users#profile'
end
