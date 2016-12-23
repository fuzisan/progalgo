Rails.application.routes.draw do
  get 'puzzle/home'

  root 'home#top'
  get 'way_of_thinking' => 'home#way_of_thinking'
  get 'task/task'
  get 'task/task1ans'
  get 'task/task1ans2'
  get 'task/task1ans3'
  get 'task/task2'
  get 'task/task2ans'
  get 'puzzle/fgb'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
