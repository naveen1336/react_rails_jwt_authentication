Rails.application.routes.draw do
  # get 'tokens/create'
  root 'homes#index'
  # get 'users/create'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :tokens, only: [:create]

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
