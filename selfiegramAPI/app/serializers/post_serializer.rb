class PostSerializer < ActiveModel::Serializer
  attributes :id, :photo_url, :caption,
  :is_liked, :likes_count, :author

  def is_liked
  	@instance_options[:user].liked? object
  end
end
