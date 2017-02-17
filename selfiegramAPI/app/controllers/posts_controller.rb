class PostsController < ApplicationController
	
	def index
		@posts = Post.includes(:likes).where(user_id: params[:user_id])

		render json: @posts
	end

	def create
		Post.create(post_params)
	end

	private

	def post_params
		params.permit(:photo_url, :caption, :user_id)
	end
end
