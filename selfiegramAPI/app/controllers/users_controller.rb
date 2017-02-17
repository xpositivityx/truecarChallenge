class UsersController < ApplicationController

	def index
		@users = User.includes(:followers, :following).where.not(id: 1)

		render json: @users, user: User.find(1)
	end

	def show
		@user = User.includes(:posts).find(params[:id])

		render json: @user, user: @user, with_posts: true
	end
end
