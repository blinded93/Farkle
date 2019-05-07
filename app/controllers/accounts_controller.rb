class AccountsController < ApplicationController
  before_action :authenticate_request!
  
  def create
    binding.pry
  end
  
  def show
    binding.pry
  end 
end
