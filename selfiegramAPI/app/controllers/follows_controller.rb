class FollowsController < ApplicationController
	before_action :set_users, only: [:create]
	def create
		@user.follow(@target)
	end

	def destroy
		target = User.find(params[:id])
		user = User.find(params[:user_id])
		user.unfollow(target)
	end

	private

	def set_users
		@user, @target = User.find([params[:user_id], params[:follow_target]])
	end
end
