class UserController < ApplicationController
  before_action :authenticate_request!

  def profile
    user = User.find_by_id(params[:id])
    render json: user
  end
  
end
