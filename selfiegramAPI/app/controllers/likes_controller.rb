class LikesController < ApplicationController
	before_action :set_resources
	
	def create
		@user.like(@post)
	end

	def destroy
		@user.unlike(@post)
	end

	private

	def set_resources
		@user = User.find(params[:user_id])
		@post = Post.find(params[:post_id])
	end
end
