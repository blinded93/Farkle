Rails.application.routes.draw do
  resources :scorecards
  resources :games
  post '/login' => 'authentication#authenticate_user'
  get '/profile/:id' => 'user#profile'
end
