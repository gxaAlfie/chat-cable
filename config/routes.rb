Rails.application.routes.draw do
  devise_for :users
  mount ActionCable.server => '/cable'

  scope module: 'user' do
    resources :images, only: :show
  end

  resources :channels, only: :show

  root to: 'channels#show'
end
