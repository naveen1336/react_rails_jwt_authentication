Rails.application.routes.draw do
  # get 'tokens/create'
  root 'homes#index'
  # get 'users/create'

  # post '/signin' => 'api/tokens#create'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :tokens, only: [:create]

  end
  match "*path", to: "homes#index", via: :all


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
