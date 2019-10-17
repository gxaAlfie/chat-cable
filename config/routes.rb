Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root to: 'messages#index'
end
