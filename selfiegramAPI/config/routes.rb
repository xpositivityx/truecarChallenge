Rails.application.routes.draw do
  get 'feed/index'

  resources :follows
	resources :users do
		resources :posts do
			resources :likes, only: [:create]
		end
		resources :follows, only: [:create]
		resources :feed, only: [:index]
	end

	match '/users/:user_id/posts/:post_id/likes', to: 'likes#destroy', via: 'delete', defaults: { id: nil }

	match '/users/:user_id/follows/:id', to: 'follows#destroy', via: 'delete'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
