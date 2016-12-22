Rails.application.routes.draw do
  get 'puzzle/home'

  root 'home#top'
  get 'task1/task'
  get 'task1/task1ans'
  get 'task1/task1ans2'
  get 'task1/task1ans3'
  get 'task2/task2'
  get 'puzzle/fgb'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
