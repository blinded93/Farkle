Rails.application.routes.draw do
  resources :scorecards
  post '/login' => 'authentication#authenticate_user'
  get '/profile/:id' => 'user#profile'
end
