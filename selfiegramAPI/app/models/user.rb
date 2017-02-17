class User < ApplicationRecord
	has_many :posts, dependent: :destroy
	has_many :likes, dependent: :destroy

	has_many :liked_posts, through: :likes, source: :post

	has_many :active_relationships, class_name: 'Follow', foreign_key: "follower_id", dependent: :destroy
	has_many :passive_relationships, class_name: 'Follow', foreign_key: "followed_id"
	
	has_many :following, through: :active_relationships, source: :followed
	has_many :followers, through: :passive_relationships, source: :follower

	def feed
		Post.includes(:likes).subscribed(following)
	end

	def follow(other_user)
		following << other_user
	end

	def follower_count
		followers.count
	end

	def following_count
		following.count
	end

	def unfollow(other_user)
		following.delete(other_user)
	end

	def following?(other_user)
		following.include?(other_user)
	end

	def like(post)
		liked_posts << post
	end

	def unlike(post)
		liked_posts.delete(post)
	end

	def liked?(post)
		liked_posts.include?(post)
	end
end
