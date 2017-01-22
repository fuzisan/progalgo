Rails.application.routes.draw do
  resources :tasks
  devise_for :users
  #resources :readings
  get '/readings/new' => "readings#new"
  post '/readings' => "readings#create"
  get '/readings' => "readings#index"
  get '/readings/:id' => "readings#show", as: 'reading'
  patch  '/readings/:id' =>"readings#update", as: 'update_reading'
  get  '/readings/:id/edit' =>"readings#edit", as: 'edit_reading'
  delete '/readings/:id' => 'readings#destroy', as: 'destroy_reading'

  get 'puzzle/home'

  root 'home#top'
  get 'ruby_gatebook' =>'home#ruby_gatebook'
  get 'way_of_thinking' => 'home#way_of_thinking'
  get 'task/index'
  get 'task/task'
  get 'task/task1ans'
  get 'task/task1ans2'
  get 'task/task1ans3'
  get 'task/task2'
  get 'task/task2ans'
  get 'puzzle/fgb'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
