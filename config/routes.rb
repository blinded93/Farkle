Rails.application.routes.draw do
  resources :scorecards
  resources :games
  post '/auth_user' => 'authentication#authenticate_user'
  post '/verify_user' => 'authentication#verify_user'
  resources :users
end
