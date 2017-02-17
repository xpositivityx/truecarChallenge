class Post < ApplicationRecord
	belongs_to :user
	has_many :likes

	scope :subscribed, -> (followers){ where(user_id: followers)}

	def likes_count
		likes.length || 0
	end

	def author
		user.handle
	end
end
