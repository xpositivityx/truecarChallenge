class FeedController < ApplicationController
  before_action :set_user
  
  def index
  	render json: @user.feed, user: @user
  end

  private

  def set_user
  	@user = User.find(params[:user_id])
  end
end
