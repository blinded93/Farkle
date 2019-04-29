Rails.application.routes.draw do
  post '/login' => 'authentication#authenticate_user'
  get '/profile/:id' => 'user#profile'
end
