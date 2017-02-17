class UserSerializer < ActiveModel::Serializer
  attributes :id, :handle, :follower_count,
  	:following_count, :is_followed, :photo

  has_many :posts, serializer: PostSerializer, if: -> { @instance_options[:with_posts] }

  def is_followed
  	@instance_options[:user].following?(object)
  end
end
