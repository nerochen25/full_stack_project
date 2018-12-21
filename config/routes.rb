Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects
    resources :categories, only: [:index, :show], param: :name
  end
  root "static_pages#root"
end
