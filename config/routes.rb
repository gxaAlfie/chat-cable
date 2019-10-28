Rails.application.routes.draw do
  devise_for :users
  mount ActionCable.server => '/cable'

  scope module: 'user' do
    resources :images, only: :show
  end

  root to: 'messages#index'
end
