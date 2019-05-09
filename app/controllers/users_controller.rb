class UsersController < ApplicationController
  # include ActionController::Live
  # before_action :authenticate_request!

  def create
    user = User.new(user_params)
    
    if user.valid?
      user.save
      render json: user, status: 200
    else
      render json: user, status: 400
    end
  end
  
  def profile
    binding.pry
    # response.headers['Content-Type'] = 'text/event-stream'
    # user = User.find_by_id(params[:id])
    # # render json: user
    # name = user.username
    # 3.times do |n|
    #   response.stream.write "#{n}...\n\n"
    #   sleep 2
    # end
    # # response.stream.write "#{name}...\n\n"
  # ensure
  #   response.stream.close
  end
  
  private

    def user_params
      params.permit(:username, :email, :password)
    end
end
